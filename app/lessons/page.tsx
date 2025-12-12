'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { lessons } from '../../components/lessons/LessonIndex';
import StripeCheckout from '../../components/ui/StripeCheckout';
import { UserMenu } from '../../components/layout/course-layout/UserMenu';

type TabType = 'lessons' | 'interactive' | 'notes';

// AI Interactive Lessons
const aiInteractiveLessons = [
  { chapterId: 1, sublessonId: 'anxiety-pattern-analyzer', title: 'Anxiety Pattern Analyzer', chapterTitle: 'Introduction' },
  { chapterId: 2, sublessonId: 'second-fear', title: 'Second Fear', chapterTitle: 'What is Anxiety' },
  { chapterId: 2, sublessonId: 'cognitive-biases', title: 'Cognitive Biases', chapterTitle: 'What is Anxiety' },
  { chapterId: 4, sublessonId: 'master-observer', title: 'Master the Observer', chapterTitle: 'Conquering Thoughts' },
  { chapterId: 5, sublessonId: 'changing-response', title: 'Changing Your Response', chapterTitle: 'Accepting Sensations' },
  { chapterId: 6, sublessonId: 'plan-your-exposure', title: 'Plan Your Exposure', chapterTitle: 'Gradual Exposure' },
];

// Notes/Reflection Lessons
const notesLessons = [
  { chapterId: 3, sublessonId: 'patience-compassion', title: 'Patience & Self-Compassion', chapterTitle: 'Mindset for Recovery' },
];

export default function LessonsPage() {
  const { user, loading, isPaid } = useAuth();
  const { completedLessons, hasCompletedAssessment } = useProgress();
  const router = useRouter();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('lessons');

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

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

  // Check if lesson is accessible (lessons 1 and 2 are free, 3-7 require payment and completed assessment)
  const isLessonAccessible = (lessonId: number) => {
    if (lessonId === 1 || lessonId === 2) return true;
    return hasCompletedAssessment() && isPaid;
  };

  const isLessonCompleted = (lessonId: number) => {
    return completedLessons?.includes(lessonId) || false;
  };

  // Calculate progress
  const completedCount = lessons.filter(l => isLessonCompleted(l.id)).length;
  const totalCount = lessons.length;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const handleLessonClick = (lessonId: number) => {
    if (isLessonAccessible(lessonId)) {
      router.push(`/chapter/${lessonId}`);
    } else {
      setCheckoutOpen(true);
    }
  };

  const handleSublessonClick = (chapterId: number, sublessonId: string) => {
    if (isLessonAccessible(chapterId)) {
      router.push(`/chapter/${chapterId}/${sublessonId}`);
    } else {
      setCheckoutOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-white/50 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                <span className="text-blue-600">The</span>
                <span className="text-orange-500">Brain</span>
                <span className="text-blue-600">Dump</span>
              </h1>
              <p className="text-gray-600 mt-1">Course Navigation</p>
            </div>
            <UserMenu />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Progress Overview */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Your Progress</h2>
            <span className="text-sm text-gray-600">
              {completedCount} of {totalCount} lessons completed
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-orange-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">{progressPercentage}% complete</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              activeTab === 'lessons'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white/95 text-gray-700 hover:bg-gray-100 shadow-md border border-white/50'
            }`}
          >
            Lessons
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              activeTab === 'interactive'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white/95 text-gray-700 hover:bg-gray-100 shadow-md border border-white/50'
            }`}
          >
            Interactive
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`px-8 py-3 rounded-full font-medium transition-all ${
              activeTab === 'notes'
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-white/95 text-gray-700 hover:bg-gray-100 shadow-md border border-white/50'
            }`}
          >
            Notes
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'lessons' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => {
              const accessible = isLessonAccessible(lesson.id);
              const completed = isLessonCompleted(lesson.id);
              const isLocked = !accessible;

              return (
                <div
                  key={lesson.id}
                  className={`relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-6 transition-all hover:shadow-xl ${
                    isLocked ? 'opacity-60' : 'hover:scale-105 cursor-pointer'
                  }`}
                  onClick={() => !isLocked && handleLessonClick(lesson.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        completed
                          ? 'bg-green-500 text-white'
                          : accessible
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-gray-200 text-gray-400'
                      }`}>
                        {completed ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : isLocked ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="font-bold text-lg">{lesson.id}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
                        <p className="text-sm text-gray-600">{lesson.category}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {completed && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          ✓ Complete
                        </span>
                      )}
                      {isLocked && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                          🔒 Locked
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-16">{lesson.description}</p>

                  <div className="absolute bottom-4 right-4">
                    {accessible ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLessonClick(lesson.id);
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium shadow-md"
                      >
                        {completed ? 'Review' : 'Start'} Lesson
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCheckoutOpen(true);
                        }}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium shadow-md"
                      >
                        Unlock Now
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'interactive' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiInteractiveLessons.map((item) => {
              const accessible = isLessonAccessible(item.chapterId);
              const isLocked = !accessible;

              return (
                <div
                  key={`${item.chapterId}-${item.sublessonId}`}
                  className={`relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-6 transition-all hover:shadow-xl ${
                    isLocked ? 'opacity-60' : 'hover:scale-105 cursor-pointer'
                  }`}
                  onClick={() => !isLocked && handleSublessonClick(item.chapterId, item.sublessonId)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        accessible
                          ? 'bg-purple-100 text-purple-600'
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {isLocked ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-2xl">🤖</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.chapterTitle}</p>
                      </div>
                    </div>

                    {isLocked && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        🔒 Locked
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-16">AI-powered interactive lesson to deepen your understanding</p>

                  <div className="absolute bottom-4 right-4">
                    {accessible ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSublessonClick(item.chapterId, item.sublessonId);
                        }}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium shadow-md"
                      >
                        Start Interactive
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCheckoutOpen(true);
                        }}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium shadow-md"
                      >
                        Unlock Now
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notesLessons.map((item) => {
              const accessible = isLessonAccessible(item.chapterId);
              const isLocked = !accessible;

              return (
                <div
                  key={`${item.chapterId}-${item.sublessonId}`}
                  className={`relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-6 transition-all hover:shadow-xl ${
                    isLocked ? 'opacity-60' : 'hover:scale-105 cursor-pointer'
                  }`}
                  onClick={() => !isLocked && handleSublessonClick(item.chapterId, item.sublessonId)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        accessible
                          ? 'bg-orange-100 text-orange-600'
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {isLocked ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-2xl">📝</span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.chapterTitle}</p>
                      </div>
                    </div>

                    {isLocked && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        🔒 Locked
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 mb-16">Reflect on your journey and track your progress</p>

                  <div className="absolute bottom-4 right-4">
                    {accessible ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSublessonClick(item.chapterId, item.sublessonId);
                        }}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium shadow-md"
                      >
                        Open Notes
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCheckoutOpen(true);
                        }}
                        className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium shadow-md"
                      >
                        Unlock Now
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Stripe Checkout Modal */}
        <StripeCheckout
          isOpen={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
        />
      </div>
    </div>
  );
}