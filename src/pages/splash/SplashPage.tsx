import React from 'react';
import { Eye, ShieldAlert, Sparkles, FileText, Play } from 'lucide-react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen bg-[#020502] bg-grid-matrix relative flex flex-col items-center justify-center p-4 md:p-6 text-emerald-250 scanlines select-none overflow-y-auto">
      {/* Ambient glowing radial backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="z-10 max-w-xl w-full flex flex-col items-center text-center p-2">
        {/* Pusbuk Logo Centered Flow */}
        <div className="flex items-center justify-center bg-[#050b05]/95 border border-emerald-950 px-3 py-1.5 rounded-2xl shadow-xl mb-4 shrink-0">
          <img 
            src={logoPusbuk} 
            alt="Logo Pusbuk" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Badge header */}
        <div className="flex items-center gap-2 px-3 py-0.5 bg-[#091509] border border-emerald-900/60 text-emerald-400 rounded-full text-[10px] font-mono mb-4 uppercase tracking-widest glow-emerald">
          <Sparkles className="w-3 h-3 animate-pulse" />
          <span>Game Investigasi Faktual</span>
        </div>

        {/* Big title */}
        <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight font-display mb-1 select-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-500">
          DETEKTIF HALUSINASI
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-[10px] md:text-xs font-mono text-emerald-500 mb-6 uppercase tracking-widest font-black">
          Kecerdasan Artifisial: Anomali & Hoaks
        </h2>

        {/* Dossier Card (Minimal Text for Mobile) */}
        <div className="w-full bg-[#050a05]/90 border border-emerald-900/50 backdrop-blur-md rounded-2xl p-4 md:p-6 text-left mb-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center gap-2 border-b border-emerald-950 pb-2.5 mb-3">
            <ShieldAlert className="w-4 h-4 text-emerald-450 shrink-0" />
            <h3 className="font-mono text-[10px] md:text-xs font-bold text-emerald-100 uppercase tracking-wider">
              BERKAS MISI: #HAL-102-TXT
            </h3>
          </div>

          <p className="text-emerald-200/80 text-xs leading-relaxed mb-3 font-medium">
            Kecerdasan Artifisial (KA) rentan terhadap halusinasi informasi. Tugas Anda adalah melacak dan memverifikasi kata/frasa bohong pada teks buatan KA.
          </p>

          <p className="text-emerald-100 text-xs leading-relaxed mb-4 font-bold">
            Pecahkan 5 kasus teks untuk menemukan hoaks sains, sejarah, biologi, logika, dan aritmatika:
          </p>

          {/* Features list - compact & hidden on extremely small portrait screens to save space */}
          <div className="hidden sm:grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-emerald-950/40">
            <div className="flex gap-2">
              <FileText className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold font-mono text-white uppercase">Sejarah & Sains</h4>
                <p className="text-[9px] text-emerald-500 leading-normal">Deteksi anakronisme era Waterloo, Majapahit, atau hoaks fisika pisang.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold font-mono text-white uppercase">Logika & Aritmatika</h4>
                <p className="text-[9px] text-emerald-500 leading-normal">Periksa keganjilan kumbang makan baja dan disfungsi matematika.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="group relative w-full sm:w-auto px-10 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Inner Glow Border */}
          <span className="absolute inset-px bg-[#020502] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
          
          {/* Label */}
          <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black text-emerald-400 font-mono transition-colors">
            <Play className="w-4 h-4 text-emerald-450 group-hover:text-black fill-none" />
            <span>Mulai Investigasi</span>
          </span>
        </button>

        <p className="text-[9px] text-emerald-600 font-mono mt-3">5 Tingkat Penyelidikan Tersedia</p>
      </div>
    </div>
  );
}
