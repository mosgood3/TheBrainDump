'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { lessonStyles, SimpleInfoCard, SimpleStepList, LessonCompleteButton } from './shared/LessonStyleHelpers';
import { useProgress } from '../../context/ProgressContext';
// Backend removed - Supabase import removed
import { AcceptanceTechniquesSlideshow } from './AcceptanceTechniquesSlideshow';

// Overview Sublesson Component for Accepting the Sensations
export function AcceptingSensationsOverviewSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
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
            <source src="/videos/chapter5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

// Physical Symptoms of Anxiety Sublesson Component
export function PhysicalSymptomsSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {


  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🫀</div>
        <h2 className={lessonStyles.title}>Physical Symptoms of Anxiety</h2>
        <p className={lessonStyles.subtitle}>Understanding your body's alarm system</p>
      </div>

      <div className={lessonStyles.content}>
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="w-full max-w-xs mx-auto mb-8">
            <Image
              src="/images/5_Physical/Physical.png"
              alt="Physical symptoms of anxiety illustrated on human body"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* What Are Physical Symptoms */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What Are Physical Symptoms of Anxiety?</h3>
            <p className="text-gray-700 leading-relaxed">
              Physical symptoms of anxiety are <strong>real, measurable changes in your body</strong> that occur when your nervous system
              perceives a threat. These are genuine physiological responses produced by the same biological systems that would keep you alive
              in actual danger. They feel scary because they're designed to get your attention and prepare you for action.
            </p>
          </div>

          {/* The Science Behind Adrenaline */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Science Behind Adrenaline and Your Body's Response</h3>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                When your brain detects a potential threat, it triggers a cascade of biological events designed to maximize your
                chances of survival. Here's the science behind what happens:
              </p>

              {/* Flow Chart */}
              <div className="flex flex-col items-center space-y-3 max-w-3xl mx-auto mt-8">

                {/* Step 1 */}
                <div className="bg-white rounded-xl p-6 w-full shadow-md border-4 border-blue-500 transform transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">The Alarm Sounds</h4>
                      <p className="text-gray-700">
                        Your amygdala (brain's alarm center) detects a threat and instantly sends signals to your hypothalamus,
                        which controls your autonomous nervous system.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-blue-500 text-3xl font-bold">↓</div>

                {/* Step 2 */}
                <div className="bg-white rounded-xl p-6 w-full shadow-md border-4 border-purple-500 transform transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Chemical Release</h4>
                      <p className="text-gray-700">
                        Your adrenal glands release adrenaline (epinephrine) and noradrenaline into your bloodstream.
                        These powerful hormones reach every part of your body within seconds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-purple-500 text-3xl font-bold">↓</div>

                {/* Step 3 */}
                <div className="bg-white rounded-xl p-6 w-full shadow-md border-4 border-orange-500 transform transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Body-Wide Changes</h4>
                      <p className="text-gray-700">
                        Adrenaline binds to receptors throughout your body, causing immediate changes: heart rate increases,
                        blood vessels constrict or dilate as needed, breathing quickens, pupils dilate, digestion slows,
                        and muscles receive more oxygen and glucose for energy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-orange-500 text-3xl font-bold">↓</div>

                {/* Result */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 w-full shadow-lg border-4 border-green-700 text-white transform transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-green-600 font-bold text-lg shadow-lg">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 text-lg">Result: Survival Optimization</h4>
                      <p className="text-green-50">
                        Every single change serves a survival purpose. Your body is literally optimizing itself for fighting,
                        fleeing, or freezing. In real danger, this system is a masterpiece of biological engineering that has
                        kept humans alive for millions of years.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Safety Note */}
            <div className="border-l-4 border-blue-500 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">💡 Why These Symptoms Aren't Dangerous</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Here's the crucial truth:</strong> None of these physical symptoms are dangerous. The same biological systems
                that create anxiety symptoms are designed to <em>protect</em> you from harm, not cause it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Think about it:</strong> If these symptoms were truly dangerous, evolution would have eliminated them millions
                of years ago. Instead, they've been preserved and refined because they enhance survival in real emergencies. Your body
                has multiple built-in safety mechanisms that prevent these responses from causing any damage.
              </p>
            </div>
          </div>

          {/* Panic Attacks Overview */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Understanding Panic Attacks</h3>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-center text-lg">
                <strong>A panic attack is your body's alarm system firing at maximum intensity.</strong> It's an intense wave of
                physical and psychological symptoms that can feel terrifying but is actually your ancient survival system responding
                to a perceived threat - even when no real danger exists.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">😰</span>
                    What It Feels Like
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Overwhelming rush of sensations</li>
                    <li>• Fear of dying or losing control</li>
                    <li>• Intense urge to escape</li>
                    <li>• Sense of unreality or detachment</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    What It Actually Is
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• A false alarm - no real danger</li>
                    <li>• Temporary - always passes on its own</li>
                    <li>• Cannot cause physical harm</li>
                    <li>• Peaks within 5-10 minutes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 shadow-lg text-white">
                <p className="font-bold text-center text-lg">
                  🛡️ No one has ever died from a panic attack itself. The sensations are intense because they're designed to
                  get your attention and prepare you for action - not because anything is actually wrong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3">⚕️ Important Medical Note</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          <strong>Always consult a healthcare provider about new or concerning symptoms.</strong> This lesson assumes you've already
          ruled out medical conditions and can work confidently with these symptoms as anxiety-related.
        </p>
      </div>

    </div>
  );
}

// Fear of the Sensations Themselves Sublesson Component
export function FearOfSensationsSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [selectedSymptom, setSelectedSymptom] = useState<string | null>(null);

  const commonSymptoms = [
    {
      id: 'heart',
      name: 'Racing Heart/Palpitations',
      icon: '💓',
      description: 'Fast, strong, or irregular heartbeat that feels like your heart is pounding',
      explanation: 'Your sympathetic nervous system releases adrenaline, which increases heart rate to pump more blood to muscles. This prepares your body for physical action during perceived threats.',
      harmless: 'A racing heart from anxiety cannot cause a heart attack in healthy individuals. Your heart is designed to handle much higher rates during exercise.',
      science: 'Adrenaline binds to beta-1 receptors in your heart, increasing the force and rate of contractions. This is a normal, protective response.'
    },
    {
      id: 'chest',
      name: 'Chest Tightness',
      icon: '🫁',
      description: 'Feeling of pressure, squeezing, or heaviness in your chest area',
      explanation: 'Multiple muscles around your chest, including intercostal muscles between ribs, tighten during anxiety. Your breathing pattern also changes, creating pressure sensations.',
      harmless: 'Anxiety chest tightness is muscular tension and breathing changes, not heart or lung problems. The sensation is real but not dangerous.',
      science: 'Stress hormones cause muscle tension throughout your body. Your diaphragm and accessory breathing muscles work differently during anxiety, creating pressure sensations.'
    },
    {
      id: 'breath',
      name: 'Shortness of Breath',
      icon: '🌬️',
      description: 'Feeling like you can\'t get enough air, suffocating, or need to yawn frequently',
      explanation: 'Anxiety triggers rapid, shallow breathing (hyperventilation). You\'re actually getting too much oxygen and exhaling too much CO2, which creates the breathless feeling.',
      harmless: 'You\'re getting plenty of oxygen - the sensation comes from altered blood chemistry, not oxygen lack. Your body won\'t let you suffocate.',
      science: 'Hyperventilation reduces CO2 levels in your blood, causing respiratory alkalosis. This triggers the feeling that you need more air, even though oxygen levels are fine.'
    },
    {
      id: 'dizzy',
      name: 'Dizziness/Lightheadedness',
      icon: '💫',
      description: 'Feeling faint, off-balance, floating, or like you might pass out',
      explanation: 'Rapid breathing changes the levels of oxygen and CO2 in your blood. Blood flow patterns also shift during anxiety, affecting your inner ear balance system.',
      harmless: 'Anxiety dizziness rarely leads to actual fainting. Your body has multiple backup systems to maintain consciousness and balance.',
      science: 'Hyperventilation causes vasoconstriction (blood vessel narrowing) in the brain. Changes in CO2 levels also affect your vestibular system (inner ear balance).'
    },
    {
      id: 'tingling',
      name: 'Tingling/Numbness',
      icon: '⚡',
      description: 'Pins and needles sensation, numbness, or "electric" feelings in hands, feet, or face',
      explanation: 'Hyperventilation changes your blood chemistry, reducing CO2 levels. This affects nerve function, especially in your extremities and around your mouth.',
      harmless: 'This tingling is temporary and harmless. It\'s your nerves responding to chemical changes, not nerve damage or circulation problems.',
      science: 'Low CO2 levels (hypocapnia) from hyperventilation cause calcium levels to change, affecting nerve membrane excitability and creating tingling sensations.'
    },
    {
      id: 'nausea',
      name: 'Nausea/Stomach Issues',
      icon: '🤢',
      description: 'Feeling sick, butterflies, cramping, bloating, or urgent digestive issues',
      explanation: 'During fight-or-flight, blood flow redirects away from your digestive system to your muscles. Your gut also has many stress hormone receptors.',
      harmless: 'Your digestive system temporarily slows down but returns to normal as anxiety subsides. This is your body prioritizing survival functions.',
      science: 'The vagus nerve connects your brain to your gut. Stress hormones like cortisol and adrenaline directly affect digestion, causing the "gut-brain" connection symptoms.'
    },
    {
      id: 'sweating',
      name: 'Sweating/Hot Flashes',
      icon: '💦',
      description: 'Sudden sweating, hot flashes, or feeling overheated without external temperature changes',
      explanation: 'Your sympathetic nervous system activates sweat glands to cool your body during perceived threats. This prepares you for physical exertion.',
      harmless: 'Anxiety sweating is a normal cooling mechanism. Your body is preparing for action that never comes, so the cooling isn\'t needed.',
      science: 'Adrenaline activates eccrine sweat glands throughout your body. This evolutionary response helped our ancestors stay cool during physical escape or fighting.'
    },
    {
      id: 'trembling',
      name: 'Trembling/Shaking',
      icon: '🫨',
      description: 'Involuntary shaking, trembling hands, or feeling "jittery" inside',
      explanation: 'Adrenaline and other stress hormones cause muscle tension and micro-movements. Your muscles are primed for action but have no outlet for the energy.',
      harmless: 'Anxiety trembling is excess energy in your muscles, not a neurological problem. It\'s your body ready to move but with nowhere to go.',
      science: 'Stress hormones increase muscle fiber recruitment and sensitivity. The trembling is your motor units firing in preparation for movement that doesn\'t happen.'
    },
    {
      id: 'dpdr',
      name: 'Depersonalization/Derealization (DP/DR)',
      icon: '🌫️',
      description: 'Feeling detached from yourself or reality, like you\'re in a dream or watching yourself from outside',
      explanation: 'When anxiety becomes overwhelming, your brain activates a protective mechanism that creates emotional numbness and perceptual distance. This is your mind\'s way of protecting you from intense emotions.',
      harmless: 'DP/DR is your brain\'s safety mechanism, not a sign of "going crazy" or losing touch with reality permanently. It\'s temporary and will fade as your nervous system calms down.',
      science: 'High cortisol and chronic stress can temporarily affect areas of the brain that process self-awareness and perception (prefrontal cortex and limbic system). This creates the "detached" feeling as a protective response to emotional overwhelm.'
    }
  ];

  const [flippedCards, setFlippedCards] = useState<{[key: number]: boolean}>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const panicCycleSteps = [
    {
      title: "Initial Trigger",
      description: "Something triggers a physical sensation",
      examples: ["Feeling your heart race after climbing stairs", "Noticing chest tightness during a stressful meeting", "Experiencing dizziness when standing up quickly", "Feeling butterflies before a presentation"]
    },
    {
      title: "Catastrophic Interpretation",
      description: "You interpret the sensation as dangerous",
      examples: ["'This racing heart means I'm having a heart attack'", "'I can't breathe - I'm going to suffocate'", "'This dizziness means I'm going to faint'", "'These chest pains must be something serious'"]
    },
    {
      title: "Fear Response",
      description: "Fear of the sensation triggers more anxiety",
      examples: ["Heart races even faster as you panic", "Breathing becomes more rapid and shallow", "Muscles tense up throughout your body", "Thoughts spiral: 'This is getting worse!'"]
    },
    {
      title: "Increased Symptoms",
      description: "More symptoms confirm your fear",
      examples: ["'See, my heart is racing even more - I was right to worry'", "'Now I'm sweating too - something is really wrong'", "'I'm getting dizzy - this is serious'", "'My hands are shaking - I'm losing control'"]
    },
    {
      title: "Peak Panic",
      description: "Symptoms peak as your body reaches maximum activation",
      examples: ["Overwhelming rush of physical sensations", "Intense fear of dying or losing control", "Strong urge to escape immediately", "Feeling detached from reality"]
    },
    {
      title: "Gradual Subsiding",
      description: "Symptoms naturally decrease on their own",
      examples: ["Heart rate slowly returns to normal", "Breathing becomes deeper and easier", "Muscle tension releases", "Mental clarity begins to return"]
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🔄</div>
        <h2 className={lessonStyles.title}>Fear of the Sensations Themselves</h2>
        <p className={lessonStyles.subtitle}>The cycle of panic</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          Often, the most frightening part of anxiety isn&apos;t the original trigger - it&apos;s the fear of the
          physical sensations themselves. This is what Dr. Claire Weekes called the <strong>"second fear"</strong> -
          the fear of fear itself. This creates a vicious cycle where fear of symptoms creates more symptoms,
          which increases fear, leading to even more intense sensations.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">The Panic Cycle</h3>
        <div className="w-full max-w-md mx-auto mb-6">
          <Image
            src="/images/5_Physical/Cycle.png"
            alt="Panic cycle diagram showing the progression from trigger to peak panic"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {panicCycleSteps.map((step, index) => (
            <div
              key={index}
              className="relative h-64 cursor-pointer perspective-1000"
              onClick={() => toggleCard(index)}
            >
              <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${flippedCards[index] ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-lg shadow-md">
                        {index + 1}
                      </div>
                      <div className="text-white text-sm">Click to flip</div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                    <p className="text-blue-100 text-sm">{step.description}</p>
                  </div>
                  <div className="text-white text-xs opacity-75 text-center">👆 Tap for examples</div>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl p-6 shadow-lg rotate-y-180 overflow-auto">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                    <div className="text-gray-500 text-sm">Click to flip back</div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {step.examples.map((example, exIndex) => (
                      <li key={exIndex} className="text-gray-700 text-sm flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-4 mt-6">
          <p className="text-blue-800 text-sm">
            <strong>Coming Up in the Next Lesson:</strong> You&apos;ll learn how to skip from Step 1 directly to Step 6 and break this cycle.
          </p>
        </div>
      </div>

      {/* Interactive Symptom Cards */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Interactive Symptom Explorer</h3>
        <p className="text-gray-600 mb-6">
          Click on each symptom card to discover the fascinating science behind what your body is doing.
          Understanding the "why" can help reduce the fear of these sensations.
        </p>

        <div className="space-y-4">
          {commonSymptoms.map((symptom) => (
            <div key={symptom.id} className="rounded-xl overflow-hidden border-2 border-gray-200 hover:border-purple-300 transition-all shadow-sm hover:shadow-md">
              <button
                onClick={() => setSelectedSymptom(selectedSymptom === symptom.id ? null : symptom.id)}
                className={`w-full text-left p-5 transition-all ${
                  selectedSymptom === symptom.id
                    ? 'bg-gradient-to-r from-purple-50 to-blue-50'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl shadow-md">
                      {symptom.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{symptom.name}</h4>
                      <p className="text-sm text-gray-600">{symptom.description}</p>
                    </div>
                  </div>
                  <div className={`ml-3 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all shadow-sm ${
                    selectedSymptom === symptom.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {selectedSymptom === symptom.id ? '−' : '+'}
                  </div>
                </div>
              </button>

              {selectedSymptom === symptom.id && (
                <div className="bg-gray-50 border-t border-gray-200 p-5 space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm">The Science</h5>
                    <p className="text-gray-700 text-sm">{symptom.science}</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm">Why It Happens</h5>
                    <p className="text-gray-700 text-sm">{symptom.explanation}</p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-semibold text-gray-900 mb-1 text-sm">Why It's Safe</h5>
                    <p className="text-gray-700 text-sm">{symptom.harmless}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 mt-6">
        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
          <span>💡</span> Key Insight
        </h4>
        <p className="text-gray-700 text-sm">
          It's not the sensations that are the problem - it's your relationship with them. The same racing heart that feels terrifying during panic might go unnoticed during exercise. When you change your response to sensations, you break the cycle.
        </p>
      </div>


    </div>
  );
}

// Interactive AI-Powered Sensation Practice Component
function InteractiveSensationPractice() {
  const [selectedTechnique, setSelectedTechnique] = useState<{id: string; name: string; description: string; icon: string} | null>(null);
  const [userInput, setUserInput] = useState('');
  const [analysis, setAnalysis] = useState<{suggestion: string; encouragement: string; guidance?: string; insight?: string} | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | {type: string; message: string; resources?: string[]} | null>(null);

  const techniques = [
    {
      id: 'curious',
      name: 'Curious but Not Critical',
      description: 'Notice your physical sensations with curiosity instead of fear or judgment',
      icon: '🔍'
    },
    {
      id: 'allowing',
      name: 'Allowing Sensations to Exist',
      description: 'Give permission for the sensations to happen instead of resisting them',
      icon: '🤝'
    },
    {
      id: 'floating',
      name: 'Floating Through the Storm',
      description: 'Imagine yourself gently floating through the sensations like drifting on water',
      icon: '🌊'
    },
    {
      id: 'make_worse',
      name: 'Make-It-Worse Strategy',
      description: 'Challenge anxiety by saying "Bring it on, give me your worst"',
      icon: '💪'
    }
  ];

  const analyzeSensation = async () => {
    if (!userInput.trim() || !selectedTechnique) return;

    setLoading(true);
    setError(null);

    try {
        setLoading(false);
        return;
      }

      const response = await fetch('/api/ai/analyze-sensation-acceptance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${null.access_token}`
        },
        body: JSON.stringify({
          sensation: userInput.trim(),
          technique: selectedTechnique.id,
          techniqueName: selectedTechnique.name,
          techniqueDescription: selectedTechnique.description
        })
      });

      const result = await response.json();

      if (response.ok) {
        setAnalysis(result);
      } else {
        if (result.error === 'crisis_support' || result.error === 'inappropriate_content' || result.error === 'limit_reached') {
          setError({
            type: result.error,
            message: result.message,
            resources: result.resources || []
          });
        } else {
          setError({ type: 'general', message: 'Failed to analyze sensation. Please try again.' });
        }
      }
    } catch (error) {
      console.error('Error analyzing sensation:', error);
      setError({ type: 'general', message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setSelectedTechnique(null);
    setUserInput('');
    setAnalysis(null);
    setError(null);
  };

  // Error display component
  if (error) {
    return (
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">
            {typeof error === 'object' && error.type === 'auth_required' ? 'Login Required' :
             typeof error === 'object' && error.type === 'crisis_support' ? 'Crisis Support Available' :
             typeof error === 'object' && error.type === 'inappropriate_content' ? 'Content Guidelines' :
             typeof error === 'object' && error.type === 'limit_reached' ? 'Usage Limit Reached' : 'Error'}
          </h4>
          <p className="text-red-700 text-sm">{typeof error === 'string' ? error : error.message}</p>
          {typeof error === 'object' && error.resources && error.resources.length > 0 && (
            <div className="mt-3">
              <p className="text-red-700 text-sm font-medium">Resources:</p>
              <ul className="text-red-700 text-sm">
                {error.resources.map((resource: string, index: number) => (
                  <li key={index}>• {resource}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <button
          onClick={resetAnalysis}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Analysis result display
  if (analysis) {
    return (
      <div className="space-y-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-blue-900 mb-4">
            AI Analysis: {selectedTechnique?.name}
          </h4>

          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-blue-800 mb-2">Your Sensation:</h5>
              <p className="text-blue-700 bg-white rounded p-3">{userInput}</p>
            </div>

            <div>
              <h5 className="font-semibold text-blue-800 mb-2">Personalized Guidance:</h5>
              <div className="text-blue-700 bg-white rounded p-3 whitespace-pre-line">
                {analysis.guidance}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-blue-800 mb-2">Key Insight:</h5>
              <div className="text-blue-700 bg-white rounded p-3">
                {analysis.insight}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={resetAnalysis}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Practice Another Technique
          </button>
        </div>
      </div>
    );
  }

  // Main input interface
  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-gray-700 mb-6">
          Get personalized AI guidance on applying acceptance techniques to your physical sensations.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-4">Step 1: Choose a technique</h4>
        <div className="grid gap-3 md:grid-cols-2">
          {techniques.map((technique) => (
            <button
              key={technique.id}
              onClick={() => setSelectedTechnique(technique)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedTechnique?.id === technique.id
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start space-x-3">
                <span className="text-xl">{technique.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{technique.name}</div>
                  <div className="text-sm text-gray-600">{technique.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedTechnique && (
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">
            Step 2: Describe the physical sensation you\'re experiencing
          </h4>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Describe what you're feeling in your body... (e.g., 'My heart is racing and I feel short of breath' or 'I have tight chest and nausea')"
            className="w-full p-4 border border-gray-300 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
          />
        </div>
      )}

      {selectedTechnique && userInput.trim() && (
        <div className="text-center">
          <button
            onClick={analyzeSensation}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Getting AI Guidance...' : 'Get Personalized Guidance'}
          </button>
        </div>
      )}
    </div>
  );
}

// Strategies for Changing Your Response Sublesson Component
export function ChangingResponseSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {

  return (
    <div className="space-y-8">

      {/* Understanding Mindfulness and Observer Explanation */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Accepting the Sensations</h2>

          {/* Physical Sensations Image */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/5_Physical/chains.png"
              alt="Person accepting and embracing physical sensations"
              width={400}
              height={400}
              className="max-w-xs h-auto"
            />
          </div>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Acceptance</strong> is the practice of allowing your physical sensations to exist without fighting them,
              judging them, or trying to make them go away. Instead of battling every anxious sensation,
              you learn to <em>welcome</em> them as temporary visitors in your body.
            </p>

            <p>
              Think about this: when you have a headache, you don't panic that your head will explode. When you feel
              tired, you don't fear that exhaustion is dangerous. You accept these sensations as normal body experiences.
              Anxiety sensations deserve the same acceptance - they're just your body's alarm system being overly cautious.
            </p>

            <p>
              <strong>Acceptance doesn't mean liking the sensations.</strong> You don't have to enjoy a racing heart
              or welcome dizziness. Acceptance means stopping the fight against what's already happening and allowing
              your body to return to balance naturally, without adding resistance that makes everything worse.
            </p>

            <p>
              When you accept sensations instead of fearing them, something remarkable happens: they lose their power over you.
              It's like welcoming an unwanted guest into your home - once they realize they're not causing chaos,
              they usually leave much sooner than if you spent all your energy trying to kick them out.
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-4xl mx-auto space-y-6">
        <AcceptanceTechniquesSlideshow onComplete={() => {}} />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Interactive Practice Session</h3>

          <InteractiveSensationPractice />
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <p className="text-yellow-900 text-sm leading-relaxed">
            Over time, as you keep practicing these techniques, you'll lose the fear of the physical sensations.
            Once the fear is gone, the sensations themselves will naturally stop occurring because there's no longer
            a fear response triggering them.
          </p>
        </div>
      </div>

    </div>
  );
}

// Acceptance Beyond Anxiety Sublesson Component
export function AcceptanceBeyondAnxietySublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const { completeLesson: _completeLesson } = useProgress();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const acceptanceMyths = [
    {
      myth: "Acceptance means liking or wanting the experience",
      truth: "Acceptance means dropping the fight against what's already happening"
    },
    {
      myth: "Acceptance means giving up and letting anxiety control your life",
      truth: "Acceptance frees up energy to focus on what you can actually control"
    },
    {
      myth: "If I accept anxiety, it will get worse or never go away",
      truth: "Resistance often intensifies anxiety; acceptance allows natural changes to occur"
    },
    {
      myth: "Acceptance is passive or weak",
      truth: "Acceptance is an active choice that requires strength and courage"
    }
  ];

  const acceptanceSteps = [
    {
      title: "Acknowledge What's Here",
      description: "Notice and name what you're experiencing without trying to change it immediately"
    },
    {
      title: "Drop the Struggle",
      description: "Stop fighting against the sensations or trying to force them away"
    },
    {
      title: "Create Space",
      description: "Allow the sensations to exist without letting them dictate your actions"
    },
    {
      title: "Choose Your Response",
      description: "Decide how to move forward based on your values, not your anxiety"
    }
  ];

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>🤗</div>
        <h2 className={lessonStyles.title}>Acceptance Beyond Anxiety</h2>
        <p className={lessonStyles.subtitle}>Not resistance, but allowing</p>
      </div>

      <div className="flex justify-center mb-6">
        <Image
          src="/images/5_Physical/acceptance.png"
          alt="Acceptance Beyond Anxiety"
          width={400}
          height={400}
          className="max-w-xs h-auto rounded-lg"
        />
      </div>

      <div className={lessonStyles.content}>
        <p>
          Acceptance extends far beyond anxiety - it is the foundation for recovering from many uncomfortable
          feelings and emotions. When we stop constantly running from difficult experiences and allow ourselves
          to truly feel them, something powerful happens: we discover that emotions and sensations are temporary
          visitors, not permanent residents.
        </p>

        <p>
          The path to healing often requires us to move through discomfort rather than around it. By practicing
          acceptance with anxiety sensations, you are developing a skill that will serve you with all of life&apos;s
          challenging emotions - sadness, anger, fear, frustration, and more.
        </p>

        <p>
          Acceptance is often misunderstood. It doesn&apos;t mean liking anxiety, wanting it to stay, or giving up
          on feeling better. True acceptance means dropping the fight against what&apos;s already present and making
          room for the full range of human experience - including uncomfortable sensations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Myths Card */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              ✕
            </div>
            <h3 className="text-xl font-bold text-red-900">Common Myths</h3>
          </div>
          <div className="space-y-3">
            {acceptanceMyths.map((item, index) => (
              <div key={index} className="bg-white/50 rounded-lg p-3 border border-red-200">
                <p className="text-red-800 text-sm">{item.myth}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Truths Card */}
        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-green-900">The Reality</h3>
          </div>
          <div className="space-y-3">
            {acceptanceMyths.map((item, index) => (
              <div key={index} className="bg-white/50 rounded-lg p-3 border border-green-200">
                <p className="text-green-800 text-sm">{item.truth}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Four Steps of Acceptance</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {acceptanceSteps.map((step, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Paradox of Acceptance</h3>

        <div className="flex justify-center mb-6">
          <Image
            src="/images/5_Physical/breakup.png"
            alt="The Paradox of Acceptance"
            width={400}
            height={400}
            className="max-w-xs h-auto rounded-lg"
          />
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Think about what happens when you go through a painful breakup. You feel fragile, weak, and vulnerable.
            Most people's instinct is to run from these uncomfortable feelings - they go out partying, jump into
            rebound relationships, distract themselves constantly with work or activities, or try to numb the pain
            in various ways.
          </p>

          <p>
            While these distractions might provide temporary relief, they usually make you feel worse in the long run.
            Why? Because you're spending all your energy fighting against what's already happened and avoiding the
            natural healing process.
          </p>

          <p className="font-semibold text-purple-900">
            The better solution is paradoxically simple: accept the emotions that the breakup brings.
          </p>

          <p>
            Instead of running from the hurt, you acknowledge it. <em>"Yes, this hurts. Yes, I feel sad and vulnerable
            right now. Yes, I'm grieving what I lost."</em> You give yourself permission and space to actually feel
            these difficult emotions without judgment or resistance.
          </p>

          <p>
            This is the paradox: by accepting and sitting with the uncomfortable feelings instead of fighting them,
            they begin to naturally process and heal. The pain doesn't intensify - it actually starts to transform
            and diminish on its own timeline. You're working with your natural emotional healing process instead of
            against it.
          </p>

          <div className="bg-white/60 border-l-4 border-purple-500 rounded-lg p-4 mt-4">
            <p className="text-purple-900 font-medium">
              The same principle applies to anxiety and all difficult emotions: acceptance isn't giving up or being
              passive - it's the active choice to stop exhausting yourself by fighting what's already present, and
              instead allowing your natural healing to occur.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

// Chapter 5 Recap Sublesson Component
export function Chapter5RecapSublesson({ onComplete: _onComplete }: { onComplete: () => void }) {
  const { completeLesson: _completeLesson } = useProgress();
  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <div className={lessonStyles.icon}>📚</div>
        <h2 className={lessonStyles.title}>Chapter Recap</h2>
        <p className={lessonStyles.subtitle}>Consolidating everything you have learned about accepting physical sensations</p>
      </div>

      <SimpleInfoCard title="Chapter 5 Summary: Learning to Accept Physical Sensations" variant="noBorder">
        <div className="space-y-6 text-gray-700">

          {/* Introduction */}
          <div>
            <p className="text-base leading-relaxed">
              In this chapter, you have discovered how to transform your relationship with anxiety&apos;s physical sensations.
              Rather than fighting against your body&apos;s responses, you have learned to work with them through acceptance,
              understanding, and practical techniques that reduce the fear of sensations themselves.
            </p>
          </div>

          {/* What You Learned Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Learned</h4>
            <div className="space-y-4">

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🧠 Understanding Physical Symptoms</h5>
                <p className="text-sm leading-relaxed">
                  You learned what physical symptoms actually are - your body&apos;s natural preparation for perceived danger.
                  Every racing heart, tight chest, or dizzy spell is your nervous system trying to protect you by activating
                  the fight-flight-freeze response. These sensations, while uncomfortable, are completely normal and not dangerous.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">⚡ The Science Behind Adrenaline</h5>
                <p className="text-sm leading-relaxed">
                  You discovered the three-step adrenaline process: your brain detects a threat, releases stress hormones
                  (adrenaline and cortisol), and your body responds with increased heart rate, muscle tension, and altered breathing.
                  Understanding this process helps remove the mystery and fear from physical sensations.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🔄 The Fear of Sensations Cycle</h5>
                <p className="text-sm leading-relaxed">
                  You learned about the panic cycle - how initial triggers lead to physical sensations, which create fear
                  of the sensations themselves, intensifying the symptoms and creating a self-perpetuating loop. Breaking
                  this cycle requires changing your response to the sensations, not eliminating them entirely.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🤗 Four Acceptance Techniques</h5>
                <p className="text-sm leading-relaxed">
                  You mastered four powerful techniques: <strong>Curious but Not Critical</strong> (observing sensations with
                  fascination), <strong>Allowing Sensations to Exist</strong> (creating space without fighting),
                  <strong>Floating Through the Storm</strong> (riding sensations like waves), and the <strong>Make-It-Worse Strategy</strong>
                  (intentionally intensifying to prove your safety).
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🌊 The Paradox of Acceptance</h5>
                <p className="text-sm leading-relaxed">
                  You discovered that when you stop fighting anxiety sensations, they often naturally diminish. This happens
                  because much of anxiety&apos;s intensity comes from the struggle against it. Removing the resistance often
                  reduces the fire, though the goal is acceptance itself, not symptom reduction.
                </p>
              </div>

              <div>
                <h5 className="font-medium text-gray-900 mb-2">🎯 Acceptance Beyond Anxiety</h5>
                <p className="text-sm leading-relaxed">
                  You learned that acceptance extends to all uncomfortable emotions and feelings. By practicing acceptance
                  with anxiety sensations, you develop a life skill for handling sadness, anger, fear, and frustration.
                  Moving through discomfort rather than around it is often the path to healing.
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
                <span><strong>Physical sensations are not dangerous</strong> - they are your body&apos;s natural protective responses</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Consistency is key</strong> - regular practice of acceptance techniques gradually reduces fear of sensations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Acceptance doesn&apos;t mean liking</strong> - you can accept sensations without enjoying or wanting them</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Fighting makes it worse</strong> - resistance often intensifies anxiety; acceptance allows natural change</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Emotions are temporary visitors</strong> - all sensations and feelings pass when we stop feeding them with fear</span>
              </li>
            </ul>
          </div>

          {/* The Bigger Picture */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🌍 The Bigger Picture</h4>
            <p className="text-base leading-relaxed">
              Learning to accept physical sensations transforms your entire relationship with anxiety. Instead of seeing
              your body as the enemy producing uncomfortable sensations, you can recognize it as a protective ally that
              sometimes gets overzealous. This shift allows you to work with your nervous system rather than against it,
              leading to genuine recovery and lasting peace with your body&apos;s natural responses.
            </p>
          </div>

          {/* Moving Forward */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">🚀 Moving Forward</h4>
            <p className="text-base leading-relaxed mb-4">
              Now that you can accept physical sensations and understand their true nature, you&apos;re ready to put this
              knowledge into action through gradual exposure. In Chapter 6: &quot;Gradual Exposure,&quot; you will learn about:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>How to systematically face your fears to reduce their power over you</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>The difference between helpful avoidance and fear-based avoidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Common mistakes people make during exposure work and how to avoid them</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>How to handle setbacks and maintain self-compassion during the process</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">→</span>
                <span>Building confidence through progressive challenges and proven success</span>
              </li>
            </ul>
          </div>

          {/* Final Reflection */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">💭 Reflection</h4>
            <p className="text-blue-800 text-sm leading-relaxed">
              Take a moment to recognize how far you have come. You now have the tools to work with anxiety sensations
              rather than against them. This is a profound shift that will serve you not just with anxiety, but with
              all of life&apos;s uncomfortable emotions. Remember, your body is not your enemy - it&apos;s a protective system
              that can learn to trust your safety through consistent, gentle practice of these acceptance techniques.
            </p>
          </div>

        </div>
      </SimpleInfoCard>

      <LessonCompleteButton
        chapterId={5}
        chapterTitle="Chapter 5"
        onComplete={_onComplete}
      />

    </div>
  );
}