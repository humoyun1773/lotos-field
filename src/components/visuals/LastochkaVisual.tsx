import type { FC } from 'react';

export const LastochkaVisual: FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
      {/* Background soft golden-blue glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(251,191,36,0.12) 0%, rgba(219,234,254,0.35) 50%, transparent 100%)'
        }}
      />

      {/* Main Swallow Bird SVG */}
      <div className="relative z-10 transition-transform duration-300 hover:scale-110">
        <svg
          className="w-36 h-28 drop-shadow-[0_6px_18px_rgba(26,86,219,0.30)]"
          viewBox="0 0 200 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave ribbon under bird */}
          <path
            d="M15 110 C60 120, 110 100, 185 65 C140 75, 90 85, 45 80 C30 78, 20 90, 15 110 Z"
            fill="url(#lv_waveGrad)"
          />
          {/* Right Wing */}
          <path
            d="M95 55 C115 20, 140 5, 175 2 C155 18, 140 38, 125 58 C115 62, 105 60, 95 55 Z"
            fill="url(#lv_wingTopGrad)"
          />
          {/* Left Wing */}
          <path
            d="M75 60 C50 48, 25 52, 5 62 C25 68, 55 68, 75 68 C80 65, 80 62, 75 60 Z"
            fill="url(#lv_wingLeftGrad)"
          />
          {/* Head & Beak */}
          <path
            d="M125 55 C132 50, 142 48, 150 46 C145 52, 138 56, 132 58 C128 58, 125 56, 125 55 Z"
            fill="#0f2963"
          />
          {/* Eye */}
          <circle cx="138" cy="51" r="1.5" fill="#ffffff" />
          <circle cx="138.5" cy="51" r="0.8" fill="#000000" />
          {/* Body */}
          <path
            d="M80 65 C100 60, 125 56, 132 58 C125 70, 110 80, 85 85 C80 82, 78 72, 80 65 Z"
            fill="url(#lv_bodyGrad)"
          />
          {/* Tail fork 1 */}
          <path
            d="M85 85 C65 95, 40 105, 18 108 C35 98, 55 90, 75 84 Z"
            fill="url(#lv_tailGrad1)"
          />
          {/* Tail fork 2 */}
          <path
            d="M82 86 C65 102, 50 118, 30 128 C45 112, 60 98, 78 87 Z"
            fill="url(#lv_tailGrad2)"
          />
          {/* Golden shimmer on wing */}
          <path
            d="M105 52 C115 35, 130 18, 155 8 C140 22, 128 40, 118 56 Z"
            fill="url(#lv_goldenShimmer)"
            opacity="0.30"
          />

          <defs>
            <linearGradient id="lv_waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="lv_wingTopGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f2963" />
              <stop offset="60%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="lv_wingLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0f2963" />
            </linearGradient>
            <linearGradient id="lv_bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a1945" />
              <stop offset="70%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="lv_tailGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f2963" />
            </linearGradient>
            <linearGradient id="lv_tailGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#0a1945" />
            </linearGradient>
            <linearGradient id="lv_goldenShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
