import type { FC } from 'react';
import { Box, Layers } from 'lucide-react';

export const ArchitectureVisual: FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
      {/* Background Blueprint Coordinate Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

      {/* 3D Isometric Building / Villa Wireframe & Render */}
      <div className="relative z-10 flex flex-col items-center transition-transform duration-300 hover:scale-105">
        <svg className="w-36 h-28 drop-shadow-md" viewBox="0 0 160 120" fill="none">
          {/* Foundation / Blueprint Grid Base */}
          <polygon points="80,115 145,85 80,55 15,85" fill="#f0f9ff" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
          <line x1="80" y1="115" x2="80" y2="55" stroke="#bae6fd" strokeWidth="0.8" />
          <line x1="15" y1="85" x2="145" y2="85" stroke="#bae6fd" strokeWidth="0.8" />

          {/* First Floor - Left Facade (Glass & Pillars) */}
          <polygon points="80,95 28,70 28,45 80,70" fill="url(#glassGradLeft)" stroke="#0284c7" strokeWidth="1.2" />
          {/* First Floor - Right Facade */}
          <polygon points="80,95 132,70 132,45 80,70" fill="url(#wallGradRight)" stroke="#0369a1" strokeWidth="1.2" />

          {/* Second Floor Cantilever Balcony & Modern Box */}
          <polygon points="80,70 20,42 20,18 80,46" fill="url(#glassGradTop)" stroke="#0284c7" strokeWidth="1.2" />
          <polygon points="80,70 140,42 140,18 80,46" fill="url(#wallGradTopRight)" stroke="#0369a1" strokeWidth="1.2" />
          {/* Roof Top */}
          <polygon points="80,46 20,18 80,-5 140,18" fill="#ffffff" stroke="#0284c7" strokeWidth="1.2" />

          {/* Architectural Drafting Lines & Dimension Annotations */}
          <line x1="10" y1="15" x2="10" y2="90" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="10" cy="15" r="1.5" fill="#0284c7" />
          <circle cx="10" cy="90" r="1.5" fill="#0284c7" />

          <line x1="150" y1="15" x2="150" y2="90" stroke="#0284c7" strokeWidth="0.8" strokeDasharray="2 2" />
          <circle cx="150" cy="15" r="1.5" fill="#0284c7" />
          <circle cx="150" cy="90" r="1.5" fill="#0284c7" />

          {/* Window Frames / Wireframe grids */}
          <line x1="45" y1="30" x2="45" y2="54" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="60" y1="37" x2="60" y2="61" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="100" y1="37" x2="100" y2="61" stroke="#bae6fd" strokeWidth="0.8" />
          <line x1="118" y1="30" x2="118" y2="54" stroke="#bae6fd" strokeWidth="0.8" />

          {/* Gradients */}
          <defs>
            <linearGradient id="glassGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="glassGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wallGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
            <linearGradient id="wallGradTopRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating 3D Badge (Left Bottom) */}
      <div className="absolute bottom-2 left-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1 border border-white/40">
        <Box className="w-3 h-3" />
        <span>3D RENDER</span>
      </div>

      {/* Drafting Tools / Layer badge (Right Bottom) */}
      <div className="absolute bottom-2 right-4 bg-white text-blue-800 p-1.5 rounded-lg shadow-md border border-blue-200">
        <Layers className="w-3.5 h-3.5" />
      </div>
    </div>
  );
};
