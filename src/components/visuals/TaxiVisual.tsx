import type { FC } from 'react';
import { Car } from 'lucide-react';

export const TaxiVisual: FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
      {/* Background Web Matrix */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg className="w-48 h-48 text-slate-400 stroke-current" viewBox="0 0 100 100" fill="none">
          {/* Radial Lines */}
          <line x1="50" y1="50" x2="10" y2="10" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="50" y2="5" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="90" y2="10" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="95" y2="50" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="90" y2="90" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="50" y2="95" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="10" y2="90" strokeWidth="0.8" />
          <line x1="50" y1="50" x2="5" y2="50" strokeWidth="0.8" />
          {/* Concentric Web Rings */}
          <polygon points="50,20 70,25 80,50 70,75 50,80 30,75 20,50 30,25" strokeWidth="0.6" />
          <polygon points="50,30 63,33 70,50 63,67 50,70 37,67 30,50 37,33" strokeWidth="0.6" />
          <polygon points="50,40 57,42 60,50 57,58 50,60 43,58 40,50 43,42" strokeWidth="0.6" />
        </svg>
      </div>

      {/* 3D Glossy Black Spider (O'rgimchak) */}
      <div className="relative z-10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
        <svg className="w-28 h-28 drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]" viewBox="0 0 100 100" fill="none">
          {/* Left Legs */}
          <path d="M42 42 Q20 15 15 28 Q12 40 18 45" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 46 Q15 28 10 48 Q8 62 14 68" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 52 Q12 55 10 72 Q12 85 22 88" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          <path d="M42 56 Q20 78 25 90 Q30 96 38 92" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />

          {/* Right Legs */}
          <path d="M58 42 Q80 15 85 28 Q88 40 82 45" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 46 Q85 28 90 48 Q92 62 86 68" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          <path d="M60 52 Q88 55 90 72 Q88 85 78 88" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />
          <path d="M58 56 Q80 78 75 90 Q70 96 62 92" stroke="#18181b" strokeWidth="3" strokeLinecap="round" />

          {/* Spider Body - Abdomen */}
          <ellipse cx="50" cy="62" rx="14" ry="18" fill="url(#spiderGrad)" />
          {/* Spider Body - Cephalothorax / Head */}
          <circle cx="50" cy="42" r="10" fill="url(#spiderHeadGrad)" />
          {/* Eyes / Fangs */}
          <circle cx="47" cy="35" r="1.5" fill="#38bdf8" />
          <circle cx="53" cy="35" r="1.5" fill="#38bdf8" />
          <circle cx="44" cy="38" r="1" fill="#38bdf8" />
          <circle cx="56" cy="38" r="1" fill="#38bdf8" />

          {/* Highlights & Glossy Sheen */}
          <ellipse cx="46" cy="56" rx="4" ry="9" fill="#ffffff" opacity="0.35" transform="rotate(-15 46 56)" />
          <circle cx="48" cy="40" r="3" fill="#ffffff" opacity="0.4" />

          <defs>
            <radialGradient id="spiderGrad" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#3f3f46" />
              <stop offset="60%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#09090b" />
            </radialGradient>
            <radialGradient id="spiderHeadGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#52525b" />
              <stop offset="70%" stopColor="#18181b" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
          </defs>
        </svg>
      </div>


      {/* Taxi Car Icon Mini Badge */}
      <div className="absolute bottom-2 left-4 bg-blue-900 text-amber-300 p-1.5 rounded-lg shadow-md border border-white/60">
        <Car className="w-4 h-4" />
      </div>

      {/* Taxi Checker Flag Pattern */}
      <div className="absolute bottom-2 right-4 flex items-center gap-0.5 bg-white px-1.5 py-1 rounded border border-slate-300 shadow-sm">
        <div className="grid grid-cols-4 gap-0.5 w-6 h-3">
          <span className="bg-slate-900" />
          <span className="bg-white" />
          <span className="bg-slate-900" />
          <span className="bg-white" />
          <span className="bg-white" />
          <span className="bg-slate-900" />
          <span className="bg-white" />
          <span className="bg-slate-900" />
        </div>
      </div>
    </div>
  );
};
