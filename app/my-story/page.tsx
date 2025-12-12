'use client';

import React from 'react';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';

export default function MyStory() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/50 to-blue-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/50 to-purple-500/30 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header with Image */}
            <div className="text-center mb-12">
              <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 shadow-2xl p-6 relative overflow-hidden">
                <Image
                  src="/images/Home/sam.png"
                  alt="Sam"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-900">My Journey From</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Anxiety to Freedom
                </span>
              </h1>

              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                How 10 years of struggle led to complete recovery—and why I created this course
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 lg:p-16">

              {/* Story Sections */}
              <div className="prose prose-lg max-w-none">

                {/* Section 1: The Beginning */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl">1</span>
                    Where It All Started
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Looking back, the seeds were planted long before I recognized anxiety for what it was. My childhood was marked by divorce, unpredictability, and violence. I have isolated memories—scary ones—but most of my childhood feels like a blur, as if my mind protected me by keeping those years at a distance. I grew up with a nervous system that learned the world wasn&apos;t safe, always scanning for the next threat.
                    </p>
                    <p>
                      By age 16, anxiety became something I could name. General worry and unease that came and went in seasons. Some months were manageable, others overwhelming. I learned to live with these waves, thinking this was just how life was for me.
                    </p>
                    <p>
                      Then came late 2024. Everything changed. My familiar anxiety exploded into full-blown panic attacks. The first one was terrifying—I genuinely thought I was dying. The panic attacks became frequent, and with them came agoraphobia. I became afraid of leaving my home, afraid of the places where panic had struck, afraid of being afraid.
                    </p>
                    <p>
                      I lost 25 pounds because I couldn&apos;t eat. Sleep became nearly impossible. The anxiety consumed every waking moment from sunrise to sunset. My mind became trapped in loops of repetitive, intrusive thoughts that I couldn&apos;t escape no matter how hard I tried.
                    </p>
                  </div>
                </div>

                {/* Section 2: The Struggle */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xl">2</span>
                    Years of Fighting
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                      I became obsessed with finding the cure. I spent years learning every coping technique I could find—breathing exercises, distraction methods, positive affirmations, visualization, progressive muscle relaxation. You name it, I tried it. I filled notebooks with strategies and downloaded every recommended app. I was determined to beat this thing.
                    </p>
                    <p>
                      But underneath all these techniques was a fundamental belief: anxiety was the enemy. It was something evil and scary that I needed to eliminate from my life. Every method I tried was another weapon in my war against anxiety. I pushed, I fought, I resisted. I white-knuckled my way through panic attacks, telling myself to just be stronger, to just control it better.
                    </p>
                    <p>
                      Nothing worked. In fact, the harder I fought, the worse it got. The more techniques I tried, the more anxious I became about whether I was doing them right. Every failed attempt felt like proof that I was broken beyond repair. I was exhausting myself fighting an enemy that only grew stronger with each battle. I didn&apos;t realize that the fight itself was the problem.
                    </p>
                  </div>
                </div>

                {/* Section 3: The Turning Point */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white text-xl">3</span>
                    The Breakthrough
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                      The turning point came when I was at my absolute worst. Anxiety had made even basic tasks feel impossible. Getting out of bed, leaving the house, eating a meal—everything required Herculean effort. I was exhausted from fighting, exhausted from trying, exhausted from being terrified every single moment of every single day.
                    </p>
                    <p>
                      And then something shifted. It wasn&apos;t a grand realization or a moment of enlightenment. It was more like... giving up. I just thought, &quot;Fine. I&apos;m going to do it anyway. Anxiety, you can come along if you want.&quot; I stopped trying to make the anxiety go away before I lived my life. I just started living with it there, doing things while anxious instead of waiting to feel better first.
                    </p>
                    <p>
                      It felt like surrender. Like failure, even. But here&apos;s the paradox that changed everything: the moment I stopped fighting, things started to improve. The less I did about my anxiety—the less I analyzed it, resisted it, tried to fix it—the better it got. Not immediately, not dramatically, but gradually. By giving up the war, I stumbled into the actual path to recovery. Acceptance wasn&apos;t a technique I learned. It was what happened when I was too tired to fight anymore.
                    </p>
                  </div>
                </div>

                {/* Section 4: The Recovery */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white text-xl">4</span>
                    Finding Freedom
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Once I discovered that acceptance worked, I dove deep. I started with &quot;Hope and Help for Your Nerves&quot; by Dr. Claire Weekes, which completely validated what I&apos;d stumbled upon. Then came a dozen more books on anxiety, ACT (Acceptance and Commitment Therapy), mindfulness, and philosophy. I wasn&apos;t collecting techniques anymore—I was fundamentally changing how I understood anxiety and my relationship to it.
                    </p>
                    <p>
                      I immersed myself in ACT principles and mindfulness practices. Not as ways to get rid of anxiety, but as frameworks for living a meaningful life regardless of what I was feeling. I learned to observe my thoughts without becoming them. I practiced sitting with uncomfortable sensations instead of running from them. I committed to my values even when anxiety told me to retreat.
                    </p>
                    <p>
                      Gradually, anxiety lost its grip on me. Not because it disappeared—it still shows up sometimes—but because I&apos;m no longer afraid of it. Recovery, for me, doesn&apos;t mean never feeling anxious. It means anxiety no longer dictates my life. I can feel anxious and still do what matters to me. That&apos;s freedom. True, lasting freedom that came from finally understanding what I was fighting all those years—and learning to stop.
                    </p>
                  </div>
                </div>

                {/* Section 5: Why This Course */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-xl">5</span>
                    Why I Created This Course
                  </h2>
                  <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>
                      After recovering, I realized something frustrating: anxiety recovery information is incredibly confusing. There&apos;s so much contradictory advice out there—some telling you to fight anxiety, others saying to accept it, many offering complex techniques that miss the fundamental point. I wasted years sifting through this noise, trying to piece together what actually mattered.
                    </p>
                    <p>
                      The truth is, lasting recovery is surprisingly simple. Not easy—but simple. It&apos;s about understanding a few core principles and actually applying them. I wish I&apos;d had a clear, structured resource that laid out these fundamentals in a way I could understand and practice. Something interactive, not just information to passively consume, but a guided journey to the other side.
                    </p>
                    <p>
                      That&apos;s why I created The Brain Dump. This course cuts through the confusion and teaches you what actually works. It&apos;s designed to be interactive and engaging, giving you the foundational understanding you need to transform your relationship with anxiety. No gimmicks, no endless techniques, no false promises. Just the core principles that lead to real, lasting freedom—the kind I found, and the kind you deserve.
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    You Don&apos;t Have to Struggle for 10 Years
                  </h3>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Recovery took me a decade of trial and error. I&apos;ve distilled everything I learned into this course so you can find freedom faster. You don&apos;t have to figure this out alone.
                  </p>
                  <a
                    href="/auth"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Start Your Journey Today</span>
                    <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
