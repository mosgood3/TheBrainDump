'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useAuthActions } from '../../../hooks/useAuth';

export function UserMenu() {
  const { user } = useAuth();
  const { logout } = useAuthActions();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const getUserInitials = () => {
    // Try to get full name from user metadata
    const fullName = user?.user_metadata?.full_name || user?.user_metadata?.name;
    if (fullName) {
      return fullName
        .split(' ')
        .map((name: string) => name[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    // Fallback to email initial
    if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return 'U';
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOutClick = async () => {
    setUserMenuOpen(false);
    try {
      const result = await logout();
      if (result.error) {
        console.error('Logout error:', result.error);
        alert('Logout failed: ' + result.error);
      }
    } catch (error) {
      console.error('Unexpected logout error:', error);
    } finally {
      // Always redirect regardless of result to ensure UI consistency
      // Use router.push for Next.js navigation or hard reload to clear all state
      window.location.replace('/');
    }
  };

  return (
    <div className="relative z-[100]" ref={userMenuRef}>
      <button
        onClick={() => setUserMenuOpen(!userMenuOpen)}
        className="group relative"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-white group-hover:ring-blue-200 group-hover:scale-105">
          <span className="text-white text-sm font-semibold">
            {getUserInitials()}
          </span>
        </div>

        {/* Status Indicator */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm">
          <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {userMenuOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-[100] border border-gray-100 animate-in slide-in-from-top-2 duration-200">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-semibold">
                  {getUserInitials()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  {user?.email?.split('@')[0] || 'User'}
                </p>
                <p className="text-xs text-gray-500 truncate lg:hidden">
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="py-1">
            <button
              onClick={handleSignOutClick}
              className="flex items-center w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors group"
            >
              <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}