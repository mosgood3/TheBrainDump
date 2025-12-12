'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface MeditationType {
  id: string;
  name: string;
  description: string;
  instruction: string;
  guidance: string[];
  icon: string;
}

const meditationTypes: MeditationType[] = [
  {
    id: 'open-mind',
    name: 'Open Mind Meditation',
    description: 'Let everything flow without getting caught up in it',
    instruction: 'Simply observe whatever arises without attachment or resistance',
    guidance: [
      'Sit comfortably and settle into the present moment',
      'Allow thoughts, feelings, and sensations to arise naturally',
      'Don\'t try to hold onto anything or push anything away',
      'Let everything flow through your awareness like clouds in the sky',
      'Remain open and spacious, not getting caught up in any experience'
    ],
    icon: '🌊'
  },
  {
    id: 'mantra',
    name: 'Mantra Meditation',
    description: 'Repeat a meaningful word or phrase to quiet the mind',
    instruction: 'Silently or quietly repeat your chosen mantra',
    guidance: [
      'Choose a mantra (e.g., "peace", "calm", "I am here")',
      'Sit comfortably and begin repeating your mantra',
      'Let the mantra flow naturally with your breath',
      'When your mind wanders, gently return to the mantra',
      'Allow the repetition to create a sense of calm focus'
    ],
    icon: '📿'
  },
  {
    id: 'breath',
    name: 'Breath-Focused Meditation',
    description: 'Use your breath as an anchor for attention',
    instruction: 'Focus gently on the natural rhythm of your breathing',
    guidance: [
      'Breathe naturally - don\'t try to control your breath',
      'Notice the sensation of air entering and leaving',
      'When your mind wanders, gently return to the breath',
      'Feel the breath in your nostrils, chest, or belly',
      'Use breath as a home base for your attention'
    ],
    icon: '🌬️'
  }
];

const timeOptions = [
  { value: 2, label: '2 minutes' },
  { value: 5, label: '5 minutes' },
  { value: 10, label: '10 minutes' },
  { value: 20, label: '20 minutes' }
];

