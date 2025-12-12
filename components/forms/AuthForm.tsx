'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthActions } from '../../hooks/useAuth';
import { useAuthFormValidation } from '../../hooks/useAuthFormValidation';
import AuthFormHeader from '../auth/AuthFormHeader';
import ErrorMessage from '../auth/ErrorMessage';
import SuccessMessage from '../auth/SuccessMessage';
import GoogleAuthButton from '../auth/GoogleAuthButton';
import FormDivider from '../auth/FormDivider';
import EmailInput from '../auth/EmailInput';
import PasswordInput from '../auth/PasswordInput';
import ForgotPasswordButton from '../auth/ForgotPasswordButton';

interface AuthFormProps {
  className?: string;
}

export default function AuthForm({}: AuthFormProps) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const {
    email,
    password,
    setEmail,
    setPassword,
    setEmailValid,
    setPasswordValid,
    isFormValid,
    validateEmail
  } = useAuthFormValidation();

  const {
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    resetPassword,
  } = useAuthActions();


  const handleGoogleAuth = async () => {
    const result = await signInWithGoogle();
    if (result.error) {
      setError(result.error);
    }
    // Note: Google OAuth redirects to /auth/callback which handles the redirect to /lessons
    // No need to redirect here as user will be null until callback completes
    return result;
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    // Validate form before proceeding
    if (!isFormValid) {
      setError('Please ensure all fields are valid before submitting.');
      return;
    }

    setLoading(true);

    try {
      // First try to sign in
      const result = await signInWithEmail(email, password);

      if (result.error) {
        // Check if it's an invalid credentials error (user doesn't exist OR wrong password)
        if (result.error.includes('Invalid login credentials') || result.error.includes('Email not confirmed')) {
          // Try to create account - if user exists, this will fail gracefully
          const signupResult = await signUpWithEmail(email, password);

          if (signupResult.error) {
            // Signup failed - likely because user already exists, so it's a wrong password
            if (signupResult.error.includes('User already registered') ||
                signupResult.error.includes('already been registered')) {
              setError('Incorrect password. Please try again or use "Forgot Password" below.');
            } else {
              // Other signup error (validation, etc.)
              setError(`Account creation failed: ${signupResult.error}`);
            }
          } else if (signupResult.user) {
            // New account created successfully - redirect to verification page
            console.log('✅ New account created, redirecting to verify-email page');
            console.log('User data:', signupResult.user);
            // Store email in sessionStorage so verification page can display it even if user object isn't loaded yet
            sessionStorage.setItem('pendingVerificationEmail', email);
            router.push('/verify-email');
          }
        } else {
          // Other sign-in error (network, server, etc.)
          setError(result.error);
        }
      } else if (result.user) {
        // Existing user signed in successfully - check verification status
        const user = result.user as { id: string; email: string; email_confirmed_at?: string };
        if (user?.email_confirmed_at) {
          // Email confirmed - redirect to lessons
          console.log('✅ User signed in successfully:', user.email);
          router.push('/lessons');
        } else {
          // Email not confirmed - send to verification page
          console.log('⚠️ User signed in but email not verified');
          router.push('/verify-email');
        }
      }
    } catch (err) {
      console.error('Unexpected error during auth:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address first');
      return;
    }
    
    const { error } = await resetPassword(email);
    if (error) {
      setError(error);
    } else {
      setSuccessMessage('Password reset email sent! Check your inbox for instructions.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
      <AuthFormHeader />

      <ErrorMessage message={error} />
      <SuccessMessage message={successMessage} />

      <GoogleAuthButton onClick={handleGoogleAuth} />

      <FormDivider />

      <form onSubmit={handleEmailAuth} className="space-y-4">
        <EmailInput
          value={email}
          onChange={setEmail}
          onValidationChange={setEmailValid}
        />

        <PasswordInput
          value={password}
          onChange={setPassword}
          onValidationChange={setPasswordValid}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Please wait...' : 'Sign In'}
        </button>
      </form>

      <ForgotPasswordButton onClick={handleForgotPassword} />

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          New users will automatically have an account created.
        </p>
      </div>
    </div>
  );
}