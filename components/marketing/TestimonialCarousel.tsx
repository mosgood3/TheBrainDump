'use client';

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    age: 28,
    location: "New York",
    text: "After struggling with anxiety for years, Sam's personalized plan gave me the tools I needed. I went from daily panic attacks to feeling confident and in control.",
    rating: 5,
    timeframe: "3 months"
  },
  {
    id: 2,
    name: "Mike R.",
    age: 35,
    location: "California",
    text: "The way Sam and Scout explained anxiety made everything click. For the first time, I understood why I felt the way I did and how to change it.",
    rating: 5,
    timeframe: "6 weeks"
  },
  {
    id: 3,
    name: "Emma L.",
    age: 24,
    location: "Texas",
    text: "I was skeptical at first, but the personalized approach really works. The exercises were tailored perfectly to my specific triggers and fears.",
    rating: 5,
    timeframe: "2 months"
  },
  {
    id: 4,
    name: "David K.",
    age: 42,
    location: "Florida",
    text: "As someone who tried therapy before with limited success, this program gave me practical tools I could use immediately. Life-changing.",
    rating: 5,
    timeframe: "4 months"
  },
  {
    id: 5,
    name: "Lisa W.",
    age: 31,
    location: "Oregon",
    text: "The step-by-step approach made recovery feel manageable instead of overwhelming. Sam's guidance felt like having a supportive friend who truly understood.",
    rating: 5,
    timeframe: "10 weeks"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-lg">
      {/* Main testimonial display */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="text-center">
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.112-5.472-5.088-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                  </svg>
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* User info */}
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.timeframe} recovery</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-blue-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
      </div>

    </div>
  );
}