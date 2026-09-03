import type { FC } from 'react';
import type { ServiceItem } from '../types';
import { TravelVisual } from './visuals/TravelVisual';
import { EducationVisual } from './visuals/EducationVisual';
import { TaxiVisual } from './visuals/TaxiVisual';
import { ArchitectureVisual } from './visuals/ArchitectureVisual';
import { TechVisual } from './visuals/TechVisual';
import { LastochkaVisual } from './visuals/LastochkaVisual';
import { EhsonVisual } from './visuals/EhsonVisual';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
  onNavigate?: (service: ServiceItem) => void;
}

export const ServiceCard: FC<ServiceCardProps> = ({ service, featured = false, onNavigate }) => {
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
      case 'ehson':
        return <EhsonVisual />;
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

  const baseClass = "group relative flex flex-col items-center justify-between rounded-3xl p-3.5 sm:p-4 pt-5 sm:pt-6 transition-all duration-300 bg-white/90 backdrop-blur-md hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-8px_rgba(23,70,162,0.2)] border border-white hover:border-blue-300 shadow-[0_4px_20px_rgba(15,41,99,0.06)] h-full w-full";

  const handleClick = (e: React.MouseEvent) => {
    if (onNavigate && service.link) {
      e.preventDefault();
      onNavigate(service);
    }
  };

  // ── FEATURED (full-width horizontal) card for Lastochka and Ehson ──
  if (featured && service.link) {
    const isEhson = service.id === 'ehson';

    return (
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="group relative w-full flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6 lg:gap-10 rounded-3xl px-4 sm:px-8 lg:px-10 py-5 sm:py-7 lg:py-8 bg-gradient-to-r from-white via-blue-50/70 to-white border-2 border-blue-200/80 hover:border-blue-400 shadow-[0_12px_32px_-6px_rgba(15,41,99,0.1)] hover:shadow-[0_20px_45px_-8px_rgba(23,70,162,0.22)] backdrop-blur-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden select-none"
        style={{ textDecoration: 'none', display: 'flex', cursor: 'pointer' }}
      >
        {/* Top elegant gradient accent line (Pure Blue) */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f2963] via-[#2563eb] to-[#0f2963] rounded-t-3xl z-20" />

        {/* Large Background Image behind text for Lastochka */}
        {!isEhson && (
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/partnership-deal.png"
              alt="Hamkorlik va Investitsiya"
              className="w-full h-full object-cover object-right-bottom sm:object-right opacity-25 group-hover:opacity-35 transition-all duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay to ensure text is sharp and 100% readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/75 sm:from-white/95 sm:via-white/85 sm:to-white/60 backdrop-blur-[0.5px]" />
          </div>
        )}

        {/* Left: Visual with Ambient Glow & Tag */}
        <div className="relative z-10 flex-shrink-0 w-full lg:w-72 flex flex-col items-center justify-center pointer-events-none">
          <div className="relative w-full h-32 sm:h-40 lg:h-44 flex items-center justify-center">
            {isEhson ? <EhsonVisual /> : <LastochkaVisual />}
          </div>
          <div className="text-center mt-1.5 sm:mt-2">
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.2em] uppercase px-3 py-0.5 rounded-full border text-[#0f2963] bg-blue-100/80 border-blue-200/60 shadow-2xs">
              {isEhson ? 'XAYRIYA PLATFORMASI' : 'EKOTIZIM MARKAZI'}
            </span>
          </div>
        </div>

        {/* Right: Persuasive Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pointer-events-none w-full">
          {/* Top Tagline Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2 shadow-2xs border bg-blue-100/80 border-blue-200 text-[#0f2963]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            {isEhson ? 'RASMIY VA SHAFFAF XAYRIYA JAMG‘ARMASI' : 'INVESTITSIYA VA HAMKORLIK IMKONIYATI'}
          </div>

          {/* Main Headline */}
          <h3 className="font-cinzel text-lg sm:text-2xl lg:text-3xl font-black tracking-wide uppercase leading-tight mb-1 text-[#0f2963]">
            {isEhson ? 'EZGULIK VA SHAFQAT SARI BIRGALIKDA QADAM QO‘YAYLIK!' : 'BIZNESINGIZNI BIZ BILAN RIVOJLANTIRING!'}
          </h3>

          {/* Subheading with badge */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-2.5">
            <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase text-blue-700">
              {isEhson ? 'SAXOVAT VA EZGULIK MARKAZI' : 'ZALATIYE LASTOCHKA MCHJ'}
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600">
              {isEhson ? 'Muhtojlar, yetimlar va og‘ir xastalarga beg‘araz ko‘mak' : 'Kafolatlangan daromad va barqaror o\'sish'}
            </span>
          </div>

          {/* Core pitch text */}
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-3xl mb-3.5">
            {isEhson 
              ? 'Muhtoj oilalar, mehrga intiq yetim bolalar va shifoga muhtoj og‘ir xastalarga bevosita ko‘mak qo‘lini cho‘zing. Har bir xayriya yordami omonat sifatida to‘g‘ridan-to‘g‘ri egalariga yetkaziladi va 100% ochiq, shaffof fotohisobotlar orqali tasdiqlanadi!'
              : <>Biznesingizga investitsiya kiritmoqchimisiz yoki yangi yo‘nalishda daromad olmoqchimisiz? Bizning ko‘p tarmoqli ekotizimimiz (<span className="font-bold text-blue-900">Sayohat, Ta’lim, Taxi, Arxitektura va IT</span>) orqali tayyor infratuzilma, 100% yuridik shaffoflik va barqaror foydali hamkorlikka ega bo‘ling!</>
            }
          </p>

          {/* Value Proposition Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mb-4">
            {service.features?.map((f, i) => (
              <span 
                key={i} 
                className="text-[10px] sm:text-[11px] font-bold bg-white/90 backdrop-blur-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-xl shadow-2xs flex items-center gap-1 border text-[#0f2963] border-blue-200"
              >
                <span className="text-blue-600">✦</span> {f}
              </span>
            ))}
          </div>

          {/* High-Converting CTA Button (Pure Blue) */}
          <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-extrabold px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-md transition-all duration-300 bg-gradient-to-r from-[#0f2963] via-[#1746a2] to-[#2563eb] group-hover:shadow-blue-500/25 group-hover:scale-[1.02]">
            <span>{isEhson ? 'Xayriya va ezgulik portaliga o‘tish' : 'Hamkorlik & Investitsiya portaliga o‘tish'}</span>
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
      {/* Visualizer Area */}
      <div className="w-full flex-1 flex items-center justify-center my-1 relative pointer-events-none min-h-[120px] sm:min-h-[140px]">
        {renderVisual()}
      </div>

      {/* Title & Banner Badge Area */}
      <div className="w-full flex flex-col items-center pointer-events-none mt-1 sm:mt-2">
        {renderTitleBanner()}

        {/* Subtitle / Description Text */}
        <p className="text-[11px] sm:text-xs text-slate-600 font-medium text-center mt-1.5 sm:mt-2 mb-2 px-1 line-clamp-2 leading-relaxed min-h-[32px] sm:min-h-[34px] flex items-center justify-center">
          {service.description}
        </p>

        {/* Action Button Style Indicator */}
        {service.link && (
          <div className="w-full pt-2 mt-1 border-t border-blue-100 flex items-center justify-center">
            <div className="w-full py-1.5 px-3 rounded-xl bg-blue-50/80 group-hover:bg-[#1746a2] text-[#1746a2] group-hover:text-white border border-blue-200/60 group-hover:border-[#1746a2] flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold transition-all duration-300 shadow-2xs">
              <span>Saytga o'tish</span>
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
        onClick={handleClick}
        className={baseClass + " cursor-pointer block select-none"}
        style={{ textDecoration: 'none', display: 'flex', cursor: 'pointer' }}
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
