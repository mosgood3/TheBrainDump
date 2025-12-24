'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function Pricing() {
  const { user } = useAuth();
  const router = useRouter();

  const handleStartCourse = () => {
    if (user) {
      router.push('/chapter/1');
    } else {
      router.push('/auth');
    }
  };

  const features = [
    { text: "First 2 chapters FREE - no credit card required" },
    { text: "Build a real app from scratch" },
    { text: "Interactive lessons with AI guidance" },
    { text: "Beginner-friendly, vibe at your own pace" },
    { text: "Lifetime access - no subscriptions" }
  ];

  return (
    <div id="pricing" className="p-8 lg:p-12 mb-8 relative overflow-visible border-t border-white/5">
      {/* Animated background elements - Extended for smooth transitions */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        {/* Orbs that blend with CharacterIntro section above */}
        <div className="absolute -top-40 left-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -top-32 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        {/* Middle orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>

        {/* Orbs that extend into Resources section below */}
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.5s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-blue-400">Simple,</span> <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build your own app with our beginner-friendly, interactive course
          </p>
          
          
        </div>

        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border-2 border-white/10 shadow-xl shadow-blue-500/10">

              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                  🎉 LAUNCH SPECIAL
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">App Building Course</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-gray-400 line-through">
                      $49.99
                    </span>
                    <span className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                      $19.99
                    </span>
                  </div>
                  <span className="text-gray-300">one-time payment</span>
                </div>
                <p className="text-gray-300 font-medium">
                  One payment. Your app building journey. Forever.
                </p>
                <p className="text-sm text-orange-400 font-semibold mt-2">
                  Limited to first 100 customers
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 shadow-lg shadow-green-500/50">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleStartCourse}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Start Building
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}