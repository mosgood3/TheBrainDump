'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthActions } from '../../../hooks/useAuth';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const router = useRouter();
  const { updatePassword, logout } = useAuthActions();

  useEffect(() => {
    // Check if we have the necessary tokens/hash from the URL
    const hash = window.location.hash;
    if (!hash || !hash.includes('access_token')) {
      console.error('Invalid reset password link - missing access token');
      // Redirect to error page instead of just showing error in the form
      router.push('/auth/auth-code-error');
      return;
    }
  }, [router]);

  const validatePassword = (password: string) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[@$!%*?&]/.test(password)
    };
    
    setPasswordRequirements(requirements);
    return Object.values(requirements).every(req => req);
  };

  const getPasswordStrength = () => {
    const metCount = Object.values(passwordRequirements).filter(req => req).length;
    if (metCount === 0) return { level: 0, text: '', color: '' };
    if (metCount <= 2) return { level: 1, text: 'Weak', color: 'bg-red-500' };
    if (metCount <= 3) return { level: 2, text: 'Fair', color: 'bg-yellow-500' };
    if (metCount <= 4) return { level: 3, text: 'Good', color: 'bg-blue-500' };
    return { level: 4, text: 'Strong', color: 'bg-green-500' };
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword) {
      validatePassword(newPassword);
    } else {
      setPasswordRequirements({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
      });
    }
    
    // Revalidate confirm password if it exists
    if (confirmPassword) {
      handleConfirmPasswordChange({ target: { value: confirmPassword } } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    
    if (newConfirmPassword && password && newConfirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!validatePassword(password)) {
      setError('Password does not meet all requirements');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const { error } = await updatePassword(password);
      
      if (error) {
        setError(error);
      } else {
        setSuccess(true);
        // Redirect to assessment after a short delay
        setTimeout(() => {
          router.push('/chapter/1');
        }, 2000);
      }
    } catch (error: unknown) {
      setError(`Password reset failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
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
        <div className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Password Updated!</h1>
            <p className="text-gray-600 mb-4">
              Your password has been successfully updated. You will be redirected to your dashboard shortly.
            </p>
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
        </div>
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
      <div className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Reset Your Password
          </h1>
          <p className="text-gray-600">
            Enter your new password below
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full px-3 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-black ${
                password && !Object.values(passwordRequirements).every(req => req)
                  ? 'border-red-500 focus:ring-red-500' 
                  : password && Object.values(passwordRequirements).every(req => req)
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-300 focus:ring-blue-500'
              }`}
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
              placeholder="Enter your new password"
              required
            />
            
            {/* Password strength meter */}
            {password && (
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-600">Password strength:</span>
                  <span className={`text-xs font-medium ${
                    getPasswordStrength().text === 'Weak' ? 'text-red-600' :
                    getPasswordStrength().text === 'Fair' ? 'text-yellow-600' :
                    getPasswordStrength().text === 'Good' ? 'text-blue-600' :
                    getPasswordStrength().text === 'Strong' ? 'text-green-600' : ''
                  }`}>
                    {getPasswordStrength().text}
                  </span>
                </div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-2 flex-1 rounded-full ${
                        level <= getPasswordStrength().level
                          ? getPasswordStrength().color
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-2">
              Password must be at least 8 characters with uppercase, lowercase, number, and special character
            </p>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <input
              type={showPasswords ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={`w-full px-3 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-black ${
                confirmPasswordError
                  ? 'border-red-500 focus:ring-red-500' 
                  : confirmPassword && password && confirmPassword === password
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-300 focus:ring-blue-500'
              }`}
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
              placeholder="Confirm your new password"
              required
            />
            {confirmPasswordError && (
              <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>
            )}
            {confirmPassword && password && confirmPassword === password && (
              <p className="text-green-600 text-xs mt-1">Passwords match</p>
            )}
          </div>

          <div className="mb-4">
            <button
              type="button"
              onClick={() => setShowPasswords(!showPasswords)}
              className="text-sm text-blue-600 hover:text-blue-500 focus:outline-none"
            >
              {showPasswords ? 'Hide passwords' : 'Show passwords'}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Updating Password...
              </div>
            ) : (
              'Update Password'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={async () => {
              await logout();
              router.push('/auth');
            }}
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            Back to Sign In
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}