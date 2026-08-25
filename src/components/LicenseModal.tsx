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
      {/* Modal Backdrop */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-slate-900/75 backdrop-blur-md animate-fade-in overflow-y-auto">
        
        {/* Modal Window Container */}
        <div
          className="relative w-full max-w-5xl bg-gradient-to-b from-[#f8faff] via-white to-[#f0f6ff] rounded-3xl shadow-2xl border border-white/90 my-auto overflow-hidden flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Blue Accent Gradient */}
          <div className="h-2 w-full bg-gradient-to-r from-[#0f2963] via-[#2563eb] to-[#0f2963]" />

          {/* Modal Header */}
          <div className="px-6 py-5 sm:px-8 sm:py-6 border-b border-blue-100 flex items-center justify-between bg-white/70 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0f2963] to-[#2563eb] text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-cinzel text-lg sm:text-2xl font-black text-[#0f2963] tracking-wide uppercase">
                    Rasmiy Litsenziya va Guvohnomalar
                  </h2>
                  <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-700 text-[10px] font-extrabold tracking-wider px-2.5 py-0.5 rounded-full border border-emerald-300">
                    <CheckCircle2 className="w-3 h-3" /> 100% Qonuniy
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                  "ZALATIYE LASTOCHKA" MCHJ ning davlat tomonidan tasdiqlangan barcha faoliyat hujjatlari
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-50 text-slate-600 hover:text-red-600 flex items-center justify-center transition-all duration-200 border border-slate-200"
              title="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body - 3 License Cards */}
          <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
            {/* Quick Badges Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-blue-50/80 border border-blue-200/70 rounded-2xl p-3 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Kompaniya STIR raqami</div>
                  <div className="text-xs sm:text-sm font-black text-[#0f2963]">308122009</div>
                </div>
              </div>
              <div className="bg-blue-50/80 border border-blue-200/70 rounded-2xl p-3 flex items-center gap-3">
                <Award className="w-5 h-5 text-blue-700 flex-shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Yuridik Maqomi</div>
                  <div className="text-xs sm:text-sm font-black text-[#0f2963]">Mas’uliyati Cheklangan Jamiyat</div>
                </div>
              </div>
              <div className="bg-emerald-50/80 border border-emerald-200/70 rounded-2xl p-3 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Litsenziya Holati</div>
                  <div className="text-xs sm:text-sm font-black text-emerald-700">Cheksiz / Faol</div>
                </div>
              </div>
            </div>

            {/* The 3 Main License Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
              {licensesData.map((lic, index) => (
                <div
                  key={lic.id}
                  className="group relative bg-white rounded-3xl border border-blue-100 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Badge */}
                  <div className="p-4 pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
                        {lic.category}
                      </span>
                      <span className="text-xs font-black text-[#0f2963]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-sm sm:text-base font-extrabold text-[#0f2963] leading-snug line-clamp-2 min-h-[44px]">
                      {lic.title}
                    </h3>
                  </div>

                  {/* Document Image Thumbnail Box with Zoom Trigger */}
                  <div className="px-4 py-2">
                    <div
                      onClick={() => setSelectedImage(lic.imageSrc)}
                      className="relative w-full h-56 bg-slate-50 rounded-2xl border-2 border-dashed border-blue-200 hover:border-blue-500 overflow-hidden cursor-pointer group/img flex items-center justify-center transition-all shadow-inner"
                    >
                      <img
                        src={lic.imageSrc}
                        alt={lic.title}
                        className="w-full h-full object-contain p-1 group-hover/img:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Zoom Overlay on Hover */}
                      <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs backdrop-blur-2xs">
                        <ZoomIn className="w-5 h-5" />
                        <span>Kattalashtirib ko‘rish</span>
                      </div>
                    </div>
                  </div>

                  {/* Details and Specs */}
                  <div className="p-4 pt-2 flex flex-col gap-2 flex-1 justify-between">
                    <div className="space-y-1.5 text-[11px] text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                      <div>
                        <span className="font-bold text-slate-800">Raqam:</span> {lic.licenseNumber}
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Organ:</span> {lic.issuer}
                      </div>
                      <div>
                        <span className="font-bold text-slate-800">Muddati:</span> {lic.validity}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedImage(lic.imageSrc)}
                        className="flex-1 py-2 px-3 rounded-xl bg-blue-50 hover:bg-blue-600 text-[#0f2963] hover:text-white border border-blue-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Ko‘rish</span>
                      </button>
                      <a
                        href={lic.imageSrc}
                        download={`${lic.id}-license.png`}
                        className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs flex items-center justify-center transition-all"
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
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="text-xs text-slate-500 font-medium">
              Barcha hujjatlar O‘zbekiston Respublikasi qonunchiligiga muvofiq rasmiy ro‘yxatdan o‘tkazilgan.
            </div>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2 rounded-full bg-[#0f2963] hover:bg-blue-700 text-white font-bold text-xs transition-all shadow-md"
            >
              Tushunarli / Yopish
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Overlay for full screen image view */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4 animate-fade-in backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all z-10"
            title="Yopish"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Litsenziya to'liq rasm"
              className="max-h-[85vh] w-auto object-contain mx-auto rounded-lg"
            />
            <div className="p-3 text-center flex items-center justify-center gap-4">
              <a
                href={selectedImage}
                download="license-document.png"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0f2963] text-white text-xs font-bold hover:bg-blue-600 transition-all shadow"
              >
                <Download className="w-4 h-4" />
                <span>Asl nusxani yuklab olish</span>
              </a>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2 rounded-full bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition-all"
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
