export const TechVisual = () => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center overflow-hidden select-none">
      {/* Background Radial Light & Particles */}
      <div className="absolute inset-0 bg-radial from-blue-300/30 via-sky-100/30 to-transparent rounded-2xl pointer-events-none" />

      {/* Floating Neon Code Tag Badge </> (Top Left) */}
      <div className="absolute top-2 left-4 z-20 transition-transform duration-300 hover:scale-110 animate-float-slow">
        <div className="bg-gradient-to-r from-[#0284c7] via-[#2563eb] to-[#4f46e5] text-white px-2.5 py-1.5 rounded-xl shadow-lg border border-white/80 flex items-center gap-1 font-mono font-black text-xs">
          <span>&lt;/&gt;</span>
        </div>
      </div>

      {/* Floating Gear / Settings Badge (Top Right) */}
      <div className="absolute top-3 right-4 z-20 transition-transform duration-300 hover:scale-110 animate-float-delayed">
        <div className="bg-white text-blue-700 px-2 py-1 rounded-xl shadow-md border border-blue-200 flex items-center gap-1 text-[10px] font-bold">
          <span>⚙️</span>
          <span>DEV</span>
        </div>
      </div>

      {/* Center 3D Modern Sleek Laptop (MacBook Pro style) */}
      <div className="relative z-10 flex flex-col items-center transition-transform duration-300 hover:scale-105 drop-shadow-[0_16px_28px_rgba(15,41,99,0.35)]">
        {/* Laptop Display Screen */}
        <div className="w-34 h-24 bg-gradient-to-b from-slate-900 to-slate-950 rounded-t-xl border-2 border-slate-700 shadow-2xl p-1.5 flex flex-col overflow-hidden relative">
          {/* Top Window Bar */}
          <div className="flex items-center gap-1 mb-1 pb-0.5 border-b border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-xs" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-xs" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-xs" />
            <span className="text-[6px] text-slate-400 font-mono ml-auto">index.tsx</span>
          </div>

          {/* IDE Syntax Highlighted Code Lines */}
          <div className="flex-1 font-mono text-[5.5px] flex flex-col gap-0.5 text-slate-300 leading-tight">
            <div className="flex gap-1">
              <span className="text-pink-400 font-bold">const</span>
              <span className="text-cyan-300">system</span>
              <span className="text-blue-300">=</span>
              <span className="text-emerald-300">"Online"</span>;
            </div>
            <div className="flex gap-1">
              <span className="text-amber-300 font-bold">export</span>
              <span className="text-purple-300">default</span>
              <span className="text-blue-300">LotosApp</span>;
            </div>
            
            {/* Live Analytics Dashboard inside IDE Screen */}
            <div className="mt-auto h-5 bg-blue-950/90 rounded-md border border-cyan-500/50 p-1 flex items-end justify-between px-1.5 shadow-inner">
              <span className="w-1.5 h-2.5 bg-cyan-400 rounded-t-xs" />
              <span className="w-1.5 h-4 bg-blue-400 rounded-t-xs" />
              <span className="w-1.5 h-2 bg-indigo-400 rounded-t-xs" />
              <span className="w-1.5 h-4.5 bg-emerald-400 rounded-t-xs" />
              <span className="w-1.5 h-3 bg-purple-400 rounded-t-xs" />
            </div>
          </div>

          {/* Glowing Ambient Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/15 via-transparent to-white/5 pointer-events-none" />
        </div>

        {/* Laptop Keyboard Aluminum Base */}
        <div className="w-42 h-2.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 rounded-b-lg shadow-md flex items-center justify-center relative border-t border-slate-500">
          <div className="w-10 h-1 bg-slate-200 rounded-t-xs -mt-0.5 shadow-inner" />
        </div>
      </div>

      {/* Floating Modern Smartphone (Right Bottom) */}
      <div className="absolute bottom-1 right-2 z-20 rotate-6 transition-transform duration-300 hover:scale-115">
        <div className="w-10 h-18 bg-slate-900 rounded-xl border-2 border-slate-700 shadow-2xl p-0.5 flex flex-col justify-between overflow-hidden">
          {/* Speaker / Dynamic Island */}
          <div className="w-3.5 h-0.5 bg-slate-600 rounded-full mx-auto" />
          
          {/* Mobile Screen App UI */}
          <div className="flex-1 bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-md m-0.5 p-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[4.5px] text-cyan-300 font-mono">
              <span>09:41</span>
              <span>⚡100%</span>
            </div>
            
            <div className="w-full h-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xs flex items-center justify-center text-[5px] text-white font-bold shadow">
              ACTIVE
            </div>
            
            <div className="w-full h-1 bg-white/25 rounded-full" />
          </div>

          <div className="w-3.5 h-0.5 bg-slate-500 rounded-full mx-auto" />
        </div>
      </div>

      {/* Sparkling Tech Accents */}
      <div className="absolute bottom-4 left-4 text-cyan-400 text-xs animate-bounce">✦</div>
    </div>
  );
};
