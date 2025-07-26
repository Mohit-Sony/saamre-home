import React from 'react';

const JellyVideoContainer = ({ 
  videoSrc = "", 
  width = 420, 
  height = 500, 
  autoPlay = true,
  muted = true,
  loop = true,
  className = ""
}) => {
  return (
    <div className={`relative mx-auto ${className}`} style={{ width: `${width}px`, height: `${height}px` }}>
      {/* Main jelly container */}
      <div 
        className="w-full h-full overflow-hidden jelly-container"
        style={{
          width: `${width}px`,
          height: `${height}px`
        }}
      >
        {/* Video content */}
        {videoSrc ? (
          <video 
            className="w-full h-full object-cover"
            src={videoSrc}
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            playsInline
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-white/60 text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-l-white/70 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
              </div>
              <p className="text-sm">Video Content</p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .jelly-container {
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          animation: jellyMorph 6s ease-in-out infinite;
        }

        @keyframes jellyMorph {
          0% { 
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          }
          12.5% { 
            border-radius: 45% 55% 48% 52% / 58% 65% 35% 42%;
          }
          25% { 
            border-radius: 52% 48% 55% 45% / 62% 58% 42% 38%;
          }
          37.5% { 
            border-radius: 48% 52% 46% 54% / 59% 63% 37% 41%;
          }
          50% { 
            border-radius: 53% 47% 49% 51% / 64% 56% 44% 36%;
          }
          62.5% { 
            border-radius: 47% 53% 52% 48% / 57% 61% 39% 43%;
          }
          75% { 
            border-radius: 51% 49% 47% 53% / 61% 59% 41% 39%;
          }
          87.5% { 
            border-radius: 49% 51% 53% 47% / 58% 62% 38% 42%;
          }
          100% { 
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          }
        }
      `}</style>
    </div>
  );
};

export default JellyVideoContainer;