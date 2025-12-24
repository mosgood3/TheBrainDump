// Chapter imports - new numbered structure
import Chapter01 from './chapter-01/Chapter01';
import Chapter02 from './chapter-02/Chapter02';
import Chapter03 from './chapter-03/Chapter03';
import Chapter04 from './chapter-04/Chapter04';
import Chapter05 from './chapter-05/Chapter05';
import Chapter06 from './chapter-06/Chapter06';
import Chapter07 from './chapter-07/Chapter07';

// Chapter 1 Sublessons
import { WelcomeSublesson } from './chapter-01/sublesson-01/Sublesson01';
import { PatternAnalyzerSublesson } from './chapter-01/sublesson-01b/PatternAnalyzer';
import { IndifferenceSublesson } from './chapter-01/sublesson-02/Sublesson02';
import { ScienceBehindRecoverySublesson } from './chapter-01/sublesson-03/Sublesson03';
import { PhysiologicalVsPsychologicalSublesson } from './chapter-01/sublesson-04/Sublesson04';
import { AddictionLifestyleFactorsSublesson } from './chapter-01/sublesson-05/Sublesson05';
import { InitialReflectionSublesson } from './chapter-01/sublesson-06/Sublesson06';
import { Chapter1RecapSublesson } from './chapter-01/sublesson-07/Sublesson07';

// Chapter 2 Sublessons
import { WhatIsAnxietyOverviewSublesson } from './chapter-02/sublesson-01/Sublesson01';
import {
  UnderstandingBasicsSublesson,
  SecondFearSublesson,
  WhatWeGetWrongSublesson,
  CognitiveBiasesSublesson,
  Chapter2RecapSublesson
} from './Chapter02Sublessons';

// Chapter 3 Sublessons
import {
  MindsetRecoveryOverviewSublesson,
  NonlinearRecoverySublesson,
  TenacityRecoverySublesson,
  NeuroplasticitySublesson,
  PatienceCompassionSublesson,
  Chapter3RecapSublesson
} from './Chapter03Sublessons';

// Chapter 4 Sublessons
import {
  ConqueringThoughtsOverviewSublesson,
  HowThoughtsWorkSublesson,
  ScoutMetaphorSublesson,
  MasterObserverSublesson,
  MeditationPracticeSublesson,
  DismantlingAnxiousThoughtsSublesson,
  Chapter4RecapSublesson
} from './Chapter04Sublessons';
import {
  AcceptingSensationsOverviewSublesson,
  PhysicalSymptomsSublesson,
  FearOfSensationsSublesson,
  ChangingResponseSublesson,
  AcceptanceBeyondAnxietySublesson,
  Chapter5RecapSublesson
} from './Chapter05Sublessons';
import {
  GradualExposureOverviewSublesson,
  ScienceOfExposureSublesson,
  InteractiveExposurePlanningSublesson,
  CommonMistakesSublesson,
  Chapter6RecapSublesson
} from './Chapter06Sublessons';
import { SinkIntoWhatYouAreOverviewSublesson, CourseReviewSublesson, QuotesToLiveBySublesson, FinalMessageSublesson } from './Chapter07Sublessons';

// Chapter 7 Sublessons
import { AdditionalReadingSublesson } from './chapter-07/sublesson-05/Sublesson05';

export interface SublessonInfo {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType<{ onComplete: () => void; isCompleted: boolean }>;
  hasAI?: boolean;
}

export interface LessonInfo {
  id: number;
  title: string;
  description: string;
  estimatedDuration: number;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  component: React.ComponentType<{ onComplete?: () => void; onSubsectionComplete?: (subsectionId: string) => void; currentSublesson?: string }>;
  prerequisites?: number[];
  sublessons?: SublessonInfo[];
}

