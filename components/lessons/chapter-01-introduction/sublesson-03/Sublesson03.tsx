'use client';

import React from 'react';
import Image from 'next/image';

export function ScienceBehindRecoverySublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className="max-w-4xl mx-auto px-2 py-4 sm:p-6">
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">The Science Behind Recovery</h1>
        <p className="text-xl text-gray-600 leading-relaxed">Understanding the therapeutic approach we&apos;ll use</p>
      </header>

      <article className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Recovery from anxiety isn&apos;t about learning complex techniques or following complicated protocols.
          It&apos;s about three fundamental elements: <strong>how you see anxiety</strong>, <strong>how you respond to it</strong>,
          and <strong>allowing time for your brain to rewire</strong>. This course is built on proven scientific principles
          that create lasting change through mindset transformation and consistent practice.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Mindset: The Most Important Part of Recovery</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Your mindset is everything.</strong> Altering your mindset for recovery mode is the quickest
          way to making lasting change. This isn&apos;t about positive thinking or motivation&mdash;it&apos;s about
          fundamentally changing how you view and respond to anxiety.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          When you shift from &quot;fighting anxiety&quot; to &quot;coexisting with anxiety,&quot; from &quot;anxiety is dangerous&quot;
          to &quot;anxiety is uncomfortable but harmless,&quot; you activate your brain&apos;s natural healing mechanisms.
          This mindset shift is what separates those who recover from those who remain stuck.
        </p>

        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-l-4 border-orange-500 rounded-lg p-6 my-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Tenacity: Your Key to Freedom</h4>
              <p className="text-gray-700 leading-relaxed">
                Recovery requires <strong>tenacity</strong>&mdash;the persistent determination to keep practicing your new
                responses even when anxiety feels overwhelming. Tenacity isn&apos;t about being fearless; it&apos;s about moving
                forward despite fear, trusting the process even when progress feels slow. Each time you choose the recovery-oriented
                response, you&apos;re exercising the tenacity that will carry you to freedom.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">❌</span>
              <h4 className="font-semibold text-red-800">Old Mindset</h4>
            </div>
            <ul className="space-y-2 text-red-700">
              <li>• &quot;Fighting anxiety&quot;</li>
              <li>• &quot;Anxiety is dangerous&quot;</li>
              <li>• &quot;I must eliminate this feeling&quot;</li>
            </ul>
            <p className="text-xs text-red-600 mt-3 italic">Keeps you stuck in fear</p>
          </div>
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">✅</span>
              <h4 className="font-semibold text-green-800">Recovery Mindset</h4>
            </div>
            <ul className="space-y-2 text-green-700">
              <li>• &quot;Coexisting with anxiety&quot;</li>
              <li>• &quot;Anxiety is uncomfortable but harmless&quot;</li>
              <li>• &quot;I can function with this feeling&quot;</li>
            </ul>
            <p className="text-xs text-green-600 mt-3 italic">Leads to lasting freedom</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Neuroplasticity: Your Brain&apos;s Ability to Rewire</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          <strong>Neuroplasticity</strong> is your brain&apos;s remarkable ability to reorganize and form new neural 
          connections throughout your life. Every time you respond differently to anxiety, you&apos;re literally 
          rewiring your brain&apos;s neural pathways.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          The key is <strong>consistent, repetitive action</strong>. Each time you choose a recovery-oriented 
          response over an anxiety-driven one, you strengthen new neural pathways while weakening old, 
          fear-based patterns. This is why recovery requires action, not just understanding.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Research shows that within weeks of consistent practice, your brain begins forming new neural 
          networks that support calm, confident responses instead of anxious reactions.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">We Hold the Power to Rewire Our Anxious Brains</h3>
        
        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/SamRewire.png"
            alt="We hold the power to rewire our anxious brains"
            className="max-w-xs rounded-lg shadow-sm"
            width={400}
            height={300}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-8">The Three Core Approaches</h2>

        <div className="space-y-6">
          {/* Mindfulness */}
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mindfulness: Present-Moment Awareness</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Mindfulness</strong> isn&apos;t meditation or relaxation&mdash;it&apos;s the practice of observing your
                  thoughts and feelings without getting caught up in them. It&apos;s learning to witness anxiety
                  without becoming consumed by it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Through mindfulness, you develop the ability to step back and observe: &quot;I&apos;m having the thought
                  that something terrible will happen&quot; rather than believing &quot;Something terrible will happen.&quot;
                  This creates space between you and your anxiety.
                </p>
              </div>
            </div>
          </div>

          {/* Acceptance */}
          <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptance: Stopping the Fight</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Acceptance</strong> means allowing anxiety to be present without trying to fix, control,
                  or eliminate it. This isn&apos;t giving up&mdash;it&apos;s recognizing that fighting anxiety actually fuels it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When you stop resisting anxiety and instead allow it to flow through you naturally, it loses
                  its power over you. Acceptance breaks the cycle of fear that keeps anxiety disorders alive.
                </p>
              </div>
            </div>
          </div>

          {/* Gradual Exposure */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gradual Exposure: Building Confidence Through Action</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Gradual exposure</strong> involves deliberately facing anxiety-provoking situations while
                  practicing your new mindset and skills. This isn&apos;t about forcing yourself into panic&mdash;it&apos;s about
                  systematic, manageable steps that give you opportunities to practice mindfulness and acceptance in real-world situations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Here&apos;s the crucial principle: <strong>We must activate an anxious pathway to rewire it.</strong>
                  You can&apos;t change your brain&apos;s response to anxiety by avoiding it&mdash;you need to experience the anxiety
                  while simultaneously practicing your new mindful and accepting responses. This is how neuroplasticity works.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each exposure gives you a chance to practice observing anxious thoughts without believing them (mindfulness)
                  and allowing uncomfortable sensations to exist without fighting them (acceptance). Through repeated practice
                  in anxiety-provoking situations, these new responses become automatic, and your brain learns that anxiety
                  isn&apos;t dangerous&mdash;building genuine confidence in your ability to handle discomfort.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-8">
          <Image
            src="/images/1_Introduction/SamJourney.png"
            alt="Gradual exposure journey - building confidence through action"
            className="max-w-xs sm:max-w-md rounded-lg shadow-sm"
            width={500}
            height={375}
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why This Approach Creates Lasting Change</h2>
        
        <p className="text-gray-700 leading-relaxed mb-6">
          Unlike symptom-focused approaches that provide temporary relief, this method addresses the root cause: 
          your psychological relationship with anxiety. By combining mindset shifts with neuroplasticity-based 
          practices, you create permanent changes in how your brain processes and responds to anxiety.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 pl-6 py-4 my-8">
          <p className="text-gray-800 font-medium">
            <strong>The result:</strong> You don&apos;t just manage anxiety&mdash;you become genuinely indifferent to it, 
            freeing yourself to live according to your values rather than your fears.
          </p>
        </div>
      </article>
    </div>
  );
}