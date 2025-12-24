'use client';

import React from 'react';
import { getCourseBySlug, getCoursePrice } from '../../courses/CourseIndex';

interface UnlockSectionProps {
  courseSlug: string;
  onOpenCheckout?: () => void;
}

export function UnlockSection({ courseSlug, onOpenCheckout }: UnlockSectionProps) {
  const course = getCourseBySlug(courseSlug);
  const price = getCoursePrice(courseSlug);
  const totalChapters = course?.lessons.length || 6;
  return (
    <div className="px-6 py-5 border-b border-white/10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Unlock Full Course</h3>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-orange-400">Premium</span>
        </div>
      </div>

      {/* Unlock Card */}
      <div className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 border border-orange-500/30 rounded-lg p-4 backdrop-blur-sm shadow-lg shadow-orange-500/20">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/50">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 616 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm">Get Full Access</h4>
            <p className="text-xs text-orange-300">Build real apps with AI</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2.5 mb-4">
          {[
            `All ${totalChapters} course chapters`,
            course?.description || 'Full course access',
            'Lifetime access'
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm shadow-green-500/50">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs text-gray-200 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="mb-3 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-2xl font-bold text-orange-300">{price}</span>
          </div>
          <span className="text-xs text-orange-300 font-semibold">One-time payment</span>
        </div>

        <button
          onClick={onOpenCheckout}
          className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 transform hover:scale-105 flex items-center justify-center gap-2"
        >
          Unlock Full Course
        </button>
      </div>
    </div>
  );
}