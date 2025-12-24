'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { useProgress } from '../../../context/ProgressContext';
import CourseLayout from '../../../components/layout/CourseLayout';
import { lessons } from '../../../components/lessons/LessonIndex';

interface ChapterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const { user, loading, isPaid, userProfile } = useAuth();
  const { completeLesson } = useProgress();
  const router = useRouter();
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [lesson, setLesson] = useState<typeof lessons[0] | null>(null);

  // Check sessionStorage to see if we've already shown the payment prompt this session
  const [hasShownPaymentPrompt, setHasShownPaymentPrompt] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('hasShownPaymentPrompt') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      const id = parseInt(resolvedParams.id);
      setLessonId(id);
      setLesson(lessons.find(l => l.id === id) || null);
    };
    getParams();
  }, [params]);

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  // Check lesson access - redirect to checkout for paid lessons
  useEffect(() => {
    // Wait for user profile to load before checking payment status
    if (lessonId && user && !loading && userProfile !== null) {
      // Lessons 1 and 2 are free for all users
      const isFreeLesson = lessonId === 1 || lessonId === 2;

      // Check if user has access to this lesson
      const hasAccess = isFreeLesson || isPaid;

      if (!hasAccess && !hasShownPaymentPrompt) {
        // User needs to pay - redirect to lessons page
        router.push('/courses');
        setHasShownPaymentPrompt(true);
        sessionStorage.setItem('hasShownPaymentPrompt', 'true');
      }
    }
  }, [lessonId, user, loading, userProfile, isPaid, hasShownPaymentPrompt, router]);

  // If lesson has sublessons, redirect to the first sublesson
  useEffect(() => {
    if (lesson?.sublessons && lesson.sublessons.length > 0 && lessonId) {
      router.push(`/chapter/${lessonId}/${lesson.sublessons[0].id}`);
    }
  }, [lesson, lessonId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  if (lessonId !== null && !lesson) {
    return (
      <CourseLayout>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Lesson Not Found</h1>
            <p className="text-gray-400 mb-4">The requested lesson could not be found.</p>
            <button
              onClick={() => router.push('/chapter/1')}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/50"
            >
              Go to Introduction
            </button>
          </div>
        </div>
      </CourseLayout>
    );
  }

  // If lesson has sublessons, the redirect will handle it
  if (lesson?.sublessons && lesson.sublessons.length > 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleLessonComplete = async () => {
    if (lessonId) {
      try {
        await completeLesson(lessonId);
      } catch (error) {
        console.error('Failed to complete lesson:', error);
      }
    }
  };

  const handleSubsectionComplete = (subsectionId: string) => {
    console.log(`Subsection ${subsectionId} completed`);
  };

  const LessonComponent = lesson?.component;

  if (!LessonComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <CourseLayout>
          <div className="flex-1">
            <LessonComponent
              onComplete={handleLessonComplete}
              onSubsectionComplete={handleSubsectionComplete}
            />
          </div>
        </CourseLayout>
    </>
  );
}