'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../../components/layout/Layout';
import { Book } from '@/data/books';

export default function ResourcesPage() {
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
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
          <div className="text-center">
            <div className="h-12 w-12 border-4 rounded-full border-gray-300 border-t-purple-500 border-r-blue-500 animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading books...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
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
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-600">Recommended</span> <span className="text-orange-500">Reading</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover evidence-based books to support your anxiety recovery journey.
                These carefully selected resources complement proven therapeutic approaches.
              </p>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col max-w-sm mx-auto w-full">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  {book.image_url ? (
                    <Image
                      src={book.image_url}
                      alt={`${book.title} cover`}
                      className="w-full h-full object-cover"
                      width={300}
                      height={400}
                    />
                  ) : (
                    <span className="text-5xl">📖</span>
                  )}
                </div>
                <div className="p-4 flex flex-col">
                  <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">by {book.author}</p>
                  <p className="text-xs text-gray-700 leading-relaxed mb-3 line-clamp-3">{book.description}</p>
                  <a
                    href={book.amazon_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-3 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm rounded-lg transition-colors duration-200"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Affiliate Disclosure */}
          <div className="text-center text-xs text-gray-500 mt-8">
            <p>As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-blue-600">Ready for a</span> <span className="text-orange-500">Structured Approach?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get personalized guidance and interactive lessons with our comprehensive anxiety recovery course.
              </p>
              <a
                href="/auth"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Start Your Journey
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}