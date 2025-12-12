'use client';

import React, { useState } from 'react';
import { lessonStyles, SimpleInfoCard } from '../../shared/LessonStyleHelpers';

export function InitialReflectionSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  const [reflections, setReflections] = useState({
    symptoms: '',
    triggers: '',
    impact: '',
    goals: ''
  });

  const handleReflectionChange = (field: string, value: string) => {
    // Limit to 750 characters
    if (value.length <= 750) {
      setReflections(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  return (
    <div className={lessonStyles.container}>
      <div className={lessonStyles.header}>
        <h2 className={lessonStyles.title}>Initial Reflection</h2>
        <p className={lessonStyles.subtitle}>Understanding your unique anxiety experience</p>
      </div>

      <div className={lessonStyles.content}>
        <p>
          Take a moment to reflect on your personal experience with anxiety. <strong>Your responses are completely private</strong> and for your own self-reflection.
        </p>
      </div>

      <SimpleInfoCard title="Your Anxiety Symptoms" variant="noBorder">
        <div className="space-y-3">
          <p className="text-sm text-gray-700 font-medium">
            How does anxiety show up in your life?
          </p>
          <textarea
            value={reflections.symptoms}
            onChange={(e) => handleReflectionChange('symptoms', e.target.value)}
            placeholder="Racing heart, sweating, catastrophic thinking, worry spirals, avoiding certain places..."
            className="w-full h-64 md:h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
          />
          <div className="flex justify-end mt-1">
            <p className={`text-xs font-medium ${
              reflections.symptoms.length >= 750 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {reflections.symptoms.length} / 750 characters
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Triggers and Patterns" variant="noBorder">
        <div className="space-y-3">
          <p className="text-sm text-gray-700 font-medium">
            What tends to trigger your anxiety?
          </p>
          <textarea
            value={reflections.triggers}
            onChange={(e) => handleReflectionChange('triggers', e.target.value)}
            placeholder="Crowded spaces, health worries, public speaking, social situations, driving..."
            className="w-full h-64 md:h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
          />
          <div className="flex justify-end mt-1">
            <p className={`text-xs font-medium ${
              reflections.triggers.length >= 750 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {reflections.triggers.length} / 750 characters
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Life Impact" variant="noBorder">
        <div className="space-y-3">
          <p className="text-sm text-gray-700 font-medium">
            How has anxiety affected your daily life?
          </p>
          <textarea
            value={reflections.impact}
            onChange={(e) => handleReflectionChange('impact', e.target.value)}
            placeholder="Missing social events, skipping work, avoiding activities, relationship difficulties..."
            className="w-full h-64 md:h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
          />
          <div className="flex justify-end mt-1">
            <p className={`text-xs font-medium ${
              reflections.impact.length >= 750 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {reflections.impact.length} / 750 characters
            </p>
          </div>
        </div>
      </SimpleInfoCard>

      <SimpleInfoCard title="Your Recovery Goals" variant="noBorder">
        <div className="space-y-3">
          <p className="text-sm text-gray-700 font-medium">
            What would life look like without anxiety holding you back?
          </p>
          <textarea
            value={reflections.goals}
            onChange={(e) => handleReflectionChange('goals', e.target.value)}
            placeholder="Travel confidently, speak up at work, enjoy social gatherings, sleep peacefully..."
            className="w-full h-64 md:h-48 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm text-gray-900 placeholder:text-gray-500"
          />
          <div className="flex justify-end mt-1">
            <p className={`text-xs font-medium ${
              reflections.goals.length >= 750 ? 'text-red-500' : 'text-gray-500'
            }`}>
              {reflections.goals.length} / 750 characters
            </p>
          </div>
        </div>
      </SimpleInfoCard>


      <SimpleInfoCard title="Moving Forward">
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Remember:</strong> There are no right or wrong answers to these questions. This reflection is simply
            a starting point to help you understand where you are now and where you want to go.
          </p>
          <p>
            As you progress through this course, you might find it helpful to return to these reflections and see
            how your relationship with anxiety has changed. Recovery is possible, and you&apos;ve already taken the first
            important step by being here.
          </p>
        </div>
      </SimpleInfoCard>
    </div>
  );
}