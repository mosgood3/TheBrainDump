'use client';

import React from 'react';
import Image from 'next/image';
import { useAuth } from '../../../context/AuthContext';
import { FreeLessonSection } from './FreeLessonSection';
import { UnlockSection } from './UnlockSection';
import { PaidLessonsSection } from './PaidLessonsSection';
import { ClosingSection } from './ClosingSection';

interface CourseSidebarProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
  currentLessonId: number | null;
  currentSublessonId: string | null;
  expandedLessons: Set<number>;
  onToggleLessonExpanded: (lessonId: number) => void;
  onNavigation: (path: string) => void;
  onOpenCheckout: () => void;
}

export function CourseSidebar({
  sidebarOpen,
  onCloseSidebar,
  currentLessonId,
  currentSublessonId,
  expandedLessons,
  onToggleLessonExpanded,
  onNavigation,
  onOpenCheckout
}: CourseSidebarProps) {
  const { isPaid, loading } = useAuth();

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white border-r border-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="px-6 py-5 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-orange-500 p-0.5 shadow-sm">
                <Image
                  src="/images/Home/logo.png"
                  alt="Logo"
                  width={64}
                  height={64}
                  className="w-full h-full rounded-xl object-cover bg-white"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  <span className="text-blue-600">The</span>
                  <span className="text-orange-500">Brain</span>
                  <span className="text-blue-600">Dump</span>
                </h2>
                <p className="text-xs text-gray-500 font-medium">Course Navigation</p>
              </div>
            </div>
            <button
              onClick={onCloseSidebar}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto">
          {/* Free Lesson Section - Introduction */}
          <FreeLessonSection
            currentLessonId={currentLessonId}
            currentSublessonId={currentSublessonId}
            expandedLessons={expandedLessons}
            onToggleLessonExpanded={onToggleLessonExpanded}
            onNavigation={onNavigation}
          />

          {/* Unlock Course Content Section - Only show for non-paid users after loading */}
          {!loading && !isPaid && <UnlockSection onOpenCheckout={onOpenCheckout} />}

          {/* Paid Lessons Section */}
          <PaidLessonsSection
            currentLessonId={currentLessonId}
            currentSublessonId={currentSublessonId}
            expandedLessons={expandedLessons}
            onToggleLessonExpanded={onToggleLessonExpanded}
            onNavigation={onNavigation}
          />

          {/* Closing Section */}
          <ClosingSection
            currentLessonId={currentLessonId}
            currentSublessonId={currentSublessonId}
            expandedLessons={expandedLessons}
            onToggleLessonExpanded={onToggleLessonExpanded}
            onNavigation={onNavigation}
          />
        </div>
      </div>
    </div>
  );
}