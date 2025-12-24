'use client';

import React, { useRef } from 'react';

interface HeroProps {
  onStartJourney?: () => void;
}

export default function Hero({ onStartJourney }: HeroProps) {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const [mobileVideoPlaying, setMobileVideoPlaying] = React.useState(false);
  const [desktopVideoPlaying, setDesktopVideoPlaying] = React.useState(false);

  const handlePlayVideo = (videoRef: React.RefObject<HTMLVideoElement>, setPlaying: (playing: boolean) => void) => {
    if (videoRef.current) {
      videoRef.current.controls = true;
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs - Extended for smooth transitions */}
      <div className="absolute inset-0 opacity-30 overflow-visible">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        {/* Transition orbs that extend into next section */}
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - All Content */}
          <div className="order-1 lg:order-1 space-y-8 text-center lg:text-left w-full">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-7xl sm:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black leading-[1.1] tracking-tight" style={{fontWeight: 900, WebkitTextStroke: '1px currentColor'}}>
                <span className="inline-block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300" style={{WebkitTextStroke: '1px rgba(255,255,255,0.3)', animation: 'fadeInUp 0.8s ease-out 0.2s both'}}>
                  Learn
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]" style={{WebkitTextStroke: '1px rgba(59,130,246,0.3)', animation: 'fadeInUp 0.8s ease-out 0.5s both, gradient 8s ease infinite'}}>
                  Build
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] drop-shadow-[0_0_40px_rgba(249,115,22,0.5)]" style={{WebkitTextStroke: '1px rgba(249,115,22,0.3)', animation: 'fadeInUp 0.8s ease-out 0.8s both, gradient 8s ease infinite'}}>
                  Deploy
                </span>
              </h1>
            </div>

            {/* Show video here on mobile only */}
            <div className="lg:hidden">
              <div className="relative group">
                {/* Video Container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/0">
                  {/* Video or Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                    <video
                      ref={mobileVideoRef}
                      className="w-full h-full object-cover"
                      controls={false}
                      autoPlay={false}
                      muted
                      loop
                      playsInline
                      poster="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/HeroThumbnail.png"
                    >
                      <source src="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Videos/Herointro.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay - Only show when not playing */}
                    {!mobileVideoPlaying && (
                      <button
                        onClick={() => handlePlayVideo(mobileVideoRef, setMobileVideoPlaying)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 group"
                      >
                        <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Video Info Overlay - Only show when not playing */}
                  {!mobileVideoPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-mono">Course Introduction</span>
                      </div>
                      <p className="text-gray-300 text-xs mt-2">Watch how we build a full-stack app step by step</p>
                    </div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>
            </div>

            {/* Description and rest of content */}
            <p className="text-2xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Learn full-stack development by building a real app from scratch.
              <span className="text-blue-400 font-semibold"> No fluff. Just vibes and code.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <button
                onClick={onStartJourney}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Start Building</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Video Player (Desktop Only) */}
          <div className="hidden lg:block order-2">
            <div className="relative group">
              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/20 backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/0">
                {/* Browser Chrome */}
                <div className="bg-gray-900/50 border-b border-white/10 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-800/50 rounded px-3 py-1 text-xs text-gray-400 text-center">
                      thebraindump.com
                    </div>
                  </div>
                </div>

                {/* Video or Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <video
                    ref={desktopVideoRef}
                    className="w-full h-full object-cover"
                    controls={false}
                    autoPlay={false}
                    muted
                    loop
                    playsInline
                    poster="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Images/HeroThumbnail.png"
                  >
                    <source src="https://xtubpexwrstuucwleaug.supabase.co/storage/v1/object/public/Videos/Herointro.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play Button Overlay - Only show when not playing */}
                  {!desktopVideoPlaying && (
                    <button
                      onClick={() => handlePlayVideo(desktopVideoRef, setDesktopVideoPlaying)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 group"
                    >
                      <div className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>

                {/* Video Info Overlay - Only show when not playing */}
                {!desktopVideoPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-mono">Course Introduction</span>
                    </div>
                    <p className="text-gray-300 text-xs mt-2">Watch how we build a full-stack app step by step</p>
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-gray-400">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-sm">Beginner-friendly • No prerequisites</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Self-Paced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
