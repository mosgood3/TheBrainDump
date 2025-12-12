'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { useAuthActions } from '../../hooks/useAuth';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isPaid } = useAuth();
  const { logout } = useAuthActions();

  const handleSignIn = () => {
    router.push('/auth');
  };

  const handleLogout = async () => {
    try {
      const { error } = await logout();
      if (error) {
        console.error('Logout error:', error);
      } else {
        // Force a page reload to clear any cached state
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleUnlockCourse = () => {
    router.push('/chapter/1');
  };

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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar
        onSignIn={handleSignIn}
        onLogout={handleLogout}
        isLoggedIn={!!user}
        userInitials={getUserInitials()}
        isPaid={pathname === '/' ? true : isPaid} // Hide unlock button on homepage
        onUnlockCourse={handleUnlockCourse}
      />

      <main className="flex-1">
        {children}
      </main>

      {!user && <Footer />}
    </div>
  );
}