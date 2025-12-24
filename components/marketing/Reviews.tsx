'use client';

import React from 'react';

interface Review {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Sarah Chen",
    role: "Career Changer",
    avatar: "SC",
    rating: 5,
    content: "I went from zero coding knowledge to building my first full-stack app in just a few weeks. The vibe-based approach made learning feel natural instead of overwhelming.",
    date: "2 weeks ago"
  },
  {
    name: "Marcus Johnson",
    role: "Entrepreneur",
    avatar: "MJ",
    rating: 5,
    content: "Finally, a course that focuses on building something real instead of endless theory. I built an app I actually use for my business. Worth every penny!",
    date: "1 month ago"
  },
  {
    name: "Emily Rodriguez",
    role: "Designer",
    avatar: "ER",
    rating: 5,
    content: "As a designer wanting to code, this was perfect. The interactive lessons with AI guidance helped me understand concepts way faster than traditional tutorials.",
    date: "3 weeks ago"
  },
  {
    name: "David Kim",
    role: "Student",
    avatar: "DK",
    rating: 5,
    content: "The beginner-friendly approach is no joke. I was intimidated by coding before, but this course made it approachable and even fun. My first app is live!",
    date: "2 weeks ago"
  },
  {
    name: "Jessica Taylor",
    role: "Marketing Manager",
    avatar: "JT",
    rating: 5,
    content: "I always wanted to understand how apps work. Now I've built one myself! The lifetime access means I can revisit lessons whenever I need to.",
    date: "1 week ago"
  },
  {
    name: "Alex Rivera",
    role: "Freelancer",
    avatar: "AR",
    rating: 5,
    content: "Best investment I've made in my skillset. The course goes from basics to deployment, and I now have a real project in my portfolio.",
    date: "3 weeks ago"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration - Extended for smooth transitions */}
      <div className="absolute inset-0 opacity-20 overflow-visible">
        {/* Orbs that blend with Pricing section above */}
        <div className="absolute -top-40 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -top-32 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* Middle orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>

        {/* Orbs that extend into Resources section below */}
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-300 text-sm font-semibold">5.0 from 100+ students</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Builders</span> Are Saying
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real reviews from people who went from beginner to app builder
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/10 border border-white/10 p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-semibold">{review.avatar}</span>
                  </div>
                  {/* Name and Role */}
                  <div>
                    <h3 className="text-white font-semibold text-sm">{review.name}</h3>
                    <p className="text-gray-400 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                "{review.content}"
              </p>

              {/* Date */}
              <p className="text-gray-500 text-xs">{review.date}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold">100% Satisfaction</p>
              <p className="text-gray-400 text-sm">Money-back guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold">100+ Students</p>
              <p className="text-gray-400 text-sm">Building real apps</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold">Lifetime Updates</p>
              <p className="text-gray-400 text-sm">Always current content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
