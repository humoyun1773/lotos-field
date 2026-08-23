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

  const baseClass = "group relative flex flex-col items-center justify-between rounded-3xl p-3 sm:p-4 pt-5 transition-all duration-300 glass-card hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(29,78,216,0.25)] border border-white/90 h-full";

  // ── FEATURED (full-width horizontal) card for Zalatiye Lastochka ──
  if (featured && service.link) {
    return (
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-10 rounded-3xl px-6 sm:px-10 py-6 sm:py-8 glass-card border border-white/90 hover:shadow-[0_24px_48px_-12px_rgba(29,78,216,0.28)] hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
        style={{ textDecoration: 'none', display: 'flex' }}
      >
        {/* Blue border top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1746a2] via-[#3b82f6] to-[#1746a2] rounded-t-3xl" />

        {/* Number badge */}
        <div className="absolute top-3 left-6 bg-gradient-to-r from-[#1746a2] to-[#2563eb] text-white font-extrabold text-xs px-3 py-0.5 rounded-full shadow border border-white/80">
          {service.number}
        </div>

        {/* Left: Big Bird Visual */}
        <div className="flex-shrink-0 w-full sm:w-72 md:w-96 pointer-events-none">
          <div className="relative h-52 sm:h-64 flex items-center justify-center">
            <LastochkaVisual />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left pointer-events-none">
          {/* Title ribbon */}
          <div className="relative inline-flex flex-col items-center sm:items-start mb-3">
            <div className="relative bg-gradient-to-r from-[#1746a2] via-[#1d4ed8] to-[#1746a2] px-5 py-2 rounded-xl shadow-lg border border-white/40 overflow-hidden mb-2">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg]" />
              <div className="relative font-black text-xl sm:text-2xl tracking-widest uppercase text-white leading-none">
                ZALATIYE
              </div>
              <div className="relative font-black text-2xl sm:text-3xl tracking-widest uppercase text-sky-200 -mt-1">
                LASTOCHKA
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#0f2963] to-[#1d4ed8] text-white text-xs font-black tracking-[0.25em] px-4 py-1 rounded-full shadow">
              M C H J
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base font-bold text-[#1746a2] tracking-wide uppercase mb-2">
            SIFAT • ISHONCH • NATIJA
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-md mb-4">
            {service.description} — sayohat, ta'lim, taxi, arxitektura va IT xizmatlari bo'yicha yetakchi kompaniya.
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
            {service.features?.map((f, i) => (
              <span key={i} className="text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full">
                {f}
              </span>
            ))}
          </div>

          {/* CTA button */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1746a2] to-[#2563eb] text-white text-xs font-black px-5 py-2 rounded-full shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all">
            <span>Saytga o'tish</span>
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </a>
    );
  }

  // ── NORMAL card ──
  const cardContent = (
    <>
      {/* Top Floating Number Badge: 01, 02, etc. */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-gradient-to-r from-[#1746a2] to-[#2563eb] text-white font-extrabold text-xs px-3.5 py-0.5 rounded-full shadow-md border border-white/80 flex items-center justify-center">
          {service.number}
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="w-full flex-1 flex items-center justify-center my-1 relative pointer-events-none">
        {renderVisual()}
      </div>

      {/* Title & Banner Badge Area */}
      <div className="w-full flex flex-col items-center pointer-events-none">
        {renderTitleBanner()}

        {/* Subtitle / Description Text */}
        <p className="text-[11px] sm:text-xs text-slate-600 font-medium text-center mt-2 mb-1 px-1 line-clamp-2 leading-relaxed min-h-[34px] flex items-center justify-center">
          {service.description}
        </p>

        {/* Link indicator - only shown if service has a link */}
        {service.link && (
          <div className="w-full pt-1.5 mt-1 border-t border-blue-100 flex items-center justify-center gap-1 text-[10px] font-bold text-blue-600 opacity-70 group-hover:opacity-100 transition-opacity">
            <span>Saytga o'tish</span>
            <svg className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
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

