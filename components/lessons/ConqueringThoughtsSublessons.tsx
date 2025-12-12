'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ObserverTechniquesSlideshow } from './ObserverTechniquesSlideshow';
import { MeditationPractice } from './MeditationPractice';
import { InteractiveThoughtObserver } from './InteractiveThoughtObserver';
import { lessonStyles, SimpleInfoCard, LessonCompleteButton } from './shared/LessonStyleHelpers';
import { useProgress } from '../../context/ProgressContext';

// Overview Sublesson Component for Conquering Your Thoughts
export function ConqueringThoughtsOverviewSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
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
            <source src="/videos/Chapter4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

// Thoughts vs. Thinking Sublesson Component
export function HowThoughtsWorkSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>💭</div>
        <h2 className={lessonStyles.title}>Thoughts vs. Thinking</h2>
        <p className={lessonStyles.subtitle}>Understanding the crucial difference that changes everything</p>
      </div>

      <div className={lessonStyles.content}>
        <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 mb-6">
          <p className="text-blue-900 font-semibold text-base">
            Here's the fundamental distinction that changes everything:
            <strong> thoughts are automatic and uncontrollable</strong> - they simply appear in your mind whether you want them or not.
            But <strong>thinking is something we can learn to control and choose to do</strong>.
          </p>
        </div>

        <p>
          Understanding this difference is the first step toward freedom from anxious thoughts.
        </p>
      </div>

      <SimpleInfoCard title="What Are Thoughts?" variant="noBorder">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/4_Thoughts/Thought.png"
            alt="Visual representation of what thoughts are"
            className="w-64 h-52 object-contain rounded-lg"
            width={256}
            height={208}
          />
        </div>

        <p className="mb-4 text-gray-700">
          <strong>Thoughts are automatic, fast, and constant mental events</strong> that occur in your mind
          throughout the day without your control or permission. They're like bubbles rising to the surface
          of your consciousness - sudden, unexpected, and unstoppable.
        </p>

        <h4 className="font-semibold text-gray-900 mb-4">The Nature of Thoughts:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <span className="text-3xl">⚡</span>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Automatic</p>
              <p className="text-gray-700">Appear instantly without your choice or effort - you don't decide what thoughts to have</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <span className="text-3xl">🏃</span>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Fast</p>
              <p className="text-gray-700">Pop up in milliseconds, faster than you can control or stop them</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <span className="text-3xl">🔄</span>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Constant</p>
              <p className="text-gray-700">Your mind produces thousands of thoughts throughout the day</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <span className="text-3xl">🌊</span>
            <div>
              <p className="font-semibold text-gray-900 text-lg">Unstoppable</p>
              <p className="text-gray-700">Flow like a stream - you can't turn them off or make them stop</p>
            </div>
          </div>
        </div>

        <h4 className="font-semibold text-gray-900 mb-4 mt-6">Common Anxious Thoughts:</h4>
        <div className="grid md:grid-cols-2 gap-3">
          <p className="text-gray-700 italic bg-gray-50 rounded p-3">"What if I mess up?"</p>
          <p className="text-gray-700 italic bg-gray-50 rounded p-3">"I'm not good enough"</p>
          <p className="text-gray-700 italic bg-gray-50 rounded p-3">"Something bad will happen"</p>
          <p className="text-gray-700 italic bg-gray-50 rounded p-3">"I can't handle this"</p>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Thinking and Emotions - Your Response to Thoughts" variant="noBorder">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/4_Thoughts/Thinking.png"
            alt="Visual representation of thinking and emotions"
            className="w-64 h-52 object-contain rounded-lg"
            width={256}
            height={208}
          />
        </div>

        <p className="mb-4 text-gray-700">
          <strong>Thinking and emotions</strong> are your responses to the automatic thoughts that appear.
          While they seem automatic at first, you can learn to separate them through action and recognize
          the gap between thought and response.
        </p>

        <h4 className="font-semibold text-gray-900 mb-4 mt-6">At First, They Feel Automatic</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center p-4 bg-orange-50 rounded-lg">
            <h5 className="font-semibold text-orange-900 text-base mb-2">Thinking</h5>
            <p className="text-sm text-orange-700">You immediately analyze, worry, and problem-solve the scary thought</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-orange-50 rounded-lg">
            <h5 className="font-semibold text-orange-900 text-base mb-2">Emotions</h5>
            <p className="text-sm text-orange-700">Fear, anxiety, and panic seem to happen instantly with the thought</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-orange-50 rounded-lg">
            <h5 className="font-semibold text-orange-900 text-base mb-2">The Chain</h5>
            <p className="text-sm text-orange-700">Thought → Automatic thinking → Automatic emotions → Anxiety spiral</p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Understanding the Dynamic" variant="noBorder">

            <p className="text-xl text-gray-600 text-left md:text-center mb-8 leading-relaxed">
              <strong>Here's the crucial dynamic:</strong> When you respond to thoughts with strong fear or treat them as extremely important,
              Scout (your mind's threat detector) learns that these thoughts are <em>significant</em> and will keep replaying them to "protect" you.
            </p>

            {/* The Reinforcement Cycle */}
            <div className="bg-white rounded-xl p-8 mb-8">
              <h4 className="font-semibold text-green-900 mb-6 text-center text-xl">
                The Reinforcement Cycle
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg flex-1">
                  <h5 className="font-semibold text-green-900 text-lg mb-2">Thought Appears</h5>
                  <p className="text-green-700">"What if something bad happens?"</p>
                </div>

                <div className="text-green-600 text-3xl font-bold rotate-90 md:rotate-0">→</div>

                <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg flex-1">
                  <h5 className="font-semibold text-green-900 text-lg mb-2">Strong Reaction</h5>
                  <p className="text-green-700">Fear, analysis, worry, importance given to the thought</p>
                </div>

                <div className="text-green-600 text-3xl font-bold rotate-90 md:rotate-0">→</div>

                <div className="flex flex-col items-center text-center p-4 bg-green-50 rounded-lg flex-1">
                  <h5 className="font-semibold text-green-900 text-lg mb-2">Scout's Response</h5>
                  <p className="text-green-700">"This must be important! I'll keep sending this thought."</p>
                </div>
              </div>

              {/* Cycle back arrow */}
              <div className="flex justify-center mt-4">
                <div className="text-green-600 text-2xl font-bold">↻ Cycle repeats</div>
              </div>
            </div>

            {/* The Solution: Breaking the Cycle */}
            <div className="bg-white rounded-xl p-8 border-t-4 border-blue-500">
              <h4 className="font-semibold text-gray-900 mb-6 text-center text-2xl">
                Breaking the Cycle
              </h4>

              <div className="flex justify-center mb-6">
                <Image
                  src="/images/4_Thoughts/breaking.png"
                  alt="Breaking the cycle"
                  width={300}
                  height={200}
                  className="rounded-lg object-contain"
                />
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base">
                  The key to freedom from anxious thoughts isn't to stop having them—that's impossible. Instead, it's learning to
                  <strong className="text-gray-900"> change how you respond</strong> when they appear.
                </p>

                <p className="text-base">
                  Remember the reinforcement cycle: when you respond to a thought with strong fear, worry, or importance,
                  Scout interprets that reaction as confirmation that the thought is genuinely dangerous. He thinks,
                  "This human is terrified—I must keep sending this warning!" So he replays the thought over and over,
                  trying to protect you from what he perceives as a real threat.
                </p>

                <p className="text-base">
                  But here's the powerful truth: <strong className="text-gray-900">you can teach Scout differently</strong>.
                  When an anxious thought appears and you respond with calm non-engagement—not fighting it, not analyzing it,
                  not giving it special importance—Scout receives a completely different message. Your calm response tells him,
                  "This isn't actually dangerous. No need to keep sending this one."
                </p>

                <p className="text-base">
                  This doesn't happen instantly. Scout needs consistent evidence that these thoughts truly aren't threats.
                  But with practice, when you repeatedly respond to anxious thoughts with calm awareness instead of fear and worry,
                  Scout gradually learns to stop flagging them as urgent. The thoughts lose their power, appear less frequently,
                  and eventually fade into the background.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 pl-6 py-4 my-6">
                  <p className="text-base italic text-gray-800">
                    The cycle breaks when you stop reacting with fear. Calm non-engagement teaches your brain that these thoughts
                    don't deserve the alarm bells—and slowly, quietly, the alarm bells stop ringing.
                  </p>
                </div>

                <p className="text-base">
                  In the next lesson, you'll learn specific, practical techniques to cultivate this calm non-engagement.
                  You'll discover how to observe thoughts without reacting to them, creating space between the thought and your response—the
                  space where your freedom lives.
                </p>
              </div>
            </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <h5 className="font-semibold text-gray-900 mb-4 text-center text-lg">Two Different Messages to Scout</h5>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-400 rounded p-4">
              <p className="text-sm font-semibold text-red-900 mb-2">Strong Reaction:</p>
              <p className="text-sm text-red-800 italic">"These thoughts are dangerous and important—keep sending them!"</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 rounded p-4">
              <p className="text-sm font-semibold text-green-900 mb-2">Calm Non-Engagement:</p>
              <p className="text-sm text-green-800 italic">"These thoughts aren't threats—no need to keep sending them."</p>
            </div>
          </div>
        </div>

        {/* Viktor Frankl Quote - Moved to bottom */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="text-center">
            <div className="mb-6">
              <Image
                src="/images/4_Thoughts/frankl.png"
                alt="Viktor Frankl"
                width={200}
                height={200}
                className="rounded-lg mx-auto object-contain"
              />
            </div>
            <blockquote className="text-lg text-gray-800 italic mb-4 leading-relaxed">
              "Between stimulus and response there is a space. In that space is our power to choose our response.
              In our response lies our growth and our freedom."
            </blockquote>
            <cite className="text-gray-600 font-medium">— Viktor Frankl</cite>
          </div>
        </div>
      </SimpleInfoCard>

    </div>
  );
}

