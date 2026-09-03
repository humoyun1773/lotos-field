import type { FC } from 'react';

export const LastochkaVisual: FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Background soft blue glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.18) 0%, rgba(15,41,99,0.06) 60%, transparent 100%)'
        }}
      />

      {/* Main Partnership Handshake Image */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-0.5 sm:p-1">
        <img
          src="/partnership-deal.png"
          alt="Hamkorlik va Investitsiya shartnomasi"
          className="w-full h-32 sm:h-36 lg:h-40 object-cover object-center rounded-2xl shadow-md border border-blue-200/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-300/40"
        />
      </div>
    </div>
  );
};
