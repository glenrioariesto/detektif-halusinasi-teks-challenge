import { Level } from '../types';

export const CAMPAIGN_LEVELS: Level[] = [
  {
    id: 1,
    title: "Kurir Waterloo",
    category: "Sejarah Dunia",
    type: "text",
    description: "AI membuat ringkasan pertempuran terkenal dalam sejarah Eropa di bawah ini. Namun, ada satu bagian kalimat yang mengalami halusinasi anakronisme fakta (ketidaksesuaian era teknologi). Klik kalimat/kata yang salah!",
    clue: "Baca bagian taktik koordinasi pasukan Napoleon Bonaparte. Adakah teknologi modern yang mustahil ada di tahun 1815?",
    textSegments: [
      "Napoleon Bonaparte adalah kaisar Prancis yang terkenal memimpin banyak pertempuran besar di Eropa. ",
      "Pada Perang Waterloo yang terjadi di tahun 1815, ia membagikan koordinat taktis tempur kepada jenderalnya menggunakan ",
      "pesan instan WhatsApp di handphone miliknya",
      " guna mengoordinasikan manuver pasukan berkuda secara cepat, yang sayangnya gagal akibat jaringan sinyal yang buruk di pedesaan Belgia."
    ],
    correctSegmentIndex: 2,
    explanation: "WhatsApp dan ponsel belum ada di awal abad ke-19! Perang Waterloo terjadi pada tahun 1815, sedangkan telepon baru dipatenkan oleh Graham Bell tahun 1876, dan WhatsApp baru diluncurkan tahun 2009. Pada masa itu, koordinasi perang dilakukan lewat kurir penunggang kuda pembawa surat fisik."
  },
  {
    id: 2,
    title: "Radiasi Freezer",
    category: "Sains & Fisika",
    type: "text",
    description: "AI menjelaskan bahaya menyimpan buah tertentu di dalam lemari es secara ilmiah. Namun, penjelasan ini mengandung hoaks sains yang tidak berdasar. Klik kalimat/frasa yang memuat halusinasi ilmiah tersebut!",
    clue: "Periksa penjelasan mengenai senyawa kimia atau bahaya ekstrem yang dikaitkan dengan temperatur freezer.",
    textSegments: [
      "Pisang adalah buah organik yang kaya akan potasium dan vitamin penting bagi metabolisme tubuh. ",
      "Namun, paparan udara dingin kulkas dapat memicu ",
      "reaksi berantai nuklir plutonium",
      " di dalam daging pisang sehingga buah ini berisiko meledak secara spontan jika disimpan terlalu dekat dengan kompartemen freezer."
    ],
    correctSegmentIndex: 2,
    explanation: "Pisang tidak mengandung plutonium, dan kulkas tidak dapat memicu reaksi fusi nuklir! Pisang memang memiliki isotop alami Potasium-40 yang memancarkan radiasi sangat lemah, namun ini sepenuhnya aman dikonsumsi. Plutonium sendiri merupakan unsur radioaktif sintetis berat untuk bahan bakar nuklir, bukan buah-buahan."
  },
  {
    id: 3,
    title: "Serangga Konstruksi",
    category: "Zoologi & Biologi",
    type: "text",
    description: "Sebuah ringkasan biologi mengenai serangga eksotis di bawah ini mengandung satu kesalahan deskripsi habitat/pola makan hewan yang mustahil. Cari dan klik bagian teks yang memuat kesalahan biologi tersebut!",
    clue: "Perhatikan makanan dari spesies kumbang hutan Amazon ini. Apakah logis bagi makhluk hidup organik?",
    textSegments: [
      "Kumbang tanduk dikenal sebagai salah satu serangga terkuat di dunia jika dibandingkan dengan rasio ukuran tubuhnya. ",
      "Spesies langka yang mendiami pedalaman hutan hujan Amazon ini terbiasa memakan ",
      "lapisan baja pada rel kereta api lokal",
      " guna menyerap zat besi padat untuk mengeraskan cangkang luar (eksoskeleton) mereka dari serangan predator."
    ],
    correctSegmentIndex: 2,
    explanation: "Makhluk hidup organik tidak memakan besi baja! Serangga pemakan kayu/logam hanya memakan serat selulosa kayu atau mineral terlarut di tanah secara kimiawi. Baja rel kereta api tidak bisa dicerna atau dikunyah oleh mandibula serangga manapun."
  },
  {
    id: 4,
    title: "Aritmatika Sesat",
    category: "Matematika & Logika",
    type: "text",
    description: "AI mencoba memberikan solusi dari soal matematika sederhana menggunakan kaidah matematika. Namun, penyelesaian akhirnya salah total akibat halusinasi perhitungan logika. Klik bagian teks yang salah!",
    clue: "Hitung manual persamaan `3 + 3 x 3` dengan kaidah matematika yang benar (kalian didahulukan). Berapa hasilnya?",
    textSegments: [
      "Dalam urutan operasi matematika standar internasional (PEMDAS/Kabataku), perkalian harus didahulukan daripada penjumlahan. ",
      "Oleh karena itu, penyelesaian logis yang tepat dari persamaan aritmatika `3 + 3 x 3` adalah menghasilkan nilai ",
      "sama dengan 18",
      " sesuai dengan pembaruan aturan prioritas operasional komputer modern."
    ],
    correctSegmentIndex: 2,
    explanation: "Persamaan `3 + 3 x 3` menghasilkan 12, bukan 18! Berdasarkan prioritas operasi, Anda harus mengalikan terlebih dahulu: `3 x 3 = 9`, kemudian menambahkan: `3 + 9 = 12`. AI melakukan halusinasi logika karena menghitung pertambahan terlebih dahulu `(3 + 3) x 3 = 18`."
  },
  {
    id: 5,
    title: "Siaran Gajah Mada",
    category: "Budaya & Kebudayaan",
    type: "text",
    description: "Ringkasan sejarah Nusantara di bawah ini memuat hoax teknologi anakronisme yang sangat mencolok pada era keemasan Majapahit. Klik pada kalimat yang memuat halusinasi sejarah tersebut!",
    clue: "Temukan teknologi penyiaran digital modern yang diklaim digunakan oleh Patih Gajah Mada pada abad ke-14.",
    textSegments: [
      "Kerajaan Majapahit berhasil menyatukan wilayah Nusantara di bawah kepemimpinan Raja Hayam Wuruk. ",
      "Mahapatih Gajah Mada mengikrarkan persatuan tersebut dalam Sumpah Palapa yang legendaris, yang disiarkannya secara langsung lewat ",
      "fitur streaming YouTube Live",
      " dari pendopo agung Trowulan agar dideklarasikan secara serentak ke seluruh adipati daerah taklukan."
    ],
    correctSegmentIndex: 2,
    explanation: "YouTube Live baru diluncurkan tahun 2011! Kerajaan Majapahit berdiri pada abad ke-14 (1293–1527 M). Pada zaman tersebut, sumpah dideklarasikan secara lisan di hadapan sidang istana dan disebarkan ke daerah lain melalui prasasti tembaga, kurir berkuda, atau utusan armada laut."
  }
];
