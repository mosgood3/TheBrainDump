'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  technique: string;
  description: string;
  instruction: string;
  duration?: number;
  icon: string;
  image?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Curious but Not Critical",
    technique: "Observation Technique",
    description: "Notice your physical sensations with curiosity instead of fear or judgment",
    instruction: "When an anxious sensation appears, pause and observe it with genuine curiosity. Instead of panicking, simply notice what's happening in your body without adding judgment or fear.",
    icon: "🔍",
    image: "/images/5_Physical/curious2.png"
  },
  {
    id: 2,
    title: "Allowing Sensations to Exist",
    technique: "Acceptance Practice",
    description: "Give permission for the sensations to happen instead of resisting them",
    instruction: "Instead of fighting against the sensations or trying to force them away, actively give them permission to be there. Let go of the struggle and allow your body to do what it's doing.",
    icon: "🤝",
    image: "/images/5_Physical/letit.png"
  },
  {
    id: 3,
    title: "Floating Through the Storm",
    technique: "Visualization Method",
    description: "Imagine yourself gently floating through the sensations like you're drifting on water",
    instruction: "Picture yourself floating peacefully on calm water. The sensations wash over and around you, but you remain buoyant and relaxed. Don't fight the waves—float with them.",
    icon: "🌊",
    image: "/images/5_Physical/Floating.png"
  },
  {
    id: 4,
    title: "Make-It-Worse Strategy",
    technique: "Paradoxical Approach",
    description: "Challenge anxiety by saying, 'Bring it on, give me your worst'",
    instruction: "Turn the tables on anxiety by inviting it to do its worst. Challenge it to make the sensations stronger. This reverses the fear response and shows your mind there's nothing to be afraid of.",
    icon: "💪",
    image: "/images/5_Physical/MakeitWorse.png"
  }
];

export function AcceptanceTechniquesSlideshow({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [completedSlides, setCompletedSlides] = useState<number[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slide = slides[currentSlide];

  const markSlideCompleted = () => {
    if (!completedSlides.includes(slide.id)) {
      setCompletedSlides(prev => [...prev, slide.id]);
    }
  };

  const nextSlide = () => {
    markSlideCompleted();
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const isSlideCompleted = completedSlides.includes(slide.id);

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < slides.length - 1 && isSlideCompleted) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  return (
    <div className="space-y-6">
      <div
        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' :
                  completedSlides.includes(slides[index].id) ? 'bg-green-500' :
                  'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-4 text-sm text-gray-600">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>

        {/* Slide Content */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{slide.icon}</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{slide.title}</h2>
          <h3 className="text-xl text-blue-600 font-semibold mb-4">{slide.technique}</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">{slide.description}</p>
        </div>

        {/* Instruction Box */}
        <div className="mb-8 max-w-3xl mx-auto">
          {slide.image && (
            <div className="flex justify-center mb-4">
              <Image
                src={slide.image}
                alt={slide.title}
                width={250}
                height={167}
                className="rounded-lg object-contain"
              />
            </div>
          )}
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-4">
            <p className="text-blue-900 font-medium text-center">{slide.instruction}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 bg-gray-200 text-gray-700 rounded-full disabled:opacity-50 hover:bg-gray-300 transition-colors"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>

      {/* Less is More Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">Less is More</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          You don't need to execute these techniques perfectly. In fact, sometimes the most effective approach is simply doing <em>less</em>.
          The more you engage with anxiety—analyzing it, fighting it, or trying to manage it—the stronger it can become.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If you can learn to just let anxiety exist in the background without giving it your full attention, and calmly continue with your life,
          that is a perfectly valid and powerful strategy. The goal isn't perfection in applying techniques, but rather learning to do less and allow more.
        </p>
      </div>
    </div>
  );
}
