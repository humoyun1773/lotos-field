import type { FC } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';

interface NavigationLoaderProps {
  targetName: string;
  isOpen: boolean;
}

export const NavigationLoader: FC<NavigationLoaderProps> = ({ targetName, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div className="relative bg-white/95 rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-blue-100 flex flex-col items-center text-center">
        {/* Animated Icon Ring */}
        <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-blue-100 animate-ping opacity-75" />
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#0f2963] to-[#2563eb] text-white flex items-center justify-center shadow-lg">
            <Loader2 className="w-7 h-7 animate-spin" />
          </div>
        </div>

        {/* Heading */}
        <h3 className="font-cinzel text-base sm:text-lg font-black text-[#0f2963] uppercase tracking-wider mb-1">
          {targetName}
        </h3>

        {/* Subtitle */}
        <div className="text-xs font-bold text-blue-600 tracking-wide uppercase mb-3 flex items-center gap-1.5 justify-center">
          <span>Xizmatga yo‘naltirilmoqda</span>
          <ExternalLink className="w-3.5 h-3.5 animate-pulse" />
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          Iltimos kuting, xavfsiz va to‘g‘ridan-to‘g‘ri portalga ulanish amalga oshirilmoqda...
        </p>

        {/* Mini progress line */}
        <div className="w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#0f2963] via-blue-600 to-sky-400 rounded-full animate-pulse w-full" />
        </div>
      </div>
    </div>
  );
};
