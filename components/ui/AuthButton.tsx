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
      className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/15 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm backdrop-blur-sm"
    >
      {loading ? (
        <div className="w-5 h-5 border-2 border-gray-300 border-t-white rounded-full animate-spin" />
      ) : (
        icon
      )}
      <span className="font-medium text-white">{text}</span>
    </button>
  );
}