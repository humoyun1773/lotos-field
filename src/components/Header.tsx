import type { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="relative w-full flex flex-col items-center justify-center pt-8 pb-4 px-4 text-center select-none">
      {/* Swallow Bird (Lastochka) Logo */}
      <div className="relative mb-2 flex items-center justify-center">
        {/* Ambient Glow */}
        <div className="absolute w-32 h-20 bg-blue-400/20 rounded-full blur-xl pointer-events-none" />

        {/* Dynamic Swallow Vector Bird */}
        <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-105">
          <svg
            className="w-28 h-20 sm:w-32 sm:h-24 drop-shadow-[0_8px_16px_rgba(26,86,219,0.25)]"
            viewBox="0 0 200 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Smooth Dynamic Wave Under the Bird */}
            <path
              d="M15 110 C60 120, 110 100, 185 65 C140 75, 90 85, 45 80 C30 78, 20 90, 15 110 Z"
              fill="url(#waveGrad)"
            />

            {/* Flying Swallow Bird Body & Wings */}
            {/* Right Wing (Upward) */}
            <path
              d="M95 55 C115 20, 140 5, 175 2 C155 18, 140 38, 125 58 C115 62, 105 60, 95 55 Z"
              fill="url(#wingTopGrad)"
            />
            {/* Left Wing (Swept) */}
            <path
              d="M75 60 C50 48, 25 52, 5 62 C25 68, 55 68, 75 68 C80 65, 80 62, 75 60 Z"
              fill="url(#wingLeftGrad)"
            />
            {/* Bird Head & Beak */}
            <path
              d="M125 55 C132 50, 142 48, 150 46 C145 52, 138 56, 132 58 C128 58, 125 56, 125 55 Z"
              fill="#0f2963"
            />
            {/* Bird Eye */}
            <circle cx="138" cy="51" r="1.5" fill="#ffffff" />
            <circle cx="138.5" cy="51" r="0.8" fill="#000000" />
            {/* Main Torso */}
            <path
              d="M80 65 C100 60, 125 56, 132 58 C125 70, 110 80, 85 85 C80 82, 78 72, 80 65 Z"
              fill="url(#bodyGrad)"
            />
            {/* Forked Tail (Lastochka characteristic) */}
            <path
              d="M85 85 C65 95, 40 105, 18 108 C35 98, 55 90, 75 84 Z"
              fill="url(#tailGrad1)"
            />
            <path
              d="M82 86 C65 102, 50 118, 30 128 C45 112, 60 98, 78 87 Z"
              fill="url(#tailGrad2)"
            />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="wingTopGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0f2963" />
                <stop offset="60%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="wingLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#0f2963" />
              </linearGradient>
              <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a1945" />
                <stop offset="70%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <linearGradient id="tailGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f2963" />
              </linearGradient>
              <linearGradient id="tailGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#0a1945" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Title: ZALATIYE LASTOCHKA */}
      <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold tracking-[0.12em] text-[#0f2963] uppercase drop-shadow-sm">
        ZALATIYE LASTOCHKA
      </h1>

      {/* Subtitle: M C H J */}
      <h2 className="font-cinzel text-base sm:text-lg md:text-xl font-bold tracking-[0.45em] text-[#1e3a8a] uppercase mt-1 mb-2">
        M C H J
      </h2>

      {/* Elegant Separator Line with Diamond */}
      <div className="flex items-center justify-center gap-3 w-full max-w-md my-1 opacity-70">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#2563eb] to-[#1e3a8a]" />
        <span className="w-2 h-2 rotate-45 bg-[#1e3a8a]" />
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#2563eb] to-[#1e3a8a]" />
      </div>

      {/* Motto / Slogan: SIFAT • ISHONCH • NATIJA */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] text-[#2563eb] uppercase my-2">
        <span>SIFAT</span>
        <span className="text-[#1e3a8a] text-[10px]">•</span>
        <span>ISHONCH</span>
        <span className="text-[#1e3a8a] text-[10px]">•</span>
        <span>NATIJA</span>
      </div>

      {/* Section Title Banner: FAOLIYAT YO'NALISHLARIMIZ */}
      <div className="relative inline-flex items-center justify-center gap-3 mt-3 px-6 py-1">
        {/* Left Line */}
        <div className="hidden sm:flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f2963]" />
          <div className="w-12 md:w-20 h-[1.5px] bg-[#0f2963]" />
        </div>

        {/* Section Heading */}
        <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-[0.18em] text-[#0f2963] uppercase">
          FAOLIYAT YO'NALISHLARIMIZ
        </span>

        {/* Right Line */}
        <div className="hidden sm:flex items-center gap-1">
          <div className="w-12 md:w-20 h-[1.5px] bg-[#0f2963]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#0f2963]" />
        </div>
      </div>
    </header>
  );
};
