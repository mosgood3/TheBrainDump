'use client';

import React from 'react';

interface WhatIsAnxietyLessonProps {
  onComplete?: () => void;
  onSubsectionComplete?: (subsectionId: string) => void;
  currentSublesson?: string;
}

export default function WhatIsAnxietyLesson({ onComplete: _onComplete, onSubsectionComplete: _onSubsectionComplete, currentSublesson: _currentSublesson }: WhatIsAnxietyLessonProps) {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Lesson Overview */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">What is Anxiety</h1>
          <p className="text-lg text-gray-600 mb-6">Understanding the root causes and mechanisms of anxiety</p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understand Your Brain&apos;s Alarm System</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Learn what anxiety really is, why it happens, and most importantly—why it&apos;s not your fault. 
              Understanding is the first step to freedom.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-semibold text-gray-900">The Basics</h3>
                <p className="text-gray-600">What anxiety actually is</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900">Fight, Flight, Freeze</h3>
                <p className="text-gray-600">Your survival responses</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🔄</div>
                <h3 className="font-semibold text-gray-900">Why It Persists</h3>
                <p className="text-gray-600">Breaking the cycle</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-sm text-gray-600">
              💡 <strong>Tip:</strong> Click on the sections in the sidebar to explore each topic in detail.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}