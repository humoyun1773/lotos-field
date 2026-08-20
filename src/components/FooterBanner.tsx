import type { FC } from 'react';
import { Phone, ShieldCheck, MapPin } from 'lucide-react';
import { companyInfo } from '../data/servicesData';

export const FooterBanner: FC = () => {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 py-6 mt-4 select-none">
      {/* Floating Bottom Card / Pill Container */}
      <div className="relative glass-panel rounded-full shadow-[0_12px_32px_rgba(26,86,219,0.14)] p-2 sm:p-3 border border-white flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 transition-all duration-300">
        
        {/* Left Section: BIZ BILAN BOG'LANING + PHONE */}
        <a
          href={`tel:${companyInfo.rawPhone}`}
          className="group flex items-center gap-3 px-4 py-2 rounded-full hover:bg-blue-50/80 transition-all cursor-pointer w-full md:w-auto justify-center md:justify-start"
          title="Qo'ng'iroq qilish"
        >
          {/* Phone Circle Icon */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#0f2963] to-[#2563eb] text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current animate-bounce" />
          </div>
          
          {/* Text labels */}
          <div className="flex flex-col text-left">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
              BIZ BILAN BOG'LANING
            </span>
            <span className="text-base sm:text-lg md:text-xl font-black tracking-tight text-[#0f2963] font-space group-hover:text-blue-600 transition-colors">
              {companyInfo.phone}
            </span>
          </div>
        </a>

        {/* Center Section: SIFAT - ISHONCH - NATIJA Shield Badge */}
        <div className="flex-1 max-w-sm w-full">
          <div className="relative bg-gradient-to-r from-[#0f2963] via-[#1d4ed8] to-[#0f2963] text-white rounded-full py-2.5 px-5 shadow-lg border border-white/40 flex items-center justify-center gap-3">
            {/* Shield Icon in white circle */}
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/40">
              <ShieldCheck className="w-5 h-5 text-sky-200" />
            </div>

            {/* Slogan */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-white drop-shadow">
                SIFAT – ISHONCH – NATIJA
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-sky-200 uppercase -mt-0.5">
                — BIRGA YUKSALAMIZ! —
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: BIZ HAR DOIM SIZ BILAN (Location/Pin) */}
        <div className="group flex items-center gap-3 px-4 py-2 rounded-full w-full md:w-auto justify-center md:justify-end">
          {/* Text labels */}
          <div className="flex flex-col text-right">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 uppercase">
              BIZ HAR DOIM
            </span>
            <span className="text-base sm:text-lg md:text-xl font-black tracking-wide text-[#0f2963] uppercase">
              SIZ BILAN
            </span>
          </div>

          {/* Map Pin Circle Icon */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#0f2963] to-[#2563eb] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

      </div>

      {/* Copyright line */}
      <div className="text-center mt-4 text-xs text-slate-500 font-medium">
        © {new Date().getFullYear()} {companyInfo.name} {companyInfo.entityType}. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

