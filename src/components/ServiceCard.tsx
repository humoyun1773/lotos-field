import type { FC } from 'react';
import type { ServiceItem } from '../types';
import { TravelVisual } from './visuals/TravelVisual';
import { EducationVisual } from './visuals/EducationVisual';
import { TaxiVisual } from './visuals/TaxiVisual';
import { ArchitectureVisual } from './visuals/ArchitectureVisual';
import { TechVisual } from './visuals/TechVisual';
import { LastochkaVisual } from './visuals/LastochkaVisual';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: FC<ServiceCardProps> = ({ service, featured = false }) => {
  // Render visualizer according to service id
  const renderVisual = () => {
    switch (service.id) {
      case 'travel':
        return <TravelVisual />;
      case 'education':
        return <EducationVisual />;
      case 'taxi':
        return <TaxiVisual />;
      case 'architecture':
        return <ArchitectureVisual />;
      case 'it':
        return <TechVisual />;
      case 'lastochka':
        return <LastochkaVisual />;
      default:
        return null;
    }
  };

  // Render title banner according to exact style in the image
  const renderTitleBanner = () => {
    switch (service.bannerStyle) {
      case 'brush':
        // 01: LOTOS FIELD TRAVEL with textured brush / ribbon style
        return (
          <div className="flex flex-col items-center w-full my-1.5">
            <div className="relative bg-gradient-to-r from-[#1746a2] via-[#1d4ed8] to-[#1746a2] text-white px-5 py-1.5 rounded-md shadow-md text-center border-y-2 border-white/40 w-full max-w-[200px]">
              <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase drop-shadow">
                LOTOS FIELD
              </span>
              <div className="font-black text-sm sm:text-base tracking-widest uppercase -mt-0.5 text-sky-200">
                TRAVEL
              </div>
              {/* Ribbon edge notches */}
              <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-3 bg-blue-900 rounded-l-xs" />
              <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-3 bg-blue-900 rounded-r-xs" />
            </div>
          </div>
        );

      case 'pill':
        // 02: AL-HAKIM AT-TERMEZIY O'QUV MARKAZI
        return (
          <div className="flex flex-col items-center w-full my-1.5 text-center">
            <span className="font-black text-xs sm:text-sm tracking-wide text-[#0f2963] uppercase leading-tight">
              AL-HAKIM
            </span>
            <span className="font-black text-xs sm:text-sm tracking-wide text-[#0f2963] uppercase leading-tight -mt-0.5">
              AT-TERMEZIY
            </span>
            <div className="bg-[#1746a2] text-white text-[10px] font-extrabold tracking-widest px-3 py-0.5 rounded-full mt-1 uppercase shadow-sm">
              O'QUV MARKAZI
            </div>
          </div>
        );

      case 'taxi':
        // 03: ES O'RGIMCHAK TAXI with checker flags and checker tape
        return (
          <div className="flex flex-col items-center w-full my-1 text-center">
            <span className="font-black text-xs sm:text-sm tracking-wider text-[#0f2963] uppercase leading-tight">
              ES O'RGIMCHAK
            </span>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              {/* Checker flag left */}
              <span className="text-xs">🏁</span>
              <span className="font-black text-sm sm:text-base tracking-widest text-[#0f2963] uppercase">
                TAXI
              </span>
              {/* Checker flag right */}
              <span className="text-xs">🏁</span>
            </div>
            {/* Blue & White Taxi Checker tape */}
            <div className="w-full max-w-[170px] h-2 mt-1 rounded overflow-hidden flex shadow-inner border border-blue-900/40">
              <div className="w-full h-full checker-stripe opacity-90" />
            </div>
          </div>
        );

      case 'architect':
        // 04: ARXETEKTURA with 3D LOYIHALASH bordered pill
        return (
          <div className="flex flex-col items-center w-full my-1.5 text-center">
            <span className="font-black text-sm sm:text-base tracking-wider text-[#1746a2] uppercase leading-tight">
              ARXETEKTURA
            </span>
            <div className="border border-[#1746a2] text-[#1746a2] bg-white text-[10px] font-extrabold tracking-wider px-3 py-0.5 rounded-full mt-1 uppercase shadow-2xs">
              3D LOYIHALASH
            </div>
          </div>
        );

      case 'it':
        // 05: IT XIZMATLARI with DASTURLAR, WEBSITELAR blue pill
        return (
          <div className="flex flex-col items-center w-full my-1.5 text-center">
            <span className="font-black text-sm sm:text-base tracking-wider text-[#1746a2] uppercase leading-tight">
              IT XIZMATLARI
            </span>
            <div className="bg-[#1746a2] text-white text-[9px] sm:text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full mt-1 uppercase shadow-sm">
              DASTURLAR, WEBSITELAR
            </div>
          </div>
        );

      case 'lastochka':
        // 06: ZALATIYE LASTOCHKA with blue gradient ribbon
        return (
          <div className="flex flex-col items-center w-full my-1.5 text-center">
            <div className="relative w-full max-w-[210px] bg-gradient-to-r from-[#1746a2] via-[#1d4ed8] to-[#1746a2] px-3 py-1.5 rounded-md shadow-md border border-white/40 overflow-hidden">
              {/* Shine sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
              <div className="relative font-black text-xs sm:text-sm tracking-widest uppercase text-white leading-none">
                ZALATIYE
              </div>
              <div className="relative font-black text-sm sm:text-base tracking-widest uppercase text-sky-200 -mt-0.5">
                LASTOCHKA
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0f2963] to-[#1d4ed8] text-white text-[9px] font-black tracking-[0.2em] px-3 py-0.5 rounded-full mt-1 uppercase shadow-sm">
              M C H J
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const baseClass = "group relative flex flex-col items-center justify-between rounded-3xl p-4 pt-6 transition-all duration-300 bg-white/80 backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(23,70,162,0.22)] border border-white/90 hover:border-blue-300 shadow-[0_8px_24px_rgba(15,41,99,0.06)] h-full";

  // ── FEATURED (full-width horizontal) card for Zalatiye Lastochka ──
  if (featured && service.link) {
    return (
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 rounded-3xl px-6 sm:px-10 py-6 sm:py-8 bg-gradient-to-r from-white/95 via-blue-50/60 to-white/95 backdrop-blur-xl border border-white/90 hover:border-blue-300/80 shadow-[0_16px_36px_-6px_rgba(23,70,162,0.14)] hover:shadow-[0_24px_48px_-8px_rgba(23,70,162,0.22)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
        style={{ textDecoration: 'none', display: 'flex' }}
      >
        {/* Top elegant accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1746a2] via-[#3b82f6] to-[#1746a2] rounded-t-3xl" />

        {/* Number badge */}
        <div className="absolute top-3.5 left-6 bg-gradient-to-r from-[#0f2963] to-[#2563eb] text-white font-extrabold text-xs px-3.5 py-0.5 rounded-full shadow border border-white/80">
          {service.number}
        </div>

        {/* Left: Swallow Bird Visual with Ambient Glow */}
        <div className="flex-shrink-0 w-full lg:w-80 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-44 sm:h-48 flex items-center justify-center">
            <LastochkaVisual />
          </div>
        </div>

        {/* Right: Text & Action Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-none w-full">
          {/* Title and Tag Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-2">
            <div className="relative bg-gradient-to-r from-[#0f2963] via-[#1746a2] to-[#2563eb] text-white px-5 py-2 rounded-xl shadow-md border border-white/30">
              <span className="font-cinzel font-black text-lg sm:text-xl md:text-2xl tracking-[0.15em] uppercase drop-shadow">
                ZALATIYE LASTOCHKA
              </span>
            </div>
            <div className="bg-blue-800 text-sky-200 text-xs font-black tracking-[0.25em] px-3.5 py-1.5 rounded-xl uppercase shadow-sm border border-blue-700">
              M C H J
            </div>
          </div>

          {/* Slogan */}
          <div className="text-xs sm:text-sm font-bold text-[#1746a2] tracking-[0.2em] uppercase mb-2">
            SIFAT • ISHONCH • NATIJA — BIRGA YUKSALAMIZ!
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-2xl mb-4">
            {service.description} — sayohat, ta'lim, taxi, arxitektura va IT xizmatlari bo'yicha yetakchi ko'p tarmoqli kompaniya.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
            {service.features?.map((f, i) => (
              <span key={i} className="text-[11px] font-semibold bg-white/90 text-blue-900 border border-blue-200/80 px-3 py-1 rounded-full shadow-2xs">
                ✓ {f}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0f2963] to-[#2563eb] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
            <span>Rasmiy saytga o'tish</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </a>
    );
  }

  // ── NORMAL card ──
  const cardContent = (
    <>
      {/* Top Floating Number Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-gradient-to-r from-[#0f2963] to-[#2563eb] text-white font-extrabold text-xs px-3.5 py-0.5 rounded-full shadow-md border border-white/80 flex items-center justify-center">
          {service.number}
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="w-full flex-1 flex items-center justify-center my-1 relative pointer-events-none min-h-[140px]">
        {renderVisual()}
      </div>

      {/* Title & Banner Badge Area */}
      <div className="w-full flex flex-col items-center pointer-events-none mt-2">
        {renderTitleBanner()}

        {/* Subtitle / Description Text */}
        <p className="text-[11px] sm:text-xs text-slate-600 font-medium text-center mt-2 mb-2 px-1 line-clamp-2 leading-relaxed min-h-[34px] flex items-center justify-center">
          {service.description}
        </p>

        {/* Action Button Style Indicator */}
        {service.link && (
          <div className="w-full pt-2 mt-1 border-t border-blue-100 flex items-center justify-center">
            <div className="w-full py-1.5 px-3 rounded-xl bg-blue-50/80 group-hover:bg-[#1746a2] text-[#1746a2] group-hover:text-white border border-blue-200/60 group-hover:border-[#1746a2] flex items-center justify-center gap-1.5 text-xs font-bold transition-all duration-300 shadow-2xs">
              <span>Saytga o'tish</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );

  if (service.link) {
    return (
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass + " cursor-pointer block"}
        style={{ textDecoration: 'none', display: 'flex' }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={baseClass}>
      {cardContent}
    </div>
  );
};
