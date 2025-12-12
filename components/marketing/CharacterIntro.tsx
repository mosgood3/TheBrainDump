'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CharacterIntro() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/50 to-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-indigo-400/50 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-300/40 to-indigo-400/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gray-900">I've Been Where</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">You Are</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            10 years of struggling with anxiety, and the journey to complete recovery
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">

            {/* Card Content */}
            <div className="grid md:grid-cols-5 gap-8 p-8 md:p-12">

              {/* Left Side - Image */}
              <div className="md:col-span-2 flex flex-col items-center justify-center">
                <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl p-6 relative overflow-hidden group">
                  <Image
                    src="/images/Home/sam.png"
                    alt="Sam - Your Guide"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 group-hover:from-blue-400/20 group-hover:to-indigo-400/20 transition-all duration-500"></div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mt-6 mb-2">Sam</h3>
                <p className="text-blue-700 font-semibold text-lg">Your Recovery Guide</p>
              </div>

              {/* Right Side - Content */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">10 years of lived experience with severe anxiety and panic attacks</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">Fully recovered through dedicated self-study and practice</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">Deep knowledge of ACT, CBT, and mindfulness-based approaches</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg">Passionate about helping others find their path to freedom</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500 mb-6">
                  <p className="text-gray-800 text-lg italic leading-relaxed">
                    &quot;Recovery isn&apos;t about eliminating anxiety—it&apos;s about transforming your relationship with it. I&apos;ll show you how.&quot;
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  href="/my-story"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Read My Full Story</span>
                  <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}