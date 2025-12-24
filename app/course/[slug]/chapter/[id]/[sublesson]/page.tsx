'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../../../../context/AuthContext';
import { useProgress } from '../../../../../../context/ProgressContext';
import CourseLayout from '../../../../../../components/layout/CourseLayout';
import {
  getCourseBySlug,
  getCourseLessonById,
  isLessonFree,
  type LessonInfo,
  type SublessonInfo
} from '../../../../../../components/courses/CourseIndex';

interface SublessonPageProps {
  params: Promise<{
    slug: string;
    id: string;
    sublesson: string;
  }>;
}

export default function SublessonPage({ params }: SublessonPageProps) {
  const { user, loading, hasCourseAccess, userProfile } = useAuth();
  const { isLessonCompleted, completeLesson } = useProgress();
  const router = useRouter();
  const [courseSlug, setCourseSlug] = useState<string | null>(null);
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [sublessonId, setSublessonId] = useState<string | null>(null);
  const [lesson, setLesson] = useState<LessonInfo | null>(null);
  const [sublesson, setSublesson] = useState<SublessonInfo | null>(null);
  const [isCheckingAccess, setIsCheckingAccess] = useState(true);
  const [isMarking, setIsMarking] = useState(false);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      const id = parseInt(resolvedParams.id);
      const subId = resolvedParams.sublesson;

      setCourseSlug(resolvedParams.slug);
      setLessonId(id);
      setSublessonId(subId);

      const foundLesson = getCourseLessonById(resolvedParams.slug, id);
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

  // Check lesson access
  useEffect(() => {
    if (courseSlug && lessonId && user && !loading && userProfile !== null) {
      const isFree = isLessonFree(courseSlug, lessonId);
      const hasAccess = isFree || hasCourseAccess(courseSlug);

      if (!hasAccess) {
        router.push(`/course/${courseSlug}?locked=true`);
      } else {
        setIsCheckingAccess(false);
      }
    }
  }, [courseSlug, lessonId, user, loading, userProfile, hasCourseAccess, router]);

  if (loading || isCheckingAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (lessonId === null || sublessonId === null || !lesson || !sublesson) {
    return (
      <CourseLayout courseSlug={courseSlug || undefined}>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Sublesson Not Found</h1>
            <p className="text-gray-400 mb-4">The requested sublesson could not be found.</p>
            <button
              onClick={() => router.push(`/course/${courseSlug}/chapter/1`)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/50"
            >
              Go to Introduction
            </button>
          </div>
        </div>
      </CourseLayout>
    );
  }

  const SublessonComponent = sublesson?.component;
  const course = getCourseBySlug(courseSlug!);

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
    if (!lessonId || !course) return null;
    const nextLessonId = lessonId + 1;
    return course.lessons.find(l => l.id === nextLessonId);
  };

  const isNextLessonAccessible = () => {
    const nextLesson = getNextLesson();
    if (!nextLesson || !courseSlug) return false;
    const isFree = isLessonFree(courseSlug, nextLesson.id);
    return isFree || hasCourseAccess(courseSlug);
  };

  const isLastSublesson = () => {
    const currentIndex = getCurrentSublessonIndex();
    return lesson?.sublessons && currentIndex === lesson.sublessons.length - 1;
  };

  const handleMarkComplete = async () => {
    if (!lessonId || !courseSlug) return;
    setIsMarking(true);
    await completeLesson(lessonId, courseSlug);
    setIsMarking(false);
  };

  const previousSublesson = getPreviousSublesson();
  const nextSublesson = getNextSublesson();
  const nextLesson = getNextLesson();
  const canAccessNextLesson = isNextLessonAccessible();
  const isLastInChapter = isLastSublesson();
  const chapterCompleted = lessonId ? isLessonCompleted(lessonId) : false;

  return (
    <CourseLayout courseSlug={courseSlug || undefined}>
      {/* Animated Background */}
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

          {/* Lesson Context Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span>{lesson.category}</span>
              <span>•</span>
              <span>{lesson.title}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{sublesson.icon}</span>
              <h1 className="text-3xl font-bold text-white">{sublesson.title}</h1>
            </div>

            {/* Progress Bar */}
            {lesson.sublessons && lesson.sublessons.length > 1 && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                  <span>Lesson Progress</span>
                  <span>{getCurrentSublessonIndex() + 1} of {lesson.sublessons.length}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/50"
                    style={{ width: `${((getCurrentSublessonIndex() + 1) / lesson.sublessons.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Sublesson Content */}
          <div>
            <SublessonComponent onComplete={() => {}} isCompleted={false} />
          </div>

          {/* Mark Chapter Complete Section */}
          {isLastInChapter && (
            <div className="mt-8 p-6 bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-xl border border-green-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {chapterCompleted ? (
                    <>
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-green-400 font-semibold">Chapter Complete!</p>
                        <p className="text-sm text-gray-400">Great work on finishing this chapter</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-semibold">You&apos;ve reached the end of this chapter!</p>
                        <p className="text-sm text-gray-400">Mark it complete to track your progress</p>
                      </div>
                    </>
                  )}
                </div>
                {!chapterCompleted && (
                  <button
                    onClick={handleMarkComplete}
                    disabled={isMarking}
                    className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-lg shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isMarking ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Saving...
                      </span>
                    ) : (
                      'Mark Chapter Complete'
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex-1">
              {previousSublesson && (
                <button
                  onClick={() => router.push(`/course/${courseSlug}/chapter/${lessonId}/${previousSublesson.id}`)}
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
                  onClick={() => router.push(`/course/${courseSlug}/chapter/${lessonId}/${nextSublesson.id}`)}
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
                    onClick={() => router.push(`/course/${courseSlug}/chapter/${nextLesson.id}`)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all"
                  >
                    <span className="text-sm font-medium">Next Chapter</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => router.push(`/course/${courseSlug}?locked=true`)}
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
                  onClick={() => router.push(`/course/${courseSlug}`)}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white rounded-lg shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transition-all"
                >
                  <span className="text-sm font-medium">Back to Course</span>
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
