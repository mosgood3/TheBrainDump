'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { loadStripe } from '@stripe/stripe-js';
import { getCourseBySlug } from '../courses/CourseIndex';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeCheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  courseSlug?: string;
  onPaymentSuccess?: () => void;
}

export default function StripeCheckout({ isOpen, onClose, courseSlug = 'brain-dump', onPaymentSuccess }: StripeCheckoutProps) {
  const course = getCourseBySlug(courseSlug);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [checkoutMounted, setCheckoutMounted] = useState<boolean>(false);
  const { user } = useAuth();
  const checkoutRef = useRef<HTMLDivElement>(null);
  const embeddedCheckoutRef = useRef<any>(null);

  // Initialize embedded checkout when modal opens
  useEffect(() => {
    let mounted = true;

    const initializeCheckout = async () => {
      if (!isOpen || !user) return;

      // First, ensure any existing checkout is cleaned up
      if (embeddedCheckoutRef.current) {
        try {
          embeddedCheckoutRef.current.destroy();
        } catch (e) {
          console.log('Cleanup error (ignored):', e);
        }
        embeddedCheckoutRef.current = null;
      }

      setError('');
      setLoading(true);
      setCheckoutMounted(false);

      try {
        // Create checkout session
        const response = await fetch('/api/stripe/create-checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: user.id,
            email: user.email,
            courseSlug: courseSlug,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to create checkout session');
        }

        if (!mounted) return;

        // Initialize embedded checkout
        const stripe = await stripePromise;
        if (!stripe || !checkoutRef.current) {
          throw new Error('Stripe failed to load');
        }

        // Mount embedded checkout
        embeddedCheckoutRef.current = await stripe.initEmbeddedCheckout({
          clientSecret: data.clientSecret,
        });

        if (mounted && checkoutRef.current) {
          embeddedCheckoutRef.current.mount(checkoutRef.current);
          setCheckoutMounted(true);
          setLoading(false);
        }
      } catch (err: any) {
        console.error('Checkout error:', err);
        if (mounted) {
          setError(err.message || 'Something went wrong. Please try again.');
          setLoading(false);
        }
      }
    };

    if (isOpen) {
      initializeCheckout();
    }

    return () => {
      mounted = false;
      // Cleanup embedded checkout when modal closes
      if (embeddedCheckoutRef.current) {
        try {
          embeddedCheckoutRef.current.destroy();
        } catch (e) {
          console.log('Cleanup error (ignored):', e);
        }
        embeddedCheckoutRef.current = null;
      }
      setCheckoutMounted(false);
    };
  }, [isOpen, user, courseSlug]);

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full border border-white/10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-bold text-white">Unlock {course?.title || 'Course'}</h2>
            <p className="text-sm text-gray-400 mt-1">Get lifetime access to all lessons</p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Error Display */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && !checkoutMounted && (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-300">Loading checkout...</p>
            </div>
          )}

          {/* Embedded Checkout Container */}
          <div
            ref={checkoutRef}
            className={loading && !checkoutMounted ? 'hidden' : ''}
          ></div>

          {/* Security Badge */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Secure checkout powered by Stripe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
