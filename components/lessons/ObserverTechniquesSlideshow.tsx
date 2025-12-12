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
    title: "Pause and Notice",
    technique: "Recognition Technique",
    description: "Simply recognize the thought you are having",
    instruction: "When an anxious thought appears, pause and say to yourself: 'I notice I'm having the thought that...' This creates awareness without judgment.",
    duration: 30,
    icon: "⏸️"
  },
  {
    id: 2,
    title: "Label the Experience",
    technique: "Mind Watching",
    description: "Watch how your mind is reacting to thoughts",
    instruction: "Observe your mental reactions: 'My mind is worrying,' 'My mind is catastrophizing,' or 'My mind is problem-solving.' Just watch the patterns.",
    duration: 30,
    icon: "🏷️"
  },
  {
    id: 3,
    title: "Visualizing Thoughts",
    technique: "Visual Metaphor",
    description: "Visualize thoughts passing by like clouds or leaves",
    instruction: "Picture your thoughts as clouds drifting across the sky, or leaves floating down a stream. You're the sky or the riverbank - observing but not carried away.",
    duration: 30,
    icon: "☁️"
  },
  {
    id: 4,
    title: "Cognitive Restructuring",
    technique: "Thought Challenging",
    description: "Examine and reframe unhelpful thought patterns",
    instruction: "Ask yourself: 'Is this thought helpful? What evidence supports/contradicts it? What would I tell a friend having this thought?' Then create a more balanced perspective.",
    duration: 30,
    icon: "🔄",
    image: "/images/4_Thoughts/restructure.png"
  }
];

export function ObserverTechniquesSlideshow({ onComplete: _onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [completedSlides, setCompletedSlides] = useState<number[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

  const slide = slides[currentSlide];
  const isLastSlide = currentSlide === slides.length - 1;
  const hasTimer = slide.duration && slide.duration > 0;

  const startTimer = () => {
    if (!slide.duration) return;

    setIsTimerRunning(true);
    if (timeRemaining === 0) {
      setTimeRemaining(slide.duration);
    }

    const interval = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsTimerRunning(false);
          setTimerInterval(null);
          markSlideCompleted();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimerInterval(interval);
  };

  const pauseTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    setIsTimerRunning(false);
  };

  const endTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      setTimerInterval(null);
    }
    setIsTimerRunning(false);
    setTimeRemaining(0);
    markSlideCompleted();
  };

  const markSlideCompleted = () => {
    if (!completedSlides.includes(slide.id)) {
      setCompletedSlides(prev => [...prev, slide.id]);
    }
  };

  const nextSlide = () => {
    if (!hasTimer) {
      markSlideCompleted();
    }
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setIsTimerRunning(false);
      setTimeRemaining(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setIsTimerRunning(false);
      setTimeRemaining(0);
    }
  };

  const isSlideCompleted = completedSlides.includes(slide.id) || timeRemaining === 0;

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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{slide.title}</h2>
          <h3 className="text-xl text-blue-600 font-semibold mb-4">{slide.technique}</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">{slide.description}</p>
        </div>

        {/* Instruction Box */}
        <div className="mb-8 max-w-3xl mx-auto">
          {currentSlide === 0 && (
            <div className="flex justify-center mb-4">
              <Image
                src="/images/4_Thoughts/practice1.png"
                alt="Pause and notice technique"
                width={150}
                height={100}
                className="rounded-lg object-contain"
              />
            </div>
          )}
          {currentSlide === 1 && (
            <div className="flex justify-center mb-4">
              <Image
                src="/images/4_Thoughts/worrying.png"
                alt="Label the experience technique"
                width={150}
                height={100}
                className="rounded-lg object-contain"
              />
            </div>
          )}
          {currentSlide === 2 && (
            <div className="flex justify-center mb-4">
              <Image
                src="/images/4_Thoughts/imagining.png"
                alt="Visualizing thoughts technique"
                width={150}
                height={100}
                className="rounded-lg object-contain"
              />
            </div>
          )}
          {currentSlide === 3 && slide.image && (
            <div className="flex justify-center mb-4">
              <Image
                src={slide.image}
                alt="Cognitive restructuring technique"
                width={150}
                height={100}
                className="rounded-lg object-contain"
              />
            </div>
          )}
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 mb-4">
            <p className="text-blue-900 font-medium text-center">{slide.instruction}</p>
          </div>

          {/* Timer Section */}
          {hasTimer && (
            <div className="text-center">
              {!isTimerRunning && timeRemaining === 0 ? (
                <button
                  onClick={startTimer}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all font-semibold"
                >
                  Start {slide.duration}s Practice ⏰
                </button>
              ) : isTimerRunning ? (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto text-2xl font-bold">
                    {timeRemaining}
                  </div>
                  <p className="text-blue-700 font-medium mb-3">Stay present and observe...</p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={pauseTimer}
                      className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                      Pause
                    </button>
                    <button
                      onClick={endTimer}
                      className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      End
                    </button>
                  </div>
                </div>
              ) : timeRemaining > 0 ? (
                <div className="space-y-4">
                  <div className="bg-gray-200 text-gray-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-2xl font-bold">
                    {timeRemaining}
                  </div>
                  <p className="text-gray-600 font-medium mb-3">Paused</p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={startTimer}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Resume
                    </button>
                    <button
                      onClick={endTimer}
                      className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                    >
                      End
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-center text-green-800">
                    <span className="text-2xl mr-2">✅</span>
                    <span className="font-medium">Practice completed! Great observing.</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Non-timer slide completion */}
          {!hasTimer && !completedSlides.includes(slide.id) && (
            <div className="text-center">
              <button
                onClick={markSlideCompleted}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                I Understand This Technique ✓
              </button>
            </div>
          )}
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
            disabled={currentSlide === slides.length - 1 || !isSlideCompleted}
            className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>

      {/* Tip - Always shown below slides */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-center text-sm">
          💡 <strong>Tip:</strong> The more you practice observing, the easier it becomes to step back from anxious thoughts and feelings.
        </p>
      </div>

      {/* Doing Less Section */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">The Power of Doing Less</h3>
        <p className="text-gray-700 leading-relaxed">
          Sometimes the most effective technique is simply doing less. Anxiety feeds off our attention—the more we engage with it, analyze it, or try to fix it, the stronger it becomes. If you can learn to just allow anxiety to exist without fighting it, and calmly return to your life, that is a perfectly acceptable and powerful technique.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>The key distinction:</strong> Make sure you're not <em>avoiding</em> anxiety (running away from it in fear), but rather <em>choosing to let it be</em> (acknowledging its presence without giving it your full attention). It's the difference between fearfully hiding from a barking dog versus calmly walking past it while knowing it's there.
        </p>
      </div>
    </div>
  );
}