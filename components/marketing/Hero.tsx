'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface HeroProps {
  onStartJourney?: () => void;
}

export default function Hero({ onStartJourney }: HeroProps) {
  const router = useRouter();

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-30 overflow-visible">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating App Screens - Background Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full max-w-5xl aspect-square scale-100 opacity-30 sm:opacity-40">

          {/* Floating Screen 1 - Code Editor (Top Left) */}
          <div className="absolute -top-20 left-2 sm:top-4 sm:left-4 lg:top-12 lg:left-16 w-32 sm:w-36 lg:w-48 animate-float" style={{animationDelay: '0s'}}>
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-blue-500/20 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800/50 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="ml-2 text-[10px] text-gray-500 font-mono">app.tsx</span>
              </div>
              <div className="p-3 font-mono text-[10px] leading-relaxed">
                <div><span className="text-purple-400">const</span> <span className="text-blue-300">App</span> <span className="text-white">=</span> <span className="text-purple-400">()</span> <span className="text-purple-400">{`=>`}</span> <span className="text-yellow-300">{`{`}</span></div>
                <div className="pl-2"><span className="text-purple-400">return</span> <span className="text-gray-500">(</span></div>
                <div className="pl-4"><span className="text-blue-400">&lt;div&gt;</span></div>
                <div className="pl-6"><span className="text-green-400">Hello</span></div>
                <div className="pl-4"><span className="text-blue-400">&lt;/div&gt;</span></div>
                <div className="pl-2"><span className="text-gray-500">)</span></div>
                <div><span className="text-yellow-300">{`}`}</span></div>
              </div>
            </div>
          </div>

          {/* Floating Screen 2 - AI Chat (Top Right) */}
          <div className="absolute -top-24 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-16 w-32 sm:w-36 lg:w-48 animate-float" style={{animationDelay: '0.5s'}}>
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-purple-500/20 overflow-hidden">
              <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-b border-white/5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <span className="text-[8px]">AI</span>
                </div>
                <span className="text-[10px] text-gray-300 font-medium">Assistant</span>
              </div>
              <div className="p-3 space-y-2">
                <div className="bg-white/5 rounded-lg px-2 py-1.5">
                  <p className="text-[9px] text-gray-400">How do I deploy?</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg px-2 py-1.5">
                  <p className="text-[9px] text-gray-300">Run `npm run build` then push to Vercel...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Screen 3 - Database (Bottom Right) */}
          <div className="absolute -bottom-8 right-2 sm:bottom-16 sm:right-4 lg:bottom-20 lg:right-12 w-36 sm:w-40 lg:w-52 animate-float" style={{animationDelay: '1s'}}>
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-emerald-500/20 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 bg-gray-800/50 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                  <span className="text-[10px] text-gray-400 font-medium">Database</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-[8px] text-green-400">Connected</span>
                </div>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex items-center gap-2 text-[9px]">
                  <span className="text-gray-500">users</span>
                  <span className="text-emerald-400">1,247 rows</span>
                </div>
                <div className="flex items-center gap-2 text-[9px]">
                  <span className="text-gray-500">posts</span>
                  <span className="text-emerald-400">8,392 rows</span>
                </div>
                <div className="flex items-center gap-2 text-[9px]">
                  <span className="text-gray-500">comments</span>
                  <span className="text-emerald-400">24,518 rows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Screen 4 - Terminal (Bottom Left) */}
          <div className="absolute -bottom-4 left-2 sm:bottom-8 sm:left-4 lg:bottom-12 lg:left-8 w-36 sm:w-40 lg:w-52 animate-float" style={{animationDelay: '1.5s'}}>
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-orange-500/20 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800/50 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="ml-2 text-[10px] text-gray-500 font-mono">terminal</span>
              </div>
              <div className="p-3 font-mono text-[9px] leading-relaxed">
                <div className="text-green-400">$ npm run dev</div>
                <div className="text-gray-500 mt-1">Ready on localhost:3000</div>
                <div className="text-blue-400 mt-1">Compiled successfully!</div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-green-400">$</span>
                  <span className="w-1.5 h-3 bg-green-400 animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Screen 5 - Stripe Payments (Left Center) */}
          <div className="absolute top-1/3 left-0 sm:top-1/2 sm:-left-4 lg:left-0 transform -translate-y-1/2 w-28 sm:w-32 lg:w-40 animate-float" style={{animationDelay: '2s'}}>
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-indigo-500/20 overflow-hidden">
              <div className="flex items-center gap-1.5 px-2 py-1.5 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border-b border-white/5">
                <svg className="w-3 h-3 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                </svg>
                <span className="text-[9px] text-gray-300 font-medium">Payments</span>
              </div>
              <div className="p-2 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-gray-500">Today</span>
                  <span className="text-[9px] text-green-400 font-bold">+$847</span>
                </div>
                <div className="h-px bg-white/5"></div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] text-gray-300">Payment received</p>
                    <p className="text-[7px] text-gray-500">$49.00 - Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Screen 6 - AI Training (Right Center) */}
          <div className="absolute top-1/3 right-0 sm:top-1/2 sm:-right-4 lg:right-0 transform -translate-y-1/2 w-32 sm:w-36 lg:w-44 animate-float" style={{animationDelay: '2.5s'}}>
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-pink-500/20 overflow-hidden">
              <div className="flex items-center gap-1.5 px-2 py-1.5 bg-gradient-to-r from-pink-900/50 to-purple-900/50 border-b border-white/5">
                <svg className="w-3 h-3 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-[9px] text-gray-300 font-medium">Model Training</span>
              </div>
              <div className="p-2 space-y-2">
                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-gray-500">Epoch</span>
                  <span className="text-pink-400 font-mono">24/50</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-1.5 rounded-full" style={{width: '48%'}}></div>
                </div>
                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-gray-500">Accuracy</span>
                  <span className="text-green-400 font-bold">94.2%</span>
                </div>
                <div className="flex items-center justify-between text-[8px]">
                  <span className="text-gray-500">Loss</span>
                  <span className="text-blue-400 font-mono">0.0847</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content - Overlaid on top */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="text-center space-y-8">

          {/* Main Heading with Fade-in Animation */}
          <div className="space-y-2">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tight">
              <span className="inline-block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
                Learn
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.5)] animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                Build
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(249,115,22,0.5)] animate-fade-in-up opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
                Deploy
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{animationDelay: '1.1s', animationFillMode: 'forwards'}}>
            Hands-on courses for modern tech.
          </p>

          {/* CTA */}
          <div className="pt-4 animate-fade-in-up opacity-0" style={{animationDelay: '1.4s', animationFillMode: 'forwards'}}>
            <button
              onClick={onStartJourney}
              className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold text-lg rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
            >
              <span>Get started for free</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
