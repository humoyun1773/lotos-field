import type { FC } from 'react';
import type { ServiceItem } from '../types';
import { TravelVisual } from './visuals/TravelVisual';
import { EducationVisual } from './visuals/EducationVisual';
import { TaxiVisual } from './visuals/TaxiVisual';
import { ArchitectureVisual } from './visuals/ArchitectureVisual';
import { TechVisual } from './visuals/TechVisual';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
}

export const ServiceCard: FC<ServiceCardProps> = ({ service, onSelect }) => {
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

      default:
        return null;
    }
  };

  return (
    <div
      onClick={() => onSelect(service)}
      className="group relative flex flex-col items-center justify-between rounded-3xl p-3 sm:p-4 pt-5 transition-all duration-300 cursor-pointer glass-card hover:-translate-y-2 hover:shadow-[0_20px_35px_-10px_rgba(29,78,216,0.25)] select-none border border-white/90"
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

        {/* Hover action indicator */}
        <div className="w-full pt-1.5 mt-1 border-t border-slate-200/60 flex items-center justify-center gap-1 text-[10px] font-bold text-blue-700 opacity-80 group-hover:opacity-100 transition-opacity">
          <span>Batafsil ma'lumot</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
