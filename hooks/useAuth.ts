import { supabase } from '../lib/supabase';

export const useAuthActions = () => {
  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        console.error('Google sign-in error:', error.message);
        return { user: null, error: error.message };
      }

      return { user: data.user, error: null };
    } catch (err) {
      console.error('Unexpected error during Google sign-in:', err);
      return { user: null, error: 'An unexpected error occurred' };
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Email sign-in error:', error.message);
        return { user: null, error: error.message };
      }

      console.log('✅ User signed in:', data.user?.email);
      return { user: data.user, error: null };
    } catch (err) {
      console.error('Unexpected error during email sign-in:', err);
      return { user: null, error: 'An unexpected error occurred' };
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        console.error('Email sign-up error:', error.message);
        return { user: null, error: error.message, emailSent: false };
      }

      console.log('✅ User signed up:', data.user?.email);
      return { user: data.user, error: null, emailSent: true };
    } catch (err) {
      console.error('Unexpected error during email sign-up:', err);
      return { user: null, error: 'An unexpected error occurred', emailSent: false };
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        console.error('Sign-out error:', error.message);
        return { error: error.message };
      }

      console.log('✅ User signed out');
      return { error: null };
    } catch (err) {
      console.error('Unexpected error during sign-out:', err);
      return { error: 'An unexpected error occurred' };
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        console.error('Password reset error:', error.message);
        return { error: error.message };
      }

      console.log('✅ Password reset email sent to:', email);
      return { error: null };
    } catch (err) {
      console.error('Unexpected error during password reset:', err);
      return { error: 'An unexpected error occurred' };
    }
  };

  const resendEmailVerification = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user?.email) {
        return { error: 'No user email found' };
      }

      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: user.email,
      });

      if (error) {
        console.error('Resend verification error:', error.message);
        return { error: error.message };
      }

      console.log('✅ Verification email resent to:', user.email);
      return { error: null };
    } catch (err) {
      console.error('Unexpected error during resend verification:', err);
      return { error: 'An unexpected error occurred' };
    }
  };

  const updatePassword = async (newPassword: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) {
        console.error('Password update error:', error.message);
        return { error: error.message };
      }

      console.log('✅ Password updated successfully');
      return { error: null };
    } catch (err) {
      console.error('Unexpected error during password update:', err);
      return { error: 'An unexpected error occurred' };
    }
  };

  const updateProfile = async (updates: { full_name?: string; avatar_url?: string }) => {
    try {
      const { error } = await supabase.auth.updateUser({
        data: updates,
      });

      if (error) {
        console.error('Profile update error:', error.message);
        return { error: error.message };
      }

      console.log('✅ Profile updated successfully');
      return { error: null };
    } catch (err) {
      console.error('Unexpected error during profile update:', err);
      return { error: 'An unexpected error occurred' };
    }
  };

  return {
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    logout,
    resetPassword,
    resendEmailVerification,
    updatePassword,
    updateProfile,
  };
};
