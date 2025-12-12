// Stub user profile hooks - backend removed

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  payment_status: 'free' | 'paid';
  plan_type?: 'free' | 'premium';
  disclaimer_accepted: boolean;
  disclaimer_accepted_at?: string;
}

export function useUserProfile(userId: string | undefined) {
  // Mock profile - no backend
  const profile: UserProfile | undefined = userId ? {
    id: userId,
    email: 'user@example.com',
    payment_status: 'free',
    plan_type: 'free',
    disclaimer_accepted: true
  } : undefined;

  const refreshProfile = () => {
    console.log('Backend removed - no-op');
  };

  const updateDisclaimer = () => {
    console.log('Backend removed - no-op');
  };

  return {
    profile,
    isLoading: false,
    error: null,
    refreshProfile,
    updateDisclaimer,
    isUpdatingDisclaimer: false,
  };
}
