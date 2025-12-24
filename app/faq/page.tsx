'use client';

import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';

const faqs = [
  {
    question: "Do I need prior programming experience?",
    answer: "No! Our tutorials are designed for complete beginners and experienced developers alike. We start with the fundamentals and progressively build up to advanced concepts. Each lesson adapts to your current skill level and learning pace."
  },
  {
    question: "How long does it take to complete the course?",
    answer: "Learning to code is a journey that unfolds differently for everyone. Focus on understanding concepts thoroughly rather than rushing through. Most students complete the core curriculum in 3-6 months, but you can go at your own pace. The course provides lifetime access, so take the time you need."
  },
  {
    question: "Is my code and progress data secure?",
    answer: "Absolutely. All your personal information, code submissions, and progress data are encrypted and stored securely. We never share your data with third parties, and you can delete your account at any time."
  },
  {
    question: "What makes this different from other coding courses?",
    answer: "Unlike generic video tutorials, we focus on hands-on, project-based learning with real-world applications. You'll build production-ready projects while learning modern best practices, security considerations, and scalable architecture patterns."
  },
  {
    question: "Can I use this alongside other learning resources?",
    answer: "Yes! Our course is designed to complement other learning materials like books, documentation, and tutorials. Many students use TheBrainDump as their primary learning path while exploring additional resources for deeper dives into specific topics."
  },
  {
    question: "What technologies and frameworks are covered?",
    answer: "Yes! One purchase gives you access to everything you need. The course covers full-stack development including React, Next.js, TypeScript, Node.js, databases, authentication, deployment, and more. You don't need multiple courses - we cover the entire modern web development stack."
  },
  {
    question: "Do I need any special software or equipment?",
    answer: "No special equipment needed! All you need is a computer (Mac, Windows, or Linux) with internet access. We'll guide you through installing the free development tools you need. All coding exercises work in your browser."
  },
  {
    question: "What if I get stuck or need help?",
    answer: "Getting stuck is part of the learning process! Each lesson includes detailed explanations, code examples, and common troubleshooting tips. You can also reach out to support for guidance on debugging and understanding concepts."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 relative overflow-hidden py-16">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-blue-400">Frequently Asked</span> <span className="text-orange-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about learning full-stack development with TheBrainDump
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10 bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div className={`transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 py-4 bg-white/5">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-12 p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg shadow-blue-500/10">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-blue-400">Still Need</span> <span className="text-orange-400">Help?</span>
            </h3>
            <p className="text-gray-300 mb-6">We&apos;re here to support you on your learning journey.</p>

            <a
              href="mailto:thebraindumpllc@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Support
            </a>

            <div className="mt-4 text-sm text-gray-400">
              thebraindumpllc@gmail.com
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}