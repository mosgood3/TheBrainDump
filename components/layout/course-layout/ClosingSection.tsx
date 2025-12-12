'use client';

import React from 'react';
import { useProgress } from '../../../context/ProgressContext';
import { useAuth } from '../../../context/AuthContext';
import { lessons } from '../../lessons/LessonIndex';

interface ClosingSectionProps {
  currentLessonId: number | null;
  currentSublessonId: string | null;
  expandedLessons: Set<number>;
  onToggleLessonExpanded: (lessonId: number) => void;
  onNavigation: (path: string) => void;
}

export function ClosingSection({
  currentLessonId,
  currentSublessonId,
  expandedLessons,
  onToggleLessonExpanded,
  onNavigation
}: ClosingSectionProps) {
  const {
    isLessonCompleted,
    hasCompletedAssessment
  } = useProgress();

  const { isPaid } = useAuth();

  // Get lesson 7 (the final lesson)
  const closingLesson = lessons.find(lesson => lesson.id === 7);

  if (!closingLesson) return null;

  const isLocked = !hasCompletedAssessment() || !isPaid;
  const isCurrentLesson = currentLessonId === closingLesson.id;
  const lessonCompleted = isLessonCompleted(closingLesson.id);
  const isExpanded = expandedLessons.has(closingLesson.id);

  return (
    <div className="px-6 py-5">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Course Completion</h3>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-xs font-medium text-purple-700">Final Lesson</span>
        </div>
      </div>

      {/* Closing Lesson */}
      <nav className="space-y-2">
        <div className="space-y-2">
          {/* Main Lesson Button */}
          <button
            onClick={() => {
              if (closingLesson.sublessons && closingLesson.sublessons.length > 0 && !isLocked) {
                onToggleLessonExpanded(closingLesson.id);
              } else {
                onNavigation(`/chapter/${closingLesson.id}`);
              }
            }}
            disabled={isLocked}
            className={`w-full flex items-center p-3 rounded-lg text-left transition-all group ${
              isCurrentLesson
                ? 'bg-purple-50 border-2 border-purple-200 shadow-sm'
                : isLocked
                  ? 'bg-gray-50 border border-gray-200 opacity-60 cursor-not-allowed'
                  : 'bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:border-gray-300'
            }`}
          >
            {/* Lesson Number/Status Icon */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 ${
              isCurrentLesson
                ? 'bg-purple-600 text-white'
                : isLocked
                  ? 'bg-gray-300 text-gray-500'
                  : lessonCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-600 border border-gray-300'
            }`}>
              {isLocked ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 616 0z" clipRule="evenodd" />
                </svg>
              ) : lessonCompleted ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <span>7</span>
              )}
            </div>

            {/* Lesson Content */}
            <div className="min-w-0 flex-1">
              <div className={`font-semibold text-sm mb-1 ${
                isCurrentLesson ? 'text-purple-900' : isLocked ? 'text-gray-500' : 'text-gray-900'
              }`}>
                {closingLesson.title}
              </div>
              <div className={`text-xs ${
                isCurrentLesson ? 'text-purple-600' : isLocked ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {closingLesson.sublessons?.length || 0} parts
                {isLocked ? ' • Locked' : ''}
              </div>
            </div>

            {/* Expand Arrow */}
            {closingLesson.sublessons && closingLesson.sublessons.length > 0 && !isLocked && (
              <div className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                <svg className={`w-4 h-4 ${isCurrentLesson ? 'text-purple-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </button>

          {/* Sublessons */}
          {closingLesson.sublessons && closingLesson.sublessons.length > 0 && isExpanded && !isLocked && (
            <div className="ml-4 space-y-1.5">
              {closingLesson.sublessons.map((sublesson, index) => {
                const isCurrentSublesson = isCurrentLesson && currentSublessonId === sublesson.id;
                const isSublessonCompleted = lessonCompleted; // If lesson is complete, all sublessons are complete

                return (
                  <div key={sublesson.id} className="relative">
                    {/* Connection Line */}
                    {index > 0 && (
                      <div className="absolute left-2 -top-1.5 w-px h-3 bg-gray-200"></div>
                    )}

                    <button
                      onClick={() => onNavigation(`/chapter/${closingLesson.id}/${sublesson.id}`)}
                      className={`w-full flex items-center p-2.5 rounded-md text-left transition-all ${
                        isCurrentSublesson
                          ? 'bg-purple-100 border border-purple-200'
                          : 'bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      {/* Progress Indicator */}
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0 border ${
                        isCurrentSublesson
                          ? 'bg-purple-600 text-white border-purple-600'
                          : isSublessonCompleted
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white text-gray-400 border-gray-300'
                      }`}>
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
                          isCurrentSublesson ? 'text-purple-900' : 'text-gray-700'
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
      </nav>
    </div>
  );
}