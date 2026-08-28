/*
========================================================================
  CONTENT.JS — SEMUA ISI WEBSITE ALBIDAYAH FESTIVAL 2027 ADA DI SINI
========================================================================
  Ini adalah SATU-SATUNYA file yang perlu Anda edit untuk mengganti
  teks, jadwal, kontak, dan nama gambar di website ini.

  JANGAN edit index.html atau style.css kecuali Anda memang paham HTML/CSS.

  Cara pakai singkatnya:
  1. Cari bagian yang ingin diubah (misalnya "hero" atau "contact").
  2. Ganti teks di antara tanda kutip " ... ".
  3. Simpan file ini.
  4. Refresh browser.

  Baca PANDUAN-EDIT.md untuk penjelasan lebih lengkap & bergambar langkah.
========================================================================
*/

const websiteData = {

  // ================================
  // PENGATURAN UMUM / SEO
  // ================================
  site: {
    title: "Albidayah Festival 2027 — Se-Jawa Barat",
    description:
      "Albidayah Festival (Albifest) 2027 — ajang kompetisi Islami se-Jawa Barat oleh Pondok Pesantren Terpadu Albidayah. Tema: Berkarya, Berprestasi, Menginspirasi. 08–10 Januari 2027.",
    // Ganti dengan URL asli website Anda setelah online (untuk Open Graph)
    url: "[ISI URL WEBSITE]",
    ogImage: "images/hero.jpg",
    faviconImage: "images/favicon.png",
  },

  // ================================
  // NAVBAR
  // ================================
  navbar: {
    logoImage: "images/logo.png",
    brandName: "Albifest",
    brandYear: "2027",
    links: [
      { label: "Beranda", href: "#beranda" },
      { label: "Cabang Lomba", href: "#lomba" },
      { label: "Bazar", href: "#bazar" },
      { label: "Jadwal", href: "#jadwal" },
      { label: "Pendaftaran", href: "#pendaftaran" },
      { label: "Galeri", href: "#galeri" },
      { label: "Kontak", href: "#kontak" },
    ],
    ctaLabel: "Daftar Sekarang",
    // Ganti dengan link/formulir pendaftaran resmi jika sudah tersedia
    ctaLink: "[ISI LINK PENDAFTARAN]",
  },

  // ================================
  // HERO / HALAMAN UTAMA
  // ================================
  hero: {
    eyebrow: "Selamat Datang di",
    // Ganti judul utama di bawah ini
    title: "ALBIDAYAH FESTIVAL",
    titleAccent: "2027",
    subtitle: "Se-Jawa Barat",
    theme: "Berkarya, Berprestasi, Menginspirasi",
    // Ganti deskripsi di bawah ini
    description:
      "Ajang kompetisi Islami untuk menjalin silaturahmi dan ukhuwah antar lembaga pendidikan, meningkatkan prestasi, serta mewujudkan semangat berkarya bagi pelajar dan santri se-Jawa Barat.",
    dateLabel: "Waktu Pelaksanaan",
    dateShort: "08–10 Januari 2027",
    // Tanggal event untuk hitung mundur (format: "YYYY-MM-DDTHH:mm:ss")
    eventDateISO: "2027-01-08T07:00:00",
    primaryButtonLabel: "Daftar Sekarang",
    primaryButtonLink: "[ISI LINK PENDAFTARAN]",
    secondaryButtonLabel: "Lihat Cabang Lomba",
    secondaryButtonHref: "#lomba",
    // Ganti nama file gambar hero
    image: "images/hero.jpg",
    imageAlt: "Albidayah Festival 2027",
  },

  // ================================
  // CABANG / KATEGORI LOMBA
  // ================================
  // Untuk MENAMBAH lomba baru: salin (copy) satu blok { ... } di bawah,
  // tempel (paste) sebelum tanda "]" penutup, lalu ganti isinya.
  // Untuk MENGHAPUS lomba: hapus satu blok { ... } beserta tanda komanya.
  competitions: {
    eyebrow: "Cabang Lomba",
    title: "Tunjukkan Bakat Terbaikmu",
    subtitle: "Lima cabang lomba untuk berkarya, berprestasi, dan menginspirasi.",
    list: [
      {
        id: "pidato",
        icon: "mic",
        name: "Lomba Pidato",
        category: "SD/MI Sederajat & SMP/MTs Sederajat",
        shortDescription:
          "Sampaikan gagasan terbaikmu dengan percaya diri dan penuh inspirasi.",
        image: "images/lomba-pidato.jpg",
        detail: {
          peserta: "Pelajar tingkat SD/MI sederajat dan SMP/MTs sederajat se-Jawa Barat.",
          durasi: "Waktu penampilan maksimal 10 menit per peserta.",
          tema: [
            "Tingkat SD/MI  : Aku Bangga Menjadi Anak yang Berbakti kepada Orang Tua dan Guru",
            "Tingkat SD/MI  : Menjadi Anak Saleh, Cerdas, dan Berakhlak Mulia",
            "Tingkat SD/MI  : Bijak Menggunakan Gadget untuk Masa Depan yang Hebat",
            "Tingkat SMP/MTs: Generasi Qurani, Generasi Masa Depan Bangsa",
            "Tingkat SMP/MTs: Akhlak Mulia di Tengah Kemajuan Teknologi",
            "Tingkat SMP/MTs: Pemuda Berprestasi, Indonesia Menginspirasi",
          ],
          jadwal: "Jumat, 08 Januari 2027 (SD/MI) & Sabtu, 09 Januari 2027 (SMP/MTs)",
          biaya: "Rp.100.000,00",
        },
      },
      {
        id: "kaligrafi",
        icon: "brush",
        name: "Lomba Kaligrafi",
        category: "SMP/MTs Sederajat & SMA/MA Sederajat",
        shortDescription:
          "Ekspresikan keindahan tulisan Islam melalui seni kaligrafi yang memukau.",
        image: "images/lomba-kaligrafi.jpg",
        detail: {
          peserta: "Pelajar tingkat SMP/MTs sederajat dan SMA/MA sederajat se-Jawa Barat.",
          durasi: "6 Jam untuk menyelesaikan karya kaligrafi di lokasi lomba.",
          tempat: "Ruangan kelas Madrasah Aliyah Albidayah.",
          jadwal: "Minggu, 10 Januari 2027",
          biaya: "Rp.100.000,00",
        },
      },
      {
        id: "mewarnai",
        icon: "palette",
        name: "Lomba Mewarnai",
        category: "TK/RA Sederajat",
        shortDescription:
          "Wujudkan kreativitas dan imajinasi dalam goresan warna yang penuh makna.",
        image: "images/lomba-mewarnai.jpg",
        detail: {
          peserta: "Seluruh siswa RA/TK se-Jawa Barat.",
          tempat: "Ruangan Aula Roudhoh.",
          jadwal: "Sabtu, 09 Januari 2027",
          biaya: "Rp.75.000,00",
        },
      },
      {
        id: "lcc",
        icon: "brain",
        name: "Lomba Cerdas Cermat",
        category: "SMP/MTs Sederajat",
        shortDescription:
          "Ukur kemampuan berpikir cepat, kerja sama tim, serta wawasan keislaman.",
        image: "images/lomba-lcc.jpg",
        detail: {
          peserta: "Tim beranggotakan 3 orang, tingkat SMP/MTs sederajat.",
          sistem:
            "Babak penyisihan bersifat online menggunakan perangkat yang disediakan panitia. Babak semifinal dan final dilaksanakan di panggung utama.",
          jadwal: "Sabtu, 09 Januari 2027",
          biaya: "Rp.100.00,00",
        },
      },
      {
        id: "hadroh",
        icon: "drum",
        name: "Lomba Hadroh Banjari & Habsyi",
        category: "Umum Se-Jawa Barat",
        shortDescription:
          "Hadirkan harmoni Islami melalui lantunan sholawat dan irama rebana.",
        image: "images/lomba-hadroh.jpg",
        detail: {
          peserta: "Terbuka untuk umum se-Jawa Barat.",
          durasi: "Lama penampilan maksimal 15 menit, dimulai sejak peserta mengucapkan salam.",
          ketentuan: [
            "Peserta membawa alat musik sendiri.",
            "Lagu yang dibawakan digunakan sebagai dasar acuan kriteria penilaian.",
          ],
          jadwal: "Minggu, 10 Januari 2027",
          biaya: "[Rp.200.000,00]",
        },
      },
    ],
  },

  // ================================
  // BAZAR
  // ================================
  bazaar: {
    eyebrow: "Bazar",
    title: "Bazar Festival & UMKM",
    subtitle: "Temukan produk unggulan, kuliner, serta souvenir khas Albidayah Festival 2027.",
    items: [
      {
        name: "UMKM Lokal",
        description: "Pameran produk usaha mikro, kecil, dan menengah lokal yang inspiratif dan berkualitas.",
      },
      {
        name: "Kuliner Khas",
        description: "Beragam jajanan dan hidangan sehat, lezat, serta menggugah selera masyarakat.",
      },
      {
        name: "Souvenir Festival",
        description: "Pilihan merchandise dan cinderamata dengan desain khas Albidayah Festival.",
      },
    ],
  },

  // ================================
  // JADWAL ACARA
  // ================================
  schedule: {
    eyebrow: "Rundown Acara",
    title: "Jadwal Acara",
    subtitle: "Tiga hari penuh karya, prestasi, dan silaturahmi.",
    days: [
      {
        date: "08 Januari 2027",
        dayName: "Jumat",
        items: [
          {
            time: "08.00 – 11.00",
            title: "Grand Opening",
            description:
              "Laporan ketua pelaksana, kreasi seni santri Albidayah, dan pembukaan kegiatan secara simbolis oleh Pimpinan Pesantren Terpadu Albidayah.",
          },
          {
            time: "13.00 s/d Selesai",
            title: "Lomba Pidato Kategori SD/MI Sederajat",
            description: "Waktu penampilan maksimal 10 menit per peserta.",
          },
        ],
      },
      {
        date: "09 Januari 2027",
        dayName: "Sabtu",
        items: [
          {
            time: "08.00 s/d Selesai",
            title: "Lomba Cerdas Cermat (LCC)",
            description:
              "Kategori MTs/SMP, tim 3 orang. Babak penyisihan online, semifinal & final di panggung utama.",
          },
          {
            time: "13.00 s/d Selesai",
            title: "Lomba Pidato Kategori MTs/SMP Sederajat",
            description: "Waktu penampilan maksimal 10 menit per peserta.",
          },
          {
            time: "10.00 s/d 12.00",
            title: "Lomba Mewarnai",
            description: "Diikuti seluruh RA/TK se-Jawa Barat, di ruangan Aula Roudhoh.",
          },
        ],
      },
      {
        date: "10 Januari 2027",
        dayName: "Minggu",
        items: [
          {
            time: "09.00 - 15.00",
            title: "Lomba Kaligrafi",
            description:
              "Peserta tingkat MA/SMA sederajat dan SMP/MTs sederajat, di ruangan kelas Madrasah Aliyah.",
          },
          {
            time: "08.00 s/d Selesai",
            title: "Lomba Hadroh Banjari & Habsyi",
            description:
              "Untuk umum se-Jawa Barat. Peserta membawa alat musik sendiri, durasi maksimal 15 menit.",
          },
        ],
      },
    ],
    note:
      "Jam pelaksanaan detail per cabang lomba akan diinformasikan lebih lanjut melalui media sosial resmi Albifest.",
  },

  // ================================
  // CARA PENDAFTARAN
  // ================================
  registration: {
    eyebrow: "Pendaftaran",
    title: "Cara Pendaftaran",
    subtitle: "Ikuti langkah mudah berikut untuk bergabung di Albidayah Festival 2027.",
    steps: [
      {
        title: "Pilih Cabang Lomba",
        description: "Tentukan cabang lomba yang sesuai dengan minat dan jenjang pendidikanmu.",
      },
      {
        title: "Isi Formulir Pendaftaran",
        description: "Lengkapi formulir pendaftaran melalui link resmi yang disediakan panitia.",
      },
      {
        title: "Lakukan Pembayaran",
        description:
          "Bank Syariah Indonesia (BSI): Hanhan Salsabila — 7368458346<br>Dana: Hanhan Salsabila — 0853-5350-8800",
      },
      {
        title: "Konfirmasi Pendaftaran",
        description: "Kirimkan bukti pendaftaran ke panitia melalui WhatsApp untuk konfirmasi.",
      },
      {
        title: "Selesai",
        description: "Peserta dapat mengunduh teknis lomba dibawah.",
      },
    ],
    buttonLabel: "Daftar Sekarang",
    buttonLink: "https://bintangjr60-lab.github.io/pendaftaran/",
    deadlineNote: "1 September 2026 — 26 Desember 2026",
  },

  // ================================
  // DOKUMEN / KETENTUAN
  // ================================
  documents: {
    eyebrow: "Dokumen",
    title: "Dokumen & Ketentuan Lomba",
    subtitle: "Unduh dokumen resmi untuk informasi lebih lengkap.",
    list: [
      {
        label: "Download Juknis",
        description: "Petunjuk teknis pelaksanaan setiap cabang lomba.",
        link: "https://drive.google.com/drive/folders/14X67wJ1yfkbz3Bry2p72X8O6z_bJelD0?usp=sharing",
      },
    ],
  },

  // ================================
  // GALERI
  // ================================
  gallery: {
    eyebrow: "Galeri",
    title: "Dokumentasi Albifest",
    images: [
      { src: "images/gallery-1.jpg", alt: "Dokumentasi Albifest 1" },
      { src: "images/gallery-2.jpg", alt: "Dokumentasi Albifest 2" },
      { src: "images/gallery-3.jpg", alt: "Dokumentasi Albifest 3" },
      { src: "images/gallery-4.jpg", alt: "Dokumentasi Albifest 4" },
      { src: "images/gallery-5.jpg", alt: "Dokumentasi Albifest 5" },
      { src: "images/gallery-6.jpg", alt: "Dokumentasi Albifest 6" },
    ],
  },

  // ================================
  // KONTAK
  // ================================
  contact: {
    eyebrow: "Hubungi Kami",
    title: "Ada Pertanyaan?",
    subtitle: "Tim panitia siap membantu Anda seputar Albidayah Festival 2027.",
    persons: [
      { name: "Gungun Gumilar", whatsapp: "6289525306717", whatsappDisplay: "0895-2530-6717" },
      { name: "Hary Bintang", whatsapp: "6285126080146", whatsappDisplay: "0851-2608-0146" },
    ],
    address: "Pondok Pesantren Terpadu Albidayah, Cangkorah, Jawa Barat",
    social: {
      instagram: { handle: "@albidayahfestival", url: "https://instagram.com/albidayahfestival" },
      tiktok: { handle: "Albidayah Cangkorah", url: "https://www.tiktok.com/@albidayahcangkorah99?lang=en" },
      youtube: { handle: "Official Pesantren Terpadu Albidayah", url: "https://www.youtube.com/@pesantrenterpadualbidayah" },
    },
  },

  // ================================
  // FOOTER
  // ================================
  footer: {
    logoImage: "images/logo.png",
    eventName: "Albidayah Festival 2027",
    organizerName: "Pondok Pesantren Terpadu Albidayah",
    tagline: "Berkarya, Berprestasi, Menginspirasi",
    copyrightText: "© 2027 Albidayah Festival. Seluruh hak cipta dilindungi.",
  },
};

// Jangan hapus baris di bawah ini — dibutuhkan agar script.js bisa membaca data di atas.
window.websiteData = websiteData;