export const lessons: LessonInfo[] = [
  {
    id: 1,
    title: 'Setup: Get Your Tools Ready',
    description: 'Learn about the tech stack and set up your development environment',
    estimatedDuration: 30,
    category: 'Setup',
    difficulty: 'beginner',
    component: Chapter01,
    prerequisites: [],
    sublessons: [
      {
        id: 'introduction',
        title: 'Introduction',
        icon: '👋',
        component: WelcomeSublesson
      },
      {
        id: 'getting-set-up',
        title: 'Getting Set Up',
        icon: '⚙️',
        component: IndifferenceSublesson
      },
      {
        id: 'installing-node',
        title: 'Installing Node.js',
        icon: '📦',
        component: ScienceBehindRecoverySublesson
      },
      {
        id: 'installing-vscode',
        title: 'Installing VS Code',
        icon: '💻',
        component: PhysiologicalVsPsychologicalSublesson
      },
      {
        id: 'git-github-setup',
        title: 'Git & GitHub Setup',
        icon: '🌿',
        component: AddictionLifestyleFactorsSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '📚',
        component: Chapter1RecapSublesson
      }
    ]
  },
  {
    id: 2,
    title: 'Prompt Engineering: Build with AI',
    description: 'Learn to integrate AI capabilities into your application',
    estimatedDuration: 40,
    category: 'AI',
    difficulty: 'intermediate',
    component: Chapter04,
    prerequisites: [1],
    sublessons: [
      {
        id: 'overview',
        title: 'AI Integration Overview',
        icon: '🤖',
        component: ConqueringThoughtsOverviewSublesson
      },
      {
        id: 'prompt-basics',
        title: 'Prompt Engineering Basics',
        icon: '💬',
        component: ScoutMetaphorSublesson
      },
      {
        id: 'openai-setup',
        title: 'Setting Up OpenAI API',
        icon: '🔑',
        component: HowThoughtsWorkSublesson
      },
      {
        id: 'building-ai-features',
        title: 'Building AI Features',
        icon: '✨',
        component: MasterObserverSublesson,
        hasAI: true
      },
      {
        id: 'best-practices',
        title: 'AI Best Practices',
        icon: '⭐',
        component: MeditationPracticeSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '📚',
        component: Chapter4RecapSublesson
      }
    ]
  },
  {
    id: 3,
    title: 'Frontend: Build Beautiful UIs',
    description: 'Build beautiful, responsive user interfaces with React and Next.js',
    estimatedDuration: 45,
    category: 'Frontend',
    difficulty: 'beginner',
    component: Chapter02,
    prerequisites: [1],
    sublessons: [
      {
        id: 'overview',
        title: 'Next.js Overview',
        icon: '⚡',
        component: WhatIsAnxietyOverviewSublesson
      },
      {
        id: 'react-basics',
        title: 'React Basics',
        icon: '⚛️',
        component: UnderstandingBasicsSublesson
      },
      {
        id: 'components-props',
        title: 'Components & Props',
        icon: '🧩',
        component: SecondFearSublesson
      },
      {
        id: 'routing-navigation',
        title: 'Routing & Navigation',
        icon: '🧭',
        component: WhatWeGetWrongSublesson
      },
      {
        id: 'styling-tailwind',
        title: 'Styling with Tailwind CSS',
        icon: '🎨',
        component: CognitiveBiasesSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '📚',
        component: Chapter2RecapSublesson
      }
    ]
  },
  {
    id: 4,
    title: 'Backend: Power Your App with Data',
    description: 'Master APIs and Supabase for powerful backend functionality',
    estimatedDuration: 50,
    category: 'Backend',
    difficulty: 'intermediate',
    component: Chapter03,
    prerequisites: [1, 3],
    sublessons: [
      {
        id: 'overview',
        title: 'Backend Overview',
        icon: '🔧',
        component: MindsetRecoveryOverviewSublesson
      },
      {
        id: 'supabase-intro',
        title: 'Introduction to Supabase',
        icon: '🚀',
        component: NonlinearRecoverySublesson
      },
      {
        id: 'database-setup',
        title: 'Setting Up Your Database',
        icon: '🗄️',
        component: TenacityRecoverySublesson
      },
      {
        id: 'api-routes',
        title: 'Creating API Routes',
        icon: '🔌',
        component: NeuroplasticitySublesson
      },
      {
        id: 'authentication',
        title: 'User Authentication',
        icon: '🔐',
        component: PatienceCompassionSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '📚',
        component: Chapter3RecapSublesson
      }
    ]
  },
  {
    id: 5,
    title: 'Payments: Monetize Your App',
    description: 'Implement secure payment processing with Stripe',
    estimatedDuration: 45,
    category: 'Payments',
    difficulty: 'intermediate',
    component: Chapter05,
    prerequisites: [1, 3, 4],
    sublessons: [
      {
        id: 'overview',
        title: 'Payments Overview',
        icon: '💳',
        component: AcceptingSensationsOverviewSublesson
      },
      {
        id: 'stripe-setup',
        title: 'Setting Up Stripe',
        icon: '🔵',
        component: PhysicalSymptomsSublesson
      },
      {
        id: 'checkout-flow',
        title: 'Building Checkout Flow',
        icon: '🛒',
        component: FearOfSensationsSublesson
      },
      {
        id: 'webhooks',
        title: 'Stripe Webhooks',
        icon: '🔔',
        component: ChangingResponseSublesson
      },
      {
        id: 'subscriptions',
        title: 'Managing Subscriptions',
        icon: '🔄',
        component: AcceptanceBeyondAnxietySublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '📚',
        component: Chapter5RecapSublesson
      }
    ]
  },
  {
    id: 6,
    title: 'Launch: Go Live with Vercel',
    description: 'Launch your application to production with Vercel',
    estimatedDuration: 35,
    category: 'Deployment',
    difficulty: 'beginner',
    component: Chapter06,
    prerequisites: [1, 2, 3, 4, 5],
    sublessons: [
      {
        id: 'overview',
        title: 'Deployment Overview',
        icon: '🚀',
        component: GradualExposureOverviewSublesson
      },
      {
        id: 'vercel-setup',
        title: 'Setting Up Vercel',
        icon: '▲',
        component: ScienceOfExposureSublesson
      },
      {
        id: 'environment-variables',
        title: 'Environment Variables',
        icon: '🔐',
        component: InteractiveExposurePlanningSublesson
      },
      {
        id: 'custom-domain',
        title: 'Custom Domain Setup',
        icon: '🌐',
        component: CommonMistakesSublesson
      },
      {
        id: 'final-thoughts',
        title: 'Final Thoughts & Next Steps',
        icon: '🎉',
        component: Chapter6RecapSublesson
      }
    ]
  }
];

export const getLessonById = (id: number): LessonInfo | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonsByCategory = (category: string): LessonInfo[] => {
  return lessons.filter(lesson => lesson.category === category);
};

export const getLessonsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced'): LessonInfo[] => {
  return lessons.filter(lesson => lesson.difficulty === difficulty);
};

export const getAvailableLessons = (completedLessonIds: number[], hasCompletedAssessment: boolean = false): LessonInfo[] => {
  return lessons.filter(lesson => {
    // If user hasn't completed assessment, no lessons are available
    if (!hasCompletedAssessment) {
      return false;
    }
    
    // If lesson has no prerequisites, it's available (after assessment completion)
    if (!lesson.prerequisites || lesson.prerequisites.length === 0) {
      return true;
    }
    
    // Check if all prerequisites are completed
    return lesson.prerequisites.every(prereqId => completedLessonIds.includes(prereqId));
  });
};

export const getLessonProgress = (completedLessonIds: number[]) => {
  return {
    completed: completedLessonIds.length,
    total: lessons.length,
    percentage: Math.round((completedLessonIds.length / lessons.length) * 100)
  };
};

export default lessons;