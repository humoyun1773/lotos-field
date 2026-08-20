export const TravelVisual = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden select-none">
      {/* Ambient Blue Radial Glow */}
      <div className="absolute inset-0 bg-radial from-sky-200/50 via-blue-100/30 to-transparent rounded-2xl pointer-events-none" />

      {/* 3D Realistic Earth Globe */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg className="w-full h-full drop-shadow-[0_12px_24px_rgba(26,86,219,0.35)]" viewBox="0 0 120 120" fill="none">
          {/* Globe Sphere Base */}
          <circle cx="60" cy="60" r="54" fill="url(#earthWaterGrad)" />
          
          {/* Continents */}
          <path
            d="M32 30 C45 22, 60 25, 68 35 C75 42, 65 55, 52 58 C40 60, 30 50, 32 30 Z"
            fill="url(#continentGrad)"
            opacity="0.9"
          />
          <path
            d="M65 38 C75 32, 90 38, 98 48 C92 62, 80 65, 72 58 C68 52, 60 48, 65 38 Z"
            fill="url(#continentGrad)"
            opacity="0.9"
          />
          <path
            d="M40 70 C55 65, 75 72, 80 88 C70 98, 50 102, 38 90 C32 82, 35 75, 40 70 Z"
            fill="url(#continentGrad)"
            opacity="0.9"
          />
          
          {/* Latitude & Longitude Coordinate Lines */}
          <ellipse cx="60" cy="60" rx="54" ry="24" stroke="white" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
          <ellipse cx="60" cy="60" rx="30" ry="54" stroke="white" strokeWidth="0.75" strokeOpacity="0.4" fill="none" />
          <line x1="6" y1="60" x2="114" y2="60" stroke="white" strokeWidth="0.75" strokeOpacity="0.4" />
          <line x1="60" y1="6" x2="60" y2="114" stroke="white" strokeWidth="0.75" strokeOpacity="0.4" />

          {/* Spherical Shadow and 3D Specular Highlight */}
          <circle cx="60" cy="60" r="54" fill="url(#sphereShade)" />
          <ellipse cx="45" cy="35" rx="22" ry="14" fill="white" opacity="0.35" transform="rotate(-20 45 35)" />

          {/* Dashed Orbit Loop */}
          <ellipse cx="60" cy="60" rx="58" ry="22" stroke="white" strokeWidth="1.2" strokeDasharray="5 3" fill="none" transform="rotate(-25 60 60)" strokeOpacity="0.7" />

          {/* Gradients */}
          <defs>
            <radialGradient id="earthWaterGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="40%" stopColor="#2563eb" />
              <stop offset="85%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0f2963" />
            </radialGradient>
            <linearGradient id="continentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            <radialGradient id="sphereShade" cx="30%" cy="25%" r="75%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* 3D Commercial Airplane Flying Across */}
      <div className="absolute top-2 right-2 z-20 transition-transform duration-500 hover:scale-110">
        <svg className="w-24 h-20 drop-shadow-[0_10px_16px_rgba(0,0,0,0.3)]" viewBox="0 0 100 80" fill="none">
          {/* Engine Contrail */}
          <path d="M10 52 Q28 48 45 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          
          {/* Main Fuselage */}
          <path
            d="M88 20 C75 22, 35 38, 15 48 C10 50, 8 54, 12 56 C20 58, 35 52, 60 40 C75 32, 92 24, 94 22 C95 20, 92 19, 88 20 Z"
            fill="url(#fuselageGrad)"
          />
          {/* Cockpit Windows */}
          <path d="M85 22 L88 23 L87 25 L84 24 Z" fill="#0f2963" />

          {/* Left Wing (Swept forward) */}
          <polygon points="62,38 32,68 44,68 72,34" fill="url(#wingGrad1)" />
          {/* Right Wing (Top swept) */}
          <polygon points="58,35 68,6 76,6 68,30" fill="url(#wingGrad2)" />
          {/* Tail Fin */}
          <polygon points="18,47 6,28 14,28 26,44" fill="url(#tailGrad)" />
          {/* Jet Engine Pod */}
          <ellipse cx="46" cy="54" rx="7" ry="3.5" fill="#1e3a8a" transform="rotate(-15 46 54)" />
          <ellipse cx="50" cy="53" rx="2" ry="3.5" fill="#93c5fd" transform="rotate(-15 50 53)" />

          <defs>
            <linearGradient id="fuselageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f1f5f9" />
              <stop offset="80%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
            <linearGradient id="wingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="wingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="tailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0f2963" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3D Blue Luggage Trolley Suitcase (Left Bottom) */}
      <div className="absolute bottom-1 left-3 z-20 -rotate-6 transition-transform duration-300 hover:scale-110">
        <div className="w-13 h-18 bg-gradient-to-tr from-[#102a71] via-[#2563eb] to-[#60a5fa] rounded-xl shadow-xl border-2 border-white/90 p-1 flex flex-col justify-between relative overflow-hidden">
          {/* Telescopic Pull Handle */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-3 border-2 border-slate-700 bg-slate-200 rounded-t-sm" />
          
          {/* Suitcase Grooves */}
          <div className="w-full flex flex-col gap-1.5 my-auto px-0.5">
            <div className="w-full h-1 bg-white/25 rounded-full" />
            <div className="w-full h-1 bg-white/25 rounded-full" />
            <div className="w-full h-1 bg-white/25 rounded-full" />
            <div className="w-full h-1 bg-white/25 rounded-full" />
          </div>

          {/* Travel Badge Emblem */}
          <div className="w-4 h-4 bg-amber-400 rounded-full mx-auto flex items-center justify-center shadow-md">
            <span className="text-[7px] font-black text-amber-950">✈</span>
          </div>

          {/* Bottom Dual Wheels */}
          <div className="w-full flex justify-between px-1 -mb-2">
            <span className="w-2 h-2 bg-slate-900 rounded-full border border-slate-400" />
            <span className="w-2 h-2 bg-slate-900 rounded-full border border-slate-400" />
          </div>
        </div>
      </div>

      {/* 3D Passport & Boarding Pass (Right Bottom) */}
      <div className="absolute bottom-2 right-4 z-20 rotate-12 transition-transform duration-300 hover:scale-110">
        <div className="relative">
          {/* Boarding Passes sticking out */}
          <div className="absolute -top-3.5 -right-2 w-12 h-14 bg-white rounded-md shadow-md border border-slate-200 p-1 flex flex-col justify-between rotate-6">
            <div className="w-full h-1.5 bg-blue-600 rounded-xs" />
            <div className="w-4/5 h-0.5 bg-slate-400 rounded" />
            <div className="w-3/5 h-0.5 bg-slate-300 rounded" />
            <div className="text-[6px] font-mono font-bold text-blue-900">AIR TICKET</div>
          </div>

          {/* Navy Blue Passport Booklet */}
          <div className="w-13 h-16 bg-gradient-to-br from-[#0a1945] via-[#102a71] to-[#1e3a8a] rounded-lg shadow-xl border-2 border-white/60 p-1.5 flex flex-col items-center justify-between relative z-10">
            <span className="text-[6px] text-amber-300 font-extrabold tracking-widest uppercase">PASSPORT</span>
            
            {/* Gold Coat of Arms Crest */}
            <div className="w-5 h-5 rounded-full border border-amber-300/80 flex items-center justify-center bg-amber-400/10">
              <span className="text-[8px] text-amber-300 font-serif">✦</span>
            </div>

            <div className="w-8 h-1 bg-amber-300/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Soft Sparkling Light Accents */}
      <div className="absolute top-4 left-6 text-sky-400 text-xs animate-bounce">✦</div>
      <div className="absolute bottom-6 right-2 text-blue-400 text-sm">✦</div>
    </div>
  );
};
