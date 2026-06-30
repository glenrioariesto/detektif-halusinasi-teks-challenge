import React, { useState } from 'react';
import { Award, RotateCcw, Check, BookOpen, X, List } from 'lucide-react';
import { UserLevelAnswer } from '../../types';
import { CAMPAIGN_LEVELS } from '../../data/questions';

interface ResultPageProps {
  score: number;
  answers: UserLevelAnswer[];
  onRestart: () => void;
  getRank: (score: number) => { title: string; desc: string; color: string };
}

export function ResultPage({ score, answers, onRestart, getRank }: ResultPageProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const rank = getRank(score);
  const accuracy = Math.round((score / CAMPAIGN_LEVELS.length) * 100);

  return (
    <div className="h-screen w-screen bg-[#020502] text-emerald-250 flex flex-col items-center justify-center p-4 md:p-6 scanlines overflow-hidden relative">
      {/* Glow background circles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 max-w-2xl w-full flex flex-col items-center select-none animate-fadeIn">
        {/* Victory Icon Badge */}
        <div className="w-12 h-12 rounded-full bg-[#050b05] border-2 border-emerald-500 flex items-center justify-center mb-3 glow-emerald">
          <Award className="w-6 h-6 text-emerald-450" />
        </div>

        {/* Headings */}
        <h2 className="text-xl md:text-2xl font-extrabold font-display mb-1 text-center uppercase tracking-wide text-emerald-100">
          Evaluasi Laporan Investigasi
        </h2>
        <p className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest mb-6 font-bold">
          Misi #HAL-102-TXT Selesai Dievaluasi
        </p>

        {/* Score & Rank Dashboard Card */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 w-full mb-6">
          {/* Circular Score Gauge */}
          <div className="sm:col-span-5 bg-[#050a05]/90 border border-emerald-900/40 rounded-xl p-4 flex flex-col items-center justify-center text-center">
            <span className="text-[8px] font-mono font-bold text-emerald-500 uppercase tracking-widest mb-3">
              Indeks Akurasi
            </span>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-950"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-emerald-500"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black font-mono text-emerald-100">{accuracy}%</span>
                <span className="text-[7px] font-mono text-emerald-450 uppercase font-bold mt-0.5">
                  {score} / {CAMPAIGN_LEVELS.length} Benar
                </span>
              </div>
            </div>
          </div>

          {/* Rank Badge description */}
          <div className="sm:col-span-7 bg-[#050a05]/90 border border-emerald-900/40 rounded-xl p-4 flex flex-col justify-center relative overflow-hidden">
            <span className="text-[8px] font-mono font-bold text-emerald-500 uppercase tracking-widest mb-1.5">
              Pangkat Kredibilitas
            </span>
            
            <div className={`inline-flex self-start px-2 py-0.5 rounded text-[10px] font-mono font-bold mb-2 border ${rank.color}`}>
              {rank.title}
            </div>

            <p className="text-emerald-300/90 text-xs leading-relaxed mb-3 font-sans font-medium">
              {rank.desc}
            </p>
            
            <div className="flex items-center gap-3 text-[9px] font-mono text-emerald-500 font-bold">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                <span>Kasus Sukses: {score}</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-700"></div>
                <span>Total Kasus: {CAMPAIGN_LEVELS.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <button
            type="button"
            onClick={() => setIsDetailOpen(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#050a05] hover:bg-emerald-950/40 border border-emerald-750 text-emerald-400 font-mono text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
          >
            <List className="w-4 h-4" />
            <span>Lihat Detail Temuan</span>
          </button>

          <button
            type="button"
            onClick={onRestart}
            className="group relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="absolute inset-px bg-[#020502] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
            
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black text-emerald-400 font-mono transition-colors">
              <RotateCcw className="w-4 h-4 text-emerald-450 group-hover:text-black" />
              <span>Mulai Ulang Investigasi</span>
            </span>
          </button>
        </div>
      </div>

      {/* DETAIL TABLE MODAL */}
      {isDetailOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn">
          <div className="w-full max-w-2xl bg-[#050a05] border-2 border-emerald-900 rounded-2xl p-5 shadow-2xl relative font-mono flex flex-col max-h-[85vh] overflow-hidden text-emerald-250">
            <button
              type="button"
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-3 right-3 text-emerald-500 hover:text-emerald-350 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 border-b border-emerald-950 pb-3 mb-4 shrink-0">
              <BookOpen className="w-4 h-4 text-emerald-450" />
              <h3 className="font-display text-sm font-black text-emerald-100 uppercase tracking-wider">
                Rekapitulasi Temuan Halusinasi
              </h3>
            </div>

            {/* Table Scroll Area */}
            <div className="flex-1 overflow-y-auto pr-1">
              <table className="w-full text-left text-xs text-emerald-300">
                <thead>
                  <tr className="border-b border-emerald-950 text-emerald-500 pb-2 font-bold uppercase tracking-wider">
                    <th className="pb-2 w-12 text-center">Kasus</th>
                    <th className="pb-2">Topik/Kategori</th>
                    <th className="pb-2 text-center w-24">Percobaan</th>
                    <th className="pb-2 text-center w-24">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-955">
                  {CAMPAIGN_LEVELS.map((c) => {
                    const ans = answers.find(a => a.levelId === c.id);
                    return (
                      <tr key={c.id} className="hover:bg-emerald-950/20">
                        <td className="py-2.5 text-center text-emerald-500 font-bold">#0{c.id}</td>
                        <td className="py-2.5 font-sans">
                          <div className="font-bold text-emerald-100">{c.title}</div>
                          <div className="text-[9px] text-emerald-500 font-mono uppercase">{c.category}</div>
                        </td>
                        <td className="py-2.5 text-center text-emerald-250">
                          {ans ? `${ans.attemptsCount}x Klik` : '-'}
                        </td>
                        <td className="py-2.5 text-center">
                          <span className="inline-flex items-center gap-1 text-emerald-450 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded text-[10px] font-bold shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                            <Check className="w-3 h-3 text-emerald-450" /> Terpecahkan
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 pt-3 border-t border-emerald-950 text-center shrink-0">
              <button
                type="button"
                onClick={() => setIsDetailOpen(false)}
                className="px-6 py-2 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800 text-emerald-300 rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                Tutup Rincian
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
