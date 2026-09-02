import type { FC } from 'react';

export const EhsonVisual: FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden select-none">
      {/* Background soft emerald-blue glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.15) 0%, rgba(59,130,246,0.15) 50%, transparent 100%)'
        }}
      />

      {/* Main Ehson Heart & Helping Hands Graphic SVG */}
      <div className="relative z-10 transition-transform duration-300 hover:scale-110">
        <svg
          className="w-36 h-28 drop-shadow-[0_8px_20px_rgba(16,185,129,0.28)]"
          viewBox="0 0 200 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Radiant Circular Waves */}
          <circle cx="100" cy="65" r="54" stroke="url(#ehson_ringGrad)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <circle cx="100" cy="65" r="42" stroke="url(#ehson_ringGrad)" strokeWidth="1" opacity="0.4" />

          {/* Central Giving Heart */}
          <path
            d="M100 88 C70 65 52 48 52 32 C52 18 64 8 78 8 C88 8 96 14 100 22 C104 14 112 8 122 8 C136 8 148 18 148 32 C148 48 130 65 100 88 Z"
            fill="url(#ehson_heartGrad)"
            filter="drop-shadow(0 4px 10px rgba(5,150,105,0.35))"
          />

          {/* Golden/Emerald Sparkle Star on the Heart */}
          <path
            d="M100 24 L103 35 L114 35 L105 42 L108 53 L100 46 L92 53 L95 42 L86 35 L97 35 Z"
            fill="#ffffff"
            opacity="0.9"
          />

          {/* Gentle Protective Care Hands (Stylized) */}
          {/* Left Hand */}
          <path
            d="M40 115 C55 105 75 98 94 102 C96 102 98 105 96 107 C80 116 65 125 45 128 C38 129 35 122 40 115 Z"
            fill="url(#ehson_handLeft)"
          />
          <path
            d="M30 102 C45 92 68 85 88 92 C90 93 91 96 89 97 C72 105 55 112 35 115 C30 116 26 108 30 102 Z"
            fill="url(#ehson_handLeft)"
            opacity="0.85"
          />

          {/* Right Hand */}
          <path
            d="M160 115 C145 105 125 98 106 102 C104 102 102 105 104 107 C120 116 135 125 155 128 C162 129 165 122 160 115 Z"
            fill="url(#ehson_handRight)"
          />
          <path
            d="M170 102 C155 92 132 85 112 92 C110 93 109 96 111 97 C128 105 145 112 165 115 C170 116 174 108 170 102 Z"
            fill="url(#ehson_handRight)"
            opacity="0.85"
          />

          {/* Lower Crescent Base Ribbon */}
          <path
            d="M35 130 C75 145 125 145 165 130 C135 138 65 138 35 130 Z"
            fill="url(#ehson_baseGrad)"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="ehson_heartGrad" x1="50" y1="10" x2="150" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
            <linearGradient id="ehson_handLeft" x1="30" y1="90" x2="100" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f2963" />
            </linearGradient>
            <linearGradient id="ehson_handRight" x1="170" y1="90" x2="100" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f2963" />
            </linearGradient>
            <linearGradient id="ehson_ringGrad" x1="40" y1="20" x2="160" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="ehson_baseGrad" x1="35" y1="130" x2="165" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};
