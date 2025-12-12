'use client';

import React, { useState } from 'react';

export default function VideoIntro() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section id="video" className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            <span className="text-blue-600">Meet the Creator</span> <span className="text-orange-500">Behind Your Recovery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch this personal message about why I built TheBrainDump and how it can help transform your relationship with anxiety
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-4 sm:p-8 border border-blue-100 shadow-xl">
            {/* Video Container */}
            <div className="relative aspect-[3/4] sm:aspect-[3/4] md:aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              {!isPlaying ? (
                // Video Preview/Thumbnail
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group cursor-pointer" onClick={handlePlayVideo}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-16 h-16 border border-white/30 rounded-full"></div>
                    <div className="absolute top-20 right-20 w-12 h-12 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-16 left-20 w-20 h-20 border border-white/30 rounded-full"></div>
                    <div className="absolute bottom-10 right-16 w-8 h-8 border border-white/30 rounded-full"></div>
                  </div>

                  {/* Play Button */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                        <svg className="w-6 h-6 text-blue-600 group-hover:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        A Personal Message from Sam
                      </h3>
                      <p className="text-blue-100 text-lg">
                        3 minutes • Why I built this for you
                      </p>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">👋 Personal Story</span>
                  </div>
                  <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">✨ Free to Watch</span>
                  </div>
                </div>
              ) : (
                // Video player
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  playsInline
                >
                  <source
                    src="/videos/intro-video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}