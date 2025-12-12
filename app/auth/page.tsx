'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
// Backend removed
import AuthForm from '../../components/forms/AuthForm';

export default function AuthPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Backend removed - auth disabled
    if (user && !loading) {
      console.log('User authenticated, redirecting to lessons');
      router.push('/lessons');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Flowing Background Elements */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/70 to-blue-500/40 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/70 to-orange-500/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/60 to-blue-600/35 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-500/60 to-orange-600/35 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-blue-400/50 to-orange-400/50 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 mx-auto w-full max-w-sm sm:max-w-md">
        <AuthForm />
      </div>
      
      {/* Back to Homepage Button */}
      <div className="relative z-10 flex justify-center mt-8">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 bg-white/70 hover:bg-white/90 backdrop-blur-sm rounded-full border border-white/50 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </button>
      </div>
    </div>
  );
}