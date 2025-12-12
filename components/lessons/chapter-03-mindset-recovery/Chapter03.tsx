'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { LessonCompleteButton } from '../shared/LessonStyleHelpers';

interface MindsetRecoveryLessonProps {
  onComplete?: () => void;
}

export default function MindsetRecoveryLesson({ onComplete }: MindsetRecoveryLessonProps) {
  const router = useRouter();

  const handleComplete = () => {
    onComplete?.();
    // Navigate to next lesson (Conquering Your Thoughts)
    router.push('/chapter/4');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto p-4 sm:p-6 pb-8">
        
        {/* Lesson Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mindset for Recovery</h1>
          <p className="text-lg text-gray-600">Developing the mental framework for lasting anxiety recovery</p>
        </div>

        {/* Main Content Area - Ready for your content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              This is a placeholder for your lesson content. You can add text, images, videos,
              interactive elements, and more here.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
              <p className="text-blue-800">
                <strong>Note:</strong> This lesson template is ready for your content.
                You can structure it however you&apos;d like!
              </p>
            </div>
          </div>
        </div>

        {/* Lesson Complete Button */}
        <LessonCompleteButton
          chapterId={3}
          chapterTitle="Chapter 3: Mindset for Recovery"
          onComplete={handleComplete}
        />

      </div>
    </div>
  );
}