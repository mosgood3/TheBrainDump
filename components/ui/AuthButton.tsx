'use client';

import { useState } from 'react';

interface AuthButtonProps {
  onClick: () => Promise<{ user: unknown; error: string | null }>;
  icon: React.ReactNode;
  text: string;
  disabled?: boolean;
}

export default function AuthButton({ onClick, icon, text, disabled }: AuthButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (disabled) return;
    
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
      ) : (
        icon
      )}
      <span className="font-medium text-gray-700">{text}</span>
    </button>
  );
}