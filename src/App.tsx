import { useState } from 'react';
import { services, companyInfo } from './data/servicesData';
import type { ServiceItem } from './types';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { FooterBanner } from './components/FooterBanner';
import { ServiceModal } from './components/ServiceModal';
import { ContactModal } from './components/ContactModal';
import { LocationModal } from './components/LocationModal';
import { CitySkylineBackground } from './components/CitySkylineBackground';
import { Phone, Eye } from 'lucide-react';

export function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [showOriginalBanner, setShowOriginalBanner] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col justify-between overflow-x-hidden font-sans text-slate-800 bg-gradient-to-b from-[#ebf4ff] via-[#f5f9ff] to-[#e4f0ff]">
      {/* Background Graphic Elements */}
      <CitySkylineBackground />

      {/* Top Floating Utility Bar */}
      <nav className="w-full max-w-7xl mx-auto px-4 pt-3 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/80 backdrop-blur shadow-xs text-blue-800 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            24/7 Qabulda
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* View Original Banner Reference Toggle */}
          <button
            onClick={() => setShowOriginalBanner(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 hover:bg-white text-slate-700 shadow-xs border border-slate-200 transition-all cursor-pointer"
            title="Original banner rasmini ko'rish"
          >
            <Eye className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden sm:inline">Original Poster</span>
          </button>

          {/* Direct Call Button */}
          <a
            href={`tel:${companyInfo.rawPhone}`}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{companyInfo.phone}</span>
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1360px] mx-auto px-3 sm:px-6 py-2 flex flex-col justify-center">
        {/* Brand Header */}
        <Header />

        {/* 5 Service Cards Grid */}
        <section className="w-full my-4 sm:my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-5">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={(srv) => setSelectedService(srv)}
              />
            ))}
          </div>
        </section>

        {/* Bottom Contact Pill Footer */}
        <FooterBanner
          onOpenContact={() => setIsContactOpen(true)}
          onOpenLocation={() => setIsLocationOpen(true)}
        />
      </main>

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
      />

      {/* Original Banner Modal Preview */}
      {showOriginalBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setShowOriginalBanner(false)} />
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 z-10 flex flex-col items-center">
            <button
              onClick={() => setShowOriginalBanner(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white px-3 py-1 rounded-full text-xs font-bold z-20 cursor-pointer"
            >
              Yopish ✕
            </button>
            <img
              src="/banner.jpg"
              alt="ZALATIYE LASTOCHKA MCHJ"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-xs text-slate-500 py-2 font-medium text-center">
              Asosiy dizayn va poster namunasi
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
