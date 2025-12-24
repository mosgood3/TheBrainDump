'use client';

import React, { useState } from 'react';

interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  color: string;
  gradient: string;
  icon: string;
  learnings: string[];
}

const chapters: Chapter[] = [
  {
    number: 1,
    title: "Setup: Get Your Tools Ready",
    subtitle: "Setting Up Your Development Environment",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    icon: "🛠️",
    learnings: [
      "Learn about modern web development (no scary jargon!)",
      "Set up your computer with the right tools",
      "Understand how websites and apps work behind the scenes",
      "Get comfortable with your coding environment"
    ]
  },
  {
    number: 2,
    title: "Prompt Engineering: Build with AI",
    subtitle: "Let AI Do the Heavy Lifting",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    icon: "🤖",
    learnings: [
      "Master the art of talking to AI coding assistants",
      "Learn how to describe what you want to build",
      "Use AI to write code for you (yes, really!)",
      "Debug and fix issues with AI help"
    ]
  },
  {
    number: 3,
    title: "Frontend: Build Beautiful UIs",
    subtitle: "Create What Users See",
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-600",
    icon: "🎨",
    learnings: [
      "Build beautiful, modern user interfaces",
      "Learn React basics without getting overwhelmed",
      "Make your app look professional with simple styling",
      "Create responsive designs that work on any device"
    ]
  },
  {
    number: 4,
    title: "Backend: Power Your App with Data",
    subtitle: "Where the Magic Happens",
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    icon: "🔧",
    learnings: [
      "Set up a database without being a database expert",
      "Create APIs that connect your frontend to data",
      "Handle user authentication (logins and signups)",
      "Store and manage your app's information securely"
    ]
  },
  {
    number: 5,
    title: "Payments: Monetize Your App",
    subtitle: "Start Making Money",
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    icon: "💳",
    learnings: [
      "Add payment processing with Stripe (easier than you think)",
      "Create checkout flows that convert",
      "Handle subscriptions and recurring payments",
      "Keep transactions secure and compliant"
    ]
  },
  {
    number: 6,
    title: "Launch: Go Live with Vercel",
    subtitle: "Share Your App with the World",
    color: "teal",
    gradient: "from-teal-500 to-teal-600",
    icon: "🚀",
    learnings: [
      "Deploy your app to the internet in minutes",
      "Set up a custom domain for your app",
      "Configure environment variables and secrets",
      "Monitor and maintain your live application"
    ]
  }
];

interface WhatYoullLearnProps {
  onStartJourney: () => void;
}

export default function WhatYoullLearn({ onStartJourney }: WhatYoullLearnProps) {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);

  const toggleChapter = (chapterNumber: number) => {
    setExpandedChapter(expandedChapter === chapterNumber ? null : chapterNumber);
  };

  // Map colors to Tailwind classes (template literals don't work with Tailwind)
  const getCheckmarkColor = (color: string) => {
    const colorMap: Record<string, string> = {
      'blue': 'text-blue-500',
      'purple': 'text-purple-500',
      'indigo': 'text-indigo-500',
      'pink': 'text-pink-500',
      'orange': 'text-orange-500',
      'teal': 'text-teal-500',
      'violet': 'text-violet-500'
    };
    return colorMap[color] || 'text-gray-500';
  };

  return (
    <section id="lessons" className="py-20 relative overflow-hidden">
      {/* Background decoration - Extended for smooth transitions */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        {/* Orbs that blend with Hero section above */}
        <div className="absolute -top-40 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -top-32 right-1/4 w-56 h-56 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Middle orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>

        {/* Orbs that extend into CharacterIntro section below */}
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapters Grid */}
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg shadow-blue-500/5 border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Chapter Header - Always Visible */}
              <button
                onClick={() => toggleChapter(chapter.number)}
                className="w-full p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Chapter Number Badge */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${chapter.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-white font-bold text-lg md:text-xl">{chapter.number}</span>
                  </div>

                  {/* Chapter Title */}
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {chapter.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400 mt-1">
                      {chapter.subtitle}
                    </p>
                  </div>
                </div>

                {/* Expand/Collapse Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      expandedChapter === chapter.number ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Chapter Content - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedChapter === chapter.number ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-white/10">
                  <ul className="space-y-3">
                    {chapter.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 ${getCheckmarkColor(chapter.color)} flex-shrink-0 mt-0.5`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm md:text-base">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 shadow-2xl shadow-blue-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your First App?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join non-technical people who are creating real apps. No coding experience required. Start today!
            </p>
            <button
              onClick={onStartJourney}
              className="group inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Building Now</span>
              <svg
                className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}