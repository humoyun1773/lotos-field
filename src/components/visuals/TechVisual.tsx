import type { FC } from 'react';
import { Code2, Cpu, Sparkles } from 'lucide-react';

export const TechVisual: FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
      {/* Background Matrix Glow & Particles */}
      <div className="absolute inset-0 bg-radial from-blue-400/20 via-sky-100/30 to-transparent rounded-2xl" />

      {/* Floating Glowing Code Tag Badge </> (Top Left) */}
      <div className="absolute top-2 left-6 z-20 animate-float-slow">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-1.5 rounded-lg shadow-lg border border-white/60 flex items-center justify-center">
          <Code2 className="w-4 h-4" />
        </div>
      </div>

      {/* Floating Gear / Cloud Chip Badge (Top Right) */}
      <div className="absolute top-3 right-6 z-20 animate-float-delayed">
        <div className="bg-white text-blue-600 p-1.5 rounded-lg shadow-md border border-blue-200 flex items-center justify-center">
          <Cpu className="w-4 h-4 text-blue-600" />
        </div>
      </div>

      {/* Center 3D Laptop with IDE Code Screen */}
      <div className="relative z-10 flex flex-col items-center transition-transform duration-300 hover:scale-105">
        {/* Laptop Display Screen */}
        <div className="w-28 h-20 bg-slate-900 rounded-t-lg border-2 border-slate-700 shadow-xl p-1 flex flex-col overflow-hidden relative">
          {/* Top Window Bar */}
          <div className="flex items-center gap-1 mb-1 pb-0.5 border-b border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[5px] text-slate-400 font-mono ml-auto">App.tsx</span>
          </div>

          {/* IDE Lines of Code & Visuals */}
          <div className="flex-1 font-mono text-[5px] flex flex-col gap-0.5 text-slate-300">
            <div className="flex gap-1">
              <span className="text-pink-400">const</span>
              <span className="text-cyan-300">lotos</span>
              <span className="text-blue-300">=</span>
              <span className="text-emerald-300">"Innovate"</span>;
            </div>
            <div className="flex gap-1">
              <span className="text-pink-400">return</span>
              <span className="text-amber-300">&lt;Success /&gt;</span>;
            </div>
            {/* Glow Chart in bottom of screen */}
            <div className="mt-auto h-4 bg-blue-950/80 rounded border border-cyan-500/40 p-0.5 flex items-end justify-between px-1">
              <span className="w-1 h-2 bg-cyan-400 rounded-t-xs" />
              <span className="w-1 h-3 bg-blue-400 rounded-t-xs" />
              <span className="w-1 h-1.5 bg-indigo-400 rounded-t-xs" />
              <span className="w-1 h-3.5 bg-emerald-400 rounded-t-xs" />
            </div>
          </div>

          {/* Glowing Ambient Screen Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />
        </div>

        {/* Laptop Keyboard Base & Trackpad */}
        <div className="w-36 h-2 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b-md shadow-md flex items-center justify-center relative">
          {/* Notch / Trackpad */}
          <div className="w-8 h-1 bg-slate-300 rounded-t-xs -mt-0.5" />
        </div>
      </div>

      {/* Floating Smartphone (Right Bottom) */}
      <div className="absolute bottom-1 right-3 z-20 rotate-6 transition-transform hover:scale-110">
        <div className="w-9 h-16 bg-slate-900 rounded-lg border-2 border-slate-700 shadow-xl p-0.5 flex flex-col justify-between overflow-hidden">
          {/* Dynamic Island / Speaker */}
          <div className="w-3 h-0.5 bg-slate-600 rounded-full mx-auto" />
          {/* Mobile Screen UI */}
          <div className="flex-1 bg-gradient-to-br from-blue-900 to-indigo-950 rounded-sm m-0.5 p-0.5 flex flex-col justify-around">
            <div className="flex items-center justify-between text-[4px] text-cyan-300">
              <span>9:41</span>
              <span>⚡100%</span>
            </div>
            <div className="w-full h-2 bg-blue-600/60 rounded flex items-center justify-center text-[5px] text-white font-bold">
              PAY
            </div>
            <div className="w-full h-1 bg-white/20 rounded-full" />
          </div>
          {/* Home Indicator */}
          <div className="w-3 h-0.5 bg-slate-500 rounded-full mx-auto" />
        </div>
      </div>

      {/* Floating Sparkle Elements */}
      <div className="absolute bottom-6 left-5 text-cyan-400 text-xs">
        <Sparkles className="w-3.5 h-3.5" />
      </div>
    </div>
  );
};
