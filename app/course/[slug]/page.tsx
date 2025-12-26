'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { getCourseBySlug } from '../../../components/courses/CourseIndex';

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CoursePage({ params }: CoursePageProps) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [courseSlug, setCourseSlug] = useState<string | null>(null);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setCourseSlug(resolvedParams.slug);
    };
    getParams();
  }, [params]);

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  // Once we have the course slug, redirect to the first chapter
  useEffect(() => {
    if (courseSlug && user) {
      const course = getCourseBySlug(courseSlug);
      if (course && course.lessons.length > 0) {
        router.push(`/course/${courseSlug}/chapter/1`);
      }
    }
  }, [courseSlug, user, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="w-8 h-8 border-4 rounded-full border-gray-700 border-t-purple-500 border-r-blue-500 animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="w-8 h-8 border-4 rounded-full border-gray-700 border-t-purple-500 border-r-blue-500 animate-spin"></div>
    </div>
  );
}
