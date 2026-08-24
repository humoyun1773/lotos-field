import { useState } from 'react';
import { services, companyInfo } from './data/servicesData';
import type { ServiceItem } from './types';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { FooterBanner } from './components/FooterBanner';
import { CitySkylineBackground } from './components/CitySkylineBackground';
import { Preloader } from './components/Preloader';
import { NavigationLoader } from './components/NavigationLoader';
import { Phone } from 'lucide-react';

export function App() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetServiceName, setTargetServiceName] = useState('');

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
    <div className="min-h-screen relative flex flex-col overflow-x-hidden font-sans text-slate-800 bg-gradient-to-b from-[#ebf4ff] via-[#f5f9ff] to-[#e4f0ff]">
      {/* Initial Page Preloader */}
      <Preloader />

      {/* Navigation Redirecting Loader */}
      <NavigationLoader isOpen={isNavigating} targetName={targetServiceName} />

      {/* Background Graphic Elements */}
      <CitySkylineBackground />

      {/* Top Floating Utility Bar */}
      <nav className="relative w-full px-4 sm:px-6 pt-3 flex items-center justify-between z-20 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/80 backdrop-blur shadow-sm text-blue-800 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            24/7 Qabulda
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
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


