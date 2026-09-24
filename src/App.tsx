import { useState, useEffect } from 'react';
import { Sparkles, Eye, X, ArrowLeft } from 'lucide-react';

export function App() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowImage(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-[#0b1120] to-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 text-white relative overflow-hidden select-none">
      {/* Subtle ambient background glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -top-20 -left-20" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -bottom-20 -right-20" />

      {!showImage ? (
        /* Center section: Button + Intriguing quote */
        <div className="flex flex-col items-center justify-center max-w-xl text-center z-10 animate-fade-in">
          {/* Glowing Animated Button Container */}
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-md opacity-75 group-hover:opacity-100 group-hover:blur-lg transition duration-500 group-hover:duration-200 animate-pulse" />
            
            <button
              type="button"
              onClick={() => setShowImage(true)}
              className="relative flex items-center justify-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 active:scale-95 text-white font-extrabold text-base sm:text-xl rounded-full shadow-2xl transition-all duration-300 border border-white/20 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="tracking-wider uppercase drop-shadow">BU YERGA BOSING</span>
              <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Psychological Catchy / Tempting Quote */}
          <div className="space-y-3 px-4">
            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-200 italic leading-relaxed drop-shadow">
              «Inson doimo taqiqlangan va nomaʼlum sirlarga intiladi... 
              Ushbu tugma ortida nima yashiringanini ko‘rishga yuragingiz yetadimi?»
            </p>
            <p className="text-xs sm:text-sm font-semibold tracking-widest text-indigo-400 uppercase">
              — Qiziquvchanlik ustun kelsa, bir martagina bosing! —
            </p>
          </div>
        </div>
      ) : (
        /* Full Big Image Reveal View */
        <div className="flex flex-col items-center justify-center w-full max-w-5xl z-20 animate-fade-in">
          {/* Top Actions Bar */}
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <button
              type="button"
              onClick={() => setShowImage(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold backdrop-blur transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Orqaga qaytish</span>
            </button>

            <button
              type="button"
              onClick={() => setShowImage(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              title="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Large Image Container */}
          <div className="relative w-full flex items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-black/60 shadow-[0_0_60px_rgba(0,0,0,0.8)] backdrop-blur-md p-2 sm:p-4">
            <img
              src="/special-preview.jpg"
              alt="Kutilmagan rasm"
              className="w-full max-h-[82vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
