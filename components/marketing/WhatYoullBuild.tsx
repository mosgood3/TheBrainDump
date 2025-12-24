'use client';

import React from 'react';

export default function WhatYoullBuild() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Interactive Course Platform",
      description: "Beautiful lesson pages with progress tracking and user dashboard"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Payment Processing",
      description: "Integrated Stripe payments to monetize your course with checkout flow"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "User Authentication",
      description: "Google OAuth and email login with protected routes and user profiles"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Backend Database",
      description: "Supabase database with user data, course progress, and payment records"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden border-t border-white/5">
      {/* Background decoration - Extended for smooth transitions */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        {/* Orbs that blend with Hero section above */}
        <div className="absolute -top-40 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -top-32 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Middle orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>

        {/* Orbs that extend into next section below */}
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-xl shadow-lg shadow-blue-500/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Build</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">This Exact App</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Create The Brain Dump - the very course platform you're on right now.
            Not a todo list. Not a blog. A <span className="text-blue-400 font-semibold">real course platform</span> with lessons, payments, and authentication.
          </p>
        </div>

        {/* Main Visual/Mockup Area */}
        <div className="mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/10 overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-gray-900/50 border-b border-white/10 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-gray-800/50 rounded px-3 py-1 text-xs text-gray-400 text-center">
                  thebraindump.com
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Course Lessons Preview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300 font-mono">Student Dashboard</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center">
                          <span className="text-blue-300 font-bold text-lg">1</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm mb-1">Setup: Get Your Tools Ready</div>
                          <div className="text-gray-400 text-xs">Setting Up Your Development Environment</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs text-green-400 font-medium">Completed</span>
                        </div>
                        <div className="bg-green-600/50 rounded px-3 py-1 text-xs text-white font-medium">Free</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center">
                          <span className="text-purple-300 font-bold text-lg">2</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm mb-1">Prompt Engineering: Build with AI</div>
                          <div className="text-gray-400 text-xs">Let AI Do the Heavy Lifting</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-gray-400 text-xs">In progress...</div>
                        <div className="bg-green-600/50 rounded px-3 py-1 text-xs text-white font-medium">Free</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-lg p-4 border border-orange-500/20 opacity-60">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-white/70 font-medium text-sm mb-1">Frontend: Build Beautiful UIs</div>
                          <div className="text-gray-500 text-xs">Unlock full course to access</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-orange-400 text-xs font-medium">Locked</div>
                        <div className="bg-orange-600/40 rounded px-3 py-1 text-xs text-white font-medium">$49</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lesson Content Preview */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300 font-mono">Lesson View</span>
                  </div>
                  <div className="space-y-3">
                    {/* Lesson Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">Setup</div>
                        <div className="text-gray-400 text-xs">Chapter 1 of 6</div>
                      </div>
                    </div>

                    {/* Lesson Content */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10 space-y-3">
                      <div className="text-white text-sm font-medium mb-2">📚 What You'll Learn</div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5"></div>
                          <div className="text-xs text-gray-300 flex-1">Learn about modern web development</div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5"></div>
                          <div className="text-xs text-gray-300 flex-1">Set up your computer with the right tools</div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-orange-400 mt-1.5"></div>
                          <div className="text-xs text-gray-300 flex-1">Get comfortable with your coding environment</div>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-2 pt-2">
                      <div className="flex-1 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg p-3 border border-blue-500/30 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="text-xs text-blue-200 font-medium">Previous</span>
                      </div>
                      <div className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 flex items-center justify-center">
                        <span className="text-xs text-white font-medium mr-2">Next</span>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-blue-300 font-semibold">
              From zero to deployed in one course
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
