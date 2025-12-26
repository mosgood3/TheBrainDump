'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/marketing/Hero';
import FeaturedCourses from '../components/marketing/FeaturedCourses';
import CharacterIntro from '../components/marketing/CharacterIntro';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';

export default function Home() {
  const { user, loading } = useAuth();
  const { getNextIncompleteLesson } = useProgress();
  const router = useRouter();

  // Redirect authenticated users to courses page
  useEffect(() => {
    if (!loading && user) {
      router.replace('/courses');
    }
  }, [user, loading, router]);

  const handleStartJourney = () => {
    if (user) {
      const nextLesson = getNextIncompleteLesson();
      router.push(`/chapter/${nextLesson}`);
    } else {
      router.push('/auth');
    }
  };

  return (
    <>
      <Head>
        <title>The Brain Dump - Learn Tech, Build Projects, Level Up</title>
        <meta name="description" content="Master modern tech through hands-on courses. Learn web development, AI, and more. No fluff, just vibes and code." />
        <meta name="keywords" content="the brain dump, learn coding, web development, AI courses, full-stack development, programming courses, tech education" />
      </Head>
      <Layout>
        <Hero onStartJourney={handleStartJourney} />
        <FeaturedCourses />
        <CharacterIntro />

        {/* Resources Section - Book Recommendations */}
        <section className="py-20 relative overflow-hidden border-t border-white/5">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20 overflow-visible">
            <div className="absolute -top-40 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute -top-32 right-1/3 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-8 md:p-16">

              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-4xl">📚</span>
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      CURATED
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Expand Your
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent"> Expertise</span>
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Hand-picked collection of essential books from industry experts.
                  Deep dive into full-stack development, system design, and modern web technologies.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Expert Authors</h3>
                  <p className="text-sm text-gray-400 text-center">Books from industry leaders and experienced developers</p>
                </div>

                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Hands-On Learning</h3>
                  <p className="text-sm text-gray-400 text-center">Practical guides with real-world examples and projects</p>
                </div>

                <div className="flex flex-col items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg">Modern Stack</h3>
                  <p className="text-sm text-gray-400 text-center">Up-to-date content on the latest web technologies</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center mt-12">
                <a
                  href="/resources"
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Browse Book Recommendations</span>
                  <svg className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <p className="text-sm text-gray-400 mt-6 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free to browse
                </p>
              </div>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
