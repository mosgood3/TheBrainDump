'use client';

import React from 'react';

export default function WhatYouWillLearn() {
  const sections = [
    {
      emoji: "🛠️",
      title: "Introduction to the Stack",
      subtitle: "Setting Up Your Environment",
      gradient: "from-blue-500 to-blue-600",
      description: "Install all necessary software and understand the tools you'll be using throughout the course"
    },
    {
      emoji: "⚛️",
      title: "Front-End",
      subtitle: "Building with Next.js",
      gradient: "from-cyan-500 to-blue-600",
      description: "Create beautiful, responsive user interfaces with React and Next.js framework"
    },
    {
      emoji: "🗄️",
      title: "The Back-End",
      subtitle: "APIs and Supabase",
      gradient: "from-green-500 to-emerald-600",
      description: "Build RESTful APIs and integrate Supabase for database, auth, and real-time features"
    },
    {
      emoji: "🤖",
      title: "Prompt Engineering",
      subtitle: "AI-Powered Development",
      gradient: "from-purple-500 to-pink-600",
      description: "Learn to leverage AI tools like Claude and ChatGPT to accelerate your development"
    },
    {
      emoji: "💳",
      title: "Taking Payments",
      subtitle: "Stripe Integration",
      gradient: "from-indigo-500 to-purple-600",
      description: "Implement secure payment processing with Stripe for one-time and subscription payments"
    },
    {
      emoji: "🚀",
      title: "Deploy Your App",
      subtitle: "Going Live with Vercel",
      gradient: "from-orange-500 to-red-600",
      description: "Launch your application to production with Vercel and make it accessible worldwide"
    }
  ];

  return (
    <section id="learn" className="py-20 relative overflow-hidden border-t border-white/5">
      {/* Background Elements - Extended for smooth transitions */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        {/* Orbs that blend with WhatYoullBuild section above */}
        <div className="absolute -top-40 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -top-32 right-1/3 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Middle orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>

        {/* Orbs that extend into Pricing section below */}
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-xl shadow-lg shadow-blue-500/50">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">What You'll</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">Learn</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A step-by-step journey from setup to deployment, covering everything you need to build modern web applications
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10 p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Section Emoji Badge */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-3xl">{section.emoji}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                  <p className="text-xs text-gray-400">{section.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}