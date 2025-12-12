'use client';

import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-green-600">What People</span> <span className="text-blue-600">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who have transformed their relationship with anxiety
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <TestimonialCarousel />
        </div>

      </div>
    </section>
  );
}