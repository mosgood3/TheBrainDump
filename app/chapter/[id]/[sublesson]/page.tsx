'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../context/AuthContext';
import { useProgress } from '../../../../context/ProgressContext';
import CourseLayout from '../../../../components/layout/CourseLayout';
import { lessons, type SublessonInfo } from '../../../../components/lessons/LessonIndex';

interface SublessonPageProps {
  params: Promise<{
    id: string;
    sublesson: string;
  }>;
}

export default function SublessonPage({ params }: SublessonPageProps) {
  const { user, loading, isPaid, userProfile } = useAuth();
  const router = useRouter();
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [sublessonId, setSublessonId] = useState<string | null>(null);
  const [lesson, setLesson] = useState<typeof lessons[0] | null>(null);
  const [sublesson, setSublesson] = useState<SublessonInfo | null>(null);

  const [isCheckingAccess, setIsCheckingAccess] = useState(true);

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

  // Check lesson access - redirect to lessons page for paid lessons
  useEffect(() => {
    // Wait for user profile to load before checking payment status
    if (lessonId && user && !loading && userProfile !== null) {
      // Lessons 1 and 2 are free for all users
      const isFreeLesson = lessonId === 1 || lessonId === 2;

      // Check if user has access to this lesson
      const hasAccess = isFreeLesson || isPaid;

      if (!hasAccess) {
        // User needs to pay - redirect to lessons page
        router.push('/courses');
      } else {
        // User has access, stop checking
        setIsCheckingAccess(false);
      }
    } else if (lessonId && user && !loading && userProfile !== null) {
      // If we have all the data and access is granted
      setIsCheckingAccess(false);
    }
  }, [lessonId, user, loading, userProfile, isPaid, router]);

  if (loading || isCheckingAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="w-8 h-8 border-4 rounded-full border-gray-700 border-t-purple-500 border-r-blue-500 animate-spin"></div>
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
            <h1 className="text-2xl font-bold text-white mb-2">Sublesson Not Found</h1>
            <p className="text-gray-400 mb-4">The requested sublesson could not be found.</p>
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

  const isNextLessonAccessible = () => {
    const nextLesson = getNextLesson();
    if (!nextLesson) return false;
    // Lessons 1 and 2 are free
    const isFreeLesson = nextLesson.id === 1 || nextLesson.id === 2;
    return isFreeLesson || isPaid;
  };

  const previousSublesson = getPreviousSublesson();
  const nextSublesson = getNextSublesson();
  const nextLesson = getNextLesson();
  const canAccessNextLesson = isNextLessonAccessible();

  return (
    <CourseLayout>
          {/* Animated Background - matching home page */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>

          <div className="flex-1 px-2 py-4 sm:p-6 relative z-10">
            <div className="max-w-4xl mx-auto">

              {/* Lesson Header */}
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-white">{sublesson.title}</h1>
                {lesson.sublessons && lesson.sublessons.length > 1 && (
                  <p className="text-sm text-gray-400 mt-2">{getCurrentSublessonIndex() + 1} of {lesson.sublessons.length}</p>
                )}
              </div>

              {/* Sublesson Content */}
              <div>
                <SublessonComponent onComplete={() => {}} isCompleted={false} />
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex-1">
                  {previousSublesson && (
                    <button
                      onClick={() => router.push(`/chapter/${lessonId}/${previousSublesson.id}`)}
                      className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all border border-white/10 hover:border-white/20"
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
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all"
                    >
                      <span className="text-sm font-medium">Next</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ) : nextLesson ? (
                    canAccessNextLesson ? (
                      <button
                        onClick={() => router.push(`/chapter/${nextLesson.id}`)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all"
                      >
                        <span className="text-sm font-medium">Next Chapter</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        onClick={() => router.push('/courses')}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm font-medium">Unlock Full Course</span>
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => router.push('/courses')}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all"
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
  );
}