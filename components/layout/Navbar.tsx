'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ConfirmationModal from '../ui/ConfirmationModal';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface NavbarProps {
  navItems?: NavItem[];
  onSignIn?: () => void;
  onLogout?: () => void;
  isLoggedIn?: boolean;
  userInitials?: string;
  isPaid?: boolean;
  onUnlockCourse?: () => void;
}

export default function Navbar({
  navItems = [
    { label: "Home", href: "#home" },
    { label: "My Story", href: "/my-story" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "#contact" }
  ],
  onSignIn,
  onLogout,
  isLoggedIn = false,
  userInitials = "U",
  isPaid = false,
  onUnlockCourse
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const pathname = usePathname();

  // If we're on any page other than homepage, anchor links should go back to main page
  const getNavHref = (href: string) => {
    // Only modify anchor links (starting with #), not full page paths
    if (pathname !== '/' && href.startsWith('#')) {
      return `/${href}`;
    }
    return href;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleSignOutClick = () => {
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    setShowSignOutModal(true);
  };

  const handleSignOutConfirm = () => {
    setShowSignOutModal(false);
    onLogout?.();
  };

  const handleSignOutCancel = () => {
    setShowSignOutModal(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src="/images/Home/logo.png"
                alt="TheBrainDump Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-4xl font-bold hidden sm:block">
              <span className="text-blue-600">The</span>
              <span className="text-orange-500">Brain</span>
              <span className="text-blue-600">Dump</span>
            </span>
            <span className="text-2xl font-bold sm:hidden">
              <span className="text-blue-600">The</span>
              <span className="text-orange-500">Brain</span>
              <span className="text-blue-600">Dump</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={getNavHref(item.href)}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-300 relative ${
                  item.active
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-orange-600'
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item.label}
              </a>
            ))}

            {/* Unlock Full Course Button - Show only if logged in but not paid */}
            {isLoggedIn && !isPaid && (
              <button
                onClick={onUnlockCourse}
                className="px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                🔓 Unlock Full Course
              </button>
            )}

            {/* Support Button - Commented out */}
            {/*
            <a
              href="/support"
              className="px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Support
            </a>
            */}
            
            {/* Authentication Button */}
            {!isLoggedIn ? (
              <div className="flex items-center">
                <button
                  onClick={onSignIn}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4 ml-4 relative">
                {/* Welcome Message */}
                <div className="hidden lg:block">
                  <span className="text-sm text-gray-600 font-medium">
                    Welcome back!
                  </span>
                </div>
                
                {/* Premium User Avatar */}
                <button
                  onClick={toggleUserMenu}
                  className="group relative"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 ring-2 ring-white group-hover:ring-blue-200 group-hover:scale-105">
                    <span className="text-white text-sm font-semibold">{userInitials}</span>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm">
                    <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </button>
                
                {/* Enhanced User Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-12 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 z-50 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white text-xs font-semibold">{userInitials}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">Account</p>
                          <p className="text-xs text-green-600 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                            Online
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
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-orange-400 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-200 ${
                    isMenuOpen ? 'top-2 rotate-45' : 'top-0.5'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-opacity duration-200 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-200 ${
                    isMenuOpen ? 'top-2 -rotate-45' : 'top-3.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-200 overflow-hidden ${
            isMenuOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-100">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={getNavHref(item.href)}
                onClick={() => setIsMenuOpen(false)}
                className="block mx-2 mb-3 px-4 py-4 text-base font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 active:bg-gray-50 active:scale-95 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
            
            {/* Mobile Unlock Full Course Button - Show only if logged in but not paid */}
            {isLoggedIn && !isPaid && (
              <div className="px-2 pt-2">
                <button
                  onClick={() => {
                    onUnlockCourse?.();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🔓 Unlock Full Course
                </button>
              </div>
            )}

            {/* Mobile Support Button - Commented out */}
            {/*
            <div className="px-2 pt-2">
              <a
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Support the Mission
              </a>
            </div>
            */}
            
            {/* Mobile Authentication Button */}
            {!isLoggedIn ? (
              <div className="px-2 pt-4 border-t border-gray-100 mt-2">
                <button
                  onClick={() => {
                    onSignIn?.();
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div className="px-2 pt-4 border-t border-gray-100 mt-2 space-y-3">
                {/* Mobile User Info Header */}
                <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-semibold">{userInitials}</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm">
                      <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">Account</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
                      Online
                    </p>
                  </div>
                </div>
                
                {/* Mobile Menu Items */}
                <div className="space-y-1">
                  <button
                    onClick={handleSignOutClick}
                    className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors text-left group"
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
        </div>
      </div>

      <ConfirmationModal
        isOpen={showSignOutModal}
        onClose={handleSignOutCancel}
        onConfirm={handleSignOutConfirm}
        title="Sign Out"
        message="Are you sure you want to sign out?"
        confirmText="Sign Out"
        cancelText="Cancel"
        confirmButtonClass="bg-red-600 hover:bg-red-700 text-white"
      />
    </nav>
  );
}