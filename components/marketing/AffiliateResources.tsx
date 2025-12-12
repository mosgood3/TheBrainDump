'use client';

import React from 'react';
import Image from 'next/image';

interface Book {
  title: string;
  author: string;
  description: string;
  amazonUrl: string;
  imageUrl: string;
  price?: string;
}

const books: Book[] = [
  {
    title: "The Anxiety and Worry Workbook",
    author: "David A. Clark",
    description: "A comprehensive cognitive behavioral approach to overcoming anxiety and worry with practical exercises and techniques.",
    amazonUrl: "https://www.amazon.com/dp/1462533418?tag=YOUR_AFFILIATE_TAG",
    imageUrl: "/api/placeholder/150/200",
    price: "$18.95"
  },
  {
    title: "Mind Over Mood",
    author: "Dennis Greenberger & Christine A. Padesky",
    description: "A proven cognitive therapy approach to change how you feel by changing the way you think.",
    amazonUrl: "https://www.amazon.com/dp/1462520421?tag=YOUR_AFFILIATE_TAG",
    imageUrl: "/api/placeholder/150/200",
    price: "$25.00"
  },
  {
    title: "The Mindful Way Through Anxiety",
    author: "Susan M. Orsillo & Lizabeth Roemer",
    description: "Break free from chronic worry and reclaim your life using mindfulness and acceptance strategies.",
    amazonUrl: "https://www.amazon.com/dp/1606238043?tag=YOUR_AFFILIATE_TAG",
    imageUrl: "/api/placeholder/150/200",
    price: "$17.95"
  },
  {
    title: "Dare: The New Way to End Anxiety",
    author: "Barry McDonagh",
    description: "A revolutionary approach to stopping panic attacks and ending general anxious worry for good.",
    amazonUrl: "https://www.amazon.com/dp/0956596258?tag=YOUR_AFFILIATE_TAG",
    imageUrl: "/api/placeholder/150/200",
    price: "$14.95"
  }
];

const AffiliateDisclosure: React.FC = () => (
  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="ml-3">
        <p className="text-sm text-blue-700">
          <strong>Affiliate Disclosure:</strong> We are a participant in the Amazon Services LLC Associates Program,
          an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com
          and affiliated sites. This means we may receive a small commission if you purchase through our links,
          at no extra cost to you.
        </p>
      </div>
    </div>
  </div>
);

const BookCard: React.FC<{ book: Book }> = ({ book }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <Image
            src={book.imageUrl}
            alt={`${book.title} cover`}
            className="w-24 h-32 object-cover rounded-md shadow-sm mx-auto sm:mx-0"
            width={96}
            height={128}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{book.description}</p>
          <div className="flex items-center justify-between">
            {book.price && (
              <span className="text-lg font-bold text-green-600">{book.price}</span>
            )}
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium rounded-md transition-colors duration-200"
            >
              View on Amazon
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AffiliateResources: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Additional Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complement your anxiety recovery journey with these carefully selected books.
            Each recommendation offers evidence-based strategies and insights to support your healing process.
          </p>
        </div>

        <AffiliateDisclosure />

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Why These Books?
            </h3>
            <p className="text-gray-600 text-sm">
              These books are selected based on their evidence-based approaches, positive reviews from readers,
              and alignment with the cognitive-behavioral and mindfulness techniques taught in our course.
              They serve as excellent supplements to reinforce and expand upon your learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateResources;