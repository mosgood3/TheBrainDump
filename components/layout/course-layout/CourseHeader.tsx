'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { UserMenu } from './UserMenu';

interface CourseHeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
}

export function CourseHeader({ onToggleSidebar, sidebarOpen }: CourseHeaderProps) {
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
          1: 'Introduction',
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
    <header className="bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 backdrop-blur-lg border-b border-white/30 shadow-xl fixed top-0 left-0 right-0 lg:sticky lg:left-auto lg:right-auto z-[60]">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          {/* Mobile Menu Toggle - Animated Hamburger/X */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative">
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-200 ${
                  sidebarOpen ? 'top-2 rotate-45' : 'top-0.5'
                }`}
              ></span>
              <span
                className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-opacity duration-200 ${
                  sidebarOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-200 ${
                  sidebarOpen ? 'top-2 -rotate-45' : 'top-3.5'
                }`}
              ></span>
            </div>
          </button>

          {/* Current Section Title */}
          <div className="flex items-center min-w-0">
            {currentSection === 'assessment' && (
              <span className="text-sm sm:text-lg font-medium text-white truncate">Skills Assessment</span>
            )}
            {currentSection === 'chapter' && (
              <span className="text-sm sm:text-lg font-medium text-white truncate">{getCurrentLessonName()}</span>
            )}
            {currentSection === 'home' && (
              <span className="text-sm sm:text-lg font-medium text-white truncate">Dashboard</span>
            )}
          </div>
        </div>

        {/* User Dropdown Menu */}
        <UserMenu />
      </div>
    </header>
  );
}