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
  const currentSection = pathname.startsWith('/chapter') ? 'chapter' : 
                        pathname.startsWith('/assessment') ? 'assessment' : 'home';

  // Get current lesson name for chapter pages
  const getCurrentLessonName = () => {
    if (currentSection === 'chapter') {
      const lessonIdMatch = pathname.match(/\/chapter\/(\d+)/);
      if (lessonIdMatch) {
        const lessonId = parseInt(lessonIdMatch[1]);
        // You might want to import lessons here or pass it as prop
        // For now, we'll use a simple mapping
        const lessonNames: { [key: number]: string } = {
          1: 'Introduction',
          2: 'What is Anxiety',
          3: 'Mindset for Recovery',
          4: 'Conquering Thoughts',
          5: 'Accepting Sensations',
          6: 'Gradual Exposure',
          7: 'Sink Into Yourself'
        };
        return lessonNames[lessonId] || 'Course Lesson';
      }
    }
    return null;
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-white/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Current Section Title */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {currentSection === 'assessment' && (
              <>
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-bold">📝</span>
                </div>
                <span className="text-sm sm:text-lg font-semibold text-orange-600 truncate">Anxiety Assessment</span>
              </>
            )}
            {currentSection === 'chapter' && (
              <>
                {(() => {
                  const lessonIdMatch = pathname.match(/\/chapter\/(\d+)/);
                  const lessonId = lessonIdMatch ? parseInt(lessonIdMatch[1]) : null;
                  const isLessonOne = lessonId === 1;

                  return (
                    <>
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 ${isLessonOne ? 'bg-gradient-to-br from-green-500 to-green-600' : 'bg-gradient-to-br from-orange-500 to-orange-600'} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-xs sm:text-sm font-bold">
                          {lessonId || '?'}
                        </span>
                      </div>
                      <span className={`text-sm sm:text-lg font-semibold ${isLessonOne ? 'text-green-600' : 'text-orange-600'} truncate`}>{getCurrentLessonName()}</span>
                    </>
                  );
                })()}
              </>
            )}
            {currentSection === 'home' && (
              <span className="text-sm sm:text-lg font-semibold text-gray-900 truncate">Dashboard</span>
            )}
          </div>
        </div>

        {/* User Dropdown Menu */}
        <UserMenu />
      </div>
    </header>
  );
}