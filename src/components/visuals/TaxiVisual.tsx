export const TaxiVisual = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden select-none">
      {/* Background Concentric Spider Web Matrix */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-45">
        <svg className="w-52 h-52 text-slate-400 stroke-current" viewBox="0 0 100 100" fill="none">
          {/* Radial Spokes */}
          <line x1="50" y1="50" x2="8" y2="8" strokeWidth="0.75" />
          <line x1="50" y1="50" x2="50" y2="2" strokeWidth="0.75" />
          <line x1="50" y1="50" x2="92" y2="8" strokeWidth="0.75" />
          <line x1="50" y1="50" x2="98" y2="50" strokeWidth="0.75" />
          <line x1="50" y1="50" x2="92" y2="92" strokeWidth="0.75" />
          <line x1="50" y1="50" x2="50" y2="98" strokeWidth="0.75" />
          <line x1="50" y1="50" x2="8" y2="92" strokeWidth="0.75" />
          <line x1="50" y1="50" x2="2" y2="50" strokeWidth="0.75" />

          {/* Web Polygon Rings */}
          <polygon points="50,15 75,22 85,50 75,78 50,85 25,78 15,50 25,22" strokeWidth="0.6" />
          <polygon points="50,26 68,32 75,50 68,68 50,74 32,68 25,50 32,32" strokeWidth="0.6" />
          <polygon points="50,38 60,42 65,50 60,58 50,62 40,58 35,50 40,42" strokeWidth="0.6" />
        </svg>
      </div>

      {/* 3D Glossy Black Spider (O'rgimchak) */}
      <div className="relative z-10 flex items-center justify-center transition-transform duration-300 hover:scale-115 cursor-pointer">
        <svg className="w-32 h-32 drop-shadow-[0_12px_20px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100" fill="none">
          {/* Left Articulated Legs */}
          <path d="M42 42 C20 12, 10 25, 12 40 C14 46, 20 48, 22 46" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M40 47 C14 24, 6 44, 8 60 C9 68, 16 70, 18 66" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M40 54 C10 52, 6 72, 10 86 C12 92, 20 92, 24 86" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M42 58 C18 78, 22 92, 28 96 C34 98, 40 94, 40 88" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />

          {/* Right Articulated Legs */}
          <path d="M58 42 C80 12, 90 25, 88 40 C86 46, 80 48, 78 46" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M60 47 C86 24, 94 44, 92 60 C91 68, 84 70, 82 66" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M60 54 C90 52, 94 72, 90 86 C88 92, 80 92, 76 86" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />
          <path d="M58 58 C82 78, 78 92, 72 96 C66 98, 60 94, 60 88" stroke="url(#spiderLegGrad)" strokeWidth="3.2" strokeLinecap="round" />

          {/* Abdomen */}
          <ellipse cx="50" cy="64" rx="15" ry="19" fill="url(#spiderAbdomenGrad)" />
          {/* Cephalothorax / Head */}
          <circle cx="50" cy="42" r="11" fill="url(#spiderHeadGrad)" />

          {/* Spider Eyes (Electric Blue/Cyan dots) */}
          <circle cx="46" cy="35" r="1.5" fill="#38bdf8" />
          <circle cx="54" cy="35" r="1.5" fill="#38bdf8" />
          <circle cx="43" cy="38" r="1.2" fill="#38bdf8" />
          <circle cx="57" cy="38" r="1.2" fill="#38bdf8" />

          {/* 3D Glossy Highlights on Body */}
          <ellipse cx="45" cy="58" rx="4.5" ry="10" fill="#ffffff" opacity="0.4" transform="rotate(-15 45 58)" />
          <circle cx="47" cy="40" r="3.5" fill="#ffffff" opacity="0.45" />

          <defs>
            <radialGradient id="spiderAbdomenGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#52525b" />
              <stop offset="40%" stopColor="#27272a" />
              <stop offset="85%" stopColor="#09090b" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
            <radialGradient id="spiderHeadGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#71717a" />
              <stop offset="50%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
            <linearGradient id="spiderLegGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#52525b" />
              <stop offset="50%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Taxi Speed Lightning Badge (Top Right) */}
      <div className="absolute top-2 right-4 bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 p-1.5 rounded-full shadow-lg animate-pulse border border-white">
        <span className="text-xs font-black">⚡</span>
      </div>

      {/* Speedometer / Taxi Icon (Left Bottom) */}
      <div className="absolute bottom-2 left-4 bg-gradient-to-r from-[#0f2963] to-[#1d4ed8] text-amber-300 px-2 py-1 rounded-lg shadow-md border border-white/60 flex items-center gap-1">
        <span className="text-xs">🚕</span>
        <span className="text-[9px] font-mono font-bold text-white">24/7</span>
      </div>

      {/* Taxi Checkerboard Flag Badge (Right Bottom) */}
      <div className="absolute bottom-2 right-4 flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-slate-300 shadow-md">
        <span className="text-xs">🏁</span>
        <span className="text-[9px] font-black text-slate-900 font-mono">TAXI</span>
      </div>
    </div>
  );
};
