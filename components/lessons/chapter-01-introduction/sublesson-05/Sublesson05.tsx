'use client';

import React from 'react';
import Image from 'next/image';

export function AddictionLifestyleFactorsSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className="max-w-4xl mx-auto px-2 py-4 sm:p-6">
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Addiction & Lifestyle Factors</h1>
        <p className="text-xl text-gray-600 leading-relaxed">Understanding how habits and lifestyle choices impact anxiety recovery</p>
      </header>

      <article className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Addiction-Anxiety Cycle</h2>

        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/Smoking.png"
            alt="Addiction and anxiety cycle illustration"
            className="max-w-xs sm:max-w-sm"
            width={400}
            height={300}
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Addiction creates a destructive cycle that directly fuels anxiety. Whether it&apos;s substances, behaviors, or
          even seemingly harmless habits, addiction operates on a principle that worsens anxiety over time by
          constantly raising your baseline anxiety levels.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-6">How the Cycle Works</h3>

        <div className="my-12">
          <h4 className="text-center font-bold text-gray-900 mb-8 text-lg">The Constant Anxiety-Relief Loop</h4>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 border-l-4 border-orange-500 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-2">Baseline Anxiety Increases</h5>
                  <p className="text-gray-700">Each time you use a substance or engage in addictive behavior, your brain&apos;s dopamine system becomes slightly more dysregulated, raising your resting anxiety level.</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-r from-red-100 to-pink-100 border-l-4 border-red-500 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-2">Anxiety Until You Get Your Fix</h5>
                  <p className="text-gray-700">You feel anxious, restless, or uncomfortable until you can engage in the addictive behavior again.</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 border-l-4 border-pink-500 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-2">Temporary Relief</h5>
                  <p className="text-gray-700">The substance or behavior provides momentary relief, but this relief is shorter each time.</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border-l-4 border-purple-500 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-2">Higher Baseline</h5>
                  <p className="text-gray-700">Your new &quot;normal&quot; anxiety level is now higher than before, requiring more of the substance/behavior to feel calm.</p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>

            {/* Step 5 */}
            <div className="bg-gradient-to-r from-indigo-100 to-red-100 border-l-4 border-indigo-500 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-gray-900 mb-2">Repeat and Escalate</h5>
                  <p className="text-gray-700">The cycle continues, with increasing baseline anxiety and decreasing relief from the addiction.</p>
                </div>
              </div>
            </div>

            {/* Circular Arrow - Back to Step 1 */}
            <div className="flex justify-center items-center gap-2 pt-4">
              <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-red-600 font-semibold text-sm">Cycle Repeats</span>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 pl-6 py-4 my-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-amber-800">
              <strong>Important:</strong> If dependent on alcohol, benzodiazepines, or other substances, consult a healthcare professional before making changes. Withdrawal can be dangerous and requires medical supervision.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Pleasure-Pain Balance</h3>

        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/PleasurePain.png"
            alt="Pleasure-pain balance showing how addiction affects baseline anxiety"
            className="max-w-md sm:max-w-lg"
            width={600}
            height={450}
          />
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">
          Dr. Anna Lembke&apos;s research on the pleasure-pain balance explains why addiction worsens anxiety. Our brains
          naturally seek equilibrium—when we experience artificial pleasure (from substances, social media, etc.),
          our brain creates an equal and opposite pain response to restore balance.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Over time, this pain response becomes our new baseline. What used to feel neutral now feels anxious and
          uncomfortable. We need the addictive behavior just to feel &quot;normal,&quot; but our new normal is actually a
          heightened state of anxiety and dysregulation.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 my-8">
          <p className="text-gray-800 font-medium">
            <strong>Key insight:</strong> Addiction doesn&apos;t just mask anxiety—it actively creates more anxiety by
            constantly pushing your nervous system out of balance. Breaking free from addictive patterns can
            significantly reduce your baseline anxiety levels.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Lifestyle Factors: Assistance Along Your Journey</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          While lifestyle factors won&apos;t always cure anxiety on their own, they create favorable conditions for your nervous system to regulate and recover more effectively.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-6">Lifestyle Factors that Affect Anxiety</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          {/* Factors That Increase Anxiety */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h4 className="font-bold text-red-900">Factors That Increase Anxiety Sensitivity</h4>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span><strong>Poor sleep</strong> - Dysregulates stress hormones and emotional processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span><strong>Sedentary lifestyle</strong> - Reduces natural stress relief and endorphin production</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span><strong>Isolation</strong> - Increases rumination and removes social support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span><strong>Chronic stress</strong> - Keeps nervous system in constant activation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <span><strong>Information overload</strong> - Overwhelms processing capacity</span>
              </li>
            </ul>
          </div>

          {/* Factors That Support Recovery */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-bold text-green-900">Factors That Support Recovery</h4>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Consistent sleep</strong> - Supports nervous system regulation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Regular movement</strong> - Natural anxiety relief and mood stabilization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Social connection</strong> - Provides perspective and emotional support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Stress management</strong> - Reduces overall nervous system burden</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-0.5">•</span>
                <span><strong>Mindful consumption</strong> - Reduces anxiety-provoking inputs</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Right Approach</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Focus first on the psychological approach—learning to relate differently to anxiety through mindfulness, 
          acceptance, and gradual exposure. These are the tools that create lasting change in your brain&apos;s response patterns.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Simultaneously, consider which addictive patterns might be artificially raising your baseline anxiety. 
          Breaking free from these cycles can provide significant relief and make the psychological work easier.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 my-8">
          <p className="text-blue-900 font-medium">
            <strong>Remember:</strong> You don&apos;t need perfect lifestyle habits to recover from anxiety. The psychological
            approach is powerful enough to work even in imperfect conditions. But addressing addiction cycles and
            optimizing lifestyle factors can accelerate your progress and make the journey more comfortable.
          </p>
        </div>
      </article>
    </div>
  );
}