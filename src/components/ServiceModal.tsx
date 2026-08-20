import { useState } from 'react';
import type { ServiceItem } from '../types';
import { companyInfo } from '../data/servicesData';
import { X, CheckCircle, Phone, Send } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setName('');
      setPhone('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/80 p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-extrabold text-sm px-3.5 py-1 rounded-full shadow">
            {service.number}
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              {service.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0f2963] uppercase font-cinzel">
              {service.title} {service.subtitleTag ? `(${service.subtitleTag})` : ''}
            </h3>
          </div>
        </div>

        {/* Tagline & Summary */}
        <div className="bg-blue-50/80 rounded-2xl p-4 border border-blue-100 mb-5">
          <p className="text-sm sm:text-base font-bold text-blue-950 mb-1">
            ✨ {service.details.tagline}
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {service.details.summary}
          </p>
        </div>

        {/* Key Features List */}
        <div className="mb-5">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2.5">
            Xizmat imkoniyatlari
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights & Advantages */}
        <div className="mb-6">
          <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-2">
            Bizning ustunliklarimiz
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {service.details.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Form or Quick Contact */}
        {formSubmitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-center">
            <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-1" />
            <p className="font-bold text-sm">So'rovingiz qabul qilindi!</p>
            <p className="text-xs text-emerald-700">Tez orada mutaxassisimiz siz bilan bog'lanadi.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-slate-200">
            <div className="text-xs font-bold text-[#0f2963]">
              Tezkor buyurtma yoki maslahat olish:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ismingiz"
                className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+998 (__) ___-__-__"
                className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#0f2963] to-[#2563eb] hover:from-blue-900 hover:to-blue-600 text-white font-bold text-xs py-3 px-4 rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{service.details.contactActionText}</span>
              </button>

              <a
                href={`tel:${companyInfo.rawPhone}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow transition-all flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>To'g'ridan-to'g'ri qo'ng'iroq</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
