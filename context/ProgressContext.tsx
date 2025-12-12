'use client';

import React, { createContext, useContext, useState } from 'react';
import { MAX_LESSONS } from '../lib/constants';

interface ProgressData {
  user_id: string;
  has_completed_intro: boolean;
  intro_steps_completed: number;
  has_completed_assessment: boolean;
  completed_lessons: number[];
  lesson_progress: Record<string, {
    completed: boolean;
    completed_at: string;
    time_spent: number;
    score?: number;
  }>;
  created_at: string;
  updated_at: string;
}

interface ProgressContextType {
  progress: ProgressData | null;
  loading: boolean;
  error: string | null;
  refreshProgress: () => Promise<void>;
  completeIntroStep: (stepNumber: number, totalSteps: number) => Promise<void>;
  completeAssessment: (assessmentData: Record<string, any>) => Promise<void>;
  completeLesson: (lessonId: number) => Promise<void>;
  toggleLessonCompletion: (lessonId: number) => Promise<void>;
  isLessonCompleted: (lessonId: number) => boolean;
  getCompletedLessonsCount: () => number;
  hasCompletedIntro: () => boolean;
  hasCompletedAssessment: () => boolean;
  completedLessons: number[];
  getNextIncompleteLesson: () => number;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  // Mock progress data - no backend
  const progress: ProgressData = {
    user_id: 'mock-user',
    has_completed_intro: true,
    intro_steps_completed: 0,
    has_completed_assessment: true,
    completed_lessons: completedLessons,
    lesson_progress: {},
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const refreshProgress = async () => {
    // No-op: backend removed
  };

  const completeIntroStep = async (stepNumber: number, totalSteps: number) => {
    // No-op: backend removed
  };

  const completeAssessment = async (assessmentData: Record<string, any>) => {
    // No-op: backend removed
  };

  const completeLesson = async (lessonId: number) => {
    setCompletedLessons(prev =>
      prev.includes(lessonId) ? prev : [...prev, lessonId]
    );
  };

  const toggleLessonCompletion = async (lessonId: number) => {
    const isCurrentlyCompleted = completedLessons.includes(lessonId);

    if (isCurrentlyCompleted) {
      setCompletedLessons(prev => prev.filter(id => id !== lessonId));
    } else {
      setCompletedLessons(prev =>
        prev.includes(lessonId) ? prev : [...prev, lessonId]
      );
    }
  };

  const isLessonCompleted = (lessonId: number): boolean => {
    return completedLessons.includes(lessonId);
  };

  const getCompletedLessonsCount = (): number => {
    return completedLessons.length;
  };

  const hasCompletedIntro = (): boolean => {
    return true; // Always true since backend removed
  };

  const hasCompletedAssessment = (): boolean => {
    return true; // Always true since backend removed
  };

  const getNextIncompleteLesson = (): number => {
    for (let lessonId = 1; lessonId <= MAX_LESSONS; lessonId++) {
      if (!completedLessons.includes(lessonId)) {
        return lessonId;
      }
    }
    return MAX_LESSONS;
  };

  const value: ProgressContextType = {
    progress,
    loading,
    error,
    refreshProgress,
    completeIntroStep,
    completeAssessment,
    completeLesson,
    toggleLessonCompletion,
    isLessonCompleted,
    getCompletedLessonsCount,
    hasCompletedIntro,
    hasCompletedAssessment,
    completedLessons,
    getNextIncompleteLesson,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
