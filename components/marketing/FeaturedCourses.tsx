'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { courses, getCoursePrice } from '../courses/CourseIndex';

export default function FeaturedCourses() {
  const router = useRouter();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hands-on courses to level up your tech skills
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-md sm:max-w-none mx-auto">
          {/* Active Courses */}
          {courses.map((course) => {
            const price = getCoursePrice(course.slug);
            const totalLessons = course.lessons.length;
            const freeLessons = course.freeChapterCount;

            return (
              <div
                key={course.slug}
                className="group relative cursor-pointer"
                onClick={() => router.push(`/course/${course.slug}`)}
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
                    <div className="flex items-center gap-3 mb-5">
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

                    {/* Price */}
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <span className="text-2xl font-bold text-white">{price}</span>
                        <p className="text-xs text-gray-400 mt-0.5">One-time purchase</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/course/${course.slug}`);
                      }}
                      className="w-full py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5"
                    >
                      Start Learning
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Train Your Own AI - Coming Soon */}
          <div className="group relative">
            {/* Subtle glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-3xl opacity-15 group-hover:opacity-30 blur-xl transition-all duration-500"></div>

            {/* Gradient border wrapper */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>

            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-blue-950/40 to-cyan-950/30 backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-500">

              {/* AI Training Preview */}
              <div className="relative h-72 sm:h-64 overflow-hidden bg-gray-950">
                {/* Terminal-style header */}
                <div className="relative bg-gray-900 border-b border-white/10 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-gray-700/50 rounded px-2 py-0.5 text-[10px] text-gray-400 text-center truncate">
                      training_model.py
                    </div>
                  </div>
                </div>

                {/* AI Training UI */}
                <div className="p-3 h-full">
                  <div className="flex gap-2 h-full">
                    {/* Model Architecture Panel */}
                    <div className="w-20 bg-gray-900/80 rounded-lg p-2 border border-blue-500/20">
                      <div className="text-[8px] text-blue-300 font-medium mb-2">Layers</div>
                      <div className="space-y-1.5">
                        <div className="h-5 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded flex items-center justify-center">
                          <span className="text-[7px] text-white/70">Input</span>
                        </div>
                        <div className="h-5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded flex items-center justify-center">
                          <span className="text-[7px] text-white/60">Dense</span>
                        </div>
                        <div className="h-5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded flex items-center justify-center">
                          <span className="text-[7px] text-white/60">Dense</span>
                        </div>
                        <div className="h-5 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded flex items-center justify-center">
                          <span className="text-[7px] text-white/70">Output</span>
                        </div>
                      </div>
                    </div>

                    {/* Training Progress Panel */}
                    <div className="flex-1 bg-gray-900/80 rounded-lg p-3 border border-blue-500/20 space-y-2">
                      {/* Epoch Progress */}
                      <div>
                        <div className="flex justify-between text-[8px] text-gray-400 mb-1">
                          <span>Epoch 47/100</span>
                          <span className="text-blue-300">47%</span>
                        </div>
                        <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full w-[47%] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-gray-800/50 rounded p-1.5 border border-blue-500/10">
                          <div className="text-[7px] text-gray-500">Loss</div>
                          <div className="text-[10px] text-blue-300 font-mono">0.0234</div>
                        </div>
                        <div className="bg-gray-800/50 rounded p-1.5 border border-blue-500/10">
                          <div className="text-[7px] text-gray-500">Accuracy</div>
                          <div className="text-[10px] text-green-400 font-mono">94.2%</div>
                        </div>
                      </div>

                      {/* Mini Chart */}
                      <div className="bg-gray-800/50 rounded p-1.5 border border-blue-500/10">
                        <div className="text-[7px] text-gray-500 mb-1">Loss Curve</div>
                        <div className="flex items-end gap-0.5 h-6">
                          <div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '100%'}}></div>
                          <div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '85%'}}></div>
                          <div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '70%'}}></div>
                          <div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '55%'}}></div>
                          <div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '45%'}}></div>
                          <div className="flex-1 bg-blue-500/60 rounded-t" style={{height: '35%'}}></div>
                          <div className="flex-1 bg-cyan-500/60 rounded-t" style={{height: '28%'}}></div>
                          <div className="flex-1 bg-cyan-500/60 rounded-t" style={{height: '22%'}}></div>
                          <div className="flex-1 bg-cyan-500/60 rounded-t" style={{height: '18%'}}></div>
                          <div className="flex-1 bg-cyan-500/60 rounded-t" style={{height: '15%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coming Soon Badge */}
                <div className="absolute top-12 right-3 px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-xs font-bold rounded-full border border-blue-500/40 backdrop-blur-sm">
                  COMING SOON
                </div>

                {/* Subtle shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-transparent via-blue-950/20 to-cyan-950/20">
                {/* Title */}
                <h3 className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-2">
                  Train Your Own AI
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Build and fine-tune custom AI models from scratch
                </p>

                {/* Stats Row */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center gap-1.5 text-sm text-blue-200 bg-blue-500/20 border border-blue-500/30 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span>10+ chapters</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-cyan-200 bg-cyan-500/20 border border-cyan-500/30 px-3 py-1.5 rounded-lg">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>PyTorch</span>
                  </div>
                </div>

                {/* Spacer to match active card height */}
                <div className="mb-5 h-[42px]"></div>

                {/* Locked CTA Button */}
                <button
                  disabled
                  className="w-full py-3.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 text-gray-400 cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Trust Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>Beginner-friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Lifetime Access</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Self-Paced</span>
          </div>
        </div>
      </div>
    </section>
  );
}
