'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
// Backend removed - Supabase import removed
import DisclaimerModal from './DisclaimerModal';

interface DisclaimerGateProps {
  children: React.ReactNode;
}

/**
 * DisclaimerGate component that checks if user has accepted the disclaimer
 * and shows a modal if they haven't. Only shows for authenticated users.
 */
export default function DisclaimerGate({ children }: DisclaimerGateProps) {
  const router = useRouter();
  const { user, hasAcceptedDisclaimer, refreshUserProfile, loading } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCheckedDisclaimer, setHasCheckedDisclaimer] = useState(false);

  useEffect(() => {
    // Only check once we have loaded the user and we're not currently submitting
    if (!loading && user && !isSubmitting && !hasCheckedDisclaimer) {
      setHasCheckedDisclaimer(true);

      // Show modal if user hasn't accepted disclaimer
      if (!hasAcceptedDisclaimer) {
        setShowModal(true);
      }
    }
  }, [user, hasAcceptedDisclaimer, loading, isSubmitting, hasCheckedDisclaimer]);

  const handleAccept = async () => {
    if (!user) return;

    setIsSubmitting(true);

    try {
      // Backend removed - no database update needed
      console.log('Disclaimer accepted (no backend to update)');

      // Refresh user profile to get updated disclaimer status
      await new Promise(resolve => setTimeout(resolve, 300));

      try {
        await refreshUserProfile();
      } catch (refreshError) {
        // Continue anyway if refresh fails
      }

      // Close modal and redirect
      setShowModal(false);
      setIsSubmitting(false);

      // Small delay to allow state to update
      await new Promise(resolve => setTimeout(resolve, 100));

      // Redirect new users to the welcome video
      router.push('/chapter/1/welcome');
    } catch (error) {
      alert(`Failed to save your acceptance: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
      setIsSubmitting(false);
    }
  };

  // Show children normally if:
  // - Still loading
  // - No user (not logged in)
  // - User has accepted disclaimer
  // - Modal is not shown
  if (loading || !user || hasAcceptedDisclaimer || !showModal) {
    return <>{children}</>;
  }

  // Show modal overlay with children in background
  return (
    <>
      {children}
      <DisclaimerModal onAccept={handleAccept} isLoading={isSubmitting} />
    </>
  );
}
