'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { useProgress } from '../../../context/ProgressContext';
import CourseLayout from '../../../components/layout/CourseLayout';
import { lessons } from '../../../components/lessons/LessonIndex';
import StripeCheckout from '../../../components/ui/StripeCheckout';

interface ChapterPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ChapterPage({ params }: ChapterPageProps) {
  const { user, loading, isPaid, userProfile } = useAuth();
  const { completeLesson, hasCompletedAssessment } = useProgress();
  const router = useRouter();
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [lesson, setLesson] = useState<typeof lessons[0] | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

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
      const hasAccess = isFreeLesson || (hasCompletedAssessment() && isPaid);

      if (!hasAccess && !hasShownPaymentPrompt) {
        // User needs to pay - show checkout modal
        setCheckoutOpen(true);
        setHasShownPaymentPrompt(true);
        sessionStorage.setItem('hasShownPaymentPrompt', 'true');
      } else if (hasAccess && checkoutOpen) {
        // User has access - close checkout if it's open
        setCheckoutOpen(false);
        sessionStorage.removeItem('hasShownPaymentPrompt');
      }
    }
  }, [lessonId, user, loading, userProfile, hasCompletedAssessment, isPaid, hasShownPaymentPrompt, checkoutOpen]);

  // If lesson has sublessons, redirect to the first sublesson
  useEffect(() => {
    if (lesson?.sublessons && lesson.sublessons.length > 0 && lessonId) {
      router.push(`/chapter/${lessonId}/${lesson.sublessons[0].id}`);
    }
  }, [lesson, lessonId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Lesson Not Found</h1>
            <p className="text-gray-600 mb-4">The requested lesson could not be found.</p>
            <button
              onClick={() => router.push('/chapter/1')}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div className={checkoutOpen ? 'filter blur-lg pointer-events-none' : ''}>
        <CourseLayout>
          <div className="flex-1">
            <LessonComponent
              onComplete={handleLessonComplete}
              onSubsectionComplete={handleSubsectionComplete}
            />
          </div>
        </CourseLayout>
      </div>

      {/* Stripe Checkout Modal */}
      <StripeCheckout
        isOpen={checkoutOpen}
        onClose={() => {
          setCheckoutOpen(false);
          // Mark that we've shown the prompt so it doesn't re-open
          sessionStorage.setItem('hasShownPaymentPrompt', 'true');
          setHasShownPaymentPrompt(true);
          router.push('/chapter/1'); // Redirect to free lesson
        }}
        onPaymentSuccess={async () => {
          // Payment successful, close checkout
          setCheckoutOpen(false);
          // Clear the flag since they now have access
          sessionStorage.removeItem('hasShownPaymentPrompt');
          // Don't redirect, stay on current lesson
        }}
      />
    </>
  );
}