'use client';

import { useState } from 'react';

export interface UseAuthFormValidationResult {
  email: string;
  password: string;
  isEmailValid: boolean;
  isPasswordValid: boolean;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setEmailValid: (valid: boolean) => void;
  setPasswordValid: (valid: boolean) => void;
  isFormValid: boolean;
  validateEmail: (email: string) => boolean;
}

export function useAuthFormValidation(): UseAuthFormValidationResult {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (email: string): boolean => {
    if (!email) return false;
    return emailRegex.test(email);
  };

  const isFormValid = isEmailValid && isPasswordValid && email.length > 0 && password.length > 0;

  return {
    email,
    password,
    isEmailValid,
    isPasswordValid,
    setEmail,
    setPassword,
    setEmailValid,
    setPasswordValid,
    isFormValid,
    validateEmail,
  };
}