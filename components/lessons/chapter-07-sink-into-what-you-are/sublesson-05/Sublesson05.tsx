'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Book } from '@/data/books';
import { useProgress } from '../../../../context/ProgressContext';

interface AdditionalReadingSublessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export function AdditionalReadingSublesson({ onComplete, isCompleted: _isCompleted }: AdditionalReadingSublessonProps) {
  const { completeLesson: _completeLesson } = useProgress();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data.books || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading books...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-4xl mx-auto p-4 sm:p-6">

        {/* Sublesson Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Additional Reading Resources</h1>
          <p className="text-lg text-gray-600">Recommended books to deepen your understanding and support your continued growth</p>
        </div>


        {/* Book Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                {book.image_url ? (
                  <Image
                    src={book.image_url}
                    alt={`${book.title} cover`}
                    className="w-full h-full object-cover"
                    width={400}
                    height={300}
                  />
                ) : (
                  <span className="text-6xl">📖</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-3">by {book.author}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">{book.description}</p>
                <a
                  href={book.amazon_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition-colors duration-200 mt-auto"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Disclosure */}
        <div className="text-center text-xs text-gray-500 mb-8">
          <p>As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>

      </div>
    </div>
  );
}