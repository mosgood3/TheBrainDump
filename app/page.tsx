'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/marketing/Hero';
import WhatYoullLearn from '../components/marketing/WhatYoullLearn';
import CharacterIntro from '../components/marketing/CharacterIntro';
import Pricing from '../components/marketing/Pricing';
import ContactSection from '../components/marketing/ContactSection';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

export default function Home() {
  const { user, loading } = useAuth();
  const { getNextIncompleteLesson } = useProgress();
  const router = useRouter();
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  // Redirect authenticated users to lessons page
  useEffect(() => {
    if (!loading && user) {
      router.replace('/lessons');
    }
  }, [user, loading, router]);

  // Add timeout for loading state to prevent endless loading
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        console.warn('⚠️ Loading timeout reached on home page');
        setLoadingTimeout(true);
      }, 10000); // 10 second timeout

      return () => clearTimeout(timer);
    } else {
      setLoadingTimeout(false);
    }
  }, [loading]);

  const handleStartJourney = () => {
    if (user) {
      const nextLesson = getNextIncompleteLesson();
      router.push(`/chapter/${nextLesson}`);
    } else {
      router.push('/auth');
    }
  };

  // Show loading or redirect for authenticated users
  // Only show loading if not timed out
  if (loading && !loadingTimeout) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </Layout>
    );
  }

  // If user is authenticated, don't render homepage content (redirect will happen)
  if (user) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Redirecting to your course...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>The Brain Dump - Anxiety Relief & Freedom | Overcome Anxiety Today</title>
        <meta name="description" content="The Brain Dump helps you overcome anxiety with proven techniques. Get anxiety relief through our evidence-based course teaching CBT, mindfulness, and exposure therapy. Break free from anxiety, panic attacks, and worry." />
        <meta name="keywords" content="the brain dump, anxiety, anxiety relief, anxiety help, overcome anxiety, anxiety treatment, anxiety therapy, panic attacks, mental health" />
      </Head>
      <Layout>
        <Hero onStartJourney={handleStartJourney} />
        <WhatYoullLearn onStartJourney={handleStartJourney} />
        <CharacterIntro />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Pricing />
        </main>

      {/* Enhanced Resources Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-indigo-400 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-16">

            {/* Icon and badge */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                  <span className="text-4xl">📚</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </div>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expand Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Knowledge</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover our hand-picked collection of evidence-based books from leading experts.
              Each resource complements your anxiety recovery journey with proven strategies and insights.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Expert Curated</h3>
                <p className="text-sm text-gray-600">Selected by mental health professionals</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Science-Based</h3>
                <p className="text-sm text-gray-600">Grounded in proven research</p>
              </div>

              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Practical Tools</h3>
                <p className="text-sm text-gray-600">Actionable strategies you can use</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/resources"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span>Explore Recommended Books</span>
              <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            {/* Small note */}
            <p className="text-sm text-gray-500 mt-6">
              No signup required • Instant access to recommendations
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      </Layout>
    </>
  );
}