// Scout Metaphor Sublesson Component
export function ScoutMetaphorSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const [_selectedSection, _setSelectedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Introducing Scout
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Your internal threat-detection system
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            Scout represents the real part of your brain that creates anxious thoughts. He lives in your limbic system
            and genuinely believes he's protecting you by throwing scary thoughts your way.
          </p>
        </div>

        {/* Main Scout Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            {/* Main Scout Image - Larger */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/images/Home/Scout.png"
                  alt="Scout - Your internal threat detector"
                  className="w-80 h-64 md:w-96 md:h-80 object-contain"
                  width={384}
                  height={320}
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-100 rounded-full p-4">
                  <span className="text-3xl">🧠</span>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                Meet Scout - the anxious part of your mind that lives inside everyone.
                Scout isn't your enemy; he's actually trying to protect you.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">What Scout Does</h3>
                  <p className="text-blue-800">
                    Scout is your internal early warning system, constantly scanning for
                    potential threats and dangers. He's been with you since childhood,
                    working tirelessly to keep you safe.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">The Problem</h3>
                  <p className="text-orange-800">
                    Scout's job is to throw scary thoughts and warnings at you about
                    things you might need to be careful about. This is how he tries
                    to protect you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thought Thrower Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Scout's Role: The Thought Thrower
            </h2>

            {/* Scared Image - Larger */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/images/4_Thoughts/Scared.png"
                  alt="Scout throwing scary thoughts"
                  className="w-80 h-64 md:w-96 md:h-80 object-contain"
                  width={384}
                  height={320}
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-100 rounded-full p-4">
                  <span className="text-3xl">💭</span>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                <strong>Scout's primary responsibility is throwing scary thoughts your way.</strong>
                These aren't random thoughts - Scout carefully selects thoughts designed to get
                your attention and keep you vigilant about potential threats.
              </p>

              {/* Thought Arsenal */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <span className="text-3xl mr-3">🎯</span>
                  Scout's Thought Arsenal
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-gray-700 font-medium">"What if something bad happens?"</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-gray-700 font-medium">"You need to worry about this situation"</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-gray-700 font-medium">"This could be dangerous - be careful!"</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                    <p className="text-gray-700 font-medium">"Something terrible might occur"</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-900 mb-3">The Misunderstanding</h3>
                  <p className="text-lg text-yellow-800 leading-relaxed">
                    Scout doesn't understand that most of these "threats" aren't actually dangerous.
                    A job interview, social gathering, or health symptom triggers the same alarm system
                    that would activate if you encountered a real physical danger.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retraining Scout Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Retraining Scout
            </h2>

            {/* Chill Image - Larger */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/images/4_Thoughts/Chill.png"
                  alt="Scout learning to relax"
                  className="w-80 h-64 md:w-96 md:h-80 object-contain"
                  width={384}
                  height={320}
                />
                <div className="absolute -bottom-4 -right-4 bg-green-100 rounded-full p-4">
                  <span className="text-3xl">😌</span>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                <strong>Here's the good news:</strong> Scout can learn to relax. Through consistent action and
                practice, you'll teach Scout that most situations aren't actually dangerous.
              </p>

              {/* Action Steps */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                  <span className="text-3xl mr-3">🎯</span>
                  How We'll Retrain Scout
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white rounded-xl p-6 border border-green-100">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                      <span className="text-2xl mr-2">💪</span>
                      Take Action Despite Fear
                    </h4>
                    <p className="text-green-800">
                      When Scout throws scary thoughts, you'll take action anyway. Each time you do this,
                      Scout learns the situation wasn't actually dangerous.
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-green-100">
                    <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                      <span className="text-2xl mr-2">🧘</span>
                      Scout Learns to Chill
                    </h4>
                    <p className="text-green-800">
                      Over time, Scout realizes his warnings were false alarms. He gradually becomes
                      less reactive and starts to trust your judgment more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">The Transformation</h3>
                  <p className="text-lg text-blue-800 leading-relaxed">
                    As you consistently show Scout through your actions that you can handle challenging situations,
                    he'll stop throwing so many scary thoughts your way. Scout will finally be able to relax,
                    and so will you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Master Observer Sublesson Component
export function MasterObserverSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const [_slideshowCompleted, _setSlideshowCompleted] = useState(false);

  const handleSlideshowComplete = () => {
    _setSlideshowCompleted(true);
  };

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>👁️</div>
        <h2 className={lessonStyles.title}>The Master Observer</h2>
        <p className={lessonStyles.subtitle}>Learning to watch your thoughts without reacting</p>
      </div>

      <SimpleInfoCard title="Understanding Mindfulness & The Observer" variant="noBorder">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/4_Thoughts/Milky%20(1).png"
            alt="Milky Way galaxy illustrating the observer perspective"
            className="w-full h-64 md:h-80 object-cover rounded-lg"
            width={600}
            height={256}
          />
        </div>

        <div className={lessonStyles.content}>
          <p>
            <strong>Mindfulness</strong> is the practice of observing your thoughts, emotions, and sensations
            without automatically reacting to them. Instead of being swept away by every anxious thought,
            you learn to step back and simply <em>watch</em> what's happening in your mind.
          </p>

          <p>
            Think about this: you live inside the Milky Way galaxy, yet you can see and study the Milky Way.
            How is this possible? You can observe the whole because you have the ability to step back and
            take a broader perspective, even while being part of it.
          </p>

          <p>
            <strong>Your mind works the same way.</strong> You are having thoughts, emotions, and sensations,
            yet you can observe them happening. You can watch your mind worry, notice anxiety arising,
            and observe thoughts coming and going - all without getting pulled into the drama.
          </p>

          <p>
            This observer part of you - the one that can watch your own experience - is always calm,
            always present, and never anxious. It's like the sky that remains peaceful whether there
            are storms or clear weather. The thoughts and emotions are the weather, but you are the sky.
          </p>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Becoming the Master Observer" variant="noBorder">
        <ObserverTechniquesSlideshow onComplete={handleSlideshowComplete} />
      </SimpleInfoCard>

      <SimpleInfoCard title="Practice Thought Observation" variant="noBorder">
        <InteractiveThoughtObserver />
      </SimpleInfoCard>

    </div>
  );
}

// Dismantling Anxious Thoughts Sublesson Component
export function DismantlingAnxiousThoughtsSublesson({ onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const anxiousThemes = [
    {
      id: 'harm-thoughts',
      title: 'Thoughts About Harming Others',
      description: 'Intrusive thoughts about accidentally or intentionally hurting someone',
      examples: [
        'What if I push someone in front of a train?',
        'What if I hurt my loved ones?',
        'What if I lose control and do something violent?'
      ],
      explanation: 'These are called "harm OCD" thoughts and are extremely common. Having these thoughts does NOT make you dangerous - in fact, being disturbed by them shows your moral compass is intact. People who actually want to hurt others don\'t worry about these thoughts.',
      normalization: 'Research shows that 85-90% of people have unwanted intrusive thoughts about harm. The difference is that anxious brains get "stuck" on these thoughts and interpret them as meaningful, when they\'re actually just mental noise.'
    },
    {
      id: 'death-thoughts',
      title: 'Thoughts About Death & Dying',
      description: 'Fears about your own death or the death of loved ones',
      examples: [
        'What if I die suddenly?',
        'What if something happens to my family?',
        'What if this physical sensation means I\'m dying?'
      ],
      explanation: 'Death anxiety is one of the most fundamental human fears. Your brain\'s job is to keep you alive, so it naturally scans for threats. When anxiety is high, this threat-detection system becomes oversensitive.',
      normalization: 'Almost everyone experiences death anxiety at some point. It\'s a normal part of being human and aware of our mortality. The key is not eliminating these thoughts, but changing your relationship with them.'
    },
    {
      id: 'mental-health-fears',
      title: 'Fears About Mental Illness',
      description: 'Worrying you might develop serious mental health conditions',
      examples: [
        'What if I\'m developing schizophrenia?',
        'What if this anxiety means I\'m going crazy?',
        'What if I end up severely depressed?'
      ],
      explanation: 'Ironically, worrying about mental illness is often a sign of good mental health awareness, not illness itself. People experiencing psychosis typically don\'t worry about "going crazy" - they lack that insight.',
      normalization: 'Mental health fears are incredibly common, especially in our information age. The fact that you\'re concerned about your mental health and seeking help shows self-awareness and responsibility.'
    },
    {
      id: 'self-harm-thoughts',
      title: 'Thoughts About Self-Harm',
      description: 'Unwanted thoughts about hurting yourself',
      examples: [
        'What if I jump from this height?',
        'What if I hurt myself with this sharp object?',
        'What if I can\'t control these urges?'
      ],
      explanation: 'These thoughts, often called "suicide OCD" or "self-harm OCD," are intrusive thoughts that go against your actual values. Being distressed by them indicates they don\'t represent your true desires.',
      normalization: 'Many people experience fleeting thoughts about self-harm without any actual intent. The French even have a term "l\'appel du vide" (call of the void) for the sudden urge to jump from heights - it\'s so common it has a name.'
    },
    {
      id: 'losing-control',
      title: 'Fear of Losing Control',
      description: 'Worrying you\'ll lose control of your actions or mind',
      examples: [
        'What if I say something inappropriate?',
        'What if I lose control in public?',
        'What if I can\'t control my thoughts?'
      ],
      explanation: 'The fear of losing control is often strongest in people who are actually very controlled and responsible. Your brain is trying to protect your reputation and relationships by being hypervigilant.',
      normalization: 'Most people occasionally worry about losing control, especially in important situations. The irony is that the more you fear losing control, the more in control you actually are.'
    },
    {
      id: 'health-fears',
      title: 'Health Anxiety & Medical Fears',
      description: 'Fears about heart attacks, cancer, and serious illnesses',
      examples: [
        'What if this chest pain is a heart attack?',
        'What if I have cancer and don\'t know it?',
        'What if I have a rare disease the doctors missed?',
        'What if these symptoms mean something is seriously wrong?'
      ],
      explanation: 'Health anxiety causes your brain to hyper-focus on bodily sensations and interpret normal variations as dangerous. Anxiety itself can cause chest pain, fatigue, and other physical symptoms that mimic serious illness, creating a feedback loop.',
      normalization: 'Health anxiety is one of the most common forms of anxiety. Studies show that most people who visit the doctor for physical symptoms don\'t have the serious condition they fear. Your body constantly produces sensations - anxiety just makes you notice and fear them more.'
    },
    {
      id: 'vomiting-passing-out',
      title: 'Fear of Vomiting or Passing Out',
      description: 'Intense fear of getting sick or fainting in public',
      examples: [
        'What if I throw up in public?',
        'What if I pass out and embarrass myself?',
        'What if I get sick and can\'t get help?',
        'What if I faint while driving or in an important situation?'
      ],
      explanation: 'These fears often stem from a previous embarrassing experience or witnessing someone else get sick. Your brain has labeled these situations as dangerous, even though they\'re actually harmless. The anxiety about it happening often causes the physical sensations that mimic nausea or dizziness.',
      normalization: 'Fear of vomiting (emetophobia) and fear of fainting are extremely common anxiety triggers. Ironically, anxiety makes you much less likely to actually vomit or faint - your body is in "fight or flight" mode, not "rest and digest" mode. Most people with these fears have never actually experienced what they\'re afraid of.'
    },
    {
      id: 'being-alone',
      title: 'Fear of Being Alone',
      description: 'Anxiety about being by yourself or isolated from others',
      examples: [
        'What if something bad happens and no one is here to help?',
        'What if I have a panic attack when I\'m alone?',
        'What if I can\'t handle being by myself?',
        'What if something goes wrong and I\'m all alone?'
      ],
      explanation: 'This fear often develops after experiencing panic or anxiety when alone. Your brain associates being alone with danger, even though being alone doesn\'t cause anxiety - the fear of being alone does. It\'s a protective mechanism that has become overactive.',
      normalization: 'Many people with anxiety develop a fear of being alone, especially after panic attacks. It\'s your brain\'s way of seeking safety through connection. The good news is that gradually spending time alone while using coping skills can help your brain learn that you\'re safe even when by yourself.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Themes</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            One of the most isolating aspects of anxiety is feeling like you're the only one with these specific fears. But anxious thoughts tend to cluster around similar themes shared by millions worldwide. Understanding these common patterns helps normalize your experience and reduces their power over you.
          </p>
        </div>

        {!selectedTheme ? (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Remember: Thoughts Are Not Facts</h3>
              <p className="text-sm text-blue-800">
                Having these thoughts doesn't mean anything about who you are as a person. They're symptoms of anxiety, not reflections of your character or intentions.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Here are some of the most common anxious/OCD themes:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {anxiousThemes.map((theme) => (
                <div
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{theme.title}</h3>
                  <p className="text-gray-700 mb-4">{theme.description}</p>
                  <div className="text-sm text-orange-700 font-medium">
                    Click to learn more →
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {(() => {
              const theme = anxiousThemes.find(t => t.id === selectedTheme)!;
              return (
                <>
                  <div className="border-l-4 border-gray-300 pl-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{theme.title}</h3>
                    <p className="text-lg text-gray-700">{theme.description}</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3">Common Examples:</h4>
                    <ul className="space-y-2">
                      {theme.examples.map((example, index) => (
                        <li key={index} className="text-blue-800 italic pl-4 border-l-2 border-blue-300">
                          "{example}"
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-purple-900 mb-3">What's Really Happening</h4>
                    <p className="text-purple-800 mb-4">{theme.explanation}</p>

                    <div className="mt-4 pt-4 border-t border-purple-200">
                      <h5 className="font-semibold text-purple-900 mb-2">You're Not Alone</h5>
                      <p className="text-purple-800">{theme.normalization}</p>
                    </div>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-orange-900 mb-3">Key Insights</h4>
                    <ul className="space-y-2 text-orange-800">
                      <li>→ These thoughts are anxiety symptoms, not predictions or desires</li>
                      <li>→ The distress you feel about them shows they don't align with your values</li>
                      <li>→ Fighting or analyzing these thoughts usually makes them stronger</li>
                      <li>→ The goal is acceptance and reduced emotional reaction, not elimination</li>
                      <li>→ Professional help is available if these thoughts significantly impact your life</li>
                    </ul>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => setSelectedTheme(null)}
                      className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      ← Back to Themes
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {!selectedTheme && (
          <div className="text-center mt-8">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-yellow-900 mb-1">⚠️ Important Note</h4>
              <p className="text-xs text-yellow-800">
                If you're experiencing thoughts of self-harm or suicide with intent, please reach out for immediate support. Contact a crisis helpline, trusted person, or emergency services.
              </p>
            </div>
          </div>
        )}
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

// Meditation Practice Sublesson Component
export function MeditationPracticeSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meditation Practice</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Deepen your observer skills through guided meditation sessions. Practice different techniques
            to cultivate present-moment awareness and strengthen your ability to observe thoughts and sensations.
          </p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-4">🧘</span>
            <div>
              <h3 className="text-xl font-bold">Guided Meditation Sessions</h3>
              <p className="text-indigo-100">Choose your practice style and duration</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/20 rounded-lg p-3">
              <h4 className="font-semibold mb-2">Multiple Styles</h4>
              <p className="text-sm text-indigo-100">Mindfulness, breath work, body scans, and more</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <h4 className="font-semibold mb-2">Flexible Duration</h4>
              <p className="text-sm text-indigo-100">5 to 30 minute sessions</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3">
              <h4 className="font-semibold mb-2">Observer Training</h4>
              <p className="text-sm text-indigo-100">Practice watching without getting caught up</p>
            </div>
          </div>
        </div>
      </div>

      <MeditationPractice />

    </div>
  );
}

// Chapter 4 Recap Sublesson Component
export function Chapter4RecapSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const { completeLesson: _completeLesson } = useProgress();
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>📚</div>
        <h2 className={lessonStyles.title}>Chapter Recap</h2>
        <p className={lessonStyles.subtitle}>Mastering your relationship with thoughts and thinking</p>
      </div>

      <SimpleInfoCard title="Chapter 4 Summary: Conquering Thoughts" variant="noBorder">
        <div className="space-y-6 text-gray-700">

          {/* Introduction */}
          <div>
            <p className="text-base leading-relaxed">
              In this chapter, you've learned the fundamental difference between thoughts and thinking, and discovered
              powerful techniques to master your relationship with anxious thoughts. Rather than being a victim of
              your thinking patterns, you now have practical tools to observe, understand, and work with thoughts
              in a completely new way.
            </p>
          </div>

          {/* What You Learned Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Learned</h4>
            <div className="space-y-4">

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧠 Thoughts vs. Thinking: The Critical Distinction</h5>
                <p className="text-sm leading-relaxed">
                  Thoughts are automatic, fast, and constant mental events that appear without your control - like bubbles
                  rising to the surface of consciousness. Thinking, however, is something you can learn to control and
                  choose to do. Understanding this difference is the first step toward freedom from anxious thoughts.
                  You don't control what thoughts appear, but you can control how you respond to them.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔍 Meet Scout: Your Internal Threat Detector</h5>
                <p className="text-sm leading-relaxed">
                  Scout represents the real part of your brain (your limbic system) that creates anxious thoughts. He's not
                  your enemy - he genuinely believes he's protecting you by alerting you to potential threats. Scout operates
                  on the "better safe than sorry" principle, which is why he tends to overreact to modern situations. Learning
                  to understand Scout's perspective helps you respond with compassion rather than frustration.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">👁️ The Master Observer: Your Superpower</h5>
                <p className="text-sm leading-relaxed">
                  The Observer is your ability to step back and watch your thoughts, emotions, and sensations without
                  automatically reacting to them. This isn't about stopping thoughts - it's about changing your relationship
                  with them. When you develop your Observer skills through mindfulness practices, you can notice anxious
                  thoughts without being swept away by them, creating space between you and your anxiety.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧘 Meditation and Mindfulness Practice</h5>
                <p className="text-sm leading-relaxed">
                  Meditation isn't about achieving a perfectly calm mind - it's about strengthening your Observer muscle.
                  Through guided meditation sessions, you practice noticing when your mind wanders (which it will) and
                  gently bringing attention back to the present moment. This trains you to catch anxious thought spirals
                  earlier and respond more skillfully to challenging mental states.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔨 Understanding Common Themes</h5>
                <p className="text-sm leading-relaxed">
                  You explored common anxious thought patterns and learned that these themes affect many people.
                  Understanding that your fears about health, control, harm, and other topics are shared by countless others
                  helps normalize your experience and reduces the power these thoughts have over you. Recognizing these patterns
                  is the first step toward changing your relationship with them.
                </p>
              </div>

            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🎯 Key Takeaways</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span><strong>Thoughts are not facts</strong> - they're mental events that come and go, often without basis in reality</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span><strong>You are not your thoughts</strong> - there's a part of you (the Observer) that can watch thoughts without being controlled by them</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span><strong>Scout means well</strong> - your anxious thoughts come from a protective system trying to keep you safe</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span><strong>Observation creates space</strong> - mindfulness gives you room to choose your response rather than react automatically</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span><strong>Practice strengthens the Observer</strong> - meditation and mindfulness are skills that improve with consistent practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2 mt-1">•</span>
                <span><strong>Common themes are shared</strong> - your anxious thoughts are not unique, and recognizing patterns helps normalize the experience</span>
              </li>
            </ul>
          </div>

          {/* The Bigger Picture */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🌍 The Bigger Picture</h4>
            <p className="text-base leading-relaxed">
              Mastering thoughts isn't about achieving a perfectly calm mind - it's about developing a completely different
              relationship with your mental experience. Instead of being at the mercy of every anxious thought, you now have
              tools to observe, question, and respond skillfully. This transforms anxiety from something that happens TO you
              into something you can work WITH. Your thoughts will continue to come and go, but you're no longer their prisoner.
            </p>
          </div>

          {/* Moving Forward */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🚀 Moving Forward</h4>
            <p className="text-base leading-relaxed mb-4">
              Now that you've learned to master your relationship with thoughts, you're ready to tackle the physical
              side of anxiety. In Chapter 5: "Accepting Sensations," you'll learn about:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Understanding why your body creates anxiety symptoms and what they really mean</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>How to change your response to physical sensations instead of fighting them</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Practical techniques for coexisting peacefully with anxiety symptoms</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Why acceptance is more powerful than resistance in overcoming physical anxiety</span>
              </li>
            </ul>
          </div>

        </div>
      </SimpleInfoCard>

      <LessonCompleteButton
        chapterId={4}
        chapterTitle="Chapter 4"
        onComplete={_onComplete}
      />
    </div>
  );
}