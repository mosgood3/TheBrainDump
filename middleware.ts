import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Course configuration - defines free chapter count per course
// This should match the CourseIndex configuration
const COURSE_CONFIG: Record<string, { freeChapterCount: number }> = {
  'brain-dump': { freeChapterCount: 2 },
  // Add more courses here as needed
};

export async function middleware(req: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: req,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return req.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request: req,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Get session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const url = req.nextUrl.clone();

  // Skip middleware for ALL auth routes (let client-side handle redirects)
  // This prevents loops when session state is inconsistent
  if (url.pathname.startsWith('/auth')) {
    return supabaseResponse;
  }

  // Skip verify-email route
  if (url.pathname.startsWith('/verify-email')) {
    return supabaseResponse;
  }

  // 1. Redirect legacy /chapter routes to /course/brain-dump/chapter
  const legacyChapterMatch = url.pathname.match(/^\/chapter\/(\d+)(\/.*)?$/);
  if (legacyChapterMatch) {
    const chapterId = legacyChapterMatch[1];
    const rest = legacyChapterMatch[2] || '';
    url.pathname = `/course/brain-dump/chapter/${chapterId}${rest}`;
    return NextResponse.redirect(url);
  }

  // 2. Protect /courses and /lessons - require authentication
  if ((url.pathname === '/courses' || url.pathname === '/lessons') && !session) {
    url.pathname = '/auth';
    return NextResponse.redirect(url);
  }

  // 3. Redirect /lessons to /courses (legacy support)
  if (url.pathname === '/lessons') {
    url.pathname = '/courses';
    return NextResponse.redirect(url);
  }

  // 4. Protect /course/[slug]/chapter routes - require auth + course access check
  const courseChapterMatch = url.pathname.match(/^\/course\/([^\/]+)\/chapter\/(\d+)/);
  if (courseChapterMatch) {
    const courseSlug = courseChapterMatch[1];
    const chapterId = parseInt(courseChapterMatch[2]);

    // If not logged in, redirect to auth
    if (!session) {
      url.pathname = '/auth';
      return NextResponse.redirect(url);
    }

    // Get course config (default to 2 free chapters if course not found)
    const courseConfig = COURSE_CONFIG[courseSlug] || { freeChapterCount: 2 };
    const requiresPayment = chapterId > courseConfig.freeChapterCount;

    if (requiresPayment) {
      // Check if user has access to this specific course
      const { data: courseAccess } = await supabase
        .from('course_access')
        .select('id, courses!inner(slug)')
        .eq('user_id', session.user.id)
        .eq('courses.slug', courseSlug)
        .single();

      // Also check legacy payment_status for backwards compatibility with brain-dump
      let hasAccess = !!courseAccess;
      if (!hasAccess && courseSlug === 'brain-dump') {
        const { data: profile } = await supabase
          .from('profiles')
          .select('payment_status')
          .eq('id', session.user.id)
          .single();
        hasAccess = profile?.payment_status === 'paid';
      }

      // If no access, redirect to course page
      if (!hasAccess) {
        url.pathname = `/course/${courseSlug}`;
        url.searchParams.set('locked', 'true');
        return NextResponse.redirect(url);
      }
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    '/courses',
    '/lessons',
    '/chapter/:path*',
    '/course/:slug/chapter/:path*',
  ],
};
