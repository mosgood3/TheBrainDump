-- Multi-Course Migration
-- Run this after the initial schema is set up

-- ============================================
-- 1. Create courses table
-- ============================================
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  price_cents INTEGER DEFAULT 1999,
  free_chapter_count INTEGER DEFAULT 2,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ============================================
-- 2. Create course_access junction table
-- ============================================
CREATE TABLE IF NOT EXISTS public.course_access (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  purchased_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  stripe_payment_id TEXT,
  UNIQUE(user_id, course_id)
);

-- ============================================
-- 3. Create indexes for performance
-- ============================================
CREATE INDEX IF NOT EXISTS courses_slug_idx ON public.courses(slug);
CREATE INDEX IF NOT EXISTS courses_is_active_idx ON public.courses(is_active);
CREATE INDEX IF NOT EXISTS course_access_user_id_idx ON public.course_access(user_id);
CREATE INDEX IF NOT EXISTS course_access_course_id_idx ON public.course_access(course_id);

-- ============================================
-- 4. Enable RLS on new tables
-- ============================================
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_access ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 5. RLS Policies for courses table
-- ============================================
-- Anyone can view active courses (public catalog)
DROP POLICY IF EXISTS "Anyone can view active courses" ON public.courses;
CREATE POLICY "Anyone can view active courses"
  ON public.courses FOR SELECT
  USING (is_active = true);

-- ============================================
-- 6. RLS Policies for course_access table
-- ============================================
-- Users can view their own course access
DROP POLICY IF EXISTS "Users can view their own course access" ON public.course_access;
CREATE POLICY "Users can view their own course access"
  ON public.course_access FOR SELECT
  USING (auth.uid() = user_id);

-- Service role can insert course access (for webhook)
-- Note: Webhooks use service role key which bypasses RLS

-- ============================================
-- 7. Trigger to update updated_at on courses
-- ============================================
DROP TRIGGER IF EXISTS on_course_updated ON public.courses;
CREATE TRIGGER on_course_updated
  BEFORE UPDATE ON public.courses
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- ============================================
-- 8. Grant permissions
-- ============================================
GRANT SELECT ON public.courses TO anon, authenticated;
GRANT SELECT ON public.course_access TO authenticated;

-- ============================================
-- 9. Insert the first course (brain-dump)
-- ============================================
INSERT INTO public.courses (slug, title, description, price_cents, free_chapter_count)
VALUES (
  'brain-dump',
  'Ship Your First App',
  'Learn to Build Full-Stack Apps with AI',
  1999,
  2
)
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- 10. Migrate existing paid users to course_access
-- ============================================
-- This grants access to the brain-dump course for all users who have is_paid = true
INSERT INTO public.course_access (user_id, course_id, purchased_at)
SELECT
  p.id AS user_id,
  c.id AS course_id,
  COALESCE(p.updated_at, NOW()) AS purchased_at
FROM public.profiles p
CROSS JOIN public.courses c
WHERE p.is_paid = true
  AND c.slug = 'brain-dump'
ON CONFLICT (user_id, course_id) DO NOTHING;

-- ============================================
-- 11. Create lesson_progress table for tracking completion
-- ============================================
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  course_slug TEXT NOT NULL,
  lesson_id INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(user_id, course_slug, lesson_id)
);

-- ============================================
-- 12. Create indexes for lesson_progress
-- ============================================
CREATE INDEX IF NOT EXISTS lesson_progress_user_id_idx ON public.lesson_progress(user_id);
CREATE INDEX IF NOT EXISTS lesson_progress_course_slug_idx ON public.lesson_progress(course_slug);
CREATE INDEX IF NOT EXISTS lesson_progress_completed_idx ON public.lesson_progress(completed);

-- ============================================
-- 13. Enable RLS on lesson_progress
-- ============================================
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 14. RLS Policies for lesson_progress
-- ============================================
-- Users can view their own progress
DROP POLICY IF EXISTS "Users can view their own lesson progress" ON public.lesson_progress;
CREATE POLICY "Users can view their own lesson progress"
  ON public.lesson_progress FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own progress
DROP POLICY IF EXISTS "Users can insert their own lesson progress" ON public.lesson_progress;
CREATE POLICY "Users can insert their own lesson progress"
  ON public.lesson_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own progress
DROP POLICY IF EXISTS "Users can update their own lesson progress" ON public.lesson_progress;
CREATE POLICY "Users can update their own lesson progress"
  ON public.lesson_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- ============================================
-- 15. Grant permissions for lesson_progress
-- ============================================
GRANT SELECT, INSERT, UPDATE ON public.lesson_progress TO authenticated;
