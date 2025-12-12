'use client';

import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';

const faqs = [
  {
    question: "Will this work for severe anxiety?",
    answer: "Our personalized approach adapts to all anxiety levels, from mild worry to severe panic disorders. Each set of interactive lessons is tailored to your specific needs and current anxiety level, ensuring you get the right support at the right intensity."
  },
  {
    question: "How long does it take to see results?",
    answer: "Don't put a timeline on it. Recovery is a personal journey that unfolds differently for everyone. Focus on progress, not timelines, and go at your own pace. Trust the process and celebrate small wins along the way."
  },
  {
    question: "Is my information private and secure?",
    answer: "Absolutely. All your personal information and assessment responses are encrypted and stored securely. We never share your data with third parties, and you can delete your account at any time."
  },
  {
    question: "What makes this different from other anxiety apps?",
    answer: "Unlike generic approaches, we create completely personalized interactive lessons based on your specific triggers, symptoms, and goals. Plus, you have Sam and Scout as consistent companions throughout your journey."
  },
  {
    question: "Can I use this alongside therapy or medication?",
    answer: "Yes! Our program is designed to complement professional treatment. Many users find it enhances their therapy sessions and provides daily support between appointments."
  },
  {
    question: "Does this work for different types of anxiety?",
    answer: "Yes! One purchase gives you access to everything you need. The course covers all types of anxiety - work anxiety, social anxiety, health anxiety, panic attacks, and more. You don't need to purchase multiple times, as the core principles apply to all forms of anxiety."
  },
  {
    question: "Do I need any special equipment or apps?",
    answer: "No special equipment needed! Our program works on any device with internet access. All exercises and techniques can be done anywhere, anytime."
  },
  {
    question: "What if the plan doesn't work for me?",
    answer: "While our success rate is very high, everyone's journey is unique. We offer guidance on adjusting your approach and can help you understand why certain techniques may need time to develop."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 relative overflow-hidden py-16">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/70 to-blue-500/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/70 to-orange-500/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/60 to-blue-600/35 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-500/60 to-orange-600/35 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-blue-600">Frequently Asked</span> <span className="text-orange-500">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our personalized anxiety recovery approach
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md bg-white/80 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white/90 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 py-4 bg-white/95">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12 p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-blue-600">Still Need</span> <span className="text-orange-500">Help?</span>
            </h3>
            <p className="text-gray-600 mb-6">We&apos;re here to support you on your recovery journey.</p>
            
            <a 
              href="mailto:thebraindumpllc@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>
            
            <div className="mt-4 text-sm text-gray-500">
              thebraindumpllc@gmail.com
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}