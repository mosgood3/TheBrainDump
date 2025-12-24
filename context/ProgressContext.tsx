'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MAX_LESSONS } from '../lib/constants';

interface ProgressContextType {
  loading: boolean;
  error: string | null;
  completedLessons: number[];
  completeLesson: (lessonId: number, courseSlug?: string) => Promise<void>;
  uncompleteLesson: (lessonId: number, courseSlug?: string) => Promise<void>;
  isLessonCompleted: (lessonId: number) => boolean;
  getCompletedLessonsCount: () => number;
  getNextIncompleteLesson: () => number;
  hasCompletedAssessment: () => boolean;
  refreshProgress: (userId: string) => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  // Fetch progress when user changes
  useEffect(() => {
    const fetchUserAndProgress = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUserId(session.user.id);
          await fetchProgress(session.user.id);
        } else {
          setCompletedLessons([]);
        }
      } catch (err) {
        console.error('Error fetching user progress:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserAndProgress();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        setUserId(session.user.id);
        await fetchProgress(session.user.id);
      } else {
        setUserId(null);
        setCompletedLessons([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProgress = async (uid: string) => {
    try {
      const { data, error } = await supabase
        .from('lesson_progress')
        .select('lesson_id')
        .eq('user_id', uid)
        .eq('completed', true);

      if (error) {
        console.error('Error fetching progress:', error);
        return;
      }

      const lessonIds = data?.map(row => row.lesson_id) || [];
      setCompletedLessons(lessonIds);
    } catch (err) {
      console.error('Error fetching progress:', err);
    }
  };

  const refreshProgress = async (uid: string) => {
    await fetchProgress(uid);
  };

  const completeLesson = async (lessonId: number, courseSlug: string = 'brain-dump') => {
    if (!userId) return;

    try {
      // Optimistically update UI
      setCompletedLessons(prev =>
        prev.includes(lessonId) ? prev : [...prev, lessonId]
      );

      // Persist to database
      const { error } = await supabase
        .from('lesson_progress')
        .upsert({
          user_id: userId,
          course_slug: courseSlug,
          lesson_id: lessonId,
          completed: true,
          completed_at: new Date().toISOString()
        }, {
          onConflict: 'user_id,course_slug,lesson_id'
        });

      if (error) {
        console.error('Error saving progress:', error);
        // Revert on error
        setCompletedLessons(prev => prev.filter(id => id !== lessonId));
      }
    } catch (err) {
      console.error('Error completing lesson:', err);
    }
  };

  const uncompleteLesson = async (lessonId: number, courseSlug: string = 'brain-dump') => {
    if (!userId) return;

    try {
      // Optimistically update UI
      setCompletedLessons(prev => prev.filter(id => id !== lessonId));

      // Update in database
      const { error } = await supabase
        .from('lesson_progress')
        .update({ completed: false })
        .eq('user_id', userId)
        .eq('course_slug', courseSlug)
        .eq('lesson_id', lessonId);

      if (error) {
        console.error('Error updating progress:', error);
        // Revert on error
        setCompletedLessons(prev => [...prev, lessonId]);
      }
    } catch (err) {
      console.error('Error uncompleting lesson:', err);
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
    loading,
    error,
    completedLessons,
    completeLesson,
    uncompleteLesson,
    isLessonCompleted,
    getCompletedLessonsCount,
    getNextIncompleteLesson,
    hasCompletedAssessment,
    refreshProgress,
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
