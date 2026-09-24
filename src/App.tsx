import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Lock, 
  Unlock, 
  Flame, 
  AlertTriangle, 
  Share2, 
  RotateCcw, 
  Check,
  Skull,
  Radio
} from 'lucide-react';

export function App() {
  const [revealed, setRevealed] = useState(() => {
    const isSaved = localStorage.getItem('prank_active') === 'true';
    const elapsed = parseInt(localStorage.getItem('prank_elapsed') || '0', 10);
    return isSaved && elapsed < 60;
  });
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [copied, setCopied] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(() => {
    const saved = localStorage.getItem('prank_elapsed');
    return saved ? parseInt(saved, 10) : 0;
  });

  const audioCtxRef = useRef<AudioContext | null>(null);
  const loopIntervalRef = useRef<number | null>(null);

  // Play rich, piercing high-impact alarm scream effect
  const playIntenseScream = useCallback(() => {
    try {
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.9, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Distortion Curve to add organic human vocal texture / grit
      const n_samples = 44100;
      const curve = new Float32Array(n_samples);
      const deg = Math.PI / 180;
      for (let i = 0; i < n_samples; ++i) {
        const x = (i * 2) / n_samples - 1;
        curve[i] = ((3 + 30) * x * 20 * deg) / (Math.PI + 30 * Math.abs(x));
      }
      const distortion = ctx.createWaveShaper();
      distortion.curve = curve;
      distortion.oversample = '4x';

      // 1. High vocal screech oscillator 1 (650Hz sweeps frantically up to 1350Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(680, ctx.currentTime);
      osc1.frequency.linearRampToValueAtTime(1380, ctx.currentTime + 0.18);
      osc1.frequency.linearRampToValueAtTime(1050, ctx.currentTime + 0.6);
      osc1.frequency.exponentialRampToValueAtTime(450, ctx.currentTime + 1.8);

      // Vocal tremor vibrato
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(36, ctx.currentTime); // 36Hz rapid vocal cord flutter
      lfoGain.gain.setValueAtTime(140, ctx.currentTime);
      lfo.connect(osc1.frequency);

      // 2. High harmonic overtone (1500Hz - 2200Hz screaming resonance)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(1400, ctx.currentTime);
      osc2.frequency.linearRampToValueAtTime(2250, ctx.currentTime + 0.22);
      osc2.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 1.7);
      lfo.connect(osc2.frequency);

      // 3. Piercing Formant Bandpass Filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1850, ctx.currentTime);
      filter.Q.setValueAtTime(3.6, ctx.currentTime);

      // 4. Air Rush Noise Burst
      const bufferSize = Math.floor(ctx.sampleRate * 1.5);
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;

      const noiseFilter = ctx.createBiquadFilter();
      noiseFilter.type = 'highpass';
      noiseFilter.frequency.setValueAtTime(1100, ctx.currentTime);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.3, ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.6);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);

      // Volume envelopes
      gain1.gain.setValueAtTime(0.7, ctx.currentTime);
      gain1.gain.linearRampToValueAtTime(0.85, ctx.currentTime + 0.12);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.85);

      gain2.gain.setValueAtTime(0.5, ctx.currentTime);
      gain2.gain.linearRampToValueAtTime(0.65, ctx.currentTime + 0.15);
      gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.7);

      osc1.connect(gain1);
      osc2.connect(gain2);

      gain1.connect(distortion);
      gain2.connect(distortion);
      distortion.connect(filter);
      filter.connect(masterGain);

      lfo.start(ctx.currentTime);
      osc1.start(ctx.currentTime);
      osc2.start(ctx.currentTime);
      noiseSource.start(ctx.currentTime);

      lfo.stop(ctx.currentTime + 1.9);
      osc1.stop(ctx.currentTime + 1.9);
      osc2.stop(ctx.currentTime + 1.9);
      noiseSource.stop(ctx.currentTime + 1.9);
    } catch {
      // Audio fallback
    }
  }, []);

  const playClickTick = () => {
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

  // Start 1 minute continuous scream loop (repeats until 60 seconds total elapsed)
  const startOneMinuteLoop = useCallback(() => {
    playIntenseScream();

    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
    }

    loopIntervalRef.current = window.setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1;
        localStorage.setItem('prank_elapsed', String(next));
        localStorage.setItem('prank_active', 'true');

        // Play the intense sound every 2 seconds
        if (next % 2 === 0 && next < 60) {
          playIntenseScream();
        }

        // When 60 seconds (1 full minute) is reached:
        if (next >= 60) {
          if (loopIntervalRef.current) {
            clearInterval(loopIntervalRef.current);
          }
          localStorage.removeItem('prank_active');
          localStorage.removeItem('prank_elapsed');
          return 60;
        }

        return next;
      });
    }, 1000);
  }, [playIntenseScream]);

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
          localStorage.setItem('prank_active', 'true');
          startOneMinuteLoop();
          return 0;
        }
        playClickTick();
        return prev - 1;
      });
    }, 1000); // Aniq 3 soniya
  };

  // If user returns/refreshes page and 1 minute is not finished, resume on user interaction
  useEffect(() => {
    const isSavedActive = localStorage.getItem('prank_active') === 'true';
    const savedElapsed = parseInt(localStorage.getItem('prank_elapsed') || '0', 10);

    if (isSavedActive && savedElapsed < 60) {
      const handleUserInteraction = () => {
        startOneMinuteLoop();
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
      };
      window.addEventListener('click', handleUserInteraction);
      window.addEventListener('touchstart', handleUserInteraction);

      return () => {
        window.removeEventListener('click', handleUserInteraction);
        window.removeEventListener('touchstart', handleUserInteraction);
      };
    }
  }, [startOneMinuteLoop]);

  const handleReset = () => {
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
    }
    localStorage.removeItem('prank_active');
    localStorage.removeItem('prank_elapsed');
    setElapsedSeconds(0);
    setRevealed(false);
    setIsCountingDown(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (loopIntervalRef.current) {
        clearInterval(loopIntervalRef.current);
      }
    };
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
          </div>
        </div>
      )}

      {/* STATE 2: REVEALED SURPRISE VIEW */}
      {revealed && (
        <div className="relative z-30 flex flex-col items-center justify-center w-full max-w-4xl mx-auto animate-shake">
          
          {/* Header punchline */}
          <div className="text-center mb-4 sm:mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <span>TABRIKLAYMIZ! 🎉 SIZ QIZIQUVCHANLIK QURBONISIZ!</span>
            </div>

            <h1 className="font-space text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-rose-400 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              HAQIQAT SHUNDAY BO'LADI! 🦍
            </h1>

            {/* 1 Minute Loop Timer Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-[11px] sm:text-xs font-mono text-red-400 font-bold">
              <Radio className="w-3.5 h-3.5 animate-pulse text-red-500" />
              <span>
                {elapsedSeconds < 60 
                  ? `OVOZLI REJIM: ${60 - elapsedSeconds} soniya davom etadi...` 
                  : '1 DAQIQA YAKUNLANDI'}
              </span>
            </div>
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
              onClick={handleReset}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm border border-slate-700 shadow-lg hover:border-slate-500 transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-sky-400" />
              <span>Qayta boshlash</span>
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
    </main>
  );
}

export default App;
