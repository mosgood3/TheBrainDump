'use client';

import React from 'react';
import { LessonVideoPlayer } from '../../shared/LessonVideoPlayer';

export function IndifferenceSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Video Section */}
      <div className="mb-16">
        <LessonVideoPlayer
          videoUrl="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Videos/Herointro.webm"
          thumbnailUrl="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/HeroThumbnail.png"
          videoLabel="Getting Set Up"
          videoDescription="Watch this walkthrough on setting up your development environment"
        />
      </div>

      {/* Setup Instructions */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Get Your Environment Ready</h2>
          <p className="text-lg text-gray-300">
            Follow these steps to install the tools you'll need and create accounts for the services we'll use.
          </p>
        </div>

        {/* Step 1: VS Code */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              💻
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">1. Download VS Code</h3>
              <p className="text-gray-300">Your code editor - where you'll write all your code</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-300 mb-3">
                Visual Studio Code is a free, powerful code editor that works on Windows, Mac, and Linux.
              </p>
              <a
                href="https://code.visualstudio.com/download"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50"
              >
                <span>Download VS Code</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Step 2: Node.js */}
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              📦
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">2. Download Node.js</h3>
              <p className="text-gray-300">JavaScript runtime - lets you run JavaScript on your computer</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-300 mb-3">
                Node.js is required to run Next.js and install packages. Download the LTS (Long Term Support) version.
              </p>
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-green-500/50"
              >
                <span>Download Node.js</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Step 3: Git */}
        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              🌿
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">3. Download Git</h3>
              <p className="text-gray-300">Version control - track changes to your code</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-300 mb-3">
                Git lets you track changes, collaborate with others, and deploy your app. Essential for every developer.
              </p>
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-purple-500/50"
              >
                <span>Download Git</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Step 4: Google Account */}
        <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
              🔑
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">4. Create a Google Account</h3>
              <p className="text-gray-300">You'll use this to sign up for all our services</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-gray-300 mb-4">
                If you don't have a Google account yet, create one. You'll use it to sign up for:
              </p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>GitHub</strong> - Host your code</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Vercel</strong> - Deploy your app</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Supabase</strong> - Database & authentication</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Stripe</strong> - Accept payments</span>
                </li>
              </ul>
              <a
                href="https://accounts.google.com/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-orange-500/50"
              >
                <span>Create Google Account</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">✅</div>
          <h3 className="text-xl font-bold text-white mb-2">You're All Set!</h3>
          <p className="text-gray-300">
            Once you've completed these steps, you'll be ready to start building. We'll set up the individual service accounts (GitHub, Vercel, Supabase, Stripe) as we need them in later lessons.
          </p>
        </div>
      </div>
    </div>
  );
}