export function MeditationPractice() {
  const [selectedType, setSelectedType] = useState<MeditationType | null>(null);
  const [selectedTime, setSelectedTime] = useState<number>(10);
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [ambientSound, setAmbientSound] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [noiseNode, setNoiseNode] = useState<ScriptProcessorNode | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  // Generate brown noise using Web Audio API
  const startAmbientSound = useCallback(() => {
    const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const bufferSize = 4096;
    const brownNoise = context.createScriptProcessor(bufferSize, 1, 1);

    let lastOut = 0.0;
    brownNoise.onaudioprocess = (e) => {
      const output = e.outputBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // Amplify
      }
    };

    const gain = context.createGain();
    gain.gain.value = 0.3; // Set volume to 30%

    brownNoise.connect(gain);
    gain.connect(context.destination);

    setAudioContext(context);
    setNoiseNode(brownNoise);
    setGainNode(gain);
  }, []);

  const stopAmbientSound = useCallback(() => {
    if (noiseNode && audioContext) {
      noiseNode.disconnect();
      audioContext.close();
      setAudioContext(null);
      setNoiseNode(null);
      setGainNode(null);
    }
  }, [noiseNode, audioContext]);

  useEffect(() => {
    if (ambientSound && !audioContext) {
      startAmbientSound();
    } else if (!ambientSound && audioContext) {
      stopAmbientSound();
    }
  }, [ambientSound, audioContext, startAmbientSound, stopAmbientSound]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            setIsActive(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, timeRemaining]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioContext) {
        stopAmbientSound();
      }
    };
  }, [audioContext, stopAmbientSound]);

  const startMeditation = () => {
    if (!selectedType) return;
    setTimeRemaining(selectedTime * 60);
    setIsActive(true);
    setIsPaused(false);
    setShowInstructions(true);
  };

  const pauseMeditation = () => {
    setIsPaused(!isPaused);
  };

  const stopMeditation = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeRemaining(0);
    setShowInstructions(false);
    setAmbientSound(false);
  };

  const resetMeditation = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeRemaining(0);
    setShowInstructions(false);
    setSelectedType(null);
    setAmbientSound(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = selectedTime > 0 ? ((selectedTime * 60 - timeRemaining) / (selectedTime * 60)) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-8 border border-violet-100 shadow-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meditation Practice</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose your meditation style and duration to practice cultivating present-moment awareness
          </p>
        </div>

        {!isActive ? (
          <div className="space-y-6">
            {/* Meditation Type Selection */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Practice</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {meditationTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type)}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      selectedType?.id === type.id
                        ? 'border-violet-500 bg-violet-50'
                        : 'border-gray-200 bg-white hover:border-violet-300 hover:bg-violet-25'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{type.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {selectedType && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Duration</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {timeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSelectedTime(option.value)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        selectedTime === option.value
                          ? 'bg-violet-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-violet-100'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Practice Info */}
            {selectedType && (
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{selectedType.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{selectedType.name}</h4>
                    <p className="text-gray-600">{selectedType.instruction}</p>
                  </div>
                </div>

                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                  <h5 className="font-semibold text-violet-900 mb-3">Guidance for this practice:</h5>
                  <ul className="space-y-2">
                    {selectedType.guidance.map((guide, index) => (
                      <li key={index} className="flex items-start text-sm text-violet-800">
                        <span className="text-violet-500 mr-2 mt-1">•</span>
                        {guide}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={startMeditation}
                    className="px-8 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-lg hover:from-violet-600 hover:to-indigo-600 transition-all font-semibold text-lg shadow-lg"
                  >
                    Begin {selectedTime} Minute Session 🧘
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Active Meditation View
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-4xl">{selectedType?.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{selectedType?.name}</h3>
              </div>

              {showInstructions && (
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-violet-800 font-medium">{selectedType?.instruction}</p>
                </div>
              )}

              {/* Ambient Sound Toggle */}
              <div className="flex items-center justify-center gap-3">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ambientSound}
                    onChange={(e) => setAmbientSound(e.target.checked)}
                    className="mr-2 w-4 h-4"
                  />
                  <span className="text-gray-700 font-medium">🔊 Ambient Brown Noise</span>
                </label>
              </div>
            </div>

            {/* Timer Display */}
            <div className="space-y-6">
              <div className="relative w-48 h-48 mx-auto">
                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="rgb(224, 231, 255)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="rgb(124, 58, 237)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 90}`}
                    strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
                    className="transition-all duration-1000 ease-linear"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">
                      {formatTime(timeRemaining)}
                    </div>
                    <div className="text-sm text-gray-600">
                      {isPaused ? 'Paused' : 'Meditating'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-center space-x-4">
                <button
                  onClick={pauseMeditation}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                >
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
                <button
                  onClick={stopMeditation}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Stop
                </button>
              </div>

              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="text-violet-600 hover:text-violet-800 underline text-sm"
              >
                {showInstructions ? 'Hide' : 'Show'} Instructions
              </button>
            </div>

            {/* Completion */}
            {timeRemaining === 0 && !isActive && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🙏</div>
                  <h4 className="text-xl font-semibold text-green-900 mb-2">Session Complete</h4>
                  <p className="text-green-800 mb-4">
                    You've completed your {selectedTime}-minute {selectedType?.name.toLowerCase()} practice.
                  </p>
                  <button
                    onClick={resetMeditation}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Start New Session
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tip Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-blue-800 text-center">
          <strong>💡 Tip:</strong> Meditation gets easier with time and practice. Think of it like lifting weights for mindfulness—each session strengthens your ability to observe your thoughts and stay present. The more you practice, the more natural it becomes.
        </p>
      </div>
    </div>
  );
}