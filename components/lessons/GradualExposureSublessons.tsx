'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import { lessonStyles, SimpleInfoCard, SimpleStepList, LessonCompleteButton } from './shared/LessonStyleHelpers';
// Backend removed - Supabase import removed

// What Gradual Exposure Is and Why It Works
export function GradualExposureOverviewSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
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
            <source src="/videos/chapter6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

// How Exposure Works - Science and Breaking the Avoidance Cycle
export function ScienceOfExposureSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🧠</div>
        <h2 className={lessonStyles.title}>How Exposure Works</h2>
        <p className={lessonStyles.subtitle}>Understanding the science of facing your fears</p>
      </div>

      {/* The Science Behind Exposure */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">The Science Behind Exposure</h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Exposure therapy is grounded in decades of neuroscience research showing how our brains learn and unlearn
            fear responses. When you repeatedly face a feared situation and nothing catastrophic happens, your brain
            begins to update its threat assessment system.
          </p>
          <p>
            This process involves <strong>fear extinction</strong> - not erasing the original fear memory, but creating
            new, competing memories that override the old fear associations. Each successful exposure strengthens neural
            pathways that connect the trigger with safety rather than danger.
          </p>
          <p>
            The key brain regions involved include the <strong>amygdala</strong> (which triggers fear responses),
            the <strong>hippocampus</strong> (which stores memories), and the <strong>prefrontal cortex</strong> (which
            evaluates threats rationally). Through exposure, these areas learn to communicate more effectively, reducing
            false alarms.
          </p>
        </div>
      </div>

      {/* Face to Face with Anxiety Response */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-8 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Getting Face to Face with Your Anxiety Response</h3>

        <div className="flex justify-center mb-6">
          <Image
            src="/images/6_GradualExposure/Facetoface.png"
            alt="Getting Face to Face with Your Anxiety Response"
            width={400}
            height={400}
            className="max-w-xs h-auto rounded-lg"
          />
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Exposure is fundamentally about <strong>learning to offer a new pathway</strong> when your anxiety flares up.
            It's crucial to understand: <strong>exposure is not about the situation itself</strong>.
          </p>
          <p className="font-semibold text-purple-900">
            When you practice exposure, you're not trying to prove that driving over a bridge is safe, or that crowded
            spaces aren't dangerous. You're teaching your nervous system how to respond differently to the anxiety that
            arises in those situations.
          </p>
          <p>
            The situation is just the training ground. What matters is how you meet your anxiety response - with acceptance
            rather than resistance, with presence rather than avoidance. Each time you face the trigger and choose a
            different response to your anxiety, you're building new neural pathways that will become automatic over time.
          </p>
          <div className="bg-white/60 border-l-4 border-purple-500 rounded-lg p-4 mt-4">
            <p className="text-purple-900 font-medium">
              The goal isn't to eliminate anxiety in that situation. The goal is to change your relationship with the
              anxiety itself - to stop fearing your own fear response.
            </p>
          </div>
        </div>
      </div>

      {/* Why Gradual Exposure Works */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Gradual Exposure is Effective</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h4 className="text-lg font-bold text-green-900">Prevents Overwhelm</h4>
            </div>
            <p className="text-green-800 text-sm">
              By starting with manageable challenges and gradually increasing difficulty, you build confidence
              without triggering your system into complete shutdown. Small wins accumulate into major progress.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h4 className="text-lg font-bold text-green-900">Builds Mastery</h4>
            </div>
            <p className="text-green-800 text-sm">
              Each step on the ladder gives you an opportunity to practice your new response to anxiety.
              You learn that you can handle uncomfortable sensations, which builds genuine confidence for the next level.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h4 className="text-lg font-bold text-green-900">Sustainable Progress</h4>
            </div>
            <p className="text-green-800 text-sm">
              Jumping straight into your biggest fear often leads to setbacks and discouragement. The gradual
              approach ensures you're always working at the edge of your comfort zone, not drowning in overwhelm.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h4 className="text-lg font-bold text-green-900">Allows Learning</h4>
            </div>
            <p className="text-green-800 text-sm">
              Your nervous system needs time to integrate each experience. Gradual exposure gives your brain
              the repetition it needs to form new, lasting neural pathways without overwhelming your system.
            </p>
          </div>
        </div>
      </div>

      {/* Why Avoidance Keeps You Stuck */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Avoidance Keeps You Stuck</h3>

        <div className="flex justify-center mb-6">
          <Image
            src="/images/6_GradualExposure/Avoidance.png"
            alt="Why Avoidance Keeps You Stuck"
            width={400}
            height={400}
            className="max-w-xs h-auto rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Avoidance feels like the natural solution to anxiety - if something makes you anxious, don't do it.
              The problem is that avoidance actually <strong>teaches your brain that the trigger is dangerous</strong>.
            </p>
            <p>
              Every time you avoid a situation because of anxiety, you get immediate relief. But this relief comes
              at a steep cost: your brain interprets your avoidance as confirmation that there was real danger to
              escape from. This strengthens the fear response, making the next encounter even more difficult.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Avoidance Cycle */}
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-red-900 mb-4 text-center">The Avoidance Trap</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-red-800 text-sm"><strong>Trigger appears</strong> → Anxiety spikes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-red-800 text-sm"><strong>You avoid</strong> → Immediate relief</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-red-800 text-sm"><strong>Brain learns</strong> → "That was dangerous!"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-red-800 text-sm"><strong>Fear strengthens</strong> → Harder next time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exposure Cycle */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-bold text-green-900 mb-4 text-center">The Exposure Path</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-green-800 text-sm"><strong>Trigger appears</strong> → Anxiety spikes (expected)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-green-800 text-sm"><strong>You stay present</strong> → Accept sensations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-green-800 text-sm"><strong>Brain learns</strong> → "This is actually safe"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-green-800 text-sm"><strong>Fear weakens</strong> → Confidence builds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-gray-700 leading-relaxed space-y-3">
            <h4 className="font-bold text-gray-900 mb-3">The Long-term Cost of Avoidance</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Your world shrinks:</strong> Avoidance spreads to more and more situations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Fear intensifies:</strong> The anxiety grows stronger with each avoidance</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Confidence erodes:</strong> You lose faith in your ability to handle discomfort</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span><strong>Life becomes limited:</strong> You miss out on experiences, relationships, and opportunities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

// Interactive Exposure Planning with AI
export function InteractiveExposurePlanningSublesson({ onComplete }: { onComplete: () => void; isCompleted: boolean }) {
  const { user } = useAuth();
  const [userSituation, setUserSituation] = useState('');
  const [exposurePlan, setExposurePlan] = useState<{
    overview?: string;
    steps?: Array<{
      title: string;
      description: string;
      difficulty?: number;
    }>;
    tips?: string[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ type: string; message: string } | null>(null);
  const [showExamples, setShowExamples] = useState(false);
  const [previousPlans, setPreviousPlans] = useState<{id: string; fear: string; plan: string; createdAt: string; created_at?: string; user_input?: string; ai_response?: {overview?: string; steps?: Array<{title: string; description: string; difficulty?: number}>; tips?: string[]}}[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [loadingHistory, _setLoadingHistory] = useState(false);

  const exampleSituations = [
    "Public speaking or giving presentations",
    "Going to social gatherings where I don't know many people",
    "Driving on highways or in heavy traffic",
    "Flying in airplanes",
    "Job interviews or performance reviews",
    "Medical appointments or procedures",
    "Eating at restaurants alone",
    "Using public transportation",
    "Making phone calls to strangers",
    "Going to crowded places like malls or concerts"
  ];

  useEffect(() => {
    if (user) {
      loadPreviousPlans();
    }
  }, [user]);

  const loadPreviousPlans = async () => {
    if (!user) return;

    _setLoadingHistory(true);
    try {

      const response = await fetch('/api/ai/user-analyses?lesson_type=exposure_plan', {
        headers: {
          'Authorization': `Bearer ${null.access_token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setPreviousPlans(data.analyses || []);
      }
    } catch (error) {
      console.error('Error loading previous plans:', error);
    } finally {
      _setLoadingHistory(false);
    }
  };

  const handleGeneratePlan = async () => {
    if (!userSituation.trim()) {
      setError({ type: 'validation', message: 'Please describe a situation that makes you anxious.' });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
        setError({ type: 'auth_required', message: 'Please log in to use this feature.' });
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/ai/generate-exposure-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${null.access_token}`
        },
        body: JSON.stringify({
          situation: userSituation
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === 'limit_reached') {
          setError({ type: 'limit_reached', message: data.message });
          await loadPreviousPlans();
        } else if (data.error === 'auth_required') {
          setError({ type: 'auth_required', message: data.message });
        } else {
          setError({ type: 'general', message: 'Unable to generate exposure plan. Please try again.' });
        }
        return;
      }

      setExposurePlan(data.plan);
      await loadPreviousPlans();
    } catch (err) {
      setError({ type: 'general', message: 'Unable to generate exposure plan. Please try again.' });
      console.error('Error generating exposure plan:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExampleClick = (example: string) => {
    setUserSituation(example);
    setShowExamples(false);
  };

  return (
    <div className="space-y-8">
      <div className="max-w-4xl mx-auto">
        {/* Important Principles Section */}
        <div className="mb-8 space-y-6 max-w-3xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Consistency and Small Progress</h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-base text-left">
              Exposure works best when you practice <strong>consistently</strong> and make <strong>gradual, manageable progress</strong>
              toward highly feared situations. Think of it like building physical strength - you wouldn't try to lift 200 pounds
              on your first day at the gym. You start with lighter weights and gradually increase over time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base text-left">
              The same principle applies to facing anxiety triggers. Start with situations that create mild to moderate anxiety,
              practice them repeatedly until they feel more manageable, then gradually work your way up the ladder. Each small
              victory builds confidence and creates the neural foundation for the next challenge.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium text-base text-left">
              Consistency is more important than intensity. Regular practice with moderate challenges will get you further
              than occasional attempts at overwhelming situations.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
            <h4 className="font-bold text-gray-900 mb-2">⚠️ Critical Safety Note</h4>
            <p className="text-gray-700 text-sm">
              <strong>Exposure is for situations that trigger anxiety but are not actually dangerous.</strong> For example,
              if you fear car accidents, exposure means returning to normal, safe driving - NOT driving recklessly. If you have
              health anxiety, it means reducing excessive reassurance-seeking - NOT ignoring legitimate medical symptoms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">You Don't Need Perfect Structure</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              While the tool below can help you create an organized exposure plan, don't feel like you need everything
              perfectly structured before you begin. You can be unorganized, spontaneous, and flexible in your approach.
              The most important thing is that you're consistently putting yourself in situations that elicit a fear response.
              Whether you have a detailed ladder or you're just saying "yes" to opportunities that scare you, what matters
              is facing the anxiety rather than avoiding it.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Interactive Exposure Planning</h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Describe Your Anxious Situation</h4>
              <p className="text-gray-600 text-sm mb-4">
                Think of a specific situation that consistently triggers anxiety for you. The more detailed
                you can be, the better your personalized plan will be.
              </p>

              <textarea
                value={userSituation}
                onChange={(e) => setUserSituation(e.target.value)}
                placeholder="Example: I get really anxious when I have to speak up in work meetings. My heart races, I start sweating, and I worry that everyone will think I'm stupid if I say something wrong..."
                className="w-full h-32 p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none text-gray-900 bg-white"
              />

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setShowExamples(!showExamples)}
                  className="text-purple-600 text-sm hover:text-purple-700 font-medium transition-colors"
                >
                  {showExamples ? 'Hide examples' : 'Need inspiration? See examples'}
                </button>

                <button
                  onClick={handleGeneratePlan}
                  disabled={isLoading || !userSituation.trim()}
                  className={`px-8 py-3 rounded-lg font-medium transition-all ${
                    isLoading || !userSituation.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 shadow-md hover:shadow-lg'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Plan...
                    </div>
                  ) : (
                    'Generate My Exposure Plan'
                  )}
                </button>
              </div>

              {showExamples && (
                <div className="mt-4 p-4 bg-white rounded-lg border-2 border-purple-200">
                  <h4 className="font-medium text-purple-900 mb-3">Example Anxious Situations:</h4>
                  <div className="grid gap-2">
                    {exampleSituations.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => handleExampleClick(example)}
                        className="text-left text-sm text-purple-700 hover:text-purple-900 hover:bg-purple-50 p-2 rounded transition-colors"
                      >
                        • {example}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    {error.type === 'auth_required' ? 'Login Required' :
                     error.type === 'limit_reached' ? 'Daily Limit Reached' : 'Error'}
                  </h4>
                  <p className="text-red-700 text-sm">{error.message}</p>
                </div>
              )}
            </div>

            {previousPlans.length > 0 && (
              <div className="pt-4 border-t-2 border-purple-200">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="flex items-center justify-between w-full p-4 bg-white hover:bg-purple-50 rounded-lg border-2 border-purple-200 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-gray-900">Your Previous Exposure Plans</h4>
                      <p className="text-xs text-gray-600">Review your past submissions and progress</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                      {previousPlans.length}/5 used
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-purple-700">
                      {showHistory ? 'Hide' : 'Show'}
                    </span>
                    <svg
                      className={`w-5 h-5 text-purple-700 transition-transform duration-200 ${showHistory ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {showHistory && (
                  <div className="space-y-4 mt-4 animate-in slide-in-from-top-2 duration-300">
                    {previousPlans.map((plan, index) => (
                      <div key={plan.id} className="group bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 rounded-xl p-5 hover:shadow-xl hover:border-purple-300 transition-all duration-300">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                              #{previousPlans.length - index}
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-600 bg-purple-100 px-3 py-1 rounded-full">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{new Date(plan.created_at || plan.createdAt || new Date()).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4 mb-4 shadow-sm">
                          <p className="text-xs font-semibold text-purple-700 mb-2 uppercase tracking-wide">Your Situation</p>
                          <p className="text-sm text-gray-800 italic leading-relaxed">"{plan.user_input}"</p>
                        </div>

                        {plan.ai_response?.overview && (
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-purple-700 mb-2 uppercase tracking-wide">Overview</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{plan.ai_response.overview}</p>
                          </div>
                        )}

                        {plan.ai_response?.steps && plan.ai_response.steps.length > 0 && (
                          <div className="flex items-center justify-between pt-3 border-t border-purple-200">
                            <div className="flex items-center space-x-2">
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                              </svg>
                              <span className="text-xs font-bold text-purple-800">
                                {plan.ai_response.steps.length} Steps
                              </span>
                            </div>
                            <button
                              onClick={() => {
                                setExposurePlan(plan.ai_response || null);
                                setUserSituation(plan.user_input || '');
                                setShowHistory(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="flex items-center space-x-2 text-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                            >
                              <span>View Full Plan</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {exposurePlan && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200">
            <div className="text-center mb-6">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold mb-4">
                Your Personalized Exposure Plan
              </div>
            </div>

            <div className="space-y-6">
              {exposurePlan.overview && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                    <span className="text-2xl mr-2">📋</span>
                    Overview
                  </h4>
                  <p className="text-gray-700">{exposurePlan.overview}</p>
                </div>
              )}

              {exposurePlan.steps && exposurePlan.steps.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-purple-900 mb-5 flex items-center">
                    <span className="text-2xl mr-2">📝</span>
                    Step-by-Step Exposure Plan
                  </h4>
                  <div className="space-y-4">
                    {exposurePlan.steps.map((step, index: number) => (
                      <div key={index} className="border-2 border-purple-100 rounded-xl p-5 bg-gradient-to-r from-white to-purple-50 hover:shadow-md transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md ${
                            index < 3 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                            index < 6 ? 'bg-gradient-to-br from-yellow-500 to-orange-500' :
                            'bg-gradient-to-br from-red-500 to-pink-500'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-2">{step.title}</h5>
                            <p className="text-sm text-gray-700 mb-3">{step.description}</p>
                            {step.difficulty && (
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-medium text-purple-700">Difficulty:</span>
                                <div className="flex space-x-1">
                                  {[1, 2, 3, 4, 5].map((level) => (
                                    <div
                                      key={level}
                                      className={`w-3 h-3 rounded-full transition-all ${
                                        level <= (step.difficulty || 0)
                                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 shadow-sm'
                                          : 'bg-gray-200'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {exposurePlan.tips && exposurePlan.tips.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-purple-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    Important Tips for Success
                  </h4>
                  <ul className="space-y-3">
                    {exposurePlan.tips.map((tip: string, index: number) => (
                      <li key={index} className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                        <span className="text-purple-500 mt-0.5">✓</span>
                        <span className="text-sm text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                <p className="text-purple-900">
                  <strong>Remember:</strong> This plan is a starting point. Move at your own pace, and don't hesitate
                  to repeat steps multiple times before progressing. The goal is building confidence, not rushing
                  through the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

// Common Mistakes in Exposure Therapy
export function CommonMistakesSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const commonMistakes = [
    {
      mistake: "White-Knuckling Through Exposures",
      description: "Forcing yourself through situations while fighting every sensation and thought",
      icon: "✊",
      problem: "When you white-knuckle through exposure, you're essentially battling against yourself. Your nervous system registers the tension and resistance, which keeps the threat response activated. You might complete the exposure, but you're training your brain that the situation is dangerous AND requires intense effort to survive. This creates additional tension and completely misses the point of learning to coexist peacefully with anxiety.",
      solution: "Instead, use the acceptance techniques you've learned. Be curious about the sensations, allow them to exist without fighting, and imagine yourself floating through the experience. The goal is to demonstrate to your nervous system that you can be in this situation while relaxed, not prove you can tolerate maximum discomfort.",
      examples: [
        "During a social event, notice 'I'm anxious' without trying to force yourself to appear confident",
        "While driving, allow your heart to race without gripping the steering wheel tighter",
        "In a presentation, let your voice shake instead of fighting to control every word"
      ]
    },
    {
      mistake: "Going Too Fast Too Soon",
      description: "Jumping to the highest fear level without building up gradually",
      icon: "🏃‍♂️",
      problem: "Your nervous system needs time to integrate new safety information. When you jump straight to your biggest fear, you can overwhelm your system's capacity to learn. Instead of creating new neural pathways that say 'this is safe,' you might reinforce the original fear or even create additional trauma. It's like trying to run a marathon without training - your body simply isn't prepared for that level of intensity.",
      solution: "Start at manageable difficulty levels (around 4-6 out of 10 anxiety) and progress systematically as confidence builds. Each successful exposure at a lower level builds the neural foundation for the next challenge. There's no prize for rushing, and slower progress is often more stable and lasting.",
      examples: [
        "If you fear flying, start by watching plane videos, then visit an airport, then book a short flight",
        "For social anxiety, begin with small interactions like asking a cashier a question before attending large parties",
        "With driving anxiety, practice in quiet neighborhoods before attempting highways"
      ]
    },
    {
      mistake: "Using Safety Behaviors",
      description: "Bringing along 'safety nets' like phones, people, or escape plans during exposure",
      icon: "🛡️",
      problem: "Safety behaviors tell your brain 'this situation is dangerous, and I need protection.' Even if you complete the exposure, your amygdala learns 'I only survived because I had my safety net,' not 'I survived because the situation was actually safe.' This prevents genuine safety learning from occurring. You might feel temporary relief, but you're strengthening the very fear you're trying to overcome.",
      solution: "Face situations without safety behaviors to allow your brain to learn genuine safety. This doesn't mean being reckless - it means removing the unnecessary protections that prevent your nervous system from discovering it doesn't need them. The discomfort of going without safety behaviors is temporary, but the confidence you gain is lasting.",
      examples: [
        "Leave your phone at home during exposure exercises instead of keeping it 'just in case'",
        "Go to social events alone rather than always bringing a trusted friend",
        "Resist checking your pulse repeatedly when experiencing health anxiety"
      ]
    },
    {
      mistake: "Escaping When Anxiety Peaks",
      description: "Leaving the situation as soon as discomfort reaches its highest point",
      icon: "🏃‍♀️",
      problem: "Anxiety naturally rises and then falls - this is called the anxiety curve. When you escape right at the peak, you miss the crucial learning moment when anxiety would naturally decrease on its own. Your brain interprets the escape as 'I got out just in time before something terrible happened,' which reinforces the fear. You're essentially teaching yourself that the situation is so dangerous you can't even stay for the resolution.",
      solution: "Stay in the situation until anxiety naturally decreases, even if just by 20-30%. This teaches your brain that anxiety peaks and passes without anything catastrophic happening. You don't need to stay until you feel completely calm - just long enough to demonstrate that the anxiety curve completes on its own.",
      examples: [
        "In a crowded store, stay for 10-15 minutes even when panic peaks, rather than immediately rushing out",
        "During a difficult conversation, remain engaged even when you want to make an excuse to leave",
        "At a social gathering, wait until your heart rate begins to lower before departing"
      ]
    },
    {
      mistake: "Doing Exposures Only Once or Twice",
      description: "Expecting permanent change after minimal practice",
      icon: "1️⃣",
      problem: "Neural pathways require repetition to become established. A single exposure might provide temporary relief, but it doesn't create the lasting brain changes needed for recovery. Your brain needs multiple experiences of 'trigger + no danger = safe' to overwrite years of 'trigger = danger' associations. Just like you can't get physically fit from one workout, you can't rewire your fear response from one exposure.",
      solution: "Repeat exposures multiple times until they become boring and routine. You'll know you've practiced enough when the situation shifts from 'scary challenge' to 'mild annoyance' to 'no big deal.' Some situations might need 5-10 repetitions, others might need 20-30. The number matters less than continuing until your nervous system genuinely stops reacting.",
      examples: [
        "Practice the same driving route multiple times per week, not just once when you 'have to'",
        "Attend social events regularly, not just one to 'prove you can do it'",
        "Make multiple phone calls to strangers, not just a single successful call"
      ]
    },
    {
      mistake: "Focusing Only on External Control",
      description: "Trying to eliminate all anxiety symptoms or control external outcomes",
      icon: "🎛️",
      problem: "When you focus on eliminating anxiety or controlling external outcomes, you're still operating from a place of fear. You're essentially saying 'anxiety is dangerous and must be stopped' or 'things must go perfectly or I've failed.' This keeps your threat system activated because you're treating anxiety itself as the enemy. You might temporarily succeed in controlling some symptoms, but you're reinforcing the fundamental belief that anxiety is something to be feared.",
      solution: "Shift your focus to using techniques that change your internal relationship with anxiety. The goal isn't to feel no anxiety - it's to practice observing, accepting, and allowing anxiety while still engaging with the situation. Success is measured by your ability to use your skills, not by the absence of symptoms or perfect external outcomes.",
      examples: [
        "Instead of 'I need to stop my heart racing,' try 'I can notice my heart racing and continue speaking'",
        "Rather than 'Everyone must think I'm confident,' focus on 'I can observe my anxious thoughts without believing them'",
        "Replace 'Nothing can go wrong' with 'I can handle whatever arises using my acceptance techniques'"
      ]
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>⚠️</div>
        <h2 className={lessonStyles.title}>Common Exposure Mistakes</h2>
        <p className={lessonStyles.subtitle}>What to avoid for effective, healing exposure work</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          Exposure therapy is incredibly powerful when done correctly, but common mistakes can make it
          ineffective or even counterproductive. The key is remembering that <strong>exposure is about
          reshaping your relationship with anxiety, not eliminating it or controlling external outcomes.</strong>
        </p>

        <p>
          Your goal isn't to feel no anxiety - it's to use the techniques you've learned (observation,
          acceptance, allowing) while anxiety is present. This internal shift is what creates lasting change.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">The 6 Most Common Mistakes</h3>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Understanding these mistakes can save you months of ineffective practice and help you
          approach exposure work with the right mindset.
        </p>

        <div className="space-y-4">
          {commonMistakes.map((item, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => setSelectedSection(selectedSection === `mistake-${index}` ? null : `mistake-${index}`)}
                className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Mistake #{index + 1}: {item.mistake}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">
                    {selectedSection === `mistake-${index}` ? '−' : '+'}
                  </div>
                </div>
              </button>

              {selectedSection === `mistake-${index}` && (
                <div className="px-6 pb-6 pt-2 space-y-4 border-t border-gray-200">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h5 className="font-bold text-gray-900 mb-2">❌ Why This Doesn't Work</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.problem}</p>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <h5 className="font-bold text-gray-900 mb-2">✅ What to Do Instead</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.solution}</p>
                  </div>

                  {item.examples && (
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h5 className="font-bold text-gray-900 mb-2">💡 Examples</h5>
                      <ul className="space-y-2">
                        {item.examples.map((example, exIdx) => (
                          <li key={exIdx} className="text-gray-700 text-sm flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Focus on Your Internal Toolkit</h3>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          During exposure, shift your focus from external control to using your internal skills. You have powerful
          tools from previous chapters - exposure is the perfect time to practice them.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* External Focus */}
          <div className="border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✕
              </div>
              <h4 className="text-lg font-bold text-gray-900">External Focus</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4 italic">Trying to control outcomes and eliminate anxiety</p>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>"I need to feel no anxiety"</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>"I must control the situation perfectly"</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>"Everyone must think I'm confident"</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-red-500 mr-2 mt-1">•</span>
                <span>"Nothing can go wrong"</span>
              </li>
            </ul>
          </div>

          {/* Internal Focus */}
          <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ✓
              </div>
              <h4 className="text-lg font-bold text-gray-900">Internal Focus</h4>
            </div>
            <p className="text-sm text-gray-600 mb-4 italic">Using your toolkit to change your relationship with anxiety</p>
            <ul className="space-y-2">
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>"I can observe my anxious thoughts without believing them"</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>"I can accept physical sensations while staying present"</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>"I can be the Master Observer during this experience"</span>
              </li>
              <li className="text-gray-700 text-sm flex items-start">
                <span className="text-green-500 mr-2 mt-1">•</span>
                <span>"I can float through whatever anxiety arises"</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Toolkit Section */}
        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Your Internal Toolkit</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <div className="text-2xl mb-2">👁️</div>
              <h5 className="font-bold text-gray-900 mb-1">Master Observer</h5>
              <p className="text-sm text-gray-700">Watch your thoughts and sensations without getting caught up in them</p>
            </div>

            <div className="border-l-4 border-pink-400 pl-4">
              <div className="text-2xl mb-2">🤗</div>
              <h5 className="font-bold text-gray-900 mb-1">Sensation Acceptance</h5>
              <p className="text-sm text-gray-700">Be curious, allow sensations to exist, float through the storm</p>
            </div>

            <div className="border-l-4 border-purple-400 pl-4">
              <div className="text-2xl mb-2">🧠</div>
              <h5 className="font-bold text-gray-900 mb-1">Thought Work</h5>
              <p className="text-sm text-gray-700">Recognize Scout's warnings without taking them as gospel truth</p>
            </div>

            <div className="border-l-4 border-orange-400 pl-4">
              <div className="text-2xl mb-2">🌀</div>
              <h5 className="font-bold text-gray-900 mb-1">Do Less, Not More</h5>
              <p className="text-sm text-gray-700">Stop spiraling, analyzing, and problem-solving - just be present with what is</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-l-4 border-purple-500 bg-purple-50 rounded-lg p-6 mb-8">
        <h4 className="text-xl font-bold text-gray-900 mb-3">Remember: It's About the Relationship</h4>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Exposure changes your internal experience, not external reality.</strong> The goal isn't to
          eliminate all anxiety or control every outcome. The goal is to practice relating differently to anxiety
          when it shows up.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When you can observe, accept, and float through anxious experiences while still engaging with life,
          you've achieved the real victory.
        </p>
      </div>

    </div>
  );
}

// Moving Away From Coping Sublesson Component
export function MovingAwayFromCopingSublesson({ onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const [selectedCopingMethods, setSelectedCopingMethods] = useState<string[]>([]);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [commitments, setCommitments] = useState<{[key: string]: string}>({});

  const copingMethods = [
    {
      id: 'avoidance',
      label: 'Avoidance',
      description: 'Avoiding situations, people, or places that trigger anxiety',
      examples: ['Not going to social events', 'Avoiding phone calls', 'Skipping challenging situations']
    },
    {
      id: 'checking',
      label: 'Checking Behaviors',
      description: 'Repeatedly checking things to reduce anxiety',
      examples: ['Checking locks multiple times', 'Rereading emails before sending', 'Asking for constant reassurance']
    },
    {
      id: 'mental-rituals',
      label: 'Mental Rituals',
      description: 'Mental behaviors used to neutralize anxious thoughts',
      examples: ['Counting or repeating phrases', 'Mental reviewing', 'Trying to think "good" thoughts']
    },
    {
      id: 'reassurance-seeking',
      label: 'Reassurance Seeking',
      description: 'Constantly asking others for validation or comfort',
      examples: ['Asking "Am I okay?" repeatedly', 'Seeking constant approval', 'Research spirals online']
    },
    {
      id: 'perfectionism',
      label: 'Perfectionism',
      description: 'Setting impossibly high standards to prevent criticism',
      examples: ['Spending hours on simple tasks', 'Redoing work unnecessarily', 'Procrastinating from fear of imperfection']
    },
    {
      id: 'control',
      label: 'Over-Control',
      description: 'Trying to control every aspect of situations',
      examples: ['Micro-managing others', 'Over-planning every detail', 'Inability to delegate']
    }
  ];

  const phases = [
    { title: "Identify Your Coping", description: "Which coping strategies do you recognize in yourself?" },
    { title: "Understand the Cost", description: "How are these coping methods limiting your life?" },
    { title: "Make the Shift", description: "Commit to moving from coping to truly living" }
  ];

  const toggleCopingMethod = (methodId: string) => {
    setSelectedCopingMethods(prev =>
      prev.includes(methodId)
        ? prev.filter(id => id !== methodId)
        : [...prev, methodId]
    );
  };

  const nextPhase = () => {
    if (currentPhase < phases.length - 1) {
      setCurrentPhase(currentPhase + 1);
    }
  };

  const prevPhase = () => {
    if (currentPhase > 0) {
      setCurrentPhase(currentPhase - 1);
    }
  };

  const handleCommitmentChange = (methodId: string, commitment: string) => {
    setCommitments(prev => ({
      ...prev,
      [methodId]: commitment
    }));
  };

  const selectedMethods = copingMethods.filter(method => selectedCopingMethods.includes(method.id));

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Moving Away From Coping</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Coping strategies might provide temporary relief, but they often keep you stuck.
            It's time to move from surviving to thriving.
          </p>

          <div className="flex justify-center space-x-2 mt-6">
            {phases.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  index === currentPhase ? 'bg-teal-600' :
                  index < currentPhase ? 'bg-green-500' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">🛡️ Coping (Surviving)</h3>
              <ul className="space-y-2 text-teal-100">
                <li>• Short-term relief</li>
                <li>• Restricts your life</li>
                <li>• Maintains fear</li>
                <li>• Temporary solutions</li>
                <li>• Keeps you small</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">🌟 Living (Thriving)</h3>
              <ul className="space-y-2 text-cyan-100">
                <li>• Long-term growth</li>
                <li>• Expands your life</li>
                <li>• Builds confidence</li>
                <li>• Permanent change</li>
                <li>• Helps you flourish</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Phase {currentPhase + 1}: {phases[currentPhase].title}
          </h3>
          <p className="text-gray-600 mb-6">{phases[currentPhase].description}</p>

          {currentPhase === 0 && (
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">
                Select the coping strategies you recognize in yourself. Be honest - this is how we grow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {copingMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => toggleCopingMethod(method.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedCopingMethods.includes(method.id)
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 bg-white hover:border-teal-300'
                    }`}
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{method.label}</h4>
                    <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                    <div className="text-xs text-gray-500">
                      <p className="font-medium mb-1">Examples:</p>
                      <ul className="space-y-1">
                        {method.examples.map((example, index) => (
                          <li key={index}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPhase === 1 && (
            <div className="space-y-6">
              {selectedMethods.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Please go back and select at least one coping method to continue.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-gray-700">
                    For each coping strategy you selected, reflect on how it might be limiting your life:
                  </p>

                  {selectedMethods.map((method) => (
                    <div key={method.id} className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-semibold text-red-900 mb-3">{method.label}</h4>

                      <div className="space-y-3">
                        <div className="bg-white rounded p-3">
                          <p className="font-medium text-gray-700 mb-2">The Hidden Costs:</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Prevents you from building genuine confidence</li>
                            <li>• Restricts your experiences and relationships</li>
                            <li>• Reinforces the belief that you can't handle anxiety</li>
                            <li>• Keeps you dependent on external validation</li>
                            <li>• Maintains a smaller, more limited life</li>
                          </ul>
                        </div>

                        <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                          <p className="text-yellow-800 font-medium text-sm">
                            💡 Remember: These strategies made sense at the time, but now they're holding you back from the full life you deserve.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentPhase === 2 && (
            <div className="space-y-6">
              {selectedMethods.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Please go back and select at least one coping method to continue.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-gray-700 mb-6">
                    For each coping strategy, write a specific commitment to move away from it:
                  </p>

                  {selectedMethods.map((method) => (
                    <div key={method.id} className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-3">{method.label}</h4>

                      <div className="space-y-3">
                        <label className="block text-gray-700 font-medium">
                          My commitment to moving away from this coping strategy:
                        </label>
                        <textarea
                          value={commitments[method.id] || ''}
                          onChange={(e) => handleCommitmentChange(method.id, e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                          rows={3}
                          placeholder={`Instead of ${method.label.toLowerCase()}, I will...`}
                        />

                        <div className="bg-teal-50 border border-teal-200 rounded p-3">
                          <p className="text-teal-800 font-medium text-sm mb-2">
                            🎯 Make it specific and actionable:
                          </p>
                          <ul className="text-teal-700 text-xs space-y-1">
                            <li>• What will you do differently?</li>
                            <li>• How will you catch yourself using this strategy?</li>
                            <li>• What new behavior will you try instead?</li>
                            <li>• How will you handle the discomfort?</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevPhase}
            disabled={currentPhase === 0}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
          >
            Previous
          </button>

          {currentPhase === phases.length - 1 ? (
            <button
              onClick={onComplete}
              disabled={selectedMethods.length === 0 || selectedMethods.some(method => !commitments[method.id]?.trim())}
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all font-semibold disabled:opacity-50"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={nextPhase}
              disabled={currentPhase === 0 && selectedCopingMethods.length === 0}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50"
            >
              Next Phase
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Chapter 6 Recap Sublesson Component
export function Chapter6RecapSublesson({ onComplete }: { onComplete: () => void }) {
  const { completeLesson: _completeLesson } = useProgress();
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>📚</div>
        <h2 className={lessonStyles.title}>Chapter Recap</h2>
        <p className={lessonStyles.subtitle}>Consolidating everything you've learned about gradual exposure</p>
      </div>

      <SimpleInfoCard title="Chapter 6 Summary: Mastering Gradual Exposure Therapy" variant="noBorder">
        <div className="space-y-6 text-gray-700">

          {/* Introduction */}
          <div>
            <p className="text-base leading-relaxed">
              In this chapter, you've learned the most powerful tool for anxiety recovery: gradual exposure therapy.
              You now understand not just how to face your fears, but why this approach works at a neurological level
              and how to do it effectively while avoiding common pitfalls.
            </p>
          </div>

          {/* What You Learned Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Learned</h4>
            <div className="space-y-4">

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧠 How Exposure Works at the Neural Level</h5>
                <p className="text-sm leading-relaxed">
                  Exposure therapy isn't about "toughening up" - it's a precise, evidence-based process that rewires your brain.
                  Through repeated safe encounters with feared situations, your brain creates new safety memories that compete with
                  and eventually override old fear associations. This process involves neuroplasticity, memory reconsolidation,
                  and the formation of new neural pathways that recognize what's actually dangerous versus what only feels dangerous.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔄 Breaking the Avoidance Cycle</h5>
                <p className="text-sm leading-relaxed">
                  You've learned why avoidance feels helpful in the moment but actually strengthens anxiety over time. Each time you
                  avoid a feared situation, your brain learns "that was dangerous!" and the fear grows stronger. Exposure breaks this
                  cycle by proving to your brain through direct experience that the situation is actually safe, leading to lasting
                  confidence rather than temporary relief.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🎯 Your Personalized Exposure Plan</h5>
                <p className="text-sm leading-relaxed">
                  Using our AI-powered planning tool, you created a customized, step-by-step exposure plan tailored to your specific
                  fears and triggers. This plan follows evidence-based principles: starting with manageable challenges, progressing
                  gradually as confidence builds, and including specific tips for success. Remember, this plan is your roadmap, but
                  you control the pace - repeat steps as needed before advancing.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">⚠️ Avoiding Common Exposure Mistakes</h5>
                <p className="text-sm leading-relaxed">
                  You've learned the six most common exposure mistakes: white-knuckling through situations, going too fast too soon,
                  using safety behaviors, escaping when anxiety peaks, doing exposures only once or twice, and focusing on external
                  control rather than internal skill-building. Most importantly, you understand that the goal isn't to eliminate
                  anxiety but to practice relating differently to it using your Master Observer and acceptance techniques.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">💪 Handling Setbacks with Self-Compassion</h5>
                <p className="text-sm leading-relaxed">
                  Recovery isn't linear, and setbacks are a normal part of the process. You've learned that difficult days don't erase
                  your progress - they're waves that will pass. The strongest growth often happens during challenging moments when you
                  choose to use your techniques anyway. Self-compassion accelerates recovery far more than self-criticism, creating
                  the emotional safety needed for genuine healing.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🌟 Moving Beyond Coping to Growth</h5>
                <p className="text-sm leading-relaxed">
                  You've learned to shift from survival-mode coping strategies to growth-oriented approaches. Traditional coping
                  methods like avoidance, checking behaviors, and reassurance-seeking provide temporary relief but keep you stuck.
                  Instead of just "getting through" anxious moments, you now understand how to use them as opportunities to practice
                  new skills and build long-term resilience. Moving from coping to truly living means expanding your life rather
                  than restricting it.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧰 Using Your Full Toolkit</h5>
                <p className="text-sm leading-relaxed">
                  Exposure is the perfect opportunity to practice all the techniques you've learned: Master Observer skills to watch
                  your thoughts without being consumed by them, sensation acceptance methods to float through physical discomfort,
                  and thought work skills to recognize Scout's warnings without taking them as gospel truth. You now understand that
                  exposure is about practicing these internal skills, not controlling external outcomes.
                </p>
              </div>

            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Key Takeaways</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Exposure rewires your brain</strong> - it creates new safety memories that override old fear patterns through neuroplasticity</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Avoidance strengthens fear</strong> - temporary relief comes at the cost of long-term confidence and freedom</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Focus on your internal relationship</strong> - practice your techniques during exposure rather than trying to control anxiety levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Setbacks are normal</strong> - they're part of the process, not evidence that you're failing or the methods don't work</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Self-compassion accelerates progress</strong> - being kind to yourself during difficult moments creates the conditions for healing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Gradual progression is key</strong> - start manageable, build confidence systematically, and repeat steps as needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Move from coping to thriving</strong> - shift from survival strategies to growth-oriented approaches that expand your life</span>
              </li>
            </ul>
          </div>

          {/* The Bigger Picture */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🌍 The Bigger Picture</h4>
            <p className="text-base leading-relaxed">
              Gradual exposure is more than just a technique - it's a philosophy of living courageously. Every time you face a fear,
              you're proving to yourself that you can handle discomfort and uncertainty. This builds not just specific confidence
              in particular situations, but a general sense of resilience and self-efficacy. You're training yourself to move toward
              what matters to you, even when anxiety is present. This is the foundation of a rich, meaningful life.
            </p>
          </div>

          {/* Moving Forward */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🚀 Moving Forward</h4>
            <p className="text-base leading-relaxed mb-4">
              You now have all the core skills needed for anxiety recovery: understanding your mind, managing thoughts, accepting
              sensations, and systematically facing fears. In the final chapter, "Beyond This Course," you'll learn about:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Continuing your growth beyond the structured course content</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Additional resources and reading for deeper understanding</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>How to share your experience and help others on their journey</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Embracing your unique path and discovering what you're truly capable of</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>A personal message about finding your passion and living fully</span>
              </li>
            </ul>
          </div>

          {/* Final Reflection */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">💭 Reflection</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              You've completed the most challenging part of this course. Learning to face your fears systematically takes real courage,
              and you've shown that you have what it takes. The tools you've learned - observation, acceptance, and gradual exposure -
              aren't just for managing anxiety. They're life skills that will serve you in every area: relationships, career, personal
              growth, and pursuing your dreams. You're not just recovering from anxiety; you're building a foundation for a life of
              courage and authenticity.
            </p>
          </div>

        </div>
      </SimpleInfoCard>

      <LessonCompleteButton
        chapterId={6}
        chapterTitle="Chapter 6"
        onComplete={onComplete}
      />

    </div>
  );
}

