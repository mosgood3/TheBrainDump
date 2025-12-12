'use client';

import React from 'react';

interface ConqueringThoughtsLessonProps {
  onComplete?: () => void;
  onSubsectionComplete?: (subsectionId: string) => void;
  currentSublesson?: string;
}

export default function ConqueringThoughtsLesson({ onComplete: _onComplete, onSubsectionComplete: _onSubsectionComplete, currentSublesson: _currentSublesson }: ConqueringThoughtsLessonProps) {
  return (
    <div className="flex-1 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">

        {/* Lesson Overview */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Conquering Thoughts</h1>
          <p className="text-lg text-gray-600 mb-6">Understanding the crucial difference between thoughts and thinking</p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Master the Art of Not Thinking</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Discover the life-changing difference between automatic thoughts and your response to them.
              Learn why anxiety comes from thinking about thoughts, not the thoughts themselves.
            </p>

            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold text-gray-900">What Are Thoughts?</h3>
                <p className="text-gray-600">Automatic, fast mental events</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🔗</div>
                <h3 className="font-semibold text-gray-900">Thinking & Emotions</h3>
                <p className="text-gray-600">Your response to thoughts</p>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <div className="text-2xl mb-2">🌱</div>
                <h3 className="font-semibold text-gray-900">The Practice</h3>
                <p className="text-gray-600">Learning not to think</p>
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