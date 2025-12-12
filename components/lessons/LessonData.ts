// This file has been cleared for you to add your own lesson data structures
// You can define interfaces, types, and data here as needed for your lessons

export interface LessonSubsection {
  id: string;
  title: string;
  type: 'content' | 'exercise' | 'reflection' | 'interactive' | 'visual';
  content?: string;
  description?: string;
  instructions?: string;
  questions?: string[];
  duration?: number; // minutes
  isCompleted?: boolean;
}

export interface DetailedLesson {
  id: number;
  title: string;
  description: string;
  subsections: LessonSubsection[];
  takeaway?: string;
  estimatedDuration: number;
}

// Add your lesson data here when ready
export const detailedLessons: DetailedLesson[] = [];