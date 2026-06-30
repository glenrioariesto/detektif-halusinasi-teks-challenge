# Detektif Halusinasi Faktual KA: Melacak Kebohongan Teks (Teks)

**Detektif Halusinasi Faktual KA** adalah game investigasi interaktif yang menguji kemampuan berpikir kritis (literasi informasi) pemain terhadap konten teks buatan Kecerdasan Artifisial (KA / AI). Pemain ditantang untuk melacak dan mengidentifikasi kebohongan/halusinasi fakta sains, sejarah, biologi, logika, dan aritmatika dalam paragraf teks.

## 🚀 Fitur Permainan

1. **Investigasi Teks Faktual (Highlight the Hoax):**
   * Pemain disuguhkan dokumen ketikan dossier berisikan rangkuman teks peristiwa sains, biologi, matematika, atau potongan sejarah.
   * Teks dipecah menjadi segmen interaktif yang dapat disorot dan diklik.
   * Pemain harus mengidentifikasi dan mengklik satu kalimat/frasa yang memuat informasi menyesatkan (halusinasi fakta) yang dikeluarkan sistem AI.
   * Pilihan benar memicu highlight hijau dengan penjelasan kebenaran ilmiah, sedangkan pilihan salah memicu goyangan getar berwarna merah.

2. **Indeks Akurasi & Pangkat:**
   * Di akhir investigasi, pemain dievaluasi berdasarkan skor keberhasilan menyelesaikan 5 tingkatan investigasi teks.
   * Pemain dianugerahi pangkat kredibilitas (mulai dari *Piksel Kabur* hingga *Mata Dewa (Detektif Legendaris)*).

## 🛠️ Tech Stack

- **Framework**: React 19 (TypeScript)
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS v4
- **Ikon**: Lucide React
- **Audio**: Web Audio API Synthesizer (Tanpa file eksternal)

## 📁 Struktur Direktori Proyek

```text
detektif-halusinasi-teks-challenge/
├── assets/
│   └── logo-pusbuk.webp         # Logo Pusat Perbukuan Kemendikbudristek
├── src/
│   ├── components/
│   │   └── PortraitWarning.tsx  # Peringatan kunci orientasi lanskap mobile
│   ├── data/
│   │   └── questions.ts         # Data 5 tingkatan investigasi teks
│   ├── hooks/
│   │   └── useGameState.ts      # Logika state game (skor, klik kalimat)
│   ├── pages/
│   │   ├── splash/
│   │   │   └── SplashPage.tsx   # Halaman muka dossier misi penyelidikan
│   │   ├── arena/
│   │   │   └── ArenaPage.tsx    # Arena pengerjaan kasus (dokumen teks)
│   │   └── result/
│   │       └── ResultPage.tsx   # Laporan evaluasi hasil dan rekapitulasi temuan
│   ├── utils/
│   │   └── audio.ts             # Efek suara retro digital internal
│   ├── App.tsx                  # Switcher perutean halaman
│   ├── index.css                # Desain visual neon dark cyberpunk
│   ├── main.tsx                 # Mounting React root
│   └── types.ts                 # Definisi tipe data TypeScript
├── index.html                   # HTML Entry Point
├── package.json                 # Pengaturan script & dependensi
├── tsconfig.json                # Konfigurasi TypeScript
├── vite.config.ts               # Konfigurasi bundler Vite
└── README.md                    # Dokumentasi panduan proyek
```

## ⚙️ Cara Menjalankan Project

### Prerequisites
Pastikan **Node.js** terinstal di perangkat Anda.

### 1. Masuk ke Direktori Project
```bash
cd detektif-halusinasi-teks-challenge
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Server Dev Lokal
```bash
npm run dev
```
Setelah dijalankan, buka alamat server yang tertera di terminal (biasanya `http://localhost:3000`) pada browser pilihan Anda.

### 4. Build untuk Produksi
```bash
npm run build
```
Aset terkompilasi yang dioptimasi akan tersimpan di dalam folder `dist/`.
