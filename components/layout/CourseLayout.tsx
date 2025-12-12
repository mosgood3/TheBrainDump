'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import StripeCheckout from '../ui/StripeCheckout';
import { CourseSidebar } from './course-layout/CourseSidebar';
import { CourseHeader } from './course-layout/CourseHeader';

interface CourseLayoutProps {
  children: React.ReactNode;
}

export default function CourseLayout({ children }: CourseLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedLessons, setExpandedLessons] = useState<Set<number>>(new Set());
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Use progress context for real data
  const { hasCompletedAssessment } = useProgress();
  const { isPaid } = useAuth();

  // Parse current lesson and sublesson from pathname
  const getCurrentLessonAndSublesson = () => {
    const currentSection = pathname.startsWith('/chapter') ? 'chapter' : 
                          pathname.startsWith('/assessment') ? 'assessment' : 'home';
    
    if (currentSection === 'chapter') {
      const pathParts = pathname.split('/');
      const lessonId = parseInt(pathParts[2]);
      const sublessonId = pathParts[3] || null;
      return { lessonId, sublessonId };
    }
    return { lessonId: null, sublessonId: null };
  };

  const { lessonId: currentLessonId, sublessonId: currentSublessonId } = getCurrentLessonAndSublesson();

  // Note: Removed auto-expansion to keep introduction collapsed on first login

  const handleNavigation = (path: string) => {
    if (path.startsWith('/chapter')) {
      // Extract lesson ID from path to check access requirements
      const lessonIdMatch = path.match(/\/chapter\/(\d+)/);
      const lessonId = lessonIdMatch ? parseInt(lessonIdMatch[1]) : null;

      // Allow navigation based on lesson access rules:
      // - Lessons 1 and 2: Free for all users
      // - Lessons 3-7: Require completed assessment AND payment
      if (lessonId === 1 || lessonId === 2 || (hasCompletedAssessment() && isPaid)) {
        router.push(path);
        setSidebarOpen(false);
      }
    }
  };

  const toggleLessonExpanded = (lessonId: number) => {
    const newExpanded = new Set(expandedLessons);
    if (newExpanded.has(lessonId)) {
      newExpanded.delete(lessonId);
    } else {
      newExpanded.add(lessonId);
    }
    setExpandedLessons(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden">
      {/* Flowing Background Elements */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/70 to-blue-500/40 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/70 to-orange-500/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/60 to-blue-600/35 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-500/60 to-orange-600/35 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-blue-400/50 to-orange-400/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Sidebar Navigation */}
        <CourseSidebar
          sidebarOpen={sidebarOpen}
          onCloseSidebar={() => setSidebarOpen(false)}
          currentLessonId={currentLessonId}
          currentSublessonId={currentSublessonId}
          expandedLessons={expandedLessons}
          onToggleLessonExpanded={toggleLessonExpanded}
          onNavigation={handleNavigation}
          onOpenCheckout={() => setCheckoutOpen(true)}
        />

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <CourseHeader onToggleSidebar={() => setSidebarOpen(true)} />

          {/* Content */}
          <main className="flex-1 flex flex-col">
            <div className="flex-1">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Stripe Checkout Modal */}
      <StripeCheckout 
        isOpen={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
      />
    </div>
  );
}