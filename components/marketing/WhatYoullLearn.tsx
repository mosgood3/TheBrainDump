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
    title: "Introduction",
    subtitle: "Understanding Your Starting Point",
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    icon: "🎯",
    learnings: [
      "Discover the core mindset shift needed for recovery",
      "Learn why anxiety isn't something to fight or eliminate",
      "Understand the science behind lasting recovery",
      "Identify the difference between physical and mental symptoms"
    ]
  },
  {
    number: 2,
    title: "What Is Anxiety",
    subtitle: "The Truth About Your Experience",
    color: "purple",
    gradient: "from-purple-500 to-purple-600",
    icon: "🧠",
    learnings: [
      "Learn what anxiety really is and why it happens",
      "Understand the concept of 'second fear' and how it traps you",
      "Identify common misconceptions that keep people stuck",
      "Recognize cognitive biases that fuel anxiety"
    ]
  },
  {
    number: 3,
    title: "Mindset & Recovery",
    subtitle: "Building Your Foundation",
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-600",
    icon: "🌱",
    learnings: [
      "Accept that recovery is nonlinear (and why that's okay)",
      "Develop tenacity and persistence for the journey ahead",
      "Understand neuroplasticity and how your brain can change",
      "Practice patience and self-compassion during setbacks"
    ]
  },
  {
    number: 4,
    title: "Conquering Thoughts",
    subtitle: "Master Your Inner Observer",
    color: "pink",
    gradient: "from-pink-500 to-pink-600",
    icon: "💭",
    learnings: [
      "Learn the difference between thoughts and thinking",
      "Master the Observer technique to detach from anxious thoughts",
      "Practice meditation for mental clarity and calm",
      "Dismantle anxious thought patterns effectively",
      "Move beyond coping to true freedom"
    ]
  },
  {
    number: 5,
    title: "Accepting Sensations",
    subtitle: "Befriend Your Body",
    color: "orange",
    gradient: "from-orange-500 to-orange-600",
    icon: "❤️",
    learnings: [
      "Understand why physical symptoms feel so scary",
      "Learn why you developed fear of sensations",
      "Change your response to uncomfortable feelings",
      "Apply acceptance beyond anxiety to all of life"
    ]
  },
  {
    number: 6,
    title: "Gradual Exposure",
    subtitle: "Face Your Fears Systematically",
    color: "teal",
    gradient: "from-teal-500 to-teal-600",
    icon: "🎯",
    learnings: [
      "Understand the science of exposure therapy",
      "Create your personalized exposure hierarchy",
      "Learn how to approach fears without being overwhelmed",
      "Avoid common exposure mistakes that slow progress"
    ]
  },
  {
    number: 7,
    title: "Sink Into What You Are",
    subtitle: "Your Path Forward",
    color: "violet",
    gradient: "from-violet-500 to-violet-600",
    icon: "✨",
    learnings: [
      "Integrate everything you've learned into daily life",
      "Discover resources for continued growth",
      "Receive a personal message about your unique journey",
      "Create your personalized action plan for lasting freedom"
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
    <section id="lessons" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">7-Keys</span> to Freedom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive, science-based program that takes you from anxious to empowered.
            Click each chapter to see what you'll learn.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Chapter Header - Always Visible */}
              <button
                onClick={() => toggleChapter(chapter.number)}
                className="w-full p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Chapter Number Badge */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${chapter.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-white font-bold text-lg md:text-xl">{chapter.number}</span>
                  </div>

                  {/* Chapter Title */}
                  <div className="text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {chapter.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
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
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
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
                        <span className="text-gray-700 text-sm md:text-base">{learning}</span>
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
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands who have found freedom from anxiety. Your journey begins today.
            </p>
            <button
              onClick={onStartJourney}
              className="group inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Begin Your Journey</span>
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