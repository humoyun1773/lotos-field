export const EducationVisual = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden select-none">
      {/* Background Arch & Islamic Arabesque Backdrop */}
      <div className="absolute inset-0 bg-radial from-sky-100/70 via-blue-50/40 to-transparent rounded-2xl flex items-center justify-center">
        <svg className="w-44 h-44 opacity-20 text-[#1e3a8a]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
          <path d="M50 8 C30 8, 15 28, 15 52 L15 95 L85 95 L85 52 C85 28, 70 8, 50 8 Z" strokeWidth="1.5" />
          <circle cx="50" cy="42" r="20" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M50 22 L50 62 M30 42 L70 42" strokeWidth="1" />
          <polygon points="50,26 62,38 50,50 38,38" strokeWidth="0.8" />
        </svg>
      </div>

      {/* 3D Islamic Mosque Structure */}
      <div className="relative z-10 flex flex-col items-center drop-shadow-[0_10px_20px_rgba(26,86,219,0.2)]">
        {/* Main Central Dome */}
        <div className="relative flex flex-col items-center -mb-0.5">
          {/* Crescent Finial */}
          <div className="text-amber-400 text-xs font-black leading-none drop-shadow-sm">☪</div>
          
          {/* Cyan / Blue Gradient Dome */}
          <div className="w-18 h-13 bg-gradient-to-b from-[#38bdf8] via-[#2563eb] to-[#1e3a8a] rounded-t-full shadow-lg border-t border-white/60 relative overflow-hidden flex items-center justify-center">
            {/* Glossy Dome Reflection */}
            <div className="absolute top-1 left-2.5 w-4 h-7 bg-white/35 rounded-full blur-[1px]" />
            <div className="w-full h-1 bg-amber-400/90 absolute bottom-0 shadow" />
          </div>
        </div>

        {/* Mosque Main Architectural Building */}
        <div className="w-32 h-16 bg-gradient-to-b from-white via-slate-50 to-slate-200 border border-slate-300 rounded-t-sm shadow-md flex items-end justify-between px-2 pb-1 relative">
          
          {/* Left Minaret */}
          <div className="absolute -left-3.5 bottom-0 w-4 h-22 bg-gradient-to-b from-white via-slate-100 to-slate-200 border border-slate-300 rounded-t flex flex-col items-center justify-between py-1 shadow-md">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full border border-white" />
            <span className="w-2 h-5 bg-blue-950/40 rounded-t" />
            <span className="w-3 h-1 bg-amber-400 rounded-xs" />
            <div className="w-2 h-6 bg-slate-300/60 rounded-t" />
          </div>

          {/* Right Minaret */}
          <div className="absolute -right-3.5 bottom-0 w-4 h-22 bg-gradient-to-b from-white via-slate-100 to-slate-200 border border-slate-300 rounded-t flex flex-col items-center justify-between py-1 shadow-md">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full border border-white" />
            <span className="w-2 h-5 bg-blue-950/40 rounded-t" />
            <span className="w-3 h-1 bg-amber-400 rounded-xs" />
            <div className="w-2 h-6 bg-slate-300/60 rounded-t" />
          </div>

          {/* Left Arch Portal */}
          <div className="w-6 h-8 bg-blue-950/15 rounded-t-full border border-slate-300 flex items-center justify-center">
            <div className="w-3 h-5 bg-blue-900/30 rounded-t-full" />
          </div>

          {/* Center Grand Arch Portal */}
          <div className="w-10 h-11 bg-gradient-to-b from-[#0a1945] to-[#1e3a8a] rounded-t-full border-2 border-amber-400 flex flex-col items-center justify-end pb-1 shadow-inner">
            <div className="w-5 h-6 bg-amber-400/25 rounded-t-full border border-amber-400/40" />
          </div>

          {/* Right Arch Portal */}
          <div className="w-6 h-8 bg-blue-950/15 rounded-t-full border border-slate-300 flex items-center justify-center">
            <div className="w-3 h-5 bg-blue-900/30 rounded-t-full" />
          </div>
        </div>
      </div>

      {/* Foreground Open Quran / Holy Book on Rehal Stand */}
      <div className="absolute bottom-1 left-4 z-20 transition-transform duration-300 hover:scale-105">
        <div className="relative flex items-center">
          {/* Open Book Pages */}
          <div className="w-14 h-9 bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-sm shadow-xl border border-amber-200 p-1 flex justify-between relative -rotate-3">
            {/* Left Page Text lines */}
            <div className="w-5 flex flex-col gap-0.5 pt-0.5">
              <div className="w-full h-0.5 bg-blue-900/40 rounded" />
              <div className="w-4/5 h-0.5 bg-blue-900/30 rounded" />
              <div className="w-full h-0.5 bg-blue-900/40 rounded" />
              <div className="w-3/5 h-0.5 bg-blue-900/30 rounded" />
            </div>

            {/* Book Spine Center line */}
            <div className="w-0.5 h-full bg-amber-300 shadow-xs" />

            {/* Right Page Text lines */}
            <div className="w-5 flex flex-col gap-0.5 pt-0.5">
              <div className="w-full h-0.5 bg-blue-900/40 rounded" />
              <div className="w-3/4 h-0.5 bg-blue-900/30 rounded" />
              <div className="w-full h-0.5 bg-blue-900/40 rounded" />
              <div className="w-4/5 h-0.5 bg-blue-900/30 rounded" />
            </div>

            {/* Red Bookmark Ribbon */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-3.5 bg-red-600 rounded-b shadow-sm" />
          </div>

          {/* Golden Fountain Pen */}
          <div className="w-8 h-1 bg-gradient-to-r from-amber-600 via-amber-400 to-slate-900 rounded-full rotate-45 shadow-md -ml-2 -mt-4 border border-amber-200" />
        </div>
      </div>

      {/* Modern Indoor Desk Plant (Right Bottom) */}
      <div className="absolute bottom-1 right-4 z-20 flex flex-col items-center transition-transform duration-300 hover:scale-105">
        {/* Lush Green Leaves */}
        <div className="flex -space-x-1.5 -mb-1">
          <span className="w-3 h-5 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-full transform -rotate-30 shadow-sm" />
          <span className="w-3.5 h-6 bg-gradient-to-t from-emerald-800 to-emerald-400 rounded-full transform -rotate-5 shadow-sm" />
          <span className="w-3 h-5 bg-gradient-to-t from-emerald-700 to-emerald-400 rounded-full transform rotate-30 shadow-sm" />
        </div>
        {/* Ceramic White Pot */}
        <div className="w-7 h-6 bg-gradient-to-b from-white via-slate-100 to-slate-200 border border-slate-300 rounded-b-lg shadow-md flex items-center justify-center">
          <span className="w-5 h-0.5 bg-amber-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};
