'use client';

import React from 'react';
import Image from 'next/image';

export function IndifferenceSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className="max-w-4xl mx-auto px-2 py-4 sm:p-6">
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Indifference</h1>
        <p className="text-xl text-gray-600 leading-relaxed">The key to freedom from anxiety&apos;s grip</p>
      </header>

      <article className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The goal of this course isn&apos;t to eliminate anxiety—that&apos;s impossible since it&apos;s just one of our natural emotions. 
          Instead, we&apos;re aiming for something much more powerful: <strong>indifference</strong>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What is Indifference?</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Indifference</strong> can be defined as a lack of interest or concern. 
          In the context of anxiety recovery, it means reaching a state where you no longer 
          fear your anxiety or pay much attention to it.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          When you&apos;re indifferent to anxiety, it will fade into the background of your life. 
          You might still experience anxious thoughts or sensations, but you don&apos;t think twice about them and are no longer afraid.
          This allows you to be present in your life and do the things that make you happy.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Monster Under the Bed Example</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Think of indifference like the &quot;monster under the bed&quot; you might have feared as a child. 
          When you were a kid, this scenario was horrifying and would cause a lot of anxiety.
        </p>
        
        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/MonsterBefore.png"
            alt="Child afraid of monster under bed - representing fear and anxiety"
            className="max-w-xs rounded-lg shadow-sm"
            width={400}
            height={300}
          />
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Today, if you had this same thought, you might laugh or simply not pay attention to it. The goal of this course is to develop that same reaction to anxiety—however it shows up in your life, whether it&apos;s panic attacks, OCD, GAD, or any other form. Our goal is to become <strong>indifferent</strong> to all of them.
        </p>
        
        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/MonsterAfter.png"
            alt="Child peacefully sleeping - representing indifference and recovery"
            className="max-w-xs rounded-lg shadow-sm"
            width={400}
            height={300}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Indifference Is Achieved</h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Indifference isn&apos;t achieved through thinking or understanding alone—it requires <strong>action</strong>.
          Each time you act with indifference toward anxiety (despite feeling it), you&apos;re literally rewiring your brain&apos;s response patterns.
        </p>

        {/* Flow Chart */}
        <div className="my-12 space-y-6">
          {/* Step 1 */}
          <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recognition</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you constantly monitor, fight, or try to make anxiety go away, you&apos;re reinforcing neural pathways that treat anxiety as a threat.
                </p>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Step 2 */}
          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Action-Based Response</h3>
                <p className="text-gray-700 leading-relaxed">
                  To reach indifference, you must <em>act</em> indifferently even while feeling anxious. This means continuing your normal activities, making decisions based on your values rather than your anxiety, and treating anxious thoughts as background noise.
                </p>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* Step 3 */}
          <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Neural Rewiring</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each time you take action despite anxiety (rather than because of it), you&apos;re creating new neural pathways. Your brain learns through repeated experience that anxiety isn&apos;t actually dangerous, gradually reducing its automatic threat response.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 my-8">
          <p className="text-gray-800 font-medium">
            <strong>The Result:</strong> Through consistent action-based practice, indifference becomes your natural response. 
            You&apos;re not suppressing anxiety or pretending it doesn&apos;t exist—you&apos;re genuinely unbothered by its presence because 
            your brain has learned it&apos;s not a threat worth responding to.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">No Coping Strategies Needed</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Traditional coping strategies—like deep breathing, progressive muscle relaxation, or distraction techniques—actually 
          backfire in the long run. While they might provide temporary relief, they reinforce the message to your brain 
          that anxiety is dangerous and needs to be managed or controlled.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          Every time you use a coping strategy, you&apos;re essentially telling your nervous system: &quot;This feeling is a threat 
          that requires action.&quot; This keeps you stuck in the cycle of fear and avoidance. True recovery happens when you 
          learn to do nothing special about anxiety—when you can experience it without needing to fix, manage, or escape it.
        </p>
      </article>
    </div>
  );
}