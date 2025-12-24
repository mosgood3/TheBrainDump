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
  // Step 1: Background & Experience
  planName: string;
  primaryFocus: string;
  experienceLevel: number; // 0-10 scale of technical experience
  interests: string[]; // Types of apps they want to build

  // Step 2: Current Skills
  currentSkills: string; // What they already know
  learningStyle: string; // How they prefer to learn
  timeCommitment: string; // How much time they can dedicate

  // Step 3: Goals & Aspirations
  appIdeas: string; // What they want to build
  careerGoals: string; // Career aspirations
  mainMotivation: string; // Why they want to learn

  // Step 4: Challenges & Concerns
  concerns: string; // What worries them about learning
  pastAttempts: string; // Previous learning attempts

  // Step 5: Learning Preferences
  preferredPace: string; // Fast, moderate, slow
  supportNeeds: string; // What kind of help they need

  // Step 6: Building Goals
  mainGoals: string; // What they want to achieve

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
  anxietyLevel: number;
  anxietyTypes: string[];
  physicalSymptoms: string;
  anxiousThoughts: string;
  anxiousBehaviors: string;
  mainTriggers: string;
  avoidancePatterns: string;
  fearOfAnxietyResponse: boolean;
  lifeImpact: string;
  enjoyableActivities: string;
  currentCoping: string;
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