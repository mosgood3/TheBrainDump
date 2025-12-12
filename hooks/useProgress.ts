// Stub progress hooks - backend removed

export interface ProgressData {
  user_id: string;
  completed_lessons: number[];
  current_lesson: number;
  intro_step_completed: boolean;
  assessment_completed: boolean;
  last_updated: string;
}

export function useProgressData(userId: string | undefined) {
  // Mock data - no backend
  const progress: ProgressData | null = userId ? {
    user_id: userId,
    completed_lessons: [],
    current_lesson: 1,
    intro_step_completed: true,
    assessment_completed: true,
    last_updated: new Date().toISOString(),
  } : null;

  const refreshProgress = () => {
    console.log('Backend removed - no-op');
  };

  const completeLesson = (lessonId: number) => {
    console.log('Backend removed - no-op', lessonId);
  };

  const completeIntroStep = () => {
    console.log('Backend removed - no-op');
  };

  const completeAssessment = () => {
    console.log('Backend removed - no-op');
  };

  return {
    progress,
    isLoading: false,
    error: null,
    refreshProgress,
    completeLesson,
    completeIntroStep,
    completeAssessment,
    isCompletingLesson: false,
  };
}
