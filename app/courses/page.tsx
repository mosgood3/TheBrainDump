'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../../context/AuthContext';
import { useProgress } from '../../context/ProgressContext';
import { courses, getCoursePrice } from '../../components/courses/CourseIndex';
import { UserMenu } from '../../components/layout/course-layout/UserMenu';

export default function CoursesPage() {
  const { user, loading, hasCourseAccess } = useAuth();
  const { completedLessons } = useProgress();
  const router = useRouter();

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
        <div className="w-8 h-8 border-4 rounded-full border-gray-700 border-t-purple-500 border-r-blue-500 animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-[60] border-b border-white/10 bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">
                <span className="text-blue-400">The</span>
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Brain</span>
                <span className="text-blue-400">Dump</span>
              </span>
            </div>
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white">Courses</h2>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-md sm:max-w-none mx-auto">
          {courses.map((course) => {
            const hasAccess = hasCourseAccess(course.slug);
            const price = getCoursePrice(course.slug);
            const totalLessons = course.lessons.length;
            const freeLessons = course.freeChapterCount;

            // Calculate completion for this course
            const courseLessonIds = course.lessons.map(l => l.id);
            const completedInCourse = completedLessons.filter(id => courseLessonIds.includes(id)).length;
            const completionPercentage = totalLessons > 0 ? Math.round((completedInCourse / totalLessons) * 100) : 0;

            return (
              <div
                key={course.slug}
                className="group relative cursor-pointer"
                onClick={() => router.push(`/course/${course.slug}/chapter/1`)}
              >
                {/* Always-visible glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 group-hover:opacity-50 blur-xl transition-all duration-500"></div>

                {/* Gradient border wrapper */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900 via-blue-950/80 to-purple-950/60 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">

                  {/* Fake UI Preview Header */}
                  <div className="relative h-72 sm:h-64 overflow-hidden bg-gray-950">
                    {/* Browser Chrome */}
                    <div className="relative bg-gray-900 border-b border-white/10 px-3 py-2 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="flex-1 mx-2">
                        <div className="bg-gray-700/50 rounded px-2 py-0.5 text-[10px] text-gray-400 text-center truncate">
                          myapp.vercel.app
                        </div>
                      </div>
                    </div>

                    {/* Fake App UI */}
                    <div className="p-3 h-full">
                      {/* Mini sidebar + content layout */}
                      <div className="flex gap-2 h-full">
                        {/* Mini Sidebar */}
                        <div className="w-16 bg-gray-900 rounded-lg p-2 flex flex-col gap-2 border border-white/5">
                          <div className="w-8 h-8 mx-auto bg-gray-800 rounded-lg flex items-center justify-center">
                            <Image
                              src="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/logo.png"
                              alt={course.title}
                              width={20}
                              height={20}
                              className="w-5 h-5 rounded"
                            />
                          </div>
                          <div className="space-y-1.5 mt-2">
                            <div className="h-1.5 bg-white/30 rounded-full"></div>
                            <div className="h-1.5 bg-white/15 rounded-full"></div>
                            <div className="h-1.5 bg-white/15 rounded-full"></div>
                            <div className="h-1.5 bg-white/10 rounded-full"></div>
                          </div>
                        </div>

                        {/* Mini Content Area */}
                        <div className="flex-1 bg-gray-900 rounded-lg p-3 space-y-2 border border-white/5">
                          {/* Mini lesson cards */}
                          <div className="bg-white/5 rounded-md p-2 border border-white/10">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="text-[8px] text-white/70 font-bold">1</span>
                              </div>
                              <div className="flex-1">
                                <div className="h-1.5 bg-white/40 rounded-full w-3/4 mb-1"></div>
                                <div className="h-1 bg-white/20 rounded-full w-1/2"></div>
                              </div>
                              <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-md p-2 border border-white/10">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                                <span className="text-[8px] text-white/70 font-bold">2</span>
                              </div>
                              <div className="flex-1">
                                <div className="h-1.5 bg-white/40 rounded-full w-2/3 mb-1"></div>
                                <div className="h-1 bg-white/20 rounded-full w-2/5"></div>
                              </div>
                              <div className="w-3.5 h-3.5 border border-white/30 rounded-full"></div>
                            </div>
                          </div>
                          <div className="bg-white/5 rounded-md p-2 border border-white/5 opacity-50">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                                <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <div className="h-1.5 bg-white/30 rounded-full w-1/2 mb-1"></div>
                                <div className="h-1 bg-white/15 rounded-full w-1/3"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gradient-to-b from-transparent via-blue-950/20 to-purple-950/30">
                    {/* Title */}
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-2">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-blue-200 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded-lg">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span>{totalLessons} chapters</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-emerald-200 bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                        <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>{freeLessons} free</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className={`text-lg font-bold ${completionPercentage === 100 ? 'text-green-400' : 'text-blue-300'}`}>
                          {completionPercentage}%
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            completionPercentage === 100
                              ? 'bg-gradient-to-r from-green-500 to-emerald-400'
                              : 'bg-gradient-to-r from-blue-500 to-purple-500'
                          }`}
                          style={{ width: `${completionPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/course/${course.slug}/chapter/1`);
                      }}
                      className="w-full py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
                    >
                      {completionPercentage === 0 ? 'Start Course' : completionPercentage === 100 ? 'Review Course' : 'Continue'}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State (if no courses) */}
        {courses.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No courses available</h3>
            <p className="text-gray-400">Check back later for new courses!</p>
          </div>
        )}
      </main>
    </div>
  );
}
