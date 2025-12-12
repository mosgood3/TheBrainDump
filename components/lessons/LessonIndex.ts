// Chapter imports - new numbered structure
import Chapter01 from './chapter-01-introduction/Chapter01';
import Chapter02 from './chapter-02-what-is-anxiety/Chapter02';
import Chapter03 from './chapter-03-mindset-recovery/Chapter03';
import Chapter04 from './chapter-04-conquering-thoughts/Chapter04';
import Chapter05 from './chapter-05-accepting-sensations/Chapter05';
import Chapter06 from './chapter-06-gradual-exposure/Chapter06';
import Chapter07 from './chapter-07-sink-into-what-you-are/Chapter07';

// Chapter 1 Sublessons
import { WelcomeSublesson } from './chapter-01-introduction/sublesson-01/Sublesson01';
import { AnxietyPatternAnalyzerSublesson } from './chapter-01-introduction/sublesson-01b/AnxietyPatternAnalyzer';
import { IndifferenceSublesson } from './chapter-01-introduction/sublesson-02/Sublesson02';
import { ScienceBehindRecoverySublesson } from './chapter-01-introduction/sublesson-03/Sublesson03';
import { PhysiologicalVsPsychologicalSublesson } from './chapter-01-introduction/sublesson-04/Sublesson04';
import { AddictionLifestyleFactorsSublesson } from './chapter-01-introduction/sublesson-05/Sublesson05';
import { InitialReflectionSublesson } from './chapter-01-introduction/sublesson-06/Sublesson06';
import { Chapter1RecapSublesson } from './chapter-01-introduction/sublesson-07/Sublesson07';

// Chapter 2 Sublessons
import { WhatIsAnxietyOverviewSublesson } from './chapter-02-what-is-anxiety/sublesson-01/Sublesson01';
import {
  UnderstandingBasicsSublesson,
  SecondFearSublesson,
  WhatWeGetWrongSublesson,
  CognitiveBiasesSublesson,
  Chapter2RecapSublesson
} from './WhatIsAnxietySublessons';

// Chapter 3 Sublessons
import {
  MindsetRecoveryOverviewSublesson,
  NonlinearRecoverySublesson,
  TenacityRecoverySublesson,
  NeuroplasticitySublesson,
  PatienceCompassionSublesson,
  Chapter3RecapSublesson
} from './MindsetRecoverySublessons';

// Chapter 4 Sublessons
import {
  ConqueringThoughtsOverviewSublesson,
  HowThoughtsWorkSublesson,
  ScoutMetaphorSublesson,
  MasterObserverSublesson,
  MeditationPracticeSublesson,
  DismantlingAnxiousThoughtsSublesson,
  Chapter4RecapSublesson
} from './ConqueringThoughtsSublessons';
import {
  AcceptingSensationsOverviewSublesson,
  PhysicalSymptomsSublesson,
  FearOfSensationsSublesson,
  ChangingResponseSublesson,
  AcceptanceBeyondAnxietySublesson,
  Chapter5RecapSublesson
} from './AcceptingSensationsSublessons';
import {
  GradualExposureOverviewSublesson,
  ScienceOfExposureSublesson,
  InteractiveExposurePlanningSublesson,
  CommonMistakesSublesson,
  Chapter6RecapSublesson
} from './GradualExposureSublessons';
import { SinkIntoWhatYouAreOverviewSublesson, CourseReviewSublesson, QuotesToLiveBySublesson, FinalMessageSublesson } from './SinkIntoWhatYouAreSublessons';

