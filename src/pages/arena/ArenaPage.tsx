import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Search, ArrowRight, FileText, HelpCircle, X } from 'lucide-react';
import { Level, MissClick } from '../../types';

interface ArenaPageProps {
  currentLevelIndex: number;
  activeLevel: Level;
  totalLevels: number;
  showFeedback: boolean;
  score: number;
  attempts: number;
  foundHotspot: boolean;
  selectedSegmentIndex: number | null;
  missClicks: MissClick[];
  onImageClick: (x: number, y: number) => void;
  onSegmentClick: (index: number) => void;
  onAdvance: () => void;
  onBack: () => void;
}

export function ArenaPage({
  currentLevelIndex,
  activeLevel,
  totalLevels,
  showFeedback,
  score,
  attempts,
  selectedSegmentIndex,
  onSegmentClick,
  onAdvance,
  onBack
}: ArenaPageProps) {
  const [isClueOpen, setIsClueOpen] = useState(false);
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  
  const progressPercentage = (currentLevelIndex / totalLevels) * 100;

  return (
    <div className="h-screen w-screen bg-[#020502] text-emerald-250 flex flex-col font-sans overflow-hidden relative scanlines select-none">
      {/* Navigation & Status Header */}
      <header className="border-b border-emerald-950 bg-[#050b05]/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between z-10 shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-[10px] sm:text-xs font-mono font-bold text-emerald-500 hover:text-emerald-350 transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-emerald-500" />
          <span>Keluar</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <FileText className="w-3 h-3 text-emerald-450" />
            Kasus {currentLevelIndex + 1} / {totalLevels}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[10px] sm:text-xs font-mono text-emerald-500">Skor:</span>
          <span className="font-mono text-xs sm:text-sm font-black text-emerald-455 bg-emerald-950/40 border border-emerald-900/60 px-1.5 py-0.5 rounded shadow-[0_0_10px_rgba(16,185,129,0.15)]">
            {score}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-[#0a120a] relative z-10 shrink-0">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-center p-3 sm:p-6 min-h-0 relative">
        
        {/* Terminal Console Card */}
        <div className="w-full max-w-xl bg-[#050a05]/90 border border-emerald-900/50 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-2xl relative flex flex-col justify-between max-h-[85vh] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500/20"></div>
          
          {/* Document Header */}
          <div className="text-[9px] sm:text-[10px] text-emerald-600 border-b border-emerald-950 pb-2 mb-3 uppercase tracking-wider flex items-center justify-between font-mono font-bold shrink-0">
            <span>Dossier #DOC-{activeLevel.id}</span>
            <span className="px-1.5 py-0.5 bg-emerald-950/40 border border-emerald-900/40 text-emerald-450 rounded text-[8px] sm:text-[9px]">{activeLevel.category}</span>
          </div>

          {/* Title */}
          <h2 className="text-sm sm:text-base font-bold font-display text-emerald-100 uppercase mb-3 tracking-wide shrink-0">
            {activeLevel.title}
          </h2>

          {/* Gameplay Text Panel (Touch Friendly & Responsive) */}
          <div className="flex-1 overflow-y-auto mb-4 pr-1 scrollbar-thin">
            <p className="text-emerald-105 text-justify text-xs sm:text-sm leading-7 sm:leading-8 font-sans">
              {activeLevel.textSegments?.map((seg, idx) => {
                const isSelected = selectedSegmentIndex === idx;
                const isCorrectSeg = idx === activeLevel.correctSegmentIndex;

                let bgClass = "border-emerald-950 text-emerald-300 hover:border-emerald-500 hover:text-emerald-100";
                
                if (showFeedback && isCorrectSeg) {
                  bgClass = "bg-emerald-950/40 border-emerald-400 text-emerald-400 font-bold border-solid glow-emerald";
                } else if (isSelected) {
                  if (isCorrectSeg) {
                    bgClass = "bg-emerald-950/40 border-emerald-400 text-emerald-400 font-bold border-solid glow-emerald";
                  } else {
                    bgClass = "bg-rose-950/40 border-rose-500 text-rose-450 font-bold border-solid animate-pulse glow-rose";
                  }
                }

                return (
                  <button
                    type="button"
                    key={seg}
                    onClick={() => !showFeedback && onSegmentClick(idx)}
                    className={`inline cursor-pointer border-b border-dashed px-1 py-1 rounded transition-all duration-205 text-left my-0.5 ${bgClass}`}
                    style={{ pointerEvents: showFeedback ? 'none' : 'auto' }}
                    disabled={showFeedback}
                  >
                    {seg}
                  </button>
                );
              })}
            </p>
          </div>
          
          {/* Action Bar (Footer) */}
          <div className="flex items-center justify-between border-t border-emerald-950 pt-3 text-[10px] sm:text-xs font-mono select-none shrink-0">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsClueOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-[#0a120a] hover:bg-emerald-950/40 border border-emerald-900/50 text-emerald-400 hover:text-emerald-300 rounded-lg transition-colors cursor-pointer text-[9px] sm:text-xs"
              >
                <Search className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Petunjuk</span>
              </button>
              
              <button
                type="button"
                onClick={() => setIsDossierOpen(true)}
                className="flex items-center gap-1 px-2.5 py-1.5 bg-[#0a120a] hover:bg-emerald-950/40 border border-emerald-900/50 text-emerald-400 hover:text-emerald-300 rounded-lg transition-colors cursor-pointer text-[9px] sm:text-xs"
              >
                <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Misi</span>
              </button>
            </div>

            {attempts > 0 && !showFeedback && (
              <div className="flex items-center gap-1 text-rose-500 text-[9px] sm:text-[10px] font-bold uppercase">
                <span>Gagal: {attempts}x</span>
              </div>
            )}
          </div>
        </div>

      </main>

      {/* CLUE MODAL */}
      {isClueOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-[#050b05] border-2 border-emerald-900 rounded-2xl p-4 md:p-5 shadow-2xl relative font-mono text-emerald-250">
            <button
              type="button"
              onClick={() => setIsClueOpen(false)}
              className="absolute top-3 right-3 text-emerald-500 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-xs md:text-sm font-black text-emerald-100 uppercase tracking-widest border-b border-emerald-950 pb-2 mb-3">
              Petunjuk Misi
            </h3>
            <p className="text-[11px] md:text-xs leading-relaxed text-emerald-350 mb-4 font-sans font-medium">
              {activeLevel.clue}
            </p>
            <button
              type="button"
              onClick={() => setIsClueOpen(false)}
              className="w-full py-2 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-350 rounded-lg text-[10px] sm:text-xs font-bold transition-colors cursor-pointer"
            >
              Kembali ke Dokumen
            </button>
          </div>
        </div>
      )}

      {/* DOSSIER/MISSION DETAILS MODAL */}
      {isDossierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-[#050b05] border-2 border-emerald-900 rounded-2xl p-4 md:p-5 shadow-2xl relative font-mono text-emerald-250">
            <button
              type="button"
              onClick={() => setIsDossierOpen(false)}
              className="absolute top-3 right-3 text-emerald-500 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-xs md:text-sm font-black text-emerald-100 uppercase tracking-widest border-b border-emerald-950 pb-2 mb-3">
              Detail Penyelidikan
            </h3>
            <p className="text-[11px] md:text-xs leading-relaxed text-emerald-350 mb-4 font-sans font-medium">
              {activeLevel.description}
            </p>
            <button
              type="button"
              onClick={() => setIsDossierOpen(false)}
              className="w-full py-2 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-350 rounded-lg text-[10px] sm:text-xs font-bold transition-colors cursor-pointer"
            >
              Tutup Berkas
            </button>
          </div>
        </div>
      )}

      {/* FEEDBACK SUCCESS OVERLAY MODAL */}
      {showFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-[#050a05] border-2 border-emerald-500 rounded-2xl p-5 md:p-6 shadow-[0_0_30px_rgba(16,185,129,0.3)] text-emerald-250 relative font-mono">
            {/* Header */}
            <div className="flex items-center gap-2 border-b border-emerald-900/60 pb-3 mb-4 justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-450 animate-pulse" />
              <span className="font-display text-xs sm:text-sm font-black text-emerald-400 uppercase tracking-widest">
                HALUSINASI TERDETEKSI!
              </span>
            </div>

            {/* Analysis Content */}
            <div className="text-left mb-5">
              <p className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-1">
                Laporan Analisis Faktual:
              </p>
              <p className="text-[11px] sm:text-xs text-emerald-300 leading-relaxed font-sans text-justify font-medium">
                {activeLevel.explanation}
              </p>
            </div>

            {/* Action Button */}
            <button
              type="button"
              onClick={onAdvance}
              className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-black font-extrabold rounded-xl text-[10px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-lg hover:shadow-emerald-500/20"
            >
              <span>{currentLevelIndex === totalLevels - 1 ? 'Lihat Laporan Akhir' : 'Lanjut ke Kasus Berikutnya'}</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
