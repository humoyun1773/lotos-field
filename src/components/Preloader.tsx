import { useState, useEffect, type FC } from 'react';

interface PreloaderProps {
  onFinish?: () => void;
}

export const Preloader: FC<PreloaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 12;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsHidden(true);
            onFinish?.();
          }, 350);
        }, 200);
      } else {
        setProgress(current);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#ebf4ff] via-[#f5f9ff] to-[#e4f0ff] transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient light */}
      <div className="absolute w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm">
        {/* Animated Flying Bird Logo */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/30 to-sky-300/30 rounded-full blur-lg animate-pulse" />
          
          <div className="relative animate-float-slow">
            <svg
              className="w-24 h-18 sm:w-28 sm:h-20 drop-shadow-[0_10px_20px_rgba(23,70,162,0.3)]"
              viewBox="0 0 200 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 110 C60 120, 110 100, 185 65 C140 75, 90 85, 45 80 C30 78, 20 90, 15 110 Z"
                fill="url(#pre_waveGrad)"
              />
              <path
                d="M95 55 C115 20, 140 5, 175 2 C155 18, 140 38, 125 58 C115 62, 105 60, 95 55 Z"
                fill="url(#pre_wingTopGrad)"
              />
              <path
                d="M75 60 C50 48, 25 52, 5 62 C25 68, 55 68, 75 68 C80 65, 80 62, 75 60 Z"
                fill="url(#pre_wingLeftGrad)"
              />
              <path
                d="M125 55 C132 50, 142 48, 150 46 C145 52, 138 56, 132 58 C128 58, 125 56, 125 55 Z"
                fill="#0f2963"
              />
              <circle cx="138" cy="51" r="1.5" fill="#ffffff" />
              <circle cx="138.5" cy="51" r="0.8" fill="#000000" />
              <path
                d="M80 65 C100 60, 125 56, 132 58 C125 70, 110 80, 85 85 C80 82, 78 72, 80 65 Z"
                fill="url(#pre_bodyGrad)"
              />
              <path
                d="M85 85 C65 95, 40 105, 18 108 C35 98, 55 90, 75 84 Z"
                fill="url(#pre_tailGrad1)"
              />
              <path
                d="M82 86 C65 102, 50 118, 30 128 C45 112, 60 98, 78 87 Z"
                fill="url(#pre_tailGrad2)"
              />

              <defs>
                <linearGradient id="pre_waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="50%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="pre_wingTopGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f2963" />
                  <stop offset="60%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="pre_wingLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#0f2963" />
                </linearGradient>
                <linearGradient id="pre_bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0a1945" />
                  <stop offset="70%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="pre_tailGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" />
                  <stop offset="100%" stopColor="#0f2963" />
                </linearGradient>
                <linearGradient id="pre_tailGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#0a1945" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Company Title */}
        <h2 className="font-cinzel text-xl sm:text-2xl font-black tracking-[0.14em] text-[#0f2963] uppercase drop-shadow-xs mb-1">
          ZALATIYE LASTOCHKA
        </h2>
        <div className="text-[10px] font-extrabold tracking-[0.3em] text-[#1e3a8a] uppercase mb-4">
          M C H J
        </div>

        {/* Slogan */}
        <div className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-6">
          SIFAT • ISHONCH • NATIJA
        </div>

        {/* Progress Bar Container */}
        <div className="w-56 h-2 bg-blue-100/80 rounded-full overflow-hidden p-0.5 border border-blue-200/60 shadow-inner mb-2">
          <div
            className="h-full bg-gradient-to-r from-[#0f2963] via-[#1d4ed8] to-[#3b82f6] rounded-full transition-all duration-150 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percent & status */}
        <div className="flex items-center justify-between w-56 text-[11px] font-bold text-slate-500">
          <span>Yuklanmoqda...</span>
          <span className="text-[#0f2963]">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
