import type { FC } from 'react';
import { BookOpen } from 'lucide-react';

export const EducationVisual: FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
      {/* Background Arch & Islamic Geometric Pattern */}
      <div className="absolute inset-0 bg-radial from-sky-100/60 via-blue-50/40 to-transparent rounded-2xl flex items-center justify-center">
        <svg className="w-40 h-40 opacity-15 text-blue-800" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M50 5 C30 5, 20 25, 20 50 L20 95 L80 95 L80 50 C80 25, 70 5, 50 5 Z" strokeWidth="1.5" />
          <circle cx="50" cy="40" r="18" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M50 22 L50 58 M32 40 L68 40" strokeWidth="1" />
        </svg>
      </div>

      {/* 3D Islamic Architecture / Mosque Silhouette */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Main Dome & Crescent */}
        <div className="relative flex flex-col items-center">
          {/* Crescent Finial */}
          <div className="text-amber-500 text-xs font-bold leading-none -mb-0.5">☪</div>
          {/* Blue Dome */}
          <div className="w-16 h-12 bg-gradient-to-b from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a] rounded-t-full shadow-md border-t border-sky-300 relative overflow-hidden flex items-center justify-center">
            {/* Dome Highlights */}
            <div className="absolute top-1 left-2 w-4 h-6 bg-white/20 rounded-full blur-[1px]" />
            <div className="w-full h-1 bg-amber-400/80 absolute bottom-0" />
          </div>
        </div>

        {/* Mosque Main Facade & Arches */}
        <div className="w-28 h-14 bg-gradient-to-b from-white to-slate-100 border border-slate-300/80 rounded-t shadow-sm flex items-end justify-around px-2 pb-1 relative">
          {/* Left Minaret */}
          <div className="absolute -left-3 bottom-0 w-3.5 h-20 bg-gradient-to-b from-white to-slate-200 border border-slate-300 rounded-t flex flex-col items-center justify-between py-1 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="w-1.5 h-4 bg-blue-900/40 rounded-t" />
            <span className="w-2.5 h-1 bg-amber-400" />
          </div>

          {/* Right Minaret */}
          <div className="absolute -right-3 bottom-0 w-3.5 h-20 bg-gradient-to-b from-white to-slate-200 border border-slate-300 rounded-t flex flex-col items-center justify-between py-1 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="w-1.5 h-4 bg-blue-900/40 rounded-t" />
            <span className="w-2.5 h-1 bg-amber-400" />
          </div>

          {/* Center Main Arch Portal */}
          <div className="w-8 h-10 bg-gradient-to-b from-blue-950 to-slate-900 rounded-t-full border-2 border-amber-400/90 flex flex-col items-center justify-end pb-1 shadow-inner">
            <div className="w-4 h-5 bg-amber-400/20 rounded-t-full" />
          </div>

          {/* Side Arches */}
          <div className="w-5 h-7 bg-blue-900/20 rounded-t-full border border-slate-300" />
          <div className="w-5 h-7 bg-blue-900/20 rounded-t-full border border-slate-300" />
        </div>
      </div>

      {/* Foreground Open Book / Quran (Rehal) */}
      <div className="absolute bottom-1 left-6 z-20 flex items-center gap-1 transition-transform hover:scale-105">
        <div className="relative bg-white p-1.5 rounded shadow-lg border border-amber-200/80 -rotate-3">
          <BookOpen className="w-9 h-9 text-blue-900" />
          {/* Bookmark Ribbon */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-red-600 rounded-b shadow-sm" />
        </div>
        {/* Pen */}
        <div className="w-7 h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-slate-900 rounded-full rotate-45 shadow -ml-2 -mt-3" />
      </div>

      {/* Indoor Potted Plant (Right Bottom) */}
      <div className="absolute bottom-2 right-6 z-20 flex flex-col items-center">
        {/* Leaves */}
        <div className="flex -space-x-1 -mb-1">
          <span className="w-2.5 h-4 bg-emerald-500 rounded-full transform -rotate-25 shadow-sm" />
          <span className="w-3 h-5 bg-emerald-600 rounded-full transform rotate-6 shadow-sm" />
          <span className="w-2.5 h-4 bg-emerald-500 rounded-full transform rotate-35 shadow-sm" />
        </div>
        {/* Ceramic Pot */}
        <div className="w-6 h-5 bg-gradient-to-b from-white to-slate-200 border border-slate-300 rounded-b-md shadow flex items-center justify-center">
          <span className="w-4 h-0.5 bg-amber-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};
