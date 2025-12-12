'use client';

import React, { useState } from 'react';

interface HeroProps {
  onStartJourney?: () => void;
}

export default function Hero({ onStartJourney }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div id="home" className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-sm font-mono">New Course Available</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Build.</span>
                <br />
                <span className="text-blue-500">Ship.</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Vibe.
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl">
                Learn full-stack development by building a real app from scratch.
                <span className="text-blue-400 font-semibold"> No fluff. Just vibes and code.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-white font-mono">12+</div>
                <div className="text-sm text-gray-400">Hours of Content</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">1</div>
                <div className="text-sm text-gray-400">Full-Stack App</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">∞</div>
                <div className="text-sm text-gray-400">Vibes</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onStartJourney}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Start Building</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch Preview</span>
              </button>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Supabase', 'Stripe', 'Vercel', 'Design Patterns'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side - Video Player */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/0">

                {/* Video or Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <video
                    className="w-full h-full object-cover"
                    controls={isPlaying}
                    autoPlay={isPlaying}
                    muted
                    loop
                    playsInline
                    poster="/images/video-thumbnail.jpg"
                  >
                    <source src="/videos/intro-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Button Overlay */}
                  {!isPlaying && (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 group"
                    >
                      <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-mono">Course Introduction</span>
                  </div>
                  <p className="text-gray-300 text-xs mt-2">Watch how we build a full-stack app step by step</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            </div>

            {/* What You'll Build */}
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                What You'll Build
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A production-ready full-stack application with authentication, database,
                real-time features, and deployment. All while vibing.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-gray-400">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-sm">Beginner-friendly • No prerequisites</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Self-Paced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
