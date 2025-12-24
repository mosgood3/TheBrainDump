'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { UserMenu } from './UserMenu';

interface CourseHeaderProps {
  onToggleSidebar: () => void;
}

export function CourseHeader({ onToggleSidebar }: CourseHeaderProps) {
  const pathname = usePathname();

  // Determine current section based on pathname
  // Check for both /chapter/[id] (legacy) and /course/[slug]/chapter/[id] (new)
  const isChapterPage = pathname.startsWith('/chapter') || pathname.includes('/chapter/');
  const currentSection = isChapterPage ? 'chapter' :
                        pathname.startsWith('/assessment') ? 'assessment' : 'home';

  // Get current lesson name for chapter pages
  const getCurrentLessonName = () => {
    if (currentSection === 'chapter') {
      // Match both /chapter/[id] and /course/[slug]/chapter/[id]
      const lessonIdMatch = pathname.match(/\/chapter\/(\d+)/);
      if (lessonIdMatch) {
        const lessonId = parseInt(lessonIdMatch[1]);
        // You might want to import lessons here or pass it as prop
        // For now, we'll use a simple mapping
        const lessonNames: { [key: number]: string } = {
          1: 'Setup',
          2: 'Prompt Engineering',
          3: 'Frontend',
          4: 'Backend',
          5: 'Payments',
          6: 'Launch'
        };
        return lessonNames[lessonId] || 'Course Lesson';
      }
    }
    return null;
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 backdrop-blur-lg border-b border-white/30 shadow-xl sticky top-0 z-[60]">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Current Section Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {currentSection === 'assessment' && (
              <>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
                  <span className="text-white text-xs sm:text-sm font-bold">📝</span>
                </div>
                <span className="text-sm sm:text-lg font-semibold text-orange-400 truncate">Skills Assessment</span>
              </>
            )}
            {currentSection === 'chapter' && (
              <>
                {(() => {
                  const lessonIdMatch = pathname.match(/\/chapter\/(\d+)/);
                  const lessonId = lessonIdMatch ? parseInt(lessonIdMatch[1]) : null;
                  const isFreeLesson = lessonId === 1 || lessonId === 2;

                  return (
                    <>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 ${isFreeLesson ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-500/50' : 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/50'} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs sm:text-sm font-bold">
                          {lessonId || '?'}
                        </span>
                      </div>
                      <span className={`text-sm sm:text-lg font-semibold ${isFreeLesson ? 'text-green-400' : 'text-orange-400'} truncate`}>{getCurrentLessonName()}</span>
                    </>
                  );
                })()}
              </>
            )}
            {currentSection === 'home' && (
              <span className="text-sm sm:text-lg font-semibold text-white truncate">Dashboard</span>
            )}
          </div>
        </div>

        {/* User Dropdown Menu */}
        <UserMenu />
      </div>
    </header>
  );
}