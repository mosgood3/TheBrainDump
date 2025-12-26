'use client';

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useProgress } from '../../context/ProgressContext';
import { useAuth } from '../../context/AuthContext';
import { CourseSidebar } from './course-layout/CourseSidebar';
import { CourseHeader } from './course-layout/CourseHeader';
import StripeCheckout from '../ui/StripeCheckout';
import { getCourseBySlug, isLessonFree } from '../courses/CourseIndex';

interface CourseLayoutProps {
  children: React.ReactNode;
  courseSlug?: string;
}

export default function CourseLayout({ children, courseSlug: propCourseSlug }: CourseLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [expandedLessons, setExpandedLessons] = useState<Set<number>>(new Set());

  // Use progress context for real data
  const { hasCompletedAssessment } = useProgress();
  const { hasCourseAccess } = useAuth();

  // Parse course slug from pathname if not provided as prop
  const getCourseSlugFromPath = (): string => {
    // Check for new /course/[slug]/... pattern
    const courseMatch = pathname.match(/^\/course\/([^\/]+)/);
    if (courseMatch) {
      return courseMatch[1];
    }
    // Fallback to brain-dump for legacy /chapter/... routes
    return 'brain-dump';
  };

  const courseSlug = propCourseSlug || getCourseSlugFromPath();
  const course = getCourseBySlug(courseSlug);

  // Parse current lesson and sublesson from pathname
  const getCurrentLessonAndSublesson = () => {
    // Handle new /course/[slug]/chapter/[id] pattern
    const courseChapterMatch = pathname.match(/^\/course\/[^\/]+\/chapter\/(\d+)(?:\/(.+))?/);
    if (courseChapterMatch) {
      const lessonId = parseInt(courseChapterMatch[1]);
      const sublessonId = courseChapterMatch[2] || null;
      return { lessonId, sublessonId };
    }

    // Handle legacy /chapter/[id] pattern
    const legacyChapterMatch = pathname.match(/^\/chapter\/(\d+)(?:\/(.+))?/);
    if (legacyChapterMatch) {
      const lessonId = parseInt(legacyChapterMatch[1]);
      const sublessonId = legacyChapterMatch[2] || null;
      return { lessonId, sublessonId };
    }

    return { lessonId: null, sublessonId: null };
  };

  const { lessonId: currentLessonId, sublessonId: currentSublessonId } = getCurrentLessonAndSublesson();

  const handleNavigation = (path: string) => {
    // Extract lesson ID from path
    const lessonIdMatch = path.match(/\/chapter\/(\d+)/);
    const lessonId = lessonIdMatch ? parseInt(lessonIdMatch[1]) : null;

    if (lessonId !== null) {
      // Check if lesson is free or user has course access
      const isFree = isLessonFree(courseSlug, lessonId);
      const hasAccess = isFree || hasCourseAccess(courseSlug);

      if (hasAccess || (hasCompletedAssessment() && hasCourseAccess(courseSlug))) {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-30 overflow-visible">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Sidebar Navigation */}
        <CourseSidebar
          courseSlug={courseSlug}
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
            className="fixed top-[61px] bottom-0 left-0 right-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 lg:ml-80">
          {/* Header */}
          <CourseHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />

          {/* Content - pt-[61px] on mobile to account for fixed header */}
          <main className="flex-1 flex flex-col pt-[61px] lg:pt-0">
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
        courseSlug={courseSlug}
        onPaymentSuccess={() => {
          setCheckoutOpen(false);
          // Reload to update course access status
          window.location.reload();
        }}
      />
    </div>
  );
}