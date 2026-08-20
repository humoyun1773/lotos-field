import type { FC } from 'react';
import { companyInfo } from '../data/servicesData';
import { X, MapPin, Clock, Phone, ShieldCheck } from 'lucide-react';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LocationModal: FC<LocationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/80 p-6 sm:p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-black text-[#0f2963] uppercase font-cinzel">
            Bizning manzil
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Har doim siz bilan birga va xizmatingizdamiz!
          </p>
        </div>

        <div className="space-y-3.5 text-xs text-slate-700">
          <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Manzil:</div>
              <div>{companyInfo.address}</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Ish tartibi:</div>
              <div>{companyInfo.workingHours}</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <Phone className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-slate-900">Bog'lanish uchun:</div>
              <a href={`tel:${companyInfo.rawPhone}`} className="text-blue-700 font-bold hover:underline">
                {companyInfo.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-blue-50 p-3.5 rounded-2xl border border-blue-100">
            <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-blue-900">Kafolat:</div>
              <div className="text-blue-800">Sifat, ishonch va doimiy natija.</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-3 border-t border-slate-100">
          <a
            href={`tel:${companyInfo.rawPhone}`}
            className="w-full bg-gradient-to-r from-[#0f2963] to-[#2563eb] hover:from-blue-900 hover:to-blue-600 text-white font-bold text-xs py-3 rounded-xl shadow transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Qo'ng'iroq qilish</span>
          </a>
        </div>
      </div>
    </div>
  );
};
