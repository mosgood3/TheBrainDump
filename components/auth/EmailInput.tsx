'use client';

import { useState } from 'react';

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  onValidationChange?: (isValid: boolean) => void;
}

export default function EmailInput({ value, onChange, error, onValidationChange }: EmailInputProps) {
  const [localError, setLocalError] = useState('');

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (email: string) => {
    if (!email) {
      setLocalError('Email is required');
      onValidationChange?.(false);
      return false;
    }
    if (!emailRegex.test(email)) {
      setLocalError('Please enter a valid email address');
      onValidationChange?.(false);
      return false;
    }
    setLocalError('');
    onValidationChange?.(true);
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    onChange(newEmail);
    if (newEmail) {
      validateEmail(newEmail);
    } else {
      setLocalError('');
      onValidationChange?.(false);
    }
  };

  const displayError = error || localError;

  return (
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={handleChange}
        className={`w-full px-3 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-black ${
          displayError 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300 focus:ring-blue-500'
        }`}
        style={{ color: '#000000', backgroundColor: '#ffffff' }}
        required
      />
      {displayError && (
        <p className="text-red-500 text-xs mt-1">{displayError}</p>
      )}
    </div>
  );
}