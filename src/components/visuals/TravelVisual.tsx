import type { FC } from 'react';
import { Plane, Compass } from 'lucide-react';

export const TravelVisual: FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
      {/* Background Soft Blue Glow */}
      <div className="absolute inset-0 bg-radial from-blue-300/40 via-sky-100/30 to-transparent rounded-2xl" />

      {/* Rotating / Glowing Globe */}
      <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-[#1a56db] via-[#3b82f6] to-[#60a5fa] shadow-[0_10px_25px_rgba(29,78,216,0.35)] flex items-center justify-center overflow-hidden border-2 border-white/60">
        {/* Globe Grid Lines */}
        <div className="absolute inset-0 border-y border-white/30 rounded-full scale-75" />
        <div className="absolute inset-0 border-x border-white/30 rounded-full scale-90" />
        
        {/* Continents Silhouettes */}
        <svg className="w-full h-full text-white/40 fill-current animate-pulse-glow" viewBox="0 0 100 100">
          <path d="M20,35 Q30,25 45,30 Q50,40 40,55 Q25,60 20,45 Z" />
          <path d="M55,25 Q70,20 80,35 Q75,50 60,45 Q50,35 55,25 Z" />
          <path d="M35,65 Q50,60 65,70 Q55,85 40,80 Z" />
        </svg>

        {/* Orbit Flight Path */}
        <svg className="absolute -inset-4 w-36 h-36 stroke-white/60 stroke-[1.5] fill-none stroke-dasharray-[4_3] -rotate-12 pointer-events-none" viewBox="0 0 120 120">
          <ellipse cx="60" cy="60" rx="54" ry="24" />
        </svg>
      </div>

      {/* Airplane Soaring over Globe */}
      <div className="absolute top-4 right-10 -rotate-12 z-20 transition-transform duration-500 hover:scale-110 hover:-translate-y-1">
        <div className="relative bg-gradient-to-r from-white via-slate-100 to-sky-100 p-2 rounded-full shadow-lg border border-blue-200">
          <Plane className="w-7 h-7 text-blue-600 fill-blue-500" />
          {/* Contrail / Engine Glow */}
          <span className="absolute -bottom-1 -left-3 w-4 h-1 bg-gradient-to-r from-transparent to-blue-400 rounded-full blur-[0.5px]" />
        </div>
      </div>

      {/* Travel Suitcase (Left Bottom) */}
      <div className="absolute bottom-2 left-4 z-20 transform -rotate-6 transition-transform hover:scale-105">
        <div className="w-12 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg shadow-md border-2 border-white flex flex-col items-center justify-between p-1 relative overflow-hidden">
          {/* Handle */}
          <div className="w-4 h-2 border-2 border-slate-700 rounded-t-sm -mt-2.5 bg-slate-200" />
          {/* Ribs */}
          <div className="w-full flex flex-col gap-1 my-auto">
            <div className="w-full h-0.5 bg-blue-400/60" />
            <div className="w-full h-0.5 bg-blue-400/60" />
            <div className="w-full h-0.5 bg-blue-400/60" />
          </div>
          {/* Sticker */}
          <div className="w-3 h-3 bg-amber-400 rounded-full flex items-center justify-center text-[7px] font-bold text-amber-950">
            ✈
          </div>
          {/* Wheels */}
          <div className="w-full flex justify-between px-1 -mb-2">
            <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
            <span className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
          </div>
        </div>
      </div>

      {/* Passport & Boarding Pass (Right Bottom) */}
      <div className="absolute bottom-3 right-6 z-10 rotate-12 transition-transform hover:scale-105">
        <div className="relative">
          {/* Boarding Pass */}
          <div className="absolute -top-3 -right-2 w-10 h-12 bg-white rounded-md shadow border border-slate-200 p-1 flex flex-col justify-between rotate-6">
            <div className="w-full h-1 bg-blue-600 rounded-sm" />
            <div className="w-3/4 h-0.5 bg-slate-300 rounded" />
            <div className="w-1/2 h-0.5 bg-slate-300 rounded" />
            <div className="text-[6px] font-mono text-slate-500 font-bold">FLIGHT</div>
          </div>
          {/* Passport Cover */}
          <div className="w-11 h-14 bg-gradient-to-br from-[#102a71] to-[#1e3a8a] rounded-md shadow-md border border-white/50 p-1 flex flex-col items-center justify-between">
            <span className="text-[6px] text-amber-300/90 font-bold uppercase tracking-wider">PASSPORT</span>
            <div className="w-4 h-4 rounded-full border border-amber-300/70 flex items-center justify-center">
              <Compass className="w-2.5 h-2.5 text-amber-300" />
            </div>
            <div className="w-6 h-0.5 bg-amber-300/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating Sparkle Puffs */}
      <div className="absolute top-6 left-8 text-blue-400 text-xs animate-bounce">✦</div>
      <div className="absolute bottom-8 right-2 text-cyan-400 text-sm">✦</div>
    </div>
  );
};
