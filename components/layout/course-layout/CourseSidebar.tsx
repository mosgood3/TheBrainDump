'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';
import { FreeLessonSection } from './FreeLessonSection';
import { UnlockSection } from './UnlockSection';
import { PaidLessonsSection } from './PaidLessonsSection';
import { ClosingSection } from './ClosingSection';
import { getCourseBySlug } from '../../courses/CourseIndex';

interface CourseSidebarProps {
  courseSlug: string;
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
  currentLessonId: number | null;
  currentSublessonId: string | null;
  expandedLessons: Set<number>;
  onToggleLessonExpanded: (lessonId: number) => void;
  onNavigation: (path: string) => void;
  onOpenCheckout?: () => void;
}

export function CourseSidebar({
  courseSlug,
  sidebarOpen,
  onCloseSidebar,
  currentLessonId,
  currentSublessonId,
  expandedLessons,
  onToggleLessonExpanded,
  onNavigation,
  onOpenCheckout
}: CourseSidebarProps) {
  const { hasCourseAccess, loading } = useAuth();
  const course = getCourseBySlug(courseSlug);
  const hasAccess = hasCourseAccess(courseSlug);

  return (
    <div className={`fixed top-[61px] bottom-0 left-0 z-50 w-80 bg-gradient-to-b from-gray-900 via-blue-950/90 to-gray-900 backdrop-blur-lg border-r border-white/30 shadow-xl transform transition-transform duration-300 ease-in-out ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:top-0 lg:translate-x-0`}>
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg shadow-blue-500/30">
              <Image
                src="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/logo.png"
                alt="Logo"
                width={64}
                height={64}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {course?.title || 'Course'}
              </h2>
              <p className="text-xs text-gray-400 font-medium">Course Navigation</p>
            </div>
          </div>
        </div>

        {/* Back to Courses Link */}
        <div className="px-4 py-3 border-b border-white/10">
          <Link
            href="/courses"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Courses
          </Link>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto">
          {/* Free Lesson Section - Introduction */}
          <FreeLessonSection
            courseSlug={courseSlug}
            currentLessonId={currentLessonId}
            currentSublessonId={currentSublessonId}
            expandedLessons={expandedLessons}
            onToggleLessonExpanded={onToggleLessonExpanded}
            onNavigation={onNavigation}
          />

          {/* Unlock Course Content Section - Only show for users without access after loading */}
          {!loading && !hasAccess && <UnlockSection courseSlug={courseSlug} onOpenCheckout={onOpenCheckout} />}

          {/* Paid Lessons Section */}
          <PaidLessonsSection
            courseSlug={courseSlug}
            currentLessonId={currentLessonId}
            currentSublessonId={currentSublessonId}
            expandedLessons={expandedLessons}
            onToggleLessonExpanded={onToggleLessonExpanded}
            onNavigation={onNavigation}
          />

          {/* Closing Section */}
          <ClosingSection
            courseSlug={courseSlug}
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