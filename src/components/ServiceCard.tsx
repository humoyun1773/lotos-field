import type { ServiceItem } from '../types';
import { TravelVisual } from './visuals/TravelVisual';
import { EducationVisual } from './visuals/EducationVisual';
import { TaxiVisual } from './visuals/TaxiVisual';
import { ArchitectureVisual } from './visuals/ArchitectureVisual';
import { TechVisual } from './visuals/TechVisual';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
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
          <div className="flex flex-col items-center w-full my-2">
            <div className="relative bg-gradient-to-r from-[#1746a2] via-[#1d4ed8] to-[#1746a2] text-white px-4 py-1.5 rounded-lg shadow-md text-center border-y-2 border-white/50 w-full max-w-[190px]">
              <div className="font-extrabold text-[13px] sm:text-[14px] tracking-wider uppercase drop-shadow-sm leading-tight">
                LOTOS FIELD
              </div>
              <div className="font-black text-[14px] sm:text-[15px] tracking-[0.2em] uppercase text-sky-100 leading-tight">
                TRAVEL
              </div>
              {/* Ribbon side notches */}
              <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-[#0a1945] rounded-l-xs" />
              <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-1.5 h-4 bg-[#0a1945] rounded-r-xs" />
            </div>
          </div>
        );

      case 'pill':
        // 02: AL-HAKIM AT-TERMEZIY O'QUV MARKAZI
        return (
          <div className="flex flex-col items-center w-full my-2 text-center">
            <span className="font-black text-[13px] sm:text-[14px] tracking-wider text-[#0f2963] uppercase leading-tight font-cinzel">
              AL-HAKIM
            </span>
            <span className="font-black text-[13px] sm:text-[14px] tracking-wider text-[#0f2963] uppercase leading-tight font-cinzel">
              AT-TERMEZIY
            </span>
            <div className="bg-[#1746a2] text-white text-[10px] sm:text-[11px] font-extrabold tracking-widest px-3.5 py-0.5 rounded-full mt-1.5 uppercase shadow-sm">
              O'QUV MARKAZI
            </div>
          </div>
        );

      case 'taxi':
        // 03: ES O'RGIMCHAK TAXI with checker flags and checker tape
        return (
          <div className="flex flex-col items-center w-full my-1.5 text-center">
            <span className="font-black text-[13px] sm:text-[14px] tracking-wider text-[#0f2963] uppercase leading-tight">
              ES O'RGIMCHAK
            </span>
            <div className="flex items-center justify-center gap-1.5 mt-0.5">
              <span className="text-xs">🏁</span>
              <span className="font-black text-sm sm:text-base tracking-[0.2em] text-[#0f2963] uppercase font-space">
                TAXI
              </span>
              <span className="text-xs">🏁</span>
            </div>
            {/* Blue & White Taxi Checker tape */}
            <div className="w-full max-w-[160px] h-2.5 mt-1 rounded overflow-hidden flex shadow-inner border border-blue-900/40">
              <div className="w-full h-full checker-stripe opacity-90" />
            </div>
          </div>
        );

      case 'architect':
        // 04: ARXETEKTURA with 3D LOYIHALASH bordered pill
        return (
          <div className="flex flex-col items-center w-full my-2 text-center">
            <span className="font-black text-sm sm:text-base tracking-wider text-[#1746a2] uppercase leading-tight font-cinzel">
              ARXETEKTURA
            </span>
            <div className="border-1.5 border-[#1746a2] text-[#1746a2] bg-white text-[10px] sm:text-[11px] font-extrabold tracking-wider px-3.5 py-0.5 rounded-full mt-1.5 uppercase shadow-2xs">
              3D LOYIHALASH
            </div>
          </div>
        );

      case 'it':
        // 05: IT XIZMATLARI with DASTURLAR, WEBSITELAR blue pill
        return (
          <div className="flex flex-col items-center w-full my-2 text-center">
            <span className="font-black text-sm sm:text-base tracking-wider text-[#1746a2] uppercase leading-tight font-space">
              IT XIZMATLARI
            </span>
            <div className="bg-[#1746a2] text-white text-[9.5px] sm:text-[10.5px] font-bold tracking-wider px-3 py-0.5 rounded-full mt-1.5 uppercase shadow-sm">
              DASTURLAR, WEBSITELAR
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <a
      href={service.link || '#'}
      className="group relative flex flex-col items-center justify-between rounded-3xl p-3 sm:p-4 pt-5 transition-all duration-300 cursor-pointer glass-card hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(29,78,216,0.25)] select-none border border-white/90 text-inherit no-underline"
    >
      {/* Top Floating Number Badge: 01, 02, etc. */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30">
        <div className="bg-gradient-to-r from-[#1746a2] to-[#2563eb] text-white font-extrabold text-xs px-3.5 py-0.5 rounded-full shadow-md border border-white/80 flex items-center justify-center">
          {service.number}
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="w-full flex-1 flex items-center justify-center my-1 relative">
        {renderVisual()}
      </div>

      {/* Title & Banner Badge Area */}
      <div className="w-full flex flex-col items-center">
        {renderTitleBanner()}

        {/* Subtitle / Description Text */}
        <p className="text-[11px] sm:text-xs text-slate-600 font-medium text-center mt-2 mb-1 px-1 line-clamp-2 leading-relaxed min-h-[34px] flex items-center justify-center">
          {service.description}
        </p>

        {/* Action indicator */}
        <div className="w-full pt-1.5 mt-1 border-t border-slate-200/60 flex items-center justify-center gap-1 text-[10px] font-bold text-blue-700 opacity-80 group-hover:opacity-100 transition-opacity">
          <span>O'tish</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </a>
  );
};
