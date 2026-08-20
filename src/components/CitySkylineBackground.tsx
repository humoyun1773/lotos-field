import type { FC } from 'react';

export const CitySkylineBackground: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Radial Sky Light Blobs */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-blue-300/40 via-sky-200/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-32 w-[600px] h-[500px] bg-sky-300/25 rounded-full blur-3xl" />

      {/* Abstract Flowing Sky Wave Ribbons */}
      <svg
        className="absolute top-0 left-0 w-full h-[600px] opacity-35"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,120 C300,280 800,20 1540,180 L1540,0 L-100,0 Z"
          fill="url(#waveBg1)"
        />
        <path
          d="M-50,300 C400,100 950,350 1500,80"
          stroke="url(#lineGrad1)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          d="M0,220 C500,320 1000,140 1440,240"
          stroke="#60a5fa"
          strokeWidth="1"
          opacity="0.4"
        />
        <defs>
          <linearGradient id="waveBg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#2563eb" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* City Skyline Silhouette (Skyscrapers in Soft Blue Mist) */}
      <div className="absolute top-24 left-0 right-0 w-full flex justify-between px-4 sm:px-12 opacity-15 pointer-events-none">
        {/* Left City Cluster */}
        <svg className="w-64 sm:w-80 h-36 text-blue-800 fill-current" viewBox="0 0 300 120">
          <rect x="10" y="40" width="22" height="80" />
          <polygon points="21,20 10,40 32,40" />
          <rect x="36" y="55" width="18" height="65" />
          <rect x="58" y="25" width="28" height="95" />
          <rect x="90" y="45" width="20" height="75" />
          <rect x="114" y="60" width="30" height="60" />
          <polygon points="129,40 114,60 144,60" />
          <rect x="148" y="30" width="24" height="90" />
          <line x1="160" y1="10" x2="160" y2="30" stroke="currentColor" strokeWidth="2" />
          <rect x="176" y="50" width="20" height="70" />
        </svg>

        {/* Right City Cluster */}
        <svg className="w-64 sm:w-80 h-36 text-blue-800 fill-current" viewBox="0 0 300 120">
          <rect x="50" y="45" width="22" height="75" />
          <rect x="76" y="30" width="26" height="90" />
          <line x1="89" y1="10" x2="89" y2="30" stroke="currentColor" strokeWidth="2" />
          <rect x="106" y="55" width="20" height="65" />
          <rect x="130" y="20" width="32" height="100" />
          <polygon points="146,5 130,20 162,20" />
          <rect x="166" y="40" width="24" height="80" />
          <rect x="194" y="60" width="18" height="60" />
          <rect x="216" y="35" width="28" height="85" />
        </svg>
      </div>

      {/* Floating Sparkle Dots */}
      <div className="absolute top-20 left-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
      <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-sky-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute top-80 left-[30%] w-1 h-1 bg-indigo-300 rounded-full animate-pulse" />
      <div className="absolute top-96 right-[35%] w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" />
    </div>
  );
};
