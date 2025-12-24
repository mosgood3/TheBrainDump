import { createServerClient } from '@supabase/ssr';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    // Create response first - redirect to courses page
    const response = NextResponse.redirect(`${requestUrl.origin}/courses`);

    // Create a Supabase client that properly handles server-side cookies
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    try {
      // Exchange the code for a session
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error('❌ Error exchanging code for session:', error.message);
        return NextResponse.redirect(`${requestUrl.origin}/auth/auth-code-error`);
      }

      if (data.session) {
        console.log('✅ Authentication successful! User:', data.user?.email);
        console.log('✅ Session established, redirecting to lessons');
      }

      // Return response with cookies set
      return response;
    } catch (err) {
      console.error('❌ Unexpected error during callback:', err);
      return NextResponse.redirect(`${requestUrl.origin}/auth/auth-code-error`);
    }
  }

  // No code present - redirect to auth page
  console.log('⚠️ No code in callback, redirecting to auth');
  return NextResponse.redirect(`${requestUrl.origin}/auth`);
}
