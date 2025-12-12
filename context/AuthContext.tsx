'use client';

import React, { createContext, useContext, useState } from 'react';

interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  payment_status: 'free' | 'paid';
  plan_type: string;
  disclaimer_accepted?: boolean;
  disclaimer_accepted_at?: string;
  stripe_customer_id?: string;
}

interface AuthContextType {
  user: { id: string; email: string; email_confirmed_at?: string; user_metadata?: { full_name?: string; name?: string } } | null;
  userProfile: UserProfile | null;
  loading: boolean;
  error: Error | null;
  isPaid: boolean;
  hasAcceptedDisclaimer: boolean;
  refreshUserProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: false,
  error: null,
  isPaid: false,
  hasAcceptedDisclaimer: true,
  refreshUserProfile: async () => {},
  signOut: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading] = useState(false);
  const [error] = useState<Error | null>(null);

  // Mock user data - no backend
  const user = null;
  const userProfile = null;

  const refreshUserProfile = async () => {
    // No-op: backend removed
  };

  const signOut = async () => {
    // No-op: backend removed
  };

  const isPaid = false; // Default to free
  const hasAcceptedDisclaimer = true; // Default to accepted

  return (
    <AuthContext.Provider value={{
      user,
      userProfile,
      loading,
      error,
      isPaid,
      hasAcceptedDisclaimer,
      refreshUserProfile,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};
