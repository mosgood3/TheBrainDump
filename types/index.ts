// Common types used across the application

export interface User {
  id: string;
  email: string;
  email_confirmed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
}

export interface AssessmentFormData {
  // Step 1 fields
  planName: string;
  primaryFocus: string;
  anxietyLevel: number;
  anxietyTypes: string[];
  
  // Step 2: Describe Experience
  physicalSymptoms: string;
  anxiousThoughts: string;
  anxiousBehaviors: string;
  
  // Step 3: Identify Triggers  
  mainTriggers: string;
  avoidancePatterns: string;
  fearOfAnxietyResponse: boolean;
  
  // Step 4: Life Impact
  lifeImpact: string;
  enjoyableActivities: string;
  
  // Step 5: Current Coping
  currentCoping: string;
  
  // Step 6: Recovery Goals
  mainGoals: string;
  
  // Legacy fields (keep for backward compatibility)
  anxietyDescription: string;
  triggers: string[];
  customTriggers: string;
  legacyPhysicalSymptoms: string[];
  mentalSymptoms: string[];
  legacyCurrentCoping: string[];
  goals: string[];
  customGoals: string;
  sleepHours: number;
  exerciseFrequency: string;
  socialSupport: number;
  previousTherapy: string;
  medication: string;
  timeline: string;
}

export interface AssessmentStep {
  id: number;
  title: string;
  description: string;
}

export interface LessonData {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedDuration: number;
  takeaway: string;
  objectives: string[];
  subsections: LessonSubsection[];
}

export interface LessonSubsection {
  id: string;
  title: string;
  type: 'content' | 'reflection' | 'exercise' | 'interactive' | 'visual';
  content: string;
  duration?: number;
  questions?: string[];
  instructions?: string;
  description?: string;
}

export interface ProgressContextType {
  isLessonCompleted: (lessonId: number) => boolean;
  hasCompletedIntro: () => boolean;
  hasCompletedAssessment: () => boolean;
  completeLesson: (lessonId: number, timeSpent?: number) => Promise<void>;
  completeSubsection: (lessonId: number, subsectionId: string) => Promise<void>;
  completeAssessment: (formData: Record<string, unknown>) => Promise<void>;
}

export type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
};

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'range';
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: ValidationRule;
  className?: string;
};