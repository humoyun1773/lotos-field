import { useState, useEffect, type FC } from 'react';
import { 
  X, 
  ShieldCheck, 
  Download, 
  ZoomIn, 
  CheckCircle2, 
  BookOpen, 
  CreditCard, 
  Copy, 
  Check, 
  Landmark
} from 'lucide-react';

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

const topLicensesData: LicenseItem[] = [
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
  },
  {
    id: 'mechanic',
    title: 'Kasbiy Malaka Sertifikati (Avto-chilangar)',
    category: 'Texnik Xizmat & Servis',
    licenseNumber: '№ 231-023244',
    issuer: 'Kambag‘allikni qisqartirish va bandlik vazirligi',
    tin: '308122009',
    validity: '04.12.2025 yildan — Doimiy (Diplom darajasida)',
    imageSrc: '/licenses/mechanic-certificate.png',
    description: 'Avtomobillarni ta’mirlovchi chilangar (Car repair mechanic) kasbi bo‘yicha davlat namunasidagi rasmiy kasbiy malaka sertifikati.'
  }
];

export const bankRequisites = {
  accountNumber: '2020 8000 6053 3284 8001',
  rawAccount: '20208000605332848001',
  mfo: '00341',
  tin: '308 122 009',
  rawTin: '308122009',
  bankName: 'AT "Agrobank" Uzun filiali',
  bankNameRu: 'АТ "Агробанк" Узунский филиал',
  companyName: '"ZALATIYE LASTOCHKA" MCHJ'
};

interface LicenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LicenseModal: FC<LicenseModalProps> = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

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
      {/* High Performance Modal Backdrop */}
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
                    Rasmiy Litsenziyalar & Rekvizitlar
                  </h2>
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> 100% Qonuniy
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5 line-clamp-1 sm:line-clamp-none">
                  "ZALATIYE LASTOCHKA" MCHJ ning rasmiy bank rekvizitlari va barcha davlat litsenziyalari
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

          {/* Modal Body */}
          <div className="p-3 sm:p-5 md:p-6 overflow-y-auto flex-1 flex flex-col gap-4 sm:gap-5">

            {/* ── LUXURY CORPORATE BANK REQUISITES CARD (Fully expanded & flex-shrink-0) ── */}
            <div className="flex-shrink-0 w-full rounded-2xl sm:rounded-3xl p-4 sm:p-5 bg-gradient-to-r from-[#0a1945] via-[#0f2963] to-[#1e3a8a] text-white shadow-xl border-2 border-blue-400/40 relative">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/20 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center flex-shrink-0 shadow-inner">
                    <Landmark className="w-6 h-6 text-sky-300" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase bg-sky-400/20 text-sky-200 border border-sky-300/30 px-2.5 py-0.5 rounded-full">
                        KOMPANIYA BANK REKVIZITLARI
                      </span>
                      <span className="text-[11px] text-emerald-400 font-extrabold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 100% Rasmiy
                      </span>
                    </div>
                    <h3 className="font-cinzel text-base sm:text-lg font-black text-white uppercase mt-0.5 tracking-wide">
                      {bankRequisites.companyName}
                    </h3>
                  </div>
                </div>

                <div className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/20 self-start sm:self-auto flex items-center gap-2.5">
                  <CreditCard className="w-5 h-5 text-sky-300 flex-shrink-0" />
                  <div>
                    <div className="text-[9px] uppercase font-bold text-sky-200">Xizmat ko‘rsatuvchi Bank</div>
                    <div className="text-xs sm:text-sm font-black text-white">{bankRequisites.bankName}</div>
                  </div>
                </div>
              </div>

              {/* 3 Main Data Boxes (Hisob raqam, MFO, STIR) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3.5">
                
                {/* 1. Hisob raqami (р/с) */}
                <div className="bg-white/10 p-3.5 rounded-2xl border border-white/20 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] uppercase font-extrabold text-sky-200 tracking-wider">
                      Hisob Raqam (Р/С)
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankRequisites.rawAccount, 'account')}
                      className="py-1 px-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all cursor-pointer flex items-center gap-1 text-[11px] font-black shadow-sm"
                      title="Hisob raqamni nusxalash"
                    >
                      {copiedKey === 'account' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-slate-950" />
                          <span>Nusxalandi!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Nusxalash</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="font-mono text-sm sm:text-base md:text-lg font-black text-white tracking-wider bg-black/20 p-2 rounded-xl border border-white/10 text-center sm:text-left select-all">
                    {bankRequisites.accountNumber}
                  </div>
                </div>

                {/* 2. MFO */}
                <div className="bg-white/10 p-3.5 rounded-2xl border border-white/20 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] uppercase font-extrabold text-sky-200 tracking-wider">
                      Bank MFO Kodi
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankRequisites.mfo, 'mfo')}
                      className="py-1 px-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all cursor-pointer flex items-center gap-1 text-[11px] font-black shadow-sm"
                      title="MFO kodni nusxalash"
                    >
                      {copiedKey === 'mfo' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-slate-950" />
                          <span>Nusxalandi!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Nusxalash</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="font-mono text-sm sm:text-base md:text-lg font-black text-white tracking-wider bg-black/20 p-2 rounded-xl border border-white/10 text-center sm:text-left select-all">
                    {bankRequisites.mfo}
                  </div>
                </div>

                {/* 3. STIR (ИНН) */}
                <div className="bg-white/10 p-3.5 rounded-2xl border border-white/20 flex flex-col justify-between gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] uppercase font-extrabold text-sky-200 tracking-wider">
                      STIR (СТИР / ИНН)
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankRequisites.rawTin, 'tin')}
                      className="py-1 px-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all cursor-pointer flex items-center gap-1 text-[11px] font-black shadow-sm"
                      title="STIR raqamini nusxalash"
                    >
                      {copiedKey === 'tin' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-slate-950" />
                          <span>Nusxalandi!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Nusxalash</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="font-mono text-sm sm:text-base md:text-lg font-black text-white tracking-wider bg-black/20 p-2 rounded-xl border border-white/10 text-center sm:text-left select-all">
                    {bankRequisites.tin}
                  </div>
                </div>

              </div>

              {/* Bottom One-Click "All Requisites" Copy */}
              <div className="mt-3.5 pt-3 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-sky-200">
                <div className="text-[11px] text-center sm:text-left text-blue-100 font-medium">
                  To‘lovlar va shartnomalar uchun rasmiy hisob ma’lumotlari.
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const allText = `Tashkilot: ${bankRequisites.companyName}\nHisob raqam: ${bankRequisites.rawAccount}\nMFO: ${bankRequisites.mfo}\nSTIR: ${bankRequisites.rawTin}\nBank: ${bankRequisites.bankName}`;
                    handleCopy(allText, 'all');
                  }}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  {copiedKey === 'all' ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Barcha Rekvizitlar Nusxalandi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-950" />
                      <span>Barcha rekvizitlarni to‘liq nusxalash</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-black tracking-wider uppercase text-[#0f2963]">
                Davlat Litsenziya va Sertifikatlari (5 ta Hujjat)
              </span>
              <span className="text-[11px] text-slate-500 font-semibold">
                Barcha hujjatlar 100% faol
              </span>
            </div>

            {/* SECTION 1: Top 4 Main License Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
              {topLicensesData.map((lic, index) => (
                <div
                  key={lic.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Badge */}
                  <div className="p-3 pb-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full border border-blue-100">
                        {lic.category}
                      </span>
                      <span className="text-[11px] font-black text-slate-400">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-cinzel text-xs sm:text-sm font-extrabold text-[#0f2963] leading-snug line-clamp-2 min-h-[36px]">
                      {lic.title}
                    </h3>
                  </div>

                  {/* Document Image Thumbnail Box with Zoom Trigger */}
                  <div className="px-3 py-1">
                    <div
                      onClick={() => setSelectedImage(lic.imageSrc)}
                      className="relative w-full h-44 sm:h-48 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-500 overflow-hidden cursor-pointer group/img flex items-center justify-center transition-colors"
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
                  <div className="p-3 pt-1 flex flex-col gap-1.5 flex-1 justify-between">
                    <div className="space-y-0.5 text-[10px] sm:text-[11px] text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100">
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
                    <div className="pt-1 flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectedImage(lic.imageSrc)}
                        className="flex-1 py-1.5 px-2 rounded-xl bg-blue-50 hover:bg-blue-600 text-[#0f2963] hover:text-white border border-blue-200 font-bold text-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Ko‘rish</span>
                      </button>
                      <a
                        href={lic.imageSrc}
                        download={`${lic.id}-document.png`}
                        className="py-1.5 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                        title="Yuklab olish"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SECTION 2: Full-Width Featured Card for Education Tasdiqnoma (2 images side-by-side) */}
            <div className="w-full bg-gradient-to-r from-blue-50/90 via-white to-blue-50/90 rounded-2xl sm:rounded-3xl border-2 border-blue-200/90 shadow-sm p-4 sm:p-5 flex flex-col gap-3.5">
              {/* Header of the Featured Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded-full border border-blue-200">
                        Ta’lim & IT Yo‘nalishlari
                      </span>
                      <span className="text-xs font-black text-blue-700">
                        05 • 2 BETLI HUJJAT
                      </span>
                    </div>
                    <h3 className="font-cinzel text-sm sm:text-base font-black text-[#0f2963] uppercase mt-0.5">
                      Nodavlat Ta’lim Faoliyati Tasdiqnomasi (Xabarnoma)
                    </h3>
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 bg-white/80 px-3 py-1.5 rounded-xl border border-blue-100 flex flex-wrap gap-x-4 gap-y-1">
                  <span><strong className="text-slate-800">Raqam:</strong> № 1765022 (X-174848141303)</span>
                  <span><strong className="text-slate-800">Organ:</strong> Maktabgacha va maktab ta’limi vazirligi</span>
                  <span><strong className="text-emerald-700">Holat:</strong> Faol (07.06.2026)</span>
                </div>
              </div>

              {/* 2 Images Side-by-Side Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Page 1 (Front page) */}
                <div className="bg-white rounded-2xl border border-blue-100 p-3 flex flex-col justify-between shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-600">1-BET: Asosiy Xabarnoma Tasdiqnomasi</span>
                    <span className="text-[10px] font-extrabold text-blue-600">№ 1765022</span>
                  </div>

                  <div
                    onClick={() => setSelectedImage('/licenses/education-tasdiqnoma-1.png')}
                    className="relative w-full h-52 sm:h-60 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-500 overflow-hidden cursor-pointer group/img flex items-center justify-center transition-colors"
                  >
                    <img
                      src="/licenses/education-tasdiqnoma-1.png"
                      alt="Ta'lim tasdiqnomasi 1-bet"
                      className="w-full h-full object-contain p-1"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                      <ZoomIn className="w-4 h-4" />
                      <span>1-betni kattalashtirish</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedImage('/licenses/education-tasdiqnoma-1.png')}
                      className="flex-1 py-1.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-600 text-[#0f2963] hover:text-white border border-blue-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Ko‘rish</span>
                    </button>
                    <a
                      href="/licenses/education-tasdiqnoma-1.png"
                      download="tasdiqnoma-1-bet.png"
                      className="py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                      title="Yuklab olish"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Page 2 (Back page - Subjects and Courses) */}
                <div className="bg-white rounded-2xl border border-blue-100 p-3 flex flex-col justify-between shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-600">2-BET: Web Dasturlash & Chet Tillari Yo'nalishlari</span>
                    <span className="text-[10px] font-extrabold text-blue-600">№ 1765022</span>
                  </div>

                  <div
                    onClick={() => setSelectedImage('/licenses/education-tasdiqnoma-2.png')}
                    className="relative w-full h-52 sm:h-60 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-500 overflow-hidden cursor-pointer group/img flex items-center justify-center transition-colors"
                  >
                    <img
                      src="/licenses/education-tasdiqnoma-2.png"
                      alt="Ta'lim tasdiqnomasi 2-bet"
                      className="w-full h-full object-contain p-1"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-bold text-xs">
                      <ZoomIn className="w-4 h-4" />
                      <span>2-betni kattalashtirish</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedImage('/licenses/education-tasdiqnoma-2.png')}
                      className="flex-1 py-1.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-600 text-[#0f2963] hover:text-white border border-blue-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Ko‘rish</span>
                    </button>
                    <a
                      href="/licenses/education-tasdiqnoma-2.png"
                      download="tasdiqnoma-2-bet.png"
                      className="py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                      title="Yuklab olish"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom course tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] text-slate-600">
                <span className="font-bold text-blue-900">Tasdiqlangan yo‘nalishlar:</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Web dasturlash</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Ingliz tili</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Koreys tili</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Xitoy tili</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Yapon tili</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Nemis tili</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Rus tili</span>
                <span className="bg-white border border-blue-200 px-2 py-0.5 rounded-md font-semibold text-blue-800">Turk tili</span>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-3 sm:px-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
            <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
              Barcha bank hisoblari va litsenziyalar O‘zbekiston Respublikasi qonunchiligiga muvofiq rasmiy ro‘yxatdan o‘tkazilgan.
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

      {/* Lightbox Zoom Overlay for full screen image view */}
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
