import { useState } from 'react';
import { services, companyInfo } from './data/servicesData';
import type { ServiceItem } from './types';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { FooterBanner } from './components/FooterBanner';
import { DynamicBackground } from './components/DynamicBackground';
import { Preloader } from './components/Preloader';
import { NavigationLoader } from './components/NavigationLoader';
import { LicenseModal } from './components/LicenseModal';
import { Phone, ShieldCheck } from 'lucide-react';

export function App() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetServiceName, setTargetServiceName] = useState('');
  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const lastochkaService = services.find(s => s.id === 'lastochka');
  const otherServices = services.filter(s => s.id !== 'lastochka');

  const handleNavigate = (service: ServiceItem) => {
    if (!service.link) return;
    setTargetServiceName(service.title);
    setIsNavigating(true);

    setTimeout(() => {
      window.open(service.link, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        setIsNavigating(false);
      }, 400);
    }, 600);
  };

  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden font-sans text-slate-800 bg-transparent">
      {/* Initial Page Preloader */}
      <Preloader />

      {/* Navigation Redirecting Loader */}
      <NavigationLoader isOpen={isNavigating} targetName={targetServiceName} />

      {/* Official Licenses & Certificates Modal */}
      <LicenseModal
        isOpen={isLicenseModalOpen}
        onClose={() => setIsLicenseModalOpen(false)}
      />

      {/* Dynamic Rotating Swallow Bird Background (5 images changing smoothly) */}
      <DynamicBackground />

      {/* Top Floating Utility Bar */}
      <nav className="relative w-full px-3 sm:px-6 pt-3 flex items-center justify-between z-20 max-w-screen-2xl mx-auto gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-white/90 backdrop-blur shadow-2xs text-blue-800 border border-blue-100">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden xs:inline">24/7 </span>Qabulda
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* License & Certificate Modal Trigger Button */}
          <button
            type="button"
            onClick={() => setIsLicenseModalOpen(true)}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold bg-white/95 hover:bg-blue-50 text-[#0f2963] border border-blue-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
            title="Kompaniya rasmiy litsenziya va guvohnomalarini ko'rish"
          >
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <span>Litsenziyalar</span>
            <span className="bg-blue-600 text-white text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full font-black">
              5
            </span>
          </button>

          <a
            href={`tel:${companyInfo.rawPhone}`}
            className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-all"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden md:inline">{companyInfo.phone}</span>
            <span className="md:hidden">Aloqa</span>
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-2 flex flex-col justify-center max-w-screen-2xl mx-auto">
        {/* Brand Header */}
        <Header />

        <section className="w-full mt-2 mb-4 sm:mt-3 sm:mb-6 flex flex-col gap-4 sm:gap-5">
          {/* Featured Top Card — ZALATIYE LASTOCHKA (full width, tall) */}
          {lastochkaService && (
            <div className="w-full">
              <ServiceCard
                service={lastochkaService}
                featured
                onNavigate={handleNavigate}
              />
            </div>
          )}

          {/* 5 Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {otherServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onNavigate={handleNavigate}
              />
            ))}
          </div>
        </section>

        {/* Bottom Contact Pill Footer */}
        <FooterBanner />
      </main>
    </div>
  );
}

export default App;