// Chapter 7 Sublessons
import { AdditionalReadingSublesson } from './chapter-07-sink-into-what-you-are/sublesson-05/Sublesson05';

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
    title: 'Introduction',
    description: 'Welcome to your anxiety recovery journey',
    estimatedDuration: 15,
    category: 'Foundation',
    difficulty: 'beginner',
    component: Chapter01,
    prerequisites: [],
    sublessons: [
      {
        id: 'welcome',
        title: 'Welcome',
        icon: '',
        component: WelcomeSublesson
      },
      {
        id: 'anxiety-pattern-analyzer',
        title: 'Initial Anxiety Assessment',
        icon: '🧠',
        component: AnxietyPatternAnalyzerSublesson,
        hasAI: true
      },
      {
        id: 'indifference',
        title: 'Indifference',
        icon: '',
        component: IndifferenceSublesson
      },
      {
        id: 'science-behind-recovery',
        title: 'Science Behind Recovery',
        icon: '',
        component: ScienceBehindRecoverySublesson
      },
      {
        id: 'physical-vs-mental',
        title: 'Physical vs Mental',
        icon: '',
        component: PhysiologicalVsPsychologicalSublesson
      },
      {
        id: 'lifestyle-factors',
        title: 'Lifestyle Factors',
        icon: '',
        component: AddictionLifestyleFactorsSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '',
        component: Chapter1RecapSublesson
      }
    ]
  },
  {
    id: 2,
    title: 'What is Anxiety',
    description: 'Understanding the root causes and mechanisms of anxiety',
    estimatedDuration: 25,
    category: 'Understanding',
    difficulty: 'beginner',
    component: Chapter02,
    prerequisites: [],
    sublessons: [
      {
        id: 'overview',
        title: 'Video Overview',
        icon: '',
        component: WhatIsAnxietyOverviewSublesson
      },
      {
        id: 'anxiety-explained',
        title: 'What Is Anxiety',
        icon: '',
        component: UnderstandingBasicsSublesson
      },
      {
        id: 'second-fear',
        title: 'Second Fear',
        icon: '',
        component: SecondFearSublesson,
        hasAI: true
      },
      {
        id: 'what-we-get-wrong',
        title: 'Anxiety Misconceptions',
        icon: '',
        component: WhatWeGetWrongSublesson
      },
      {
        id: 'cognitive-biases',
        title: 'Cognitive Biases',
        icon: '',
        component: CognitiveBiasesSublesson,
        hasAI: true
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '',
        component: Chapter2RecapSublesson
      }
    ]
  },
  {
    id: 3,
    title: 'Mindset for Recovery',
    description: 'Developing the mental framework for lasting anxiety recovery',
    estimatedDuration: 20,
    category: 'Mindset',
    difficulty: 'intermediate',
    component: Chapter03,
    prerequisites: [1, 2],
    sublessons: [
      {
        id: 'overview',
        title: 'Video Overview',
        icon: '',
        component: MindsetRecoveryOverviewSublesson
      },
      {
        id: 'nonlinear-recovery',
        title: 'Nonlinear Recovery',
        icon: '',
        component: NonlinearRecoverySublesson
      },
      {
        id: 'tenacity',
        title: 'Tenacity in Recovery',
        icon: '',
        component: TenacityRecoverySublesson
      },
      {
        id: 'neuroplasticity',
        title: 'Neuroplasticity',
        icon: '',
        component: NeuroplasticitySublesson
      },
      {
        id: 'patience-compassion',
        title: 'Patience & Self-Compassion',
        icon: '',
        component: PatienceCompassionSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '',
        component: Chapter3RecapSublesson
      }
    ]
  },
  {
    id: 4,
    title: 'Conquering Thoughts',
    description: 'Learning to master your relationship with thoughts and thinking',
    estimatedDuration: 30,
    category: 'Cognitive',
    difficulty: 'intermediate',
    component: Chapter04,
    prerequisites: [1, 2, 3],
    sublessons: [
      {
        id: 'overview',
        title: 'Video Overview',
        icon: '',
        component: ConqueringThoughtsOverviewSublesson
      },
      {
        id: 'scout-metaphor',
        title: 'Introducing Scout',
        icon: '',
        component: ScoutMetaphorSublesson
      },
      {
        id: 'how-thoughts-work',
        title: 'Thoughts vs. Thinking',
        icon: '',
        component: HowThoughtsWorkSublesson
      },
      {
        id: 'master-observer',
        title: 'Master the Observer',
        icon: '',
        component: MasterObserverSublesson,
        hasAI: true
      },
      {
        id: 'meditation-practice',
        title: 'Meditation Practice',
        icon: '',
        component: MeditationPracticeSublesson
      },
      {
        id: 'dismantling-anxious-thoughts',
        title: 'Common Themes',
        icon: '',
        component: DismantlingAnxiousThoughtsSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '',
        component: Chapter4RecapSublesson
      }
    ]
  },
  {
    id: 5,
    title: 'Accepting Sensations',
    description: 'Learning to coexist peacefully with physical anxiety symptoms',
    estimatedDuration: 25,
    category: 'Physical',
    difficulty: 'intermediate',
    component: Chapter05,
    prerequisites: [1, 2, 3],
    sublessons: [
      {
        id: 'overview',
        title: 'Video Overview',
        icon: '',
        component: AcceptingSensationsOverviewSublesson
      },
      {
        id: 'physical-symptoms',
        title: 'Physical Symptoms',
        icon: '',
        component: PhysicalSymptomsSublesson
      },
      {
        id: 'fear-of-sensations',
        title: 'Fear of Sensations',
        icon: '',
        component: FearOfSensationsSublesson
      },
      {
        id: 'changing-response',
        title: 'Changing Your Response',
        icon: '',
        component: ChangingResponseSublesson,
        hasAI: true
      },
      {
        id: 'acceptance-beyond-anxiety',
        title: 'Acceptance Beyond Anxiety',
        icon: '',
        component: AcceptanceBeyondAnxietySublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '',
        component: Chapter5RecapSublesson
      }
    ]
  },
  {
    id: 6,
    title: 'Gradual Exposure',
    description: 'Systematically facing your fears to reduce their power',
    estimatedDuration: 35,
    category: 'Behavioral',
    difficulty: 'advanced',
    component: Chapter06,
    prerequisites: [1, 2, 3, 4, 5],
    sublessons: [
      {
        id: 'what-is-gradual-exposure',
        title: 'Video Overview',
        icon: '🎯',
        component: GradualExposureOverviewSublesson
      },
      {
        id: 'how-exposure-works',
        title: 'How Exposure Works',
        icon: '🔄',
        component: ScienceOfExposureSublesson
      },
      {
        id: 'plan-your-exposure',
        title: 'Plan Your Exposure Journey',
        icon: '🎯',
        component: InteractiveExposurePlanningSublesson,
        hasAI: true
      },
      {
        id: 'common-mistakes',
        title: 'Common Exposure Mistakes',
        icon: '⚠️',
        component: CommonMistakesSublesson
      },
      {
        id: 'chapter-recap',
        title: 'Chapter Recap',
        icon: '📚',
        component: Chapter6RecapSublesson
      }
    ]
  },
  {
    id: 7,
    title: 'Beyond This Course',
    description: 'Embracing your true self beyond anxiety and building lasting resilience',
    estimatedDuration: 30,
    category: 'Closing',
    difficulty: 'advanced',
    component: Chapter07,
    prerequisites: [1, 2, 3, 4, 5, 6],
    sublessons: [
      {
        id: 'course-takeaways',
        title: 'Video Overview',
        icon: '',
        component: SinkIntoWhatYouAreOverviewSublesson
      },
      {
        id: 'additional-reading',
        title: 'Additional Reading',
        icon: '',
        component: AdditionalReadingSublesson
      },
      {
        id: 'course-review',
        title: 'Course Review',
        icon: '',
        component: CourseReviewSublesson
      },
      {
        id: 'quotes-to-live-by',
        title: 'Quotes to Live By',
        icon: '',
        component: QuotesToLiveBySublesson
      },
      {
        id: 'final-message',
        title: 'Final Message',
        icon: '',
        component: FinalMessageSublesson
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