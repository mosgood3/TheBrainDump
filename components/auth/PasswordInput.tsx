'use client';

import { useState } from 'react';

interface PasswordRequirements {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  special: boolean;
}

interface PasswordStrength {
  level: number;
  text: string;
  color: string;
}

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  onValidationChange?: (isValid: boolean) => void;
}

export default function PasswordInput({ value, onChange, error, onValidationChange }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState('');
  const [requirements, setRequirements] = useState<PasswordRequirements>({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  const validatePassword = (password: string): boolean => {
    const newRequirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[@$!%*?&]/.test(password)
    };
    
    setRequirements(newRequirements);
    
    const allMet = Object.values(newRequirements).every(req => req);
    
    if (!password) {
      setLocalError('Password is required');
      onValidationChange?.(false);
      return false;
    }
    
    if (!allMet) {
      setLocalError('Password does not meet all requirements');
      onValidationChange?.(false);
      return false;
    }
    
    setLocalError('');
    onValidationChange?.(true);
    return true;
  };

  const getPasswordStrength = (): PasswordStrength => {
    const metCount = Object.values(requirements).filter(req => req).length;
    if (metCount === 0) return { level: 0, text: '', color: '' };
    if (metCount <= 2) return { level: 1, text: 'Weak', color: 'bg-red-500' };
    if (metCount <= 3) return { level: 2, text: 'Fair', color: 'bg-yellow-500' };
    if (metCount <= 4) return { level: 3, text: 'Good', color: 'bg-blue-500' };
    return { level: 4, text: 'Strong', color: 'bg-green-500' };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    onChange(newPassword);
    if (newPassword) {
      validatePassword(newPassword);
    } else {
      setLocalError('');
      setRequirements({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
      });
      onValidationChange?.(false);
    }
  };

  const displayError = error || localError;
  const strengthInfo = getPasswordStrength();

  return (
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
        Password
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={value}
          onChange={handleChange}
          className={`w-full px-3 py-2 pr-10 bg-white/10 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-white placeholder-gray-400 ${
            displayError
              ? 'border-red-500 focus:ring-red-500'
              : value && Object.values(requirements).every(req => req)
                ? 'border-green-500 focus:ring-green-500'
                : 'border-white/20 focus:ring-blue-500'
          }`}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 focus:outline-none"
        >
          {showPassword ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      </div>

      {/* Password strength meter */}
      {value && (
        <div className="mt-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-400">Password strength:</span>
            <span className={`text-xs font-medium ${
              strengthInfo.text === 'Weak' ? 'text-red-400' :
              strengthInfo.text === 'Fair' ? 'text-yellow-400' :
              strengthInfo.text === 'Good' ? 'text-blue-400' :
              strengthInfo.text === 'Strong' ? 'text-green-400' : ''
            }`}>
              {strengthInfo.text}
            </span>
          </div>
          <div className="flex gap-1 mb-2">
            {[1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`h-2 flex-1 rounded-full ${
                  level <= strengthInfo.level
                    ? strengthInfo.color
                    : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-2">
        Password must be at least 8 characters with uppercase, lowercase, number, and special character
      </p>

      {displayError && (
        <p className="text-red-400 text-xs mt-1">{displayError}</p>
      )}
    </div>
  );
}