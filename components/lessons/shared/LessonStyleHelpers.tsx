'use client';

import React, { useState } from 'react';
import { useProgress } from '../../../context/ProgressContext';

// Simple, consistent styling for all lessons
// DESIGN NOTE: Avoid overusing SimpleInfoCard boxes in lessons - too many boxes creates visual clutter
// Use clean typography and minimal containers for better readability and visual flow
export const lessonStyles = {
  container: "space-y-6",
  header: "text-center mb-6",
  title: "text-2xl font-bold text-gray-900 mb-2",
  subtitle: "text-gray-600",
  icon: "text-4xl mb-3",
  content: "prose prose-lg max-w-none text-gray-700 space-y-4",
  card: "bg-white border border-gray-200 rounded-lg p-6",
  highlight: "bg-blue-50 border border-blue-200 rounded-lg p-4",
  button: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",
  buttonCenter: "text-center pt-4"
};

// Simple Video Player Component
interface SimpleVideoPlayerProps {
  title: string;
  description: string;
  videoSrc?: string;
  className?: string;
}

export function SimpleVideoPlayer({ title, description, videoSrc, className = "" }: SimpleVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`${lessonStyles.card} ${className}`}>
      <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
        {!isPlaying ? (
          <div 
            className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
            onClick={() => setIsPlaying(true)}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-600 text-sm">Click to play</p>
            </div>
          </div>
        ) : (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
          >
            <source src={videoSrc || "/videos/placeholder.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Simple Info Card Component
interface SimpleInfoCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlight' | 'noBorder';
}

export function SimpleInfoCard({ title, children, variant = 'default' }: SimpleInfoCardProps) {
  let cardStyle = lessonStyles.card;
  if (variant === 'highlight') {
    cardStyle = lessonStyles.highlight;
  } else if (variant === 'noBorder') {
    cardStyle = "bg-white rounded-lg p-6";
  }

  return (
    <div className={cardStyle}>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

// Simple Step List Component
interface SimpleStepListProps {
  steps: Array<{
    title: string;
    description: string;
  }>;
}

export function SimpleStepList({ steps }: SimpleStepListProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm flex-shrink-0">
            {index + 1}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{step.title}</h4>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Simple Button Component
interface SimpleButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export function SimpleButton({ children, onClick, disabled = false }: SimpleButtonProps) {
  return (
    <div className={lessonStyles.buttonCenter}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${lessonStyles.button} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {children}
      </button>
    </div>
  );
}

// Lesson Complete Button Component
interface LessonCompleteButtonProps {
  chapterId: number;
  chapterTitle: string;
  onComplete: () => void;
}

export function LessonCompleteButton({ chapterId, chapterTitle, onComplete }: LessonCompleteButtonProps) {
  const { completeLesson, isLessonCompleted } = useProgress();
  const [isLoading, setIsLoading] = useState(false);

  // Get current completion status from context
  const isCompleted = isLessonCompleted(chapterId);

  const handleComplete = async () => {
    if (isLoading || isCompleted) return; // Don't do anything if already completed

    setIsLoading(true);
    try {
      await completeLesson(chapterId);
      onComplete();
    } catch (error) {
      console.error('Failed to complete lesson:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {isCompleted ? 'Lesson Completed!' : `Complete ${chapterTitle}`}
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          {isCompleted
            ? `Great work! You've successfully completed ${chapterTitle}.`
            : `You've finished ${chapterTitle}! Click below to mark this lesson as complete and unlock your progress.`
          }
        </p>
        {!isCompleted && (
          <button
            onClick={handleComplete}
            disabled={isLoading}
            className={`inline-flex items-center px-8 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform ${
              isLoading
                ? 'bg-gray-400 text-white cursor-wait'
                : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white hover:scale-105'
            }`}
        >
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          <span className="mr-2">
            {isLoading ? 'Completing...' : 'Mark Lesson Complete'}
          </span>
          {!isLoading && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
        )}
      </div>
    </div>
  );
}