# 📘 Panduan Edit Website Albidayah Festival 2027

Panduan ini dibuat untuk Anda yang **bukan programmer**. Semua istirlah dijelaskan sesederhana mungkin. Anda hanya perlu mengedit **satu file utama**: `content.js`.

> 🟢 **Aturan emas:** Untuk mengganti TEKS atau GAMBAR, Anda **hanya perlu membuka `content.js`**. Jangan sentuh `index.html`, `style.css`, atau `script.js` kecuali Anda memang paham coding — file-file itu adalah "mesin" website, sedangkan `content.js` adalah "isinya".

---

## 🧰 Persiapan

Anda memerlukan:
1. **Visual Studio Code (VS Code)** — untuk membuka & mengedit file.
2. **Google Chrome** — untuk melihat hasilnya.

---

## 1️⃣ Cara Mengganti Nama Acara / Judul

1. Buka **VS Code**.
2. Buka folder `albidayah-festival`.
3. Buka file **`content.js`**.
4. Cari bagian paling atas bertuliskan `hero: {`.
5. Ganti teks di baris `title:` dan `titleAccent:`. Contoh:
   ```javascript
   title: "ALBIDAYAH FESTIVAL",
   titleAccent: "2027",
   ```
6. Simpan file (`Ctrl + S` / `Cmd + S`).
7. Refresh (muat ulang) tab Chrome yang menampilkan website Anda.

Nama acara juga muncul di bagian `navbar` (menu atas) dan `footer` (bagian bawah) — Anda bisa ganti di sana juga jika perlu.

---

## 2️⃣ Cara Mengganti Gambar

Semua gambar disimpan di folder **`images/`**.

Langkah:
1. Buka folder `images` di File Explorer / Finder.
2. Siapkan foto baru Anda (format `.jpg` atau `.png`).
3. **Beri nama file baru itu PERSIS SAMA** dengan nama file lama yang ingin diganti. Contoh: jika ingin mengganti foto hero, nama file baru harus `hero.jpg`.
4. Salin (copy) foto baru itu ke folder `images`, lalu pilih **"Replace" / "Timpa"** saat ditanya.
5. Refresh Chrome.

Daftar nama file gambar yang dipakai:

| Nama File | Dipakai Untuk |
|---|---|
| `logo.png` | Logo di navbar & footer |
| `hero.jpg` | Foto besar di halaman utama |
| `about.jpg` | Foto di section "Tentang" |
| `lomba-pidato.jpg` | Foto card lomba Pidato |
| `lomba-kaligrafi.jpg` | Foto card lomba Kaligrafi |
| `lomba-mewarnai.jpg` | Foto card lomba Mewarnai |
| `lomba-lcc.jpg` | Foto card lomba Cerdas Cermat |
| `lomba-hadroh.jpg` | Foto card lomba Hadroh |
| `gallery-1.jpg` s/d `gallery-6.jpg` | Foto-foto di section Galeri |
| `favicon.png` | Ikon kecil di tab browser |

> 💡 Tips ukuran foto: hero & about sebaiknya potret (vertikal/persegi), foto lomba & galeri sebaiknya persegi atau mendekati persegi agar tidak terpotong aneh.

---

## 3️⃣ Cara Mengganti Logo

Sama seperti mengganti gambar biasa:
1. Siapkan file logo baru, simpan sebagai `logo.png` (usahakan latar belakang transparan).
2. Timpa file lama di folder `images/logo.png`.
3. Refresh Chrome.

---

## 4️⃣ Cara Mengganti Nomor WhatsApp

1. Buka `content.js`.
2. Cari bagian `contact: {` lalu `persons: [`.
3. Ganti nomor pada `whatsapp:` (format internasional, **tanpa** tanda `+` dan tanpa spasi, contoh: `62895xxxxxxx`) dan `whatsappDisplay:` (format biasa untuk ditampilkan, contoh: `0895-xxxx-xxxx`).

```javascript
{ name: "Gungun Gumilar", whatsapp: "6289525306717", whatsappDisplay: "0895-2530-6717" },
```

Nomor WhatsApp untuk **tombol pendaftaran/konfirmasi** juga bisa Anda arahkan lewat bagian `registration` dan `hero` (lihat `ctaLink`, `primaryButtonLink`, `buttonLink`) — isi dengan link `https://wa.me/62xxxx` atau link Google Form pendaftaran.

---

## 5️⃣ Cara Mengganti Link Instagram / TikTok / YouTube

1. Buka `content.js`.
2. Cari bagian `contact: { social: {`.
3. Ganti `url:` pada masing-masing platform:

```javascript
social: {
  instagram: { handle: "@albidayahfestival", url: "https://instagram.com/albidayahfestival" },
  tiktok: { handle: "Albidayah Cangkorah", url: "[ISI LINK TIKTOK]" },
  youtube: { handle: "Official Pesantren Terpadu Albidayah", url: "[ISI LINK YOUTUBE]" },
},
```

Ganti tulisan `[ISI LINK TIKTOK]` dan `[ISI LINK YOUTUBE]` dengan link asli akun tersebut.

---

## 6️⃣ Cara Mengganti Jadwal

1. Buka `content.js`.
2. Cari bagian `schedule: { days: [`.
3. Setiap hari punya `date`, `dayName`, dan daftar `items` (kegiatan). Contoh menambah 1 kegiatan baru di hari Jumat:

```javascript
{
  time: "13.00 – Selesai",
  title: "Nama Kegiatan Baru",
  description: "Penjelasan singkat kegiatan.",
},
```//tempatkan di dalam array `items` milik hari yang sesuai, dipisah tanda koma.

---

## 7️⃣ Cara Menambah Lomba Baru

1. Buka `content.js`, cari `competitions: { list: [`.
2. **Salin (copy)** satu blok lomba yang sudah ada (dari tanda `{` sampai `}`nya).
3. **Tempel (paste)** tepat sebelum tanda `]` penutup daftar lomba.
4. Ganti seluruh isinya: `id` (harus unik, huruf kecil tanpa spasi), `icon` (pilih salah satu: `mic`, `brush`, `palette`, `brain`, `drum`), `name`, `category`, `shortDescription`, `image`, dan isi `detail`.
5. Jangan lupa siapkan foto baru di folder `images` dengan nama sesuai yang Anda tulis di `image:`.

## 8️⃣ Cara Menghapus Lomba

1. Buka `content.js`, cari `competitions: { list: [`.
2. Hapus satu blok lomba secara utuh — dari tanda `{` pembuka sampai `}` penutup beserta tanda koma setelahnya.
3. Simpan.

---

## 9️⃣ Cara Menjalankan Website di Komputer

1. **Simpan / download** folder project `albidayah-festival` di komputer Anda.
2. Buka **VS Code**, pilih menu **File → Open Folder**, lalu pilih folder `albidayah-festival`.
3. Di panel kiri VS Code, klik kanan file **`index.html`**, lalu pilih:
   - Jika Anda punya extension **"Live Server"**: klik **"Open with Live Server"** (disarankan, agar semua fitur berjalan sempurna).
   - Atau, cukup klik dua kali file `index.html` di File Explorer / Finder komputer Anda — otomatis akan terbuka di Chrome.
4. Website akan tampil di **Google Chrome**.
5. Setiap kali Anda mengubah teks di `content.js` atau mengganti gambar di folder `images`, **simpan filenya**, lalu tekan tombol **refresh** di Chrome untuk melihat perubahan.

> 💡 Kenapa disarankan pakai Live Server? Karena beberapa browser membatasi pemuatan file JavaScript (`content.js`, `script.js`) saat dibuka langsung dari file (`file://...`). Jika gambar/teks tidak muncul saat dibuka dua kali, install extension gratis **"Live Server"** di VS Code (ikon Extensions di sisi kiri, cari "Live Server", klik Install), lalu klik kanan `index.html` → **"Open with Live Server"**.

---

## 🔟 Cara Upload ke GitHub Pages (Agar Bisa Diakses Semua Orang)

1. Buat akun di [github.com](https://github.com) jika belum punya.
2. Buat repository baru, misalnya beri nama `albidayah-festival`.
3. Upload seluruh isi folder project (semua file & folder `images`) ke repository tersebut. Caranya bisa lewat tombol **"Add file → Upload files"** di halaman GitHub, atau menggunakan aplikasi **GitHub Desktop** jika ingin lebih mudah.
4. Setelah semua file terupload, buka menu **Settings** di repository → pilih **Pages** di sisi kiri.
5. Pada bagian **Branch**, pilih `main` (atau `master`) dan folder `/root`, lalu klik **Save**.
6. Tunggu 1–2 menit, GitHub akan memberikan link seperti:
   `https://namaakun.github.io/albidayah-festival/`
7. Bagikan link tersebut kepada peserta, guru, dan masyarakat umum.

---

## ❓ Bantuan Cepat

| Ingin Ganti | Buka Bagian di `content.js` |
|---|---|
| Judul & deskripsi utama | `hero` |
| Cerita/sejarah pesantren | `about` → `timeline` |
| Tujuan kegiatan | `about` → `goals` |
| Daftar lomba | `competitions` → `list` |
| Jadwal acara | `schedule` → `days` |
| Langkah pendaftaran | `registration` → `steps` |
| Link pendaftaran | `registration` → `buttonLink`, dan `hero` → `primaryButtonLink` |
| Link download proposal/juknis/formulir | `documents` → `list` |
| Foto galeri | `gallery` → `images`, dan file di folder `images/` |
| Nomor WhatsApp / kontak | `contact` |
| Instagram / TikTok / YouTube | `contact` → `social` |
| Isi footer | `footer` |

Selamat mengelola website Albidayah Festival 2027! 🎉
