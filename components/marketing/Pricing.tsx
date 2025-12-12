'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

export default function Pricing() {
  const { user } = useAuth();
  const router = useRouter();

  const handleStartRecoveryPlan = () => {
    if (user) {
      router.push('/chapter/1');
    } else {
      router.push('/auth');
    }
  };

  const features = [
    { text: "First 2 chapters FREE - no credit card required" },
    { text: "Comprehensive anxiety assessment" },
    { text: "LLM interactive lessons" },
    { text: "Tailored to your specific anxiety type" },
    { text: "Lifetime access - no subscriptions" }
  ];

  return (
    <div id="pricing" className="rounded-xl p-8 lg:p-12 mb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-blue-600">Simple,</span> <span className="text-orange-500">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Invest in your mental health with our affordable, personalized interactive lessons
          </p>
          
          
        </div>

        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 border-2 border-orange-200 shadow-xl">
              
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                  🎉 LAUNCH SPECIAL
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalized Recovery Plan</h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-gray-400 line-through">
                      $29.99
                    </span>
                    <span className="text-5xl font-bold text-orange-500">
                      $9.99
                    </span>
                  </div>
                  <span className="text-gray-600">one-time payment</span>
                </div>
                <p className="text-gray-600 font-medium">
                  One payment. Your personalized plan. Forever.
                </p>
                <p className="text-sm text-orange-600 font-semibold mt-2">
                  Limited to first 100 customers
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleStartRecoveryPlan}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-orange-600"
              >
                <span className="flex items-center justify-center gap-2">
                  Start My Recovery Plan
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