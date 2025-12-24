'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

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
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  error: Error | null;
  isPaid: boolean;
  hasAcceptedDisclaimer: boolean;
  purchasedCourses: string[];
  hasCourseAccess: (courseSlug: string) => boolean;
  refreshUserProfile: () => Promise<void>;
  signOut: () => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  error: null,
  isPaid: false,
  hasAcceptedDisclaimer: true,
  purchasedCourses: [],
  hasCourseAccess: () => false,
  refreshUserProfile: async () => {},
  signOut: async () => ({ error: null }),
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [purchasedCourses, setPurchasedCourses] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch which courses the user has purchased
  const fetchPurchasedCourses = async (userId: string): Promise<string[]> => {
    try {
      const { data, error } = await supabase
        .from('course_access')
        .select('courses(slug)')
        .eq('user_id', userId);

      if (error) {
        console.error('Error fetching purchased courses:', error);
        return [];
      }

      // Extract course slugs from the joined data
      const slugs = data
        ?.map((item: { courses: { slug: string } | null }) => item.courses?.slug)
        .filter((slug): slug is string => !!slug) ?? [];

      return slugs;
    } catch (err) {
      console.error('Unexpected error fetching purchased courses:', err);
      return [];
    }
  };

  // Fetch user profile from database
  const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        // If profile doesn't exist, create one
        if (error.code === 'PGRST116') {
          const { data: newProfile, error: insertError } = await supabase
            .from('profiles')
            .insert({
              id: userId,
              payment_status: 'free',
              plan_type: 'free',
            })
            .select()
            .single();

          if (insertError) {
            console.error('Error creating user profile:', insertError);
            return null;
          }

          return newProfile as UserProfile;
        }

        console.error('Error fetching user profile:', error);
        return null;
      }

      return data as UserProfile;
    } catch (err) {
      console.error('Unexpected error fetching user profile:', err);
      return null;
    }
  };

  const refreshUserProfile = async () => {
    if (!user) return;

    const profile = await fetchUserProfile(user.id);
    setUserProfile(profile);

    const courses = await fetchPurchasedCourses(user.id);
    setPurchasedCourses(courses);
  };

  const signOut = async (): Promise<{ error: string | null }> => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Sign-out error:', error.message);
        return { error: error.message };
      }

      setUser(null);
      setUserProfile(null);
      setPurchasedCourses([]);
      console.log('✅ User signed out');
      return { error: null };
    } catch (err) {
      console.error('Unexpected error during sign-out:', err);
      return { error: 'An unexpected error occurred' };
    }
  };

  // Initialize auth state and listen for changes
  useEffect(() => {
    let mounted = true;

    const initAuth = async () => {
      try {
        console.log('🔐 Initializing auth...');
        setLoading(true);

        // Get initial session with timeout
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Session timeout')), 5000)
        );

        const sessionPromise = supabase.auth.getSession();

        const { data: { session }, error } = await Promise.race([
          sessionPromise,
          timeoutPromise
        ]) as any;

        if (error) {
          console.error('❌ Session error:', error);
          if (mounted) setLoading(false);
          return;
        }

        console.log('✅ Session loaded:', session?.user?.email || 'No user');

        if (mounted) {
          setUser(session?.user ?? null);

          if (session?.user) {
            const profile = await fetchUserProfile(session.user.id);
            if (mounted) setUserProfile(profile);

            const courses = await fetchPurchasedCourses(session.user.id);
            if (mounted) setPurchasedCourses(courses);
          }

          setLoading(false);
        }
      } catch (err) {
        console.error('❌ Auth initialization error:', err);
        if (mounted) {
          setLoading(false);
          setUser(null);
          setUserProfile(null);
        }
      }
    };

    initAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log('🔄 Auth state changed:', _event, session?.user?.email);

      if (mounted) {
        setUser(session?.user ?? null);

        if (session?.user) {
          const profile = await fetchUserProfile(session.user.id);
          if (mounted) setUserProfile(profile);

          const courses = await fetchPurchasedCourses(session.user.id);
          if (mounted) setPurchasedCourses(courses);
        } else {
          setUserProfile(null);
          setPurchasedCourses([]);
        }
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Check if user has access to a specific course
  const hasCourseAccess = (courseSlug: string): boolean => {
    // Check if user has purchased this specific course
    if (purchasedCourses.includes(courseSlug)) {
      return true;
    }
    // Backwards compatibility: if user has legacy is_paid status, grant access to brain-dump
    if (userProfile?.payment_status === 'paid' && courseSlug === 'brain-dump') {
      return true;
    }
    return false;
  };

  // Legacy: isPaid is true if user has any purchased course OR legacy payment_status
  const isPaid = userProfile?.payment_status === 'paid' || purchasedCourses.length > 0;
  const hasAcceptedDisclaimer = userProfile?.disclaimer_accepted ?? true;

  return (
    <AuthContext.Provider value={{
      user,
      userProfile,
      loading,
      error,
      isPaid,
      hasAcceptedDisclaimer,
      purchasedCourses,
      hasCourseAccess,
      refreshUserProfile,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};
