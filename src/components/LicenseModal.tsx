import { useState, useEffect, type FC } from 'react';
import { X, ShieldCheck, Download, ZoomIn, CheckCircle2, Building2, Award } from 'lucide-react';

interface LicenseItem {
  id: string;
  title: string;
  category: string;
  licenseNumber: string;
  issuer: string;
  tin: string;
  validity: string;
  imageSrc: string;
  description: string;
}

const licensesData: LicenseItem[] = [
  {
    id: 'tourism',
    title: 'Turistik Faoliyat Litsenziyasi',
    category: 'Turizm & Sayohat',
    licenseNumber: '№ 681515 (L-41802359)',
    issuer: 'Turizm qo‘mitasi Surxondaryo viloyati turizm boshqarmasi',
    tin: '308122009',
    validity: '25.03.2025 dan — Cheksiz (Faol)',
    imageSrc: '/licenses/tourism-license.png',
    description: 'Chiqish va kirish turizmi faoliyati (tibbiy, ta’lim va ziyorat turizmi)ni qonuniy amalga oshirish huquqini beruvchi rasmiy davlat litsenziyasi.'
  },
  {
    id: 'state',
    title: 'Davlat Ro‘yxatidan O‘tganlik Guvohnomasi',
    category: 'Yuridik Maqom',
    licenseNumber: '№ 941753 (Reyestr № 3873730)',
    issuer: 'Davlat Xizmatlari Markazi (DXM)',
    tin: '308122009',
    validity: '27.01.2021 yildan — Doimiy',
    imageSrc: '/licenses/state-certificate.png',
    description: '"ZALATIYE LASTOCHKA" Mas’uliyati Cheklangan Jamiyati sifatida qonuniy ro‘yxatdan o‘tkazilganligini tasdiqlovchi rasmiy davlat guvohnomasi.'
  },
  {
    id: 'transport',
    title: 'Yo‘lovchi Tashish Faoliyati Litsenziyasi',
    category: 'Transport & Logistika',
    licenseNumber: 'AT № 2530398 (Reyestr № 4483374)',
    issuer: 'O‘zbekiston Respublikasi Transport Vazirligi',
    tin: '308122009',
    validity: '10.10.2025 yildan — Cheklanmagan',
    imageSrc: '/licenses/transport-license.png',
    description: 'Shahar, shahar atrofi va shaharlararo yengil avtomobillarda yo‘lovchilarni xavfsiz va qonuniy tashish xizmatlari uchun berilgan rasmiy litsenziya.'
  }
];

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseModal: FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedImage, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* High Performance Modal Backdrop (No heavy backdrop-blur) */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-slate-950/80 overflow-y-auto transform-gpu"
        onClick={onClose}
      >
        {/* Modal Window Container */}
        <div
          className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 my-auto overflow-hidden flex flex-col max-h-[94vh] transform-gpu"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Blue Accent Gradient */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#0f2963] via-[#2563eb] to-[#0f2963]" />

          {/* Modal Header */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-100 flex items-center justify-between bg-white gap-2">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#0f2963] to-[#2563eb] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <h2 className="font-cinzel text-sm sm:text-base md:text-lg font-black text-[#0f2963] tracking-wide uppercase leading-tight">
                    Rasmiy Litsenziyalar
                  </h2>
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> 100% Qonuniy
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 line-clamp-1 sm:line-clamp-none">
                  "ZALATIYE LASTOCHKA" MCHJ davlat ro'yxatidan o'tgan faoliyat hujjatlari
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 flex items-center justify-center transition-colors border border-slate-200 flex-shrink-0 cursor-pointer"
              title="Yopish"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Modal Body - 3 License Cards */}
          <div className="p-3 sm:p-5 md:p-6 overflow-y-auto flex-1">
            {/* Quick Badges Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-blue-700 flex-shrink-0" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-slate-500">STIR Raqami</div>
                  <div className="text-xs sm:text-sm font-black text-[#0f2963]">308122009</div>
                </div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 flex items-center gap-2.5">
                <Award className="w-4 h-4 text-blue-700 flex-shrink-0" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-slate-500">Yuridik Maqomi</div>
                  <div className="text-xs sm:text-sm font-black text-[#0f2963]">M C H J</div>
                </div>
              </div>
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-2.5 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <div>
                  <div className="text-[9px] uppercase font-bold text-slate-500">Litsenziya Holati</div>
                  <div className="text-xs sm:text-sm font-black text-emerald-700">Cheksiz / Faol</div>
                </div>
              </div>
            </div>

            {/* The 3 Main License Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
              {licensesData.map((lic, index) => (
                <div
                  key={lic.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Badge */}
                  <div className="p-3.5 pb-1.5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full border border-blue-100">
                        {lic.category}
                      </span>
                      <span className="text-xs font-black text-slate-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-xs sm:text-sm font-extrabold text-[#0f2963] leading-snug line-clamp-2 min-h-[38px]">
                      {lic.title}
                    </h3>
                  </div>

                  {/* Document Image Thumbnail Box with Zoom Trigger */}
                  <div className="px-3.5 py-1.5">
                    <div
                      onClick={() => setSelectedImage(lic.imageSrc)}
                      className="relative w-full h-48 sm:h-52 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-500 overflow-hidden cursor-pointer group/img flex items-center justify-center transition-colors"
                    >
                      <img
                        src={lic.imageSrc}
                        alt={lic.title}
                        className="w-full h-full object-contain p-1"
                        loading="eager"
                      />
                      {/* Zoom Overlay on Hover */}
                      <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                        <ZoomIn className="w-4 h-4" />
                        <span>Kattalashtirish</span>
                      </div>
                    </div>
                  </div>

                  {/* Details and Specs */}
                  <div className="p-3.5 pt-1.5 flex flex-col gap-2 flex-1 justify-between">
                    <div className="space-y-1 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div>
                        <span className="font-bold text-slate-800">Raqam:</span> {lic.licenseNumber}
                      </div>
                      <div className="line-clamp-1">
                        <span className="font-bold text-slate-800">Organ:</span> {lic.issuer}
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Muddati:</span> {lic.validity}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-1 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedImage(lic.imageSrc)}
                        className="flex-1 py-1.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-600 text-[#0f2963] hover:text-white border border-blue-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Ko‘rish</span>
                      </button>
                      <a
                        href={lic.imageSrc}
                        download={`${lic.id}-license.png`}
                        className="py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                        title="Yuklab olish"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-3 sm:px-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
              Barcha hujjatlar O‘zbekiston Respublikasi qonunchiligiga muvofiq rasmiy ro‘yxatdan o‘tkazilgan.
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#0f2963] hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
            >
              Yopish
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Overlay for full screen image view (Optimized) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 p-3 sm:p-5 transform-gpu"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors z-10 cursor-pointer"
            title="Yopish"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative max-w-4xl max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Litsenziya to'liq rasm"
              className="max-h-[80vh] w-auto object-contain mx-auto rounded-lg"
            />
            <div className="p-2.5 text-center flex items-center justify-center gap-3 w-full">
              <a
                href={selectedImage}
                download="license-document.png"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0f2963] text-white text-xs font-bold hover:bg-blue-600 transition-colors shadow cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Yuklab olish</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-4 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition-colors cursor-pointer"
              >
                Yopish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
