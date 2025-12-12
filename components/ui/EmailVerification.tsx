'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useAuthActions } from '../../hooks/useAuth';
// Backend removed - Supabase import removed

export default function EmailVerification() {
  const { user, loading } = useAuth();
  const { logout } = useAuthActions();
  const router = useRouter();
  const [checkingVerification, setCheckingVerification] = useState(false);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);

  // Check for pending verification email in sessionStorage
  useEffect(() => {
    const email = sessionStorage.getItem('pendingVerificationEmail');
    if (email) {
      setPendingEmail(email);
    }
  }, []);

  // Redirect if no user or if email is already verified
  // Add a small delay to allow auth state to settle after signup
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!loading) {
        // Only redirect if there's no user AND no pending email
        if (!user && !pendingEmail) {
          console.log('⚠️ No user found on verify-email page, redirecting to auth');
          router.push('/auth');
        } else if (user?.email_confirmed_at) {
          console.log('✅ Email already confirmed, redirecting to home');
          // Clear pending email from storage
          sessionStorage.removeItem('pendingVerificationEmail');
          // Small delay to ensure auth context has updated
          setTimeout(() => {
            router.push('/');
          }, 500);
        }
      }
    }, 1000); // Wait 1 second for auth state to settle

    return () => clearTimeout(timeoutId);
  }, [user, loading, router, pendingEmail]);

  // Periodically check if email has been verified with exponential backoff
  useEffect(() => {
    if (user && !user.email_confirmed_at) {
      let interval = 5000; // Start at 5 seconds
      const maxInterval = 60000; // Max 1 minute
      let timeoutId: NodeJS.Timeout;

      const checkVerification = async () => {
        setCheckingVerification(true);
        try {
          // Backend removed - no user data to fetch
          const { data: { user: freshUser } } = // Backend removed - auth disabled;
          if (freshUser?.email_confirmed_at) {
            // Small delay to ensure auth state has propagated
            await new Promise(resolve => setTimeout(resolve, 500));
            // Redirect to homepage - it will automatically redirect to next incomplete lesson
            router.push('/');
            return;
          }

          // Increase interval for next check (exponential backoff)
          interval = Math.min(interval * 1.5, maxInterval);
          timeoutId = setTimeout(checkVerification, interval);
        } catch (error) {
          console.error('Error checking verification status:', error);
          // On error, retry sooner
          timeoutId = setTimeout(checkVerification, 10000); // 10 seconds on error
        } finally {
          setCheckingVerification(false);
        }
      };

      // Start first check after 5 seconds
      timeoutId = setTimeout(checkVerification, interval);

      return () => {
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, [user, router]);

  const handleSignOut = async () => {
    await logout();
    router.push('/auth');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show loading while checking auth state, but allow pending email to show the page
  if (!user && !pendingEmail) {
    return null; // Will redirect
  }

  if (user?.email_confirmed_at) {
    return null; // Will redirect
  }

  const displayEmail = user?.email || pendingEmail;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 overflow-hidden">
      {/* Flowing Background Elements */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/70 to-blue-500/40 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/70 to-orange-500/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/60 to-blue-600/35 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-500/60 to-orange-600/35 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-blue-400/50 to-orange-400/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verify Your Email
            </h1>
            <p className="text-gray-600">
              We&apos;ve sent a verification email to
            </p>
            <p className="text-blue-600 font-semibold">
              {displayEmail}
            </p>
          </div>

          {/* Instructions */}
          <div className="mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <h3 className="text-blue-800 font-semibold mb-2">Next Steps:</h3>
              <ol className="text-blue-700 text-sm space-y-2">
                <li>1. Check your email inbox (and spam/junk folders!)</li>
                <li>2. Look for a verification email</li>
                <li>3. Click the verification link</li>
                <li>4. Return here - we&apos;ll detect it automatically!</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="text-yellow-800 font-semibold text-sm mb-1">Important!</p>
                  <p className="text-yellow-700 text-sm">
                    Check your <strong>spam and junk folders</strong> if you don&apos;t see the email within a few minutes. Sometimes verification emails end up there.
                  </p>
                </div>
              </div>
            </div>

            {checkingVerification && (
              <div className="flex items-center justify-center gap-2 text-blue-600 mb-4">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm">Checking verification status...</span>
              </div>
            )}

          </div>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={handleSignOut}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Sign Out & Use Different Email
            </button>
          </div>

          {/* Footer note */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Having trouble? Contact support for assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}