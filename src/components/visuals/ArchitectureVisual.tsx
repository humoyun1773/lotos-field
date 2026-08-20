export const ArchitectureVisual = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden select-none">
      {/* Background Blueprint Coordinate Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#bae6fd_1px,transparent_1px),linear-gradient(to_bottom,#bae6fd_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      {/* 3D Modern Villa Architecture (Wireframe + 3D Render) */}
      <div className="relative z-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 drop-shadow-[0_12px_24px_rgba(2,132,199,0.25)]">
        <svg className="w-40 h-32" viewBox="0 0 160 120" fill="none">
          {/* Blueprint Foundation Grid Base */}
          <polygon points="80,115 145,85 80,55 15,85" fill="#f0f9ff" stroke="#0284c7" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="80" y1="115" x2="80" y2="55" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="15" y1="85" x2="145" y2="85" stroke="#38bdf8" strokeWidth="0.8" />

          {/* First Floor - Left Glass Facade with Interior Glow */}
          <polygon points="80,95 28,70 28,45 80,70" fill="url(#glassLeftGrad)" stroke="#0284c7" strokeWidth="1.2" />
          {/* First Floor - Right Concrete & Stone Wall */}
          <polygon points="80,95 132,70 132,45 80,70" fill="url(#wallRightGrad)" stroke="#0369a1" strokeWidth="1.2" />

          {/* Second Floor Cantilever Modern Box & Glass Balcony */}
          <polygon points="80,70 20,42 20,18 80,46" fill="url(#glassTopGrad)" stroke="#0284c7" strokeWidth="1.2" />
          <polygon points="80,70 140,42 140,18 80,46" fill="url(#wallTopGrad)" stroke="#0369a1" strokeWidth="1.2" />
          
          {/* Flat Roof Ceiling */}
          <polygon points="80,46 20,18 80,-5 140,18" fill="#ffffff" stroke="#0284c7" strokeWidth="1.2" />

          {/* Architectural Drafting Dimension & Ruler Lines */}
          <line x1="8" y1="18" x2="8" y2="92" stroke="#0284c7" strokeWidth="0.9" strokeDasharray="3 2" />
          <circle cx="8" cy="18" r="1.5" fill="#0284c7" />
          <circle cx="8" cy="92" r="1.5" fill="#0284c7" />

          <line x1="152" y1="18" x2="152" y2="92" stroke="#0284c7" strokeWidth="0.9" strokeDasharray="3 2" />
          <circle cx="152" cy="18" r="1.5" fill="#0284c7" />
          <circle cx="152" cy="92" r="1.5" fill="#0284c7" />

          {/* Architectural Mullions / Window Framing */}
          <line x1="45" y1="29" x2="45" y2="54" stroke="#0284c7" strokeWidth="0.8" />
          <line x1="60" y1="36" x2="60" y2="61" stroke="#0284c7" strokeWidth="0.8" />
          <line x1="102" y1="36" x2="102" y2="61" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="120" y1="29" x2="120" y2="54" stroke="#38bdf8" strokeWidth="0.8" />

          {/* Landscaping Trees (Behind Building) */}
          <circle cx="18" cy="40" r="6" fill="#10b981" opacity="0.6" />
          <circle cx="142" cy="40" r="7" fill="#059669" opacity="0.6" />

          <defs>
            <linearGradient id="glassLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#7dd3fc" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="glassTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="wallRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="wallTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating 3D Badge (Left Bottom) */}
      <div className="absolute bottom-2 left-3 bg-gradient-to-r from-[#0f2963] to-[#1d4ed8] text-white text-[10px] font-black px-2 py-0.5 rounded-lg shadow-md flex items-center gap-1 border border-white/60">
        <span>📐</span>
        <span>3D RENDER</span>
      </div>

      {/* Blueprint Ruler Badge (Right Bottom) */}
      <div className="absolute bottom-2 right-3 bg-white text-blue-900 px-2 py-1 rounded-lg shadow-md border border-blue-200 text-[10px] font-extrabold flex items-center gap-1">
        <span>🏗</span>
        <span>PROYEKT</span>
      </div>
    </div>
  );
};
