'use client';

import React from 'react';
import { LessonVideoPlayer } from '../../shared/LessonVideoPlayer';

export function WelcomeSublesson() {
  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Video Section */}
      <div className="mb-16">
        <LessonVideoPlayer
          videoUrl="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Videos/Herointro.webm"
          thumbnailUrl="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/HeroThumbnail.png"
          videoLabel="Course Introduction"
          videoDescription="Watch how we build a full-stack app step by step"
        />
      </div>

      {/* Tech Stack Overview */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Tech Stack Architecture</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here's how all the pieces fit together
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
          {/* User at Top */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl shadow-purple-500/30">
                <div className="text-center">
                  <div className="text-4xl mb-2">👤</div>
                  <div className="text-white font-bold text-lg">User</div>
                  <div className="text-gray-300 text-sm">Browser</div>
                </div>
              </div>
              {/* Arrow Down */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-full translate-y-8">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Frontend Layer */}
          <div className="mb-8 pt-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                  ⚛️
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Frontend</div>
                  <div className="text-blue-300 text-sm">What users see & interact with</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-black/40 rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-white font-semibold mb-1">Next.js</div>
                  <div className="text-gray-400 text-xs">Framework</div>
                </div>
                <div className="bg-blue-600/40 rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-white font-semibold mb-1">React</div>
                  <div className="text-gray-400 text-xs">UI Library</div>
                </div>
                <div className="bg-cyan-600/40 rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-white font-semibold mb-1">Tailwind</div>
                  <div className="text-gray-400 text-xs">Styling</div>
                </div>
              </div>
            </div>
            {/* Arrow Down */}
            <div className="flex justify-center">
              <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-green-500"></div>
            </div>
            <div className="flex justify-center">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Backend/API Layer */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl">
                  🔧
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Backend & API</div>
                  <div className="text-green-300 text-sm">Server-side logic & endpoints</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-white font-semibold mb-1">API Routes</div>
                  <div className="text-gray-400 text-xs">Serverless Functions</div>
                </div>
                <div className="bg-green-600/40 rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-white font-semibold mb-1">Supabase</div>
                  <div className="text-gray-400 text-xs">Auth & Database</div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Parallel Services */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Database */}
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-500 to-green-600"></div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-600/40 rounded-xl p-4">
                <div className="text-3xl mb-2 text-center">🗄️</div>
                <div className="text-white font-bold text-center mb-1">Database</div>
                <div className="text-green-300 text-sm text-center">PostgreSQL</div>
              </div>
            </div>

            {/* AI Services */}
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-500 to-purple-500"></div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/40 rounded-xl p-4">
                <div className="text-3xl mb-2 text-center">🤖</div>
                <div className="text-white font-bold text-center mb-1">AI APIs</div>
                <div className="text-purple-300 text-sm text-center">OpenAI & Claude</div>
              </div>
            </div>

            {/* Payments */}
            <div className="relative">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-500 to-orange-500"></div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-2 border-orange-500/40 rounded-xl p-4">
                <div className="text-3xl mb-2 text-center">💳</div>
                <div className="text-white font-bold text-center mb-1">Payments</div>
                <div className="text-orange-300 text-sm text-center">Stripe API</div>
              </div>
            </div>
          </div>

          {/* Deployment at Bottom */}
          <div className="pt-4">
            <div className="flex justify-center mb-4">
              <div className="w-0.5 h-8 bg-gradient-to-b from-gray-500 to-gray-600"></div>
            </div>
            <div className="flex justify-center mb-4">
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v10.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="bg-gradient-to-br from-gray-600/20 to-slate-600/20 border-2 border-gray-600/40 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-slate-600 rounded-xl flex items-center justify-center text-2xl">
                  🚀
                </div>
                <div>
                  <div className="text-white font-bold text-xl">Deployment</div>
                  <div className="text-gray-300 text-sm">Hosting & Version Control</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/40 rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-white font-semibold mb-1">Vercel</div>
                  <div className="text-gray-400 text-xs">Hosting & CI/CD</div>
                </div>
                <div className="bg-gray-800/60 rounded-lg p-4 border border-white/10 text-center">
                  <div className="text-white font-semibold mb-1">GitHub</div>
                  <div className="text-gray-400 text-xs">Version Control</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
