'use client';

import React from 'react';

export default function CourseDescription() {
  const steps = [
    {
      number: "01",
      title: "Personalized Assessment",
      description: "We start by understanding your unique anxiety patterns and triggers through a comprehensive questionnaire."
    },
    {
      number: "02", 
      title: "Custom Recovery Plan",
      description: "Based on your assessment, we create a tailored step-by-step plan using evidence-based CBT and mindfulness techniques."
    },
    {
      number: "03",
      title: "Interactive Learning",
      description: "Work through engaging lessons with Sam and Scout, your personal guides who make complex concepts simple and relatable."
    },
    {
      number: "04",
      title: "Build Your Toolkit", 
      description: "Develop practical skills and coping strategies that you can use immediately in real-world situations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-8 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-8 w-80 h-80 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            How This Course Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A structured, personalized approach to understanding and managing your anxiety, designed to fit your unique needs and schedule.
          </p>
        </div>
        
        <div className="grid gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 border border-blue-200">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-blue-700 font-medium">Start your personalized journey today</span>
          </div>
        </div>
      </div>
    </section>
  );
}