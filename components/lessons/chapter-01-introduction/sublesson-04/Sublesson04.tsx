'use client';

import React from 'react';
import Image from 'next/image';

export function PhysiologicalVsPsychologicalSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className="max-w-4xl mx-auto px-2 py-4 sm:p-6">
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Physiological vs Psychological Causes</h1>
        <p className="text-xl text-gray-600 leading-relaxed">Understanding what triggers anxiety and how to address it</p>
      </header>

      <article className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Before diving into anxiety recovery techniques, it&apos;s crucial to understand what might be causing your anxiety. 
          The triggers fall into two main categories: <strong>physiological causes</strong> (physical health issues) and 
          <strong>psychological causes</strong> (mental/emotional patterns). Each requires different approaches.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Physiological Causes: When Your Body Creates Anxiety</h2>

        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/ApeMan.png"
            alt="Physiological causes of anxiety"
            className="max-w-xs sm:max-w-sm"
            width={400}
            height={300}
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Sometimes anxiety symptoms are caused by actual medical conditions or physical imbalances in your body.
          These physiological causes can create real anxiety symptoms that feel identical to psychological anxiety,
          but they require medical treatment to resolve.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-6">Common Medical Conditions That Cause Anxiety</h3>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200 mb-8">
          <div className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">🔬</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Thyroid disorders</h4>
                <p className="text-gray-600 text-sm">Hyperthyroidism can cause racing heart, sweating, and panic-like symptoms</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">❤️</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Heart conditions</h4>
                <p className="text-gray-600 text-sm">Arrhythmias, mitral valve prolapse, or other cardiac issues</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">🍬</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Blood sugar imbalances</h4>
                <p className="text-gray-600 text-sm">Hypoglycemia can trigger anxiety and panic symptoms</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">⚡</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Hormonal changes</h4>
                <p className="text-gray-600 text-sm">Menopause, pregnancy, or other hormonal fluctuations</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">💊</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Medication side effects</h4>
                <p className="text-gray-600 text-sm">Stimulants, steroids, or withdrawal from certain medications</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">😴</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Sleep disorders</h4>
                <p className="text-gray-600 text-sm">Sleep apnea or chronic insomnia affecting nervous system function</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-blue-200">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">🥗</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Nutritional deficiencies</h4>
                <p className="text-gray-600 text-sm">B vitamins, magnesium, or iron deficiencies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">🧬</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Autoimmune conditions</h4>
                <p className="text-gray-600 text-sm">Inflammatory conditions affecting brain function</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-bold text-red-900 mb-2">Medical Treatment Required</h4>
              <p className="text-red-700 mb-2">
                If your anxiety is caused by a medical condition, no amount of therapy, mindfulness, or psychological techniques will fully resolve it until the underlying physical issue is treated.
              </p>
              <p className="text-red-700 text-sm">
                Work with your doctor to rule out medical causes before assuming your anxiety is purely psychological.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-8 my-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-orange-900 mb-2">For Those with Health Anxiety</h3>
            <p className="text-orange-700">Recognizing when anxiety is the real issue</p>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-orange-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Signs of Health Anxiety:
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-orange-700 text-sm">Multiple medical tests have come back normal, but you still believe something is wrong</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-orange-700 text-sm">You constantly seek reassurance from doctors or Google symptoms</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-orange-700 text-sm">You doubt test results or think doctors missed something</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-orange-700 text-sm">Symptoms seem to change or move to different body parts</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-orange-700 text-sm">You fixate on bodily sensations and interpret them as dangerous</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-bold text-orange-900 mb-3">The Path Forward</h4>
            <p className="text-orange-700 mb-3">
              If you&apos;ve had thorough medical evaluation with normal results, <strong>trust your diagnosis</strong>. Health anxiety creates a cycle where seeking more tests actually reinforces the anxiety and prevents real healing.
            </p>
            <p className="text-orange-700 text-sm">
              Multiple normal test results indicate it&apos;s time to focus on psychological treatment approaches. This course can help you break free from the health anxiety cycle.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Psychological Causes: When Your Mind Creates Anxiety</h2>

        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/Brain.png"
            alt="Brain and psychological causes of anxiety"
            className="max-w-xs sm:max-w-sm"
            width={400}
            height={300}
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Most anxiety disorders are psychological in nature—they develop from learned patterns of thinking,
          past experiences, and how your brain has been conditioned to respond to perceived threats.
          This is what our course addresses.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-6">Common Psychological Triggers</h3>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 mb-8">
          <div className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">💔</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Traumatic experiences</h4>
                <p className="text-gray-600 text-sm">Past events that created lasting fear patterns</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">👨‍👩‍👧</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Learned behaviors</h4>
                <p className="text-gray-600 text-sm">Anxiety responses learned in childhood or from others</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">⭐</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Perfectionism</h4>
                <p className="text-gray-600 text-sm">Unrealistic standards leading to chronic worry</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">🌪️</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Catastrophic thinking</h4>
                <p className="text-gray-600 text-sm">Always imagining worst-case scenarios</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">😰</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Fear of fear</h4>
                <p className="text-gray-600 text-sm">Becoming afraid of anxiety sensations themselves</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">🚫</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Avoidance patterns</h4>
                <p className="text-gray-600 text-sm">Lifestyle restrictions that reinforce anxiety</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pb-3 border-b border-purple-200">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">⚡</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Chronic stress</h4>
                <p className="text-gray-600 text-sm">Ongoing life pressures without adequate coping</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">💭</span>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">Low self-esteem</h4>
                <p className="text-gray-600 text-sm">Negative self-image leading to excessive worry</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-bold text-green-900 mb-2">Psychological Treatment Available</h4>
              <p className="text-green-700 mb-2">
                Psychological anxiety responds extremely well to the right therapeutic approaches. This is where techniques like mindfulness, acceptance, and gradual exposure can create lasting change.
              </p>
              <p className="text-green-700 text-sm">
                Our course is specifically designed for psychological anxiety recovery.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Getting the Right Help</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Many people struggle with anxiety for years because they&apos;re treating the wrong cause. If you haven&apos;t 
          had a medical evaluation, it&apos;s worth getting one to rule out physiological causes before focusing 
          solely on psychological treatment.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 my-8">
          <p className="text-gray-800 font-medium">
            <strong>The ideal approach:</strong> Start with a medical evaluation to rule out physiological causes, 
            then use psychological techniques (like those in this course) to address the mental and emotional aspects. 
            Many people benefit from both medical and psychological support working together.
          </p>
        </div>
      </article>
    </div>
  );
}