'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../context/AuthContext';
import { useProgress } from '../../../../context/ProgressContext';
import CourseLayout from '../../../../components/layout/CourseLayout';
import { lessons, type SublessonInfo } from '../../../../components/lessons/LessonIndex';
import StripeCheckout from '../../../../components/ui/StripeCheckout';

interface SublessonPageProps {
  params: Promise<{
    id: string;
    sublesson: string;
  }>;
}

export default function SublessonPage({ params }: SublessonPageProps) {
  const { user, loading, isPaid, userProfile } = useAuth();
  const { hasCompletedAssessment } = useProgress();
  const router = useRouter();
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [sublessonId, setSublessonId] = useState<string | null>(null);
  const [lesson, setLesson] = useState<typeof lessons[0] | null>(null);
  const [sublesson, setSublesson] = useState<SublessonInfo | null>(null);
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
      const subId = resolvedParams.sublesson;
      setLessonId(id);
      setSublessonId(subId);
      
      const foundLesson = lessons.find(l => l.id === id);
      const foundSublesson = foundLesson?.sublessons?.find(s => s.id === subId);
      setLesson(foundLesson || null);
      setSublesson(foundSublesson || null);
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

  if (lessonId === null || sublessonId === null || !lesson || !sublesson) {
    return (
      <CourseLayout>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Sublesson Not Found</h1>
            <p className="text-gray-600 mb-4">The requested sublesson could not be found.</p>
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

  // Removed sublesson tracking - only track lesson completion now

  const SublessonComponent = sublesson?.component;
  // No individual sublesson completion tracking

  // Navigation helpers
  const getCurrentSublessonIndex = () => {
    if (!lesson?.sublessons || !sublessonId) return -1;
    return lesson.sublessons.findIndex(s => s.id === sublessonId);
  };

  const getPreviousSublesson = () => {
    const currentIndex = getCurrentSublessonIndex();
    if (currentIndex <= 0 || !lesson?.sublessons) return null;
    return lesson.sublessons[currentIndex - 1];
  };

  const getNextSublesson = () => {
    const currentIndex = getCurrentSublessonIndex();
    if (currentIndex === -1 || !lesson?.sublessons || currentIndex >= lesson.sublessons.length - 1) return null;
    return lesson.sublessons[currentIndex + 1];
  };

  const getNextLesson = () => {
    if (!lessonId) return null;
    const nextLessonId = lessonId + 1;
    const nextLesson = lessons.find(l => l.id === nextLessonId);
    return nextLesson;
  };

  const previousSublesson = getPreviousSublesson();
  const nextSublesson = getNextSublesson();
  const nextLesson = getNextLesson();

  return (
    <>
      <div className={checkoutOpen ? 'filter blur-lg pointer-events-none' : ''}>
        <CourseLayout>
          <div className="flex-1 px-2 py-4 sm:p-6">
            <div className="max-w-4xl mx-auto">

              {/* Lesson Context Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span>{lesson.category}</span>
                  <span>•</span>
                  <span>{lesson.title}</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{sublesson.icon}</span>
                  <h1 className="text-3xl font-bold text-gray-900">{sublesson.title}</h1>
                </div>

                {/* Progress Bar */}
                {lesson.sublessons && lesson.sublessons.length > 1 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Lesson Progress</span>
                      <span>{getCurrentSublessonIndex() + 1} of {lesson.sublessons.length}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((getCurrentSublessonIndex() + 1) / lesson.sublessons.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sublesson Content */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <SublessonComponent onComplete={() => {}} isCompleted={false} />
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex-1">
                  {previousSublesson && (
                    <button
                      onClick={() => router.push(`/chapter/${lessonId}/${previousSublesson.id}`)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-sm font-medium">Previous</span>
                    </button>
                  )}
                </div>

                <div className="flex-1 flex justify-end">
                  {nextSublesson ? (
                    <button
                      onClick={() => router.push(`/chapter/${lessonId}/${nextSublesson.id}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all"
                    >
                      <span className="text-sm font-medium">Next</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : nextLesson ? (
                    <button
                      onClick={() => router.push(`/chapter/${nextLesson.id}`)}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-all"
                    >
                      <span className="text-sm font-medium">Next</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => router.push('/lessons')}
                      className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-lg transition-all"
                    >
                      <span className="text-sm font-medium">Back to Lessons</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

            </div>
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
        onPaymentSuccess={() => {
          setCheckoutOpen(false);
          // Clear the flag since they now have access
          sessionStorage.removeItem('hasShownPaymentPrompt');
        }}
      />
    </>
  );
}