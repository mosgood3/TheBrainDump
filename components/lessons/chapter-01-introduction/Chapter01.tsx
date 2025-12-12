'use client';

import React from 'react';

interface IntroductionLessonProps {
  onComplete?: () => void;
  onSubsectionComplete?: (subsectionId: string) => void;
  currentSublesson?: string;
}

export default function IntroductionLesson({ onComplete: _onComplete, onSubsectionComplete: _onSubsectionComplete, currentSublesson: _currentSublesson }: IntroductionLessonProps) {
  return (
    <div className="flex-1 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Lesson Overview */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h1>
          <p className="text-lg text-gray-600 mb-6">Welcome to your anxiety recovery journey</p>
          
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-8 border border-blue-200">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Recovery Journey?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              This introduction will guide you through everything you need to know to get started. 
              Use the sidebar navigation to explore each section at your own pace.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">👋</div>
                <h3 className="font-semibold text-gray-900">Welcome</h3>
                <p className="text-gray-600">Get started with your journey</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🐕</div>
                <h3 className="font-semibold text-gray-900">Meet Your Companions</h3>
                <p className="text-gray-600">Say hello to Sam and Scout</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🗺️</div>
                <h3 className="font-semibold text-gray-900">How This Works</h3>
                <p className="text-gray-600">Understand the course structure</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-600">
              💡 <strong>Tip:</strong> Click on the sections in the sidebar to dive deeper into each topic.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

