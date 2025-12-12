'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { lessonStyles, SimpleInfoCard, LessonCompleteButton } from './shared/LessonStyleHelpers';
import { useProgress } from '../../context/ProgressContext';
import RecoveryNotes from '@/components/RecoveryNotes';

// FlipCard component for interactive content
function FlipCard({ frontTitle, frontContent, backContent, colorScheme }: {
  frontTitle: string;
  frontContent: string;
  backContent: string;
  colorScheme: 'red' | 'blue' | 'green' | 'gray' | 'orange';
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const colorClasses = {
    red: {
      front: 'bg-red-50 border-red-200 hover:bg-red-100',
      back: 'bg-red-50 border-red-200',
      title: 'text-red-800',
      content: 'text-red-700'
    },
    blue: {
      front: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      back: 'bg-blue-50 border-blue-200',
      title: 'text-blue-800',
      content: 'text-blue-700'
    },
    green: {
      front: 'bg-green-50 border-green-200 hover:bg-green-100',
      back: 'bg-green-50 border-green-200',
      title: 'text-green-800',
      content: 'text-green-700'
    },
    gray: {
      front: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
      back: 'bg-gray-50 border-gray-200',
      title: 'text-gray-800',
      content: 'text-gray-700'
    },
    orange: {
      front: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      back: 'bg-orange-50 border-orange-200',
      title: 'text-orange-800',
      content: 'text-orange-700'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <div
      className="relative h-48 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ${
          isFlipped ? '' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg border-2 ${colors.front} p-4 flex flex-col justify-center items-center text-center shadow-md`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h4 className={`font-semibold ${colors.title} mb-3 text-lg`}>{frontTitle}</h4>
          <p className={`text-sm ${colors.content} leading-relaxed`}>{frontContent}</p>
          <div className="mt-3 text-xs text-gray-500">Click to flip</div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 w-full h-full rounded-lg border-2 ${colors.back} p-4 flex flex-col justify-center shadow-md`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <p className={`text-sm ${colors.content} leading-relaxed text-center`}>{backContent}</p>
          <div className="mt-3 text-xs text-gray-500 text-center">Click to flip back</div>
        </div>
      </div>
    </div>
  );
}

// Overview Sublesson Component for Mindset Recovery
export function MindsetRecoveryOverviewSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full mx-auto px-4">
      <div className="aspect-video bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg overflow-hidden">
        {!isPlaying ? (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-orange-600 flex items-center justify-center cursor-pointer" onClick={handlePlayVideo}>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
              <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src="/videos/Chapter3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

// Nonlinear Recovery Journey Sublesson Component
export function NonlinearRecoverySublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [_selectedSection, _setSelectedSection] = useState<string | null>(null);

  const _recoveryRealities = [
    {
      title: "Progress Comes in Waves",
      description: "Good days and difficult days are both normal parts of the recovery process"
    },
    {
      title: "Setbacks Aren't Failures",
      description: "Temporary increases in anxiety don't mean you're back to square one"
    },
    {
      title: "Recovery Has Its Own Timeline",
      description: "Your journey will be unique - comparing to others isn't helpful"
    },
    {
      title: "Small Steps Count",
      description: "Tiny improvements often go unnoticed but add up over time"
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>📈</div>
        <h2 className={lessonStyles.title}>Nonlinear Recovery Journey</h2>
        <p className={lessonStyles.subtitle}>Recovery isn&apos;t a straight line</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          One of the most important things to understand about anxiety recovery is that it&apos;s rarely
          a smooth, upward progression. Early setbacks are completely normal, and progress often
          comes in waves rather than a steady climb.
        </p>
      </div>

      <SimpleInfoCard title="What to Expect in Your Recovery Journey" variant="noBorder">
        <div className="space-y-4">
          <div className="text-center mb-6">
            <p className="text-gray-700 mb-4 text-sm">
              Understanding the natural progression of recovery helps set realistic expectations and reduces self-criticism during challenging phases.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/3_Mindset/Difficulty.png"
                alt="Recovery difficulty curve showing how it starts hard but gradually becomes easier over time"
                className="rounded-lg"
                width={500}
                height={300}
              />
            </div>
            <p className="text-sm text-gray-600 italic mt-3">
              Recovery follows a predictable pattern: challenging at first, then gradually becoming easier as new skills become natural.
            </p>
          </div>
          <div className="relative space-y-6">
            {/* Beginning Phase */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-red-100 border-3 border-red-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-red-600">1</span>
              </div>
              <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gradient-to-b from-red-300 to-yellow-300"></div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-400 rounded-lg p-5">
                <h4 className="font-bold text-red-900 mb-3 text-base">The Beginning: It Will Be Difficult</h4>
                <div className="space-y-2 text-sm text-red-800">
                  <p>• The first few weeks or months are often the hardest</p>
                  <p>• You&apos;re learning new skills while still feeling anxious</p>
                  <p>• Old patterns feel automatic while new responses feel forced</p>
                  <p>• This difficulty is normal and expected - not a sign you&apos;re failing</p>
                </div>
              </div>
            </div>

            {/* Middle Phase */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-yellow-100 border-3 border-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-yellow-700">2</span>
              </div>
              <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 to-green-300"></div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-l-4 border-yellow-400 rounded-lg p-5">
                <h4 className="font-bold text-yellow-900 mb-3 text-base">The Middle: Gradual Shifts</h4>
                <div className="space-y-2 text-sm text-yellow-800">
                  <p>• Small victories start becoming more noticeable</p>
                  <p>• Good days begin outnumbering difficult ones</p>
                  <p>• New responses start feeling less forced, more natural</p>
                  <p>• You develop confidence in your ability to handle discomfort</p>
                </div>
              </div>
            </div>

            {/* Later Stages Phase */}
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 w-6 h-6 bg-green-100 border-3 border-green-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-green-700">3</span>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-lg p-5">
                <h4 className="font-bold text-green-900 mb-3 text-base">Later Stages: It Gets Gradually Easier</h4>
                <div className="space-y-2 text-sm text-green-800">
                  <p>• Anxiety becomes more like background noise</p>
                  <p>• Recovery responses become your new default</p>
                  <p>• You trust the process even during temporary setbacks</p>
                  <p>• Life decisions are based on values, not anxiety</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Timeline reminder:</strong> This process typically unfolds over months, not days or weeks.
              Every person&apos;s timeline is different, and that&apos;s completely normal.
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="The Reality: Recovery is a Wavy Line Going Up" variant="noBorder">
        <div className="text-center mb-4">
          <p className="text-gray-700 mb-6">
            This graph shows what real recovery looks like. Notice how there are ups and downs,
            but the overall trend is clearly upward. The setbacks don&apos;t erase your progress—they&apos;re
            part of the natural healing process.
          </p>
        </div>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/3_Mindset/Graph.png"
            alt="Recovery graph showing nonlinear progress with ups and downs but overall upward trend"
            className="rounded-lg"
            width={500}
            height={300}
          />
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 italic">
            🔑 Key insight: Zoom out and look at the bigger picture. Each &quot;setback&quot; is actually
            a temporary dip in an overall upward journey.
          </p>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Stepping Outside Yourself: The Bigger Picture Perspective" variant="noBorder">
        <div className="space-y-4">
          <p className="text-gray-700 text-sm">
            When you&apos;re having a difficult day, it&apos;s natural to get caught up in the immediate discomfort
            and lose sight of your overall progress. This is where stepping outside yourself becomes invaluable.
          </p>

          <div className="flex justify-center my-4">
            <Image
              src="/images/3_Mindset/Future.png"
              alt="Stepping outside yourself to see the bigger picture perspective on your recovery journey"
              className="rounded-lg"
              width={400}
              height={250}
            />
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-5 border border-gray-300">
              <h4 className="font-semibold text-gray-900 mb-2">The Zoom-Out Practice</h4>
              <p className="text-sm text-gray-700">
                When anxiety feels overwhelming, imagine you&apos;re looking down at your life from above, like viewing a map.
                That challenging day is just one small dot on a much larger journey. You can see all the progress
                you&apos;ve made, the tools you&apos;ve learned, and the moments of growth that led you to where you are today.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-300">
              <h4 className="font-semibold text-gray-900 mb-2">The Timeline Perspective</h4>
              <p className="text-sm text-gray-700">
                Ask yourself: &quot;How will I view this difficult day when I look back on it in 6 months?&quot;
                Often, you&apos;ll realize that today&apos;s struggle is a temporary blip in your ongoing recovery story.
                The anxiety feels huge right now, but in the context of your entire journey, it&apos;s just one chapter.
              </p>
            </div>

            <div className="bg-white rounded-lg p-5 border border-gray-300">
              <h4 className="font-semibold text-gray-900 mb-2">Your Past Self as Evidence</h4>
              <p className="text-sm text-gray-700">
                Remember: You&apos;ve survived 100% of your difficult days so far. Your past self would be amazed
                at the tools you have now, the awareness you&apos;ve developed, and the strength you&apos;ve built.
                Even on hard days, you&apos;re not the same person who started this journey.
              </p>
            </div>
          </div>

          <div className="text-center bg-blue-50 rounded-lg p-4 mt-4 border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Practice this:</strong> When having a difficult day, take a mental step back and ask:
              &quot;What would I tell someone else in my exact situation?&quot; Often, we have compassion and perspective
              for others that we struggle to give ourselves.
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Reframing Setbacks" variant="noBorder">
        <div className="grid gap-6 md:grid-cols-2">

          {/* Example 1 */}
          <div className="relative">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200 mb-3">
              <h4 className="font-semibold text-red-900 mb-2 text-sm">Unhelpful Thinking</h4>
              <p className="text-sm text-red-800">
                &quot;I&apos;m having a bad day, I&apos;m not getting better&quot;
              </p>
            </div>
            <div className="flex justify-center my-2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 text-sm">Helpful Reframe</h4>
              <p className="text-sm text-green-800">
                &quot;I&apos;m having a challenging day, which is a normal part of recovery&quot;
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="relative">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200 mb-3">
              <h4 className="font-semibold text-red-900 mb-2 text-sm">Unhelpful Thinking</h4>
              <p className="text-sm text-red-800">
                &quot;This setback means I&apos;m back where I started&quot;
              </p>
            </div>
            <div className="flex justify-center my-2">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-900 mb-2 text-sm">Helpful Reframe</h4>
              <p className="text-sm text-green-800">
                &quot;This is temporary - I still have all the tools and progress I&apos;ve made&quot;
              </p>
            </div>
          </div>

        </div>
      </SimpleInfoCard>

    </div>
  );
}

// Tenacity in Anxiety Recovery Sublesson Component
export function TenacityRecoverySublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const _tenacityElements = [
    {
      title: "Persistence Through Discomfort",
      description: "Continuing to take helpful actions even when anxiety feels strong"
    },
    {
      title: "Determination Despite Setbacks",
      description: "Recommitting to recovery after difficult days or periods"
    },
    {
      title: "Consistent Practice",
      description: "Showing up daily with small actions, even when motivation is low"
    },
    {
      title: "Learning from Obstacles",
      description: "Using challenges as information rather than reasons to give up"
    }
  ];

  const _tenacityVsStubborn = [
    {
      title: "Tenacity (Helpful)",
      description: "Flexible persistence - adjusting approach while maintaining commitment to recovery"
    },
    {
      title: "Stubbornness (Unhelpful)",
      description: "Rigid persistence - forcing the same approach even when it's not working"
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>💪</div>
        <h2 className={lessonStyles.title}>Tenacity in Anxiety Recovery</h2>
        <p className={lessonStyles.subtitle}>Persistence and determination despite obstacles</p>
      </div>

      <div className={lessonStyles.content}>
        <div className="bg-orange-50 border-l-4 border-orange-400 pl-6 py-4 mb-6">
          <p className="text-orange-900 font-semibold text-base mb-2">
            🔑 <strong>Tenacity is THE key word in anxiety recovery.</strong>
          </p>
          <p className="text-orange-800 text-sm">
            More than any technique, strategy, or method—tenacity is what separates those who recover
            from those who remain stuck. It's the single most important quality you can develop.
          </p>
        </div>

        <p>
          Tenacity is the quality of being determined and persistent, especially in the face of
          difficulties. In anxiety recovery, tenacity means continuing to move toward your values
          and goals even when anxiety tries to pull you in the opposite direction.
        </p>

        <p className="mt-4 text-gray-700">
          <strong>Why is tenacity so crucial?</strong> Because anxiety will test you. It will make recovery
          feel impossible on difficult days. It will whisper that you should give up, that nothing is working,
          that you're different from everyone else who has recovered. Tenacity is what carries you through
          these moments when motivation fails and hope feels distant.
        </p>
      </div>

      <SimpleInfoCard title="What Tenacity Looks Like in Recovery" variant="noBorder">
        <div className="grid md:grid-cols-2 gap-4">
          <FlipCard
            frontTitle="Persistence Through Discomfort"
            frontContent="Click to see an example of persistence in action"
            backContent="You feel anxious about a social event, but you go anyway. Instead of avoiding or leaving early, you stay and practice being present with discomfort. You're not trying to eliminate anxiety—you're proving you can act despite it."
            colorScheme="blue"
          />
          <FlipCard
            frontTitle="Determination Despite Setbacks"
            frontContent="Click to see how determination handles difficult days"
            backContent="After a week of panic attacks, you wake up discouraged. Instead of declaring recovery impossible, you acknowledge the difficulty and return to your practices. You remind yourself: 'Bad weeks don't erase my progress. This is part of the process.'"
            colorScheme="blue"
          />
          <FlipCard
            frontTitle="Consistent Practice"
            frontContent="Click to see consistency in daily life"
            backContent="You don't feel motivated today—in fact, you feel terrible. But you still do your 10-minute mindfulness practice, go for a walk, and face one small feared situation. You show up not because you feel like it, but because recovery requires it."
            colorScheme="blue"
          />
          <FlipCard
            frontTitle="Learning from Obstacles"
            frontContent="Click to see how obstacles become opportunities"
            backContent="You try an exposure and it goes poorly—anxiety was overwhelming and you left early. Instead of viewing this as failure, you get curious: 'What made this so hard? What can I adjust? What did I learn?' You use the challenge as data for your next attempt."
            colorScheme="blue"
          />
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Be Like a Broken Record: The Repetition Principle" variant="noBorder">
        <div className="space-y-4">
          <p className="text-gray-700 text-sm">
            When you learn new techniques in this course and start doing exposures, there's a crucial
            principle to follow: <strong>be like a broken record—repeat, repeat, repeat.</strong>
          </p>

          <div className="flex justify-center my-6">
            <Image
              src="/images/3_Mindset/Broken.png"
              alt="Broken record illustration showing the importance of repetition in anxiety recovery"
              className="rounded-lg"
              width={400}
              height={250}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">What This Means</h4>
              <p className="text-sm text-orange-800">
                Practice techniques over and over, way past the point where you think you 'get it.' Keep going until they become automatic.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Why Overlearning Works</h4>
              <p className="text-sm text-orange-800">
                Anxiety hits hardest when you're stressed and your thinking brain is unreliable. Recovery skills need to be so practiced they're embedded in muscle memory.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-5 border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">In Practice</h4>
              <p className="text-sm text-orange-800">
                Don't stop after one successful exposure. Do it 10 times, 20 times, until it becomes boring. Repeat until your fear response gets tired of the same old song.
              </p>
            </div>
          </div>

          <div className="text-center bg-gray-50 rounded-lg p-4 mt-4">
            <p className="text-sm text-gray-700">
              <strong>Remember:</strong> Your anxiety didn't develop overnight—it took thousands of repetitions
              to become automatic. Recovery requires the same level of repetitive practice to rewire those patterns.
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Action Before Motivation" variant="noBorder">
        <div className="space-y-6">
          <p className="text-gray-700 text-sm">
            One of the biggest myths about recovery is that you need to feel motivated before you can take action.
            The truth is the opposite: <strong>motivation usually comes AFTER you start taking action, not before.</strong>
          </p>

          <p className="text-gray-700 text-sm">
            Waiting to "feel ready" or "feel motivated" keeps you stuck. People who recover successfully take action
            even when they don't feel like it. They show up to practice regardless of their mood or energy level.
            The motivation follows the action.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-5 border border-red-200">
              <h5 className="font-semibold text-red-900 mb-3">Doesn't Work</h5>
              <div className="space-y-2 text-sm text-red-800">
                <p>• "I'll practice when I feel motivated"</p>
                <p>• "I need to be in the right mindset first"</p>
                <p>• "I'll start when I have more energy"</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <h5 className="font-semibold text-green-900 mb-3">Works</h5>
              <div className="space-y-2 text-sm text-green-800">
                <p>• "I'll practice whether I feel like it or not"</p>
                <p>• "Action creates momentum"</p>
                <p>• "I start, then motivation follows"</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Tenacious Recovery Rule:</strong> Show up and take action even when—especially when—you don't feel like it.
              The motivation will catch up with you, but only after you start moving.
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Building Tenacity" variant="noBorder">
        <p className="text-gray-600 text-sm">
          <strong>Start small:</strong> Practice tenacity with tiny daily actions first<br/>
          <strong>Celebrate persistence:</strong> Acknowledge effort, not just outcomes<br/>
          <strong>Expect resistance:</strong> Your anxiety will test your commitment - this is normal<br/>
          <strong>Stay flexible:</strong> Adjust your methods while keeping your eyes on your goals<br/>
          <strong>Remember your why:</strong> Connect with the values that make the effort worthwhile
        </p>
      </SimpleInfoCard>

    </div>
  );
}

// Role of Neuroplasticity Sublesson Component
export function NeuroplasticitySublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [_selectedSection, _setSelectedSection] = useState<string | null>(null);

  const _brainChangeSteps = [
    {
      title: "Old Neural Pathways",
      description: "Current anxiety responses are well-worn 'highways' in your brain"
    },
    {
      title: "Creating New Pathways",
      description: "Each time you respond differently, you create a new 'trail' in your brain"
    },
    {
      title: "Strengthening Through Repetition",
      description: "Consistent practice turns new trails into highways"
    },
    {
      title: "Old Pathways Weaken",
      description: "Unused anxiety pathways gradually become less automatic"
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🧠</div>
        <h2 className={lessonStyles.title}>Role of Neuroplasticity</h2>
        <p className={lessonStyles.subtitle}>Your brain's amazing ability to change</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          Neuroplasticity is your brain's ability to reorganize and form new neural connections
          throughout your life. This means your current anxiety patterns aren't permanent -
          your brain can literally rewire itself through consistent exposure and practice.
        </p>
      </div>

      <SimpleInfoCard title="The Revolutionary Discovery Timeline" variant="noBorder">
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical gradient line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-gray-400 via-blue-400 to-orange-400"></div>

          <div className="space-y-12">
            {/* Timeline Item 1: 1900s */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-xs font-bold text-white">1900s</span>
                </div>
              </div>
              <div className="ml-8 bg-white border-2 border-gray-300 rounded-xl p-6 flex-1 shadow-md">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">The Old Belief</h4>
                <div className="flex items-start gap-6">
                  <Image
                    src="/images/3_Mindset/Fixed.png"
                    alt="Old belief that the brain was fixed"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                    width={96}
                    height={96}
                  />
                  <p className="text-sm text-gray-700 flex-1">
                    For over a century, scientists believed the adult brain was essentially fixed.
                    Once you reached adulthood, your brain could only decline—never improve, never form new connections.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 2: 1990s */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-xs font-bold text-white">1990s</span>
                </div>
              </div>
              <div className="ml-8 bg-white border-2 border-blue-300 rounded-xl p-6 flex-1 shadow-md">
                <h4 className="font-bold text-blue-900 mb-3 text-lg">The Breakthrough</h4>
                <div className="flex items-start gap-6">
                  <Image
                    src="/images/3_Mindset/DrMike.png"
                    alt="Dr. Michael Merzenich, pioneer of neuroplasticity research"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                    width={96}
                    height={96}
                  />
                  <p className="text-sm text-blue-900 flex-1">
                    Researchers like Dr. Michael Merzenich and Dr. Norman Doidge revolutionized neuroscience.
                    Using new brain imaging, they proved adult brains could form entirely new neural pathways throughout life.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 3: Today */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <span className="text-xs font-bold text-white">Today</span>
                </div>
              </div>
              <div className="ml-8 bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-xl p-6 flex-1 shadow-md">
                <h4 className="font-bold text-orange-900 mb-3 text-lg">The Bottom Line</h4>
                <div className="flex items-start gap-6">
                  <Image
                    src="/images/3_Mindset/Plastic.png"
                    alt="Modern understanding of neuroplasticity"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                    width={96}
                    height={96}
                  />
                  <p className="text-sm text-orange-900 flex-1">
                    <strong>Your brain is not stuck in anxiety patterns.</strong> Your anxious response patterns are simply well-traveled neural highways that can be redirected. Through targeted practice, you can build new "roads" that lead to calm, confident responses. Science has proven you can rewire your brain at any age—and anxiety recovery is one of the most well-documented applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="The Science Behind Recovery" variant="noBorder">
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <div className="space-y-1">

              {/* Step 1: Brain Changes */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Physical Brain Changes</h4>
                </div>
                <p className="text-sm text-gray-700 ml-13">
                  When you practice new responses to anxiety, your brain undergoes remarkable physical transformations. Your prefrontal cortex literally expands as it builds stronger regulatory skills, while your amygdala shrinks and becomes less reactive.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 2: Learning State */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Neuroplastic Learning State</h4>
                </div>
                <p className="text-sm text-gray-700 ml-13">
                  Your brain enters a special heightened state for learning new patterns. Production of BDNF (brain-derived neurotrophic factor) increases, acting like fertilizer for your neurons. During this phase, you'll experience enhanced focus and attention.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 3: Becomes Second Nature */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Becomes Second Nature</h4>
                </div>
                <p className="text-sm text-gray-700 ml-13">
                  Through a process called myelination, your new neural pathways develop protective sheaths that dramatically speed up signal transmission. What once required conscious effort now happens automatically.
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-1">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Step 4: Complete Transformation */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">Complete Transformation</h4>
                </div>
                <p className="text-sm text-gray-700 ml-13">
                  The final stage represents a complete shift in how you see yourself. You no longer identify as "an anxious person" but rather understand anxiety as simply a temporary experience that passes through you.
                </p>
              </div>

            </div>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="The Hidden Truth: Your Changed Self Already Exists" variant="noBorder">
        <div className="space-y-4">
          <p className="text-gray-700 text-sm">
            Right now, it probably feels impossible to imagine a version of yourself that isn't anxious.
            When you're stuck in anxiety patterns, <strong>you can't feel or sense that a changed version
            of you exists</strong>—but it absolutely does.
          </p>

          <div className="flex justify-center my-6">
            <Image
              src="/images/3_Mindset/HiddenTruth.png"
              alt="Hidden Truth visualization"
              width={500}
              height={300}
              className="rounded-lg object-contain w-full max-w-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3 text-base">Why You Can't Feel It Yet</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Anxiety creates a kind of "tunnel vision" where you can only access thoughts, feelings, and
                memories that match your current anxious state. Your calm, confident neural pathways are
                dormant—not gone, just unused. They're like muscles that haven't been exercised in years.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3 text-base">The Emergence Process</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Recovery isn't about becoming someone new—it's about rediscovering who you were before
                anxiety took over. With each small step forward, dormant neural pathways wake up, and
                you'll start glimpsing a version of yourself that feels both familiar and wonderfully different.
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 text-base">The Beliefs That Will Change</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              As you begin recovery, you'll be amazed at how many "truths" about yourself were actually
              just anxiety talking:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-medium text-red-600">Old Belief</th>
                    <th className="w-12"></th>
                    <th className="text-left py-2 px-3 font-medium text-green-600">New Understanding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-3 px-3 text-red-500">"I'm just a naturally anxious person"</td>
                    <td className="text-center text-gray-400">→</td>
                    <td className="py-3 px-3 text-green-600">"I learned anxiety, so I can unlearn it"</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-red-500">"I can't handle difficult situations"</td>
                    <td className="text-center text-gray-400">→</td>
                    <td className="py-3 px-3 text-green-600">"I'm stronger than I realized"</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-red-500">"This is just who I am"</td>
                    <td className="text-center text-gray-400">→</td>
                    <td className="py-3 px-3 text-green-600">"This is who I became, not who I have to remain"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 text-center">
            <h4 className="font-semibold text-blue-900 mb-3 text-base">Remember This</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>The calm, confident version of you isn't something you need to create—
              it's something you need to uncover.</strong> Neuroplasticity is simply the tool that helps you clear away
              the anxiety patterns that have been covering up your true self.
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Supporting Your Brain's Change">
        <p className="text-gray-600 text-sm">
          <strong>Consistency matters more than intensity:</strong> Regular, small exposures are more effective than occasional large ones<br/>
          <strong>Sleep and exercise:</strong> Support neuroplasticity with good physical health<br/>
          <strong>Patience:</strong> Give your brain time to create lasting change<br/>
          <strong>Trust the process:</strong> Change is happening even when you can&apos;t feel it yet
        </p>
      </SimpleInfoCard>

    </div>
  );
}

// Patience and Self-Compassion Sublesson Component
export function PatienceCompassionSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>💝</div>
        <h2 className={lessonStyles.title}>Patience and Self-Compassion</h2>
        <p className={lessonStyles.subtitle}>Taking a long-term, kind perspective</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          The brain rewiring process doesn't happen overnight. Just like building muscle or learning a musical instrument,
          neuroplasticity requires consistent practice over weeks and months. During this journey, you'll face a choice:
          be harsh with yourself for not changing fast enough, or practice self-compassion and allow the process to unfold naturally.
        </p>
      </div>

      <SimpleInfoCard title="The Time Will Pass Anyway" variant="noBorder">
        <div className="mb-6">
          <Image
            src="/images/3_Mindset/Compasion.png"
            alt="Self-compassion illustration"
            width={300}
            height={200}
            className="rounded-lg mx-auto object-contain"
          />
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-base">
            Six months from now, you'll be six months older whether you practice recovery or not.
          </p>

          <p className="text-base">
            The timeline for neuroplastic change stays roughly the same. Your brain needs time to rewire itself—that's biology, not a reflection of your effort or worth.
          </p>

          <p className="text-base">
            But here's what <em>you</em> get to choose: how you treat yourself during those six months.
          </p>

          <div className="pl-6 border-l-4 border-blue-400 bg-blue-50 py-4 pr-4 my-6">
            <p className="text-base italic text-gray-800">
              You can spend the next six months being patient, celebrating small wins, and treating yourself with compassion on tough days.
            </p>
            <p className="text-base italic text-gray-800 mt-3">
              Or you can spend those same six months being critical, dismissing your progress, and feeling frustrated that change isn't happening fast enough.
            </p>
          </div>

          <p className="text-base">
            Either way, the neuroplastic timeline stays the same. But your experience—how you <em>feel</em> during the journey—will be completely different.
          </p>

          <p className="text-base">
            Self-criticism doesn't speed up your recovery. In fact, it often slows it down by adding unnecessary stress to an already stressed nervous system.
          </p>

          <p className="text-base font-semibold text-gray-900 mt-6">
            The time will pass anyway. Choose kindness.
          </p>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Why Patience Matters" variant="noBorder">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="text-3xl mb-3">🧠</div>
            <h4 className="font-semibold text-gray-900 mb-2">Your brain needs time to rewire</h4>
            <p className="text-sm text-gray-700">Neuroplasticity is a gradual biological process that can't be rushed.</p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <div className="text-3xl mb-3">🚫</div>
            <h4 className="font-semibold text-gray-900 mb-2">Pressure slows progress</h4>
            <p className="text-sm text-gray-700">Self-criticism and impatience create more stress on your nervous system.</p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <div className="text-3xl mb-3">📈</div>
            <h4 className="font-semibold text-gray-900 mb-2">Small changes compound</h4>
            <p className="text-sm text-gray-700">Tiny improvements you can't feel yet add up over time into big shifts.</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
            <div className="text-3xl mb-3">🌊</div>
            <h4 className="font-semibold text-gray-900 mb-2">Recovery has phases</h4>
            <p className="text-sm text-gray-700">Some periods feel like nothing is happening, then sudden breakthroughs occur.</p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Celebrate Your Wins & Show Yourself Love" variant="noBorder">
        <div className="space-y-6">
          <p className="text-base text-gray-700 leading-relaxed">
            Recovery is a journey filled with countless small victories that often go unnoticed. Instead of waiting for
            "big" progress, learn to celebrate the tiny wins and show yourself the same love you'd give a dear friend.
          </p>

          <div className="space-y-6">
            {/* Wins Worth Celebrating */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">✨ Examples of Wins Worth Celebrating</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Noticed anxiety without immediately fighting it</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Had a difficult day but didn't give up</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Tried a coping technique, even if it didn't work perfectly</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Spoke kindly to yourself during a tough moment</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Stayed present instead of catastrophizing</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Reached out for support when you needed it</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Practiced self-care despite feeling guilty</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-gray-700">Completed a small exposure or challenge</p>
                </div>
              </div>
            </div>

            {/* Ways to Show Yourself Love */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">💝 Ways to Show Yourself Love</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Acknowledge your effort</p>
                    <p className="text-sm text-gray-600 italic">"I'm proud of myself for trying today, even when it was hard."</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Treat yourself gently</p>
                    <p className="text-sm text-gray-600">Take a warm bath, make your favorite tea, or do something that brings you comfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Celebrate small steps</p>
                    <p className="text-sm text-gray-600">Write down one thing you did well today, no matter how small.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Practice self-forgiveness</p>
                    <p className="text-sm text-gray-600 italic">"I'm human, I'm learning, and tomorrow is a new opportunity."</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-semibold text-sm mt-0.5">→</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Remember your courage</p>
                    <p className="text-sm text-gray-600">You're facing your fears head-on—that takes incredible bravery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <p className="text-base text-center text-gray-800 font-medium italic">
              "If you beat yourself up, you'll just end up beaten."
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Your Recovery Notes" variant="noBorder">
        <RecoveryNotes />
      </SimpleInfoCard>

    </div>
  );
}

// Chapter 3 Recap Sublesson Component
export function Chapter3RecapSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const { completeLesson: _completeLesson } = useProgress();
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>📚</div>
        <h2 className={lessonStyles.title}>Chapter Recap</h2>
        <p className={lessonStyles.subtitle}>Consolidating everything you've learned about the mindset for recovery</p>
      </div>

      <SimpleInfoCard title="Chapter 3 Summary: The Mindset for Recovery">
        <div className="space-y-6 text-gray-700">

          {/* Introduction */}
          <div>
            <p className="text-base leading-relaxed">
              In this chapter, you've explored the mental framework essential for anxiety recovery. You've learned that
              recovery isn't just about techniques—it's about approaching the process with the right mindset, understanding
              how your brain changes, and treating yourself with compassion throughout the journey.
            </p>
          </div>

          {/* What You Learned Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Learned</h4>
            <div className="space-y-4">

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔄 Recovery Is Nonlinear</h5>
                <p className="text-sm leading-relaxed">
                  Recovery doesn't follow a straight upward path. Instead, it comes in waves with setbacks and breakthroughs.
                  You learned to expect difficult phases followed by gradual improvement, and to view the bigger picture that
                  shows steady upward progress despite daily fluctuations. This nonlinear nature is completely normal and expected.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">💪 Tenacity: The Key Word in Recovery</h5>
                <p className="text-sm leading-relaxed">
                  You discovered that tenacity is THE most important quality for recovery success. Like a broken record,
                  you practice new responses repeatedly until they become automatic. This "overlearning" principle creates
                  lasting change through consistent repetition, even when progress feels slow or invisible.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧠 Neuroplasticity: Your Brain's Ability to Change</h5>
                <p className="text-sm leading-relaxed">
                  You learned about the revolutionary discovery of neuroplasticity—your brain's ability to rewire itself at any age.
                  The recovery process follows a clear path: physical brain changes → neuroplastic learning state → automatic responses
                  → complete identity transformation. Science has proven that anxiety recovery is not only possible but well-documented.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">✨ Your Changed Self Already Exists</h5>
                <p className="text-sm leading-relaxed">
                  Perhaps most importantly, you discovered that the calm, confident version of you already exists—it's just dormant.
                  Anxiety creates "tunnel vision" that prevents you from accessing these neural pathways. Recovery isn't about becoming
                  someone new; it's about uncovering who you were before anxiety took over and watching your beliefs naturally transform.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-4">💝 The Time Will Pass Anyway</h5>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-base">
                    Six months from now, you'll be six months older whether you practice recovery or not.
                  </p>

                  <p className="text-base">
                    The timeline for neuroplastic change stays roughly the same. Your brain needs time to rewire itself—that's biology, not a reflection of your effort or worth.
                  </p>

                  <p className="text-base">
                    But here's what <em>you</em> get to choose: how you treat yourself during those six months.
                  </p>

                  <div className="pl-6 border-l-4 border-blue-400 bg-blue-50 py-4 pr-4 my-6">
                    <p className="text-base italic text-gray-800">
                      You can spend the next six months being patient, celebrating small wins, and treating yourself with compassion on tough days.
                    </p>
                    <p className="text-base italic text-gray-800 mt-3">
                      Or you can spend those same six months being critical, dismissing your progress, and feeling frustrated that change isn't happening fast enough.
                    </p>
                  </div>

                  <p className="text-base">
                    Either way, the neuroplastic timeline stays the same. But your experience—how you <em>feel</em> during the journey—will be completely different.
                  </p>

                  <p className="text-base">
                    Self-criticism doesn't speed up your recovery. In fact, it often slows it down by adding unnecessary stress to an already stressed nervous system.
                  </p>

                  <p className="text-base font-semibold text-gray-900 mt-6">
                    The time will pass anyway. Choose kindness.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Key Takeaways */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Takeaways to Remember</h4>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <ul className="space-y-2 text-sm">
                <li>• <strong>Recovery takes time</strong> - Neuroplasticity has its own timeline that can't be rushed</li>
                <li>• <strong>Consistency beats intensity</strong> - Regular practice is more effective than occasional intense efforts</li>
                <li>• <strong>Celebrate small wins</strong> - Every tiny step forward deserves recognition and celebration</li>
                <li>• <strong>Trust the process</strong> - Change is happening even when you can't feel it yet</li>
                <li>• <strong>Be tenacious</strong> - Keep practicing new responses like a broken record until they become automatic</li>
              </ul>
            </div>
          </div>

          {/* Looking Ahead */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Next</h4>
            <p className="text-base leading-relaxed">
              You now have the foundational mindset needed for successful anxiety recovery. You understand that your brain
              can change, that setbacks are normal, and that patience and self-compassion are essential tools in the process.
              In the upcoming chapters, you'll learn the specific techniques and practical strategies to implement this mindset
              and create lasting change in your relationship with anxiety.
            </p>
          </div>

        </div>
      </SimpleInfoCard>

      <LessonCompleteButton
        chapterId={3}
        chapterTitle="Chapter 3"
        onComplete={_onComplete}
      />

    </div>
  );
}

