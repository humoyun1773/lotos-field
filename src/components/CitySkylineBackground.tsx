import type { FC } from 'react';

export const CitySkylineBackground: FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none transform-gpu">
      {/* Optimized Light Radial Ambient Backgrounds (No heavy blur filters) */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[750px] h-[400px] opacity-60"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(191, 219, 254, 0.45) 0%, rgba(224, 242, 254, 0.15) 55%, transparent 75%)'
        }}
      />
      <div
        className="absolute top-1/3 -left-20 w-[450px] h-[450px] opacity-40 hidden sm:block"
        style={{
          background: 'radial-gradient(circle at center, rgba(191, 219, 254, 0.35) 0%, transparent 70%)'
        }}
      />
      <div
        className="absolute bottom-10 -right-20 w-[450px] h-[450px] opacity-40 hidden sm:block"
        style={{
          background: 'radial-gradient(circle at center, rgba(186, 230, 253, 0.35) 0%, transparent 70%)'
        }}
      />

      {/* Abstract Sky Wave Lines (Hardware accelerated) */}
      <svg
        className="absolute top-0 left-0 w-full h-[500px] opacity-25"
        viewBox="0 0 1440 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-50,220 C400,80 950,280 1500,60"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          d="M0,160 C500,240 1000,100 1440,180"
          stroke="#60a5fa"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      {/* City Skyline Silhouette (Skyscrapers in Soft Blue Mist - hidden on small mobile to save CPU) */}
      <div className="absolute top-20 left-0 right-0 w-full justify-between px-6 sm:px-12 opacity-10 pointer-events-none hidden md:flex">
        {/* Left City Cluster */}
        <svg className="w-60 h-28 text-blue-900 fill-current" viewBox="0 0 300 120">
          <rect x="10" y="40" width="22" height="80" />
          <polygon points="21,20 10,40 32,40" />
          <rect x="36" y="55" width="18" height="65" />
          <rect x="58" y="25" width="28" height="95" />
          <rect x="90" y="45" width="20" height="75" />
          <rect x="114" y="60" width="30" height="60" />
          <polygon points="129,40 114,60 144,60" />
          <rect x="148" y="30" width="24" height="90" />
          <rect x="176" y="50" width="20" height="70" />
        </svg>

        {/* Right City Cluster */}
        <svg className="w-60 h-28 text-blue-900 fill-current" viewBox="0 0 300 120">
          <rect x="50" y="45" width="22" height="75" />
          <rect x="76" y="30" width="26" height="90" />
          <rect x="106" y="55" width="20" height="65" />
          <rect x="130" y="20" width="32" height="100" />
          <polygon points="146,5 130,20 162,20" />
          <rect x="166" y="40" width="24" height="80" />
          <rect x="216" y="35" width="28" height="85" />
        </svg>
      </div>
    </div>
  );
};

