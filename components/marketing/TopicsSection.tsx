'use client';

import React from 'react';

interface Topic {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  borderColor: string;
}

const topics: Topic[] = [
  {
    title: 'Web Development',
    description: 'Full-stack apps with React, Next.js, and modern frameworks',
    icon: '🌐',
    gradient: 'from-blue-500 to-cyan-500',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Build and train AI models, integrate LLMs into your apps',
    icon: '🤖',
    gradient: 'from-purple-500 to-pink-500',
    borderColor: 'hover:border-purple-500/50',
  },
  {
    title: 'Backend & APIs',
    description: 'Databases, authentication, REST APIs, and serverless',
    icon: '⚡',
    gradient: 'from-orange-500 to-red-500',
    borderColor: 'hover:border-orange-500/50',
  },
  {
    title: 'DevOps & Cloud',
    description: 'Deploy, scale, and manage applications in the cloud',
    icon: '☁️',
    gradient: 'from-green-500 to-teal-500',
    borderColor: 'hover:border-green-500/50',
  },
];

export default function TopicsSection() {
  return (
    <section className="py-20 relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What You&apos;ll <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Learn</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From beginner to builder - master the skills that matter
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 ${topic.borderColor} transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${topic.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{topic.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-400">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
