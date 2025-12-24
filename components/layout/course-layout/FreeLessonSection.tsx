'use client';

import React from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { getFreeLessons } from '../../courses/CourseIndex';

interface FreeLessonSectionProps {
  courseSlug: string;
  currentLessonId: number | null;
  currentSublessonId: string | null;
  expandedLessons: Set<number>;
  onToggleLessonExpanded: (lessonId: number) => void;
  onNavigation: (path: string) => void;
}

export function FreeLessonSection({
  courseSlug,
  currentLessonId,
  currentSublessonId,
  expandedLessons,
  onToggleLessonExpanded,
  onNavigation
}: FreeLessonSectionProps) {
  const { isLessonCompleted } = useProgress();
  const freeLessons = getFreeLessons(courseSlug);

  return (
    <div className="px-6 py-5 border-b border-white/10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Free Lessons</h3>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-green-400">Free Access</span>
        </div>
      </div>

      {/* Lessons */}
      <nav className="space-y-3">
        {freeLessons.map((lesson) => {
          const isCurrentLesson = currentLessonId === lesson.id;
          const lessonCompleted = isLessonCompleted(lesson.id);
          const isExpanded = expandedLessons.has(lesson.id);

          return (
            <div key={lesson.id} className="space-y-2">
              {/* Main Lesson Button */}
              <button
                onClick={() => {
                  if (lesson.sublessons && lesson.sublessons.length > 0) {
                    onToggleLessonExpanded(lesson.id);
                  } else {
                    onNavigation(`/course/${courseSlug}/chapter/${lesson.id}`);
                  }
                }}
                className={`w-full flex items-center p-3 rounded-lg text-left transition-all group ${
                  isCurrentLesson
                    ? 'bg-blue-500/20 border-2 border-blue-500/50 shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Lesson Number/Status Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 ${
                  isCurrentLesson
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : lessonCompleted
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
                      : 'bg-white/10 text-gray-300 border border-white/20'
                }`}>
                  {lessonCompleted ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span>{lesson.id}</span>
                  )}
                </div>

                {/* Lesson Content */}
                <div className="min-w-0 flex-1">
                  <div className={`font-semibold text-sm mb-1 ${
                    isCurrentLesson ? 'text-blue-300' : 'text-white'
                  }`}>
                    {lesson.title}
                  </div>
                  <div className={`text-xs ${
                    isCurrentLesson ? 'text-blue-400' : 'text-gray-400'
                  }`}>
                    {lesson.sublessons?.length || 0} parts{lesson.id === 1 ? ' • Start here' : ''}
                  </div>
                </div>

                {/* Expand Arrow */}
                {lesson.sublessons && lesson.sublessons.length > 0 && (
                  <div className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                    <svg className={`w-4 h-4 ${isCurrentLesson ? 'text-blue-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </button>

              {/* Sublessons */}
              {lesson.sublessons && lesson.sublessons.length > 0 && isExpanded && (
                <div className="ml-4 space-y-1.5">
                  {lesson.sublessons.map((sublesson, index) => {
                    const isCurrentSublesson = isCurrentLesson && currentSublessonId === sublesson.id;
                    const isSublessonCompleted = lessonCompleted; // If lesson is complete, all sublessons are complete

                    return (
                      <div key={sublesson.id} className="relative">
                        {/* Connection Line */}
                        {index > 0 && (
                          <div className="absolute left-2 -top-1.5 w-px h-3 bg-white/20"></div>
                        )}

                        <button
                          onClick={() => onNavigation(`/course/${courseSlug}/chapter/${lesson.id}/${sublesson.id}`)}
                          className={`w-full flex items-center p-2.5 rounded-md text-left transition-all ${
                            isCurrentSublesson
                              ? 'bg-blue-500/20 border border-blue-500/50'
                              : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                          }`}
                        >
                          {/* Progress Indicator */}
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0 border relative ${
                            isCurrentSublesson
                              ? 'bg-blue-600 text-white border-blue-600'
                              : isSublessonCompleted
                                ? 'bg-green-500 text-white border-green-500'
                                : 'bg-white/10 text-gray-400 border-white/20'
                          }`}>
                            {/* AI Indicator - Purple dot for AI lessons */}
                            {sublesson.hasAI && (
                              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-purple-500 rounded-full border border-white"></div>
                            )}
                            {isSublessonCompleted ? (
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            ) : isCurrentSublesson ? (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            ) : (
                              <span>{index + 1}</span>
                            )}
                          </div>

                          {/* Sublesson Title */}
                          <div className="min-w-0 flex-1">
                            <div className={`font-medium text-xs truncate ${
                              isCurrentSublesson ? 'text-blue-300' : 'text-gray-300'
                            }`}>
                              {sublesson.title}
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}