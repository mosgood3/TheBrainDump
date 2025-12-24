'use client';

import React from 'react';

export function AdditionalReadingSublesson({ onComplete: _onComplete, isCompleted: _isCompleted }: { onComplete: () => void; isCompleted: boolean }) {
  return (
    <div className="w-full mx-auto">
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">Additional Reading Resources</h2>
        <p className="text-gray-400">Content coming soon...</p>
      </div>
    </div>
  );
}
