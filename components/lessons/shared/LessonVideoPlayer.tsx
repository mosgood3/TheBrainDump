'use client';

import React, { useRef } from 'react';

interface LessonVideoPlayerProps {
  title?: string;
  description?: string;
  videoUrl: string;
  thumbnailUrl: string;
  videoLabel?: string;
  videoDescription?: string;
}

export function LessonVideoPlayer({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  videoLabel = "Course Video",
  videoDescription = "Watch this video to learn more"
}: LessonVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = React.useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.controls = true;
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Header - Only show if title or description provided */}
      {(title || description) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>}
          {description && (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Video Player */}
      <div className="max-w-4xl mx-auto">
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

            {/* Video */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={false}
                autoPlay={false}
                muted
                loop
                playsInline
                poster={thumbnailUrl}
              >
                <source src={videoUrl} type="video/webm" />
                <source src={videoUrl.replace('.webm', '.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay - Only show when not playing */}
              {!videoPlaying && (
                <button
                  onClick={handlePlayVideo}
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
            {!videoPlaying && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-mono">{videoLabel}</span>
                </div>
                <p className="text-gray-300 text-xs mt-2">{videoDescription}</p>
              </div>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
        </div>
      </div>
    </div>
  );
}
