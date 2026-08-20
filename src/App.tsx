import { services, companyInfo } from './data/servicesData';
import { Header } from './components/Header';
import { ServiceCard } from './components/ServiceCard';
import { FooterBanner } from './components/FooterBanner';
import { CitySkylineBackground } from './components/CitySkylineBackground';
import { Phone } from 'lucide-react';

export function App() {
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
