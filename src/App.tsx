import { useState, useEffect } from 'react';
import { 
  Lock, 
  Unlock, 
  Flame, 
  AlertTriangle, 
  Sparkles, 
  Share2, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Check,
  Skull
} from 'lucide-react';

export function App() {
  const [revealed, setRevealed] = useState(false);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const [clickCount, setClickCount] = useState(2847);

  // Play browser-synthesized audio effects
  const playBoomSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      
      // Dramatic bass synth drop
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.6);
      
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.7);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.7);
    } catch {
      // Audio fallback
    }
  };

  const playClickTick = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio fallback
    }
  };

  const handleTrigger = () => {
    setIsCountingDown(true);
    playClickTick();
    setCountdown(3);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsCountingDown(false);
          setRevealed(true);
          setClickCount((c) => c + 1);
          playBoomSound();
          return 0;
        }
        playClickTick();
        return prev - 1;
      });
    }, 600);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setRevealed(false);
        setIsCountingDown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#030712] relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8 text-white select-none">
      {/* Dynamic Cyber Nebula Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[160px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Lines overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} 
      />

      {/* Top Floating Sound Toggle */}
      <header className="absolute top-4 sm:top-6 right-4 sm:right-6 z-30">
        <button
          type="button"
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 backdrop-blur-md transition-colors cursor-pointer"
          title="Ovozni yoqish / o'chirish"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Ovoz: Yoniq</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Ovoz: O'chiq</span>
            </>
          )}
        </button>
      </header>

      {/* COUNTDOWN FLASH OVERLAY */}
      {isCountingDown && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in">
          <div className="text-center space-y-4">
            <span className="text-xs sm:text-sm font-mono tracking-[0.3em] text-red-500 uppercase font-black animate-pulse">
              HAQIQAT OCHILMOQDA... TAYYORMISIZ?
            </span>
            <div className="text-8xl sm:text-9xl font-black font-space text-transparent bg-clip-text bg-gradient-to-b from-white via-red-200 to-red-600 scale-125 animate-bounce">
              {countdown}
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
              <Skull className="w-4 h-4 text-red-500 animate-spin" />
              <span>Orqaga yo'l yo'q!</span>
            </div>
          </div>
        </div>
      )}

      {/* STATE 1: MYSTERY BUTTON & TEMPTING HOOK */}
      {!revealed && !isCountingDown && (
        <div className="relative z-20 flex flex-col items-center justify-center max-w-2xl w-full text-center px-4 animate-float-slow">
          
          {/* Warning Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950/80 via-rose-900/40 to-red-950/80 border border-red-500/40 text-red-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-8 shadow-[0_0_25px_rgba(239,68,68,0.3)] backdrop-blur-md">
            <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
            <span>DIQQAT: BOSISH QAT'IYAN TAQIQLANADI!</span>
          </div>

          {/* THE HYPNOTIC BUTTON CONTAINER */}
          <div className="relative group my-2">
            {/* Multi-layered Animated Neon Glow Aura */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 via-amber-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-700 group-hover:scale-105 animate-pulse-glow" />
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 rounded-full blur-md opacity-90 group-hover:opacity-100 transition duration-300" />

            {/* Main Interactive Button */}
            <button
              type="button"
              onClick={handleTrigger}
              className="relative px-8 sm:px-14 py-5 sm:py-6 bg-gradient-to-b from-slate-900 via-[#0a0f1d] to-black rounded-full border-2 border-amber-400/80 shadow-[0_0_50px_rgba(245,158,11,0.4)] hover:shadow-[0_0_80px_rgba(239,68,68,0.7)] group-hover:border-white transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3.5 cursor-pointer overflow-hidden"
            >
              {/* Laser Light Sweep across button */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-laser pointer-events-none" />

              <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 group-hover:hidden transition-transform" />
              <Unlock className="w-6 h-6 sm:w-7 sm:h-7 text-red-400 hidden group-hover:inline transition-transform" />

              <span className="font-space font-black text-lg sm:text-2xl md:text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                SIRNI FOSH QILISH
              </span>

              <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-rose-500 group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Psychological Catchy Words under button */}
          <div className="mt-8 space-y-4 max-w-xl">
            <h2 className="font-space text-lg sm:text-2xl font-black text-slate-100 tracking-tight leading-snug drop-shadow-lg">
              «Psixologlar tasdiqlaydi: 99.4% odamlar ushbu tugmani bosishdan o‘zini to‘xtata olmaydi...»
            </h2>

            <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed italic">
              Ichkarida nima yashiringanini faqat eng jur’atli insonlargina ko‘ra oladi.
              Agar asablaringiz zaif bo‘lsa — darhol sahifani yoping!
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-mono text-amber-400/90 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Bugun {clickCount.toLocaleString()} kishi jur'at qilib bosdi</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </div>
          </div>
        </div>
      )}

      {/* STATE 2: REVEALED SURPRISE VIEW */}
      {revealed && (
        <div className="relative z-30 flex flex-col items-center justify-center w-full max-w-4xl mx-auto animate-shake">
          
          {/* Header punchline */}
          <div className="text-center mb-4 sm:mb-6 space-y-1 sm:space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <span>TABRIKLAYMIZ! 🎉 SIZ QIZIQUVCHANLIK QURBONISIZ!</span>
            </div>
            <h1 className="font-space text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-rose-400 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              HAQIQAT SHUNDAY BO'LADI! 🦍
            </h1>
          </div>

          {/* Full Large Image with Luxury Holographic Frame */}
          <div className="relative w-full max-w-3xl rounded-3xl p-1 sm:p-2 bg-gradient-to-tr from-red-600 via-amber-500 to-indigo-600 shadow-[0_0_80px_rgba(239,68,68,0.45)]">
            <div className="relative bg-slate-950 rounded-[22px] overflow-hidden flex items-center justify-center p-2 sm:p-3">
              <img
                src="/special-preview.jpg"
                alt="Maxfiy rasm"
                className="w-full max-h-[65vh] object-contain rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
            <button
              type="button"
              onClick={() => {
                setRevealed(false);
                setIsCountingDown(false);
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 shadow-lg hover:border-slate-500 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-sky-400" />
              <span>Yana bir bor sinash</span>
            </button>

            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Havola nusxalandi! Do'stingizga yuboring!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-white" />
                  <span>Do'stlarni chuv tushirish (Ulashish)</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Minimal Footer */}
      <footer className="absolute bottom-3 text-center text-[10px] sm:text-xs text-slate-600 font-mono tracking-wider">
        QIZIQUVCHANLIK VA HAZIL LOYIHASI © {new Date().getFullYear()}
      </footer>
    </main>
  );
}

export default App;
