# ARVA Investment Holdings — Official Website (`ARVA.id`)

> **"Investing in People. Advancing Responsible Governance. Building Sustainable Prosperity."**

Website profil korporat resmi untuk **ARVA Investment Holdings** (`ARVA.id`), ekosistem platform investasi terkemuka di Indonesia yang berfokus pada pengembangan sumber daya manusia berkelanjutan (*Sustainable Human Capital Development*), tata kelola yang bertanggung jawab (*Responsible & Sustainable Governance*), serta investasi properti dan rantai pasok industri halal global (*Property / Real Estate Investment*).

Repository: [https://github.com/rs-itsupport/arva-website](https://github.com/rs-itsupport/arva-website)

---

## 📌 Status Terkini Project: *Under Construction*

Saat ini website berada dalam status **`Website Under Construction`** untuk pengunjung publik. 

**Alasan:**  
Beberapa item konten, dokumentasi visual forum bilateral/internasional, dan plakat penghargaan (*acknowledgement*) masih dalam tahap penyesuaian materi terbaru dari manajemen.

> 💡 **Untuk Pengembang & Tim Internal:**  
> Anda tetap dapat melihat dan menjelajahi seluruh halaman draft website lengkap dengan cara mengaktifkan **Mode Pratinjau**:
> - Klik tombol **"Pratinjau Draft"** di pojok kanan atas / bawah halaman pengumuman, atau
> - Buka URL lokal langsung dengan parameter query: `http://localhost:5174/?preview=true` (atau port dev server Anda).

---

## 🚀 Panduan Membuka & Menjalankan Project (Getting Started)

### Prasyarat
- **Node.js**: Versi 18.0.0 atau lebih baru (direkomendasikan versi LTS terbaru).
- **npm**: Versi 9.0.0 ke atas (atau package manager kompatibel).
- **Git**: Terinstal pada komputer Anda.

### 1. Clone Repository
```bash
git clone https://github.com/rs-itsupport/arva-website.git
cd arva-website
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Local Dev Server)
```bash
npm run dev
```
Setelah berjalan, buka browser dan akses URL lokal yang tampil di terminal (biasanya `http://localhost:5173` atau `http://localhost:5174`).

### 4. Build untuk Lingkungan Produksi
Untuk memvalidasi kesiapan kode dan membuat bundle produksi:
```bash
npm run build
```
Hasil build akan tersimpan di folder `dist/`. Anda dapat menguji hasil bundle produksi secara lokal dengan perintah:
```bash
npm run preview
```

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

- **Framework & Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation Engine**: Custom **Passive `IntersectionObserver` ScrollReveal**
  - Ringan (*zero-dependency*), tidak menggunakan library berat seperti GSAP / Framer Motion.
  - Memanfaatkan *hardware acceleration* GPU (`transform` dan `opacity`).
  - Mendukung standar aksesibilitas internasional (`@media (prefers-reduced-motion: reduce)`).

---

## 📂 Struktur Direktori Proyek

```plaintext
website-arva/
├── src/
│   ├── assets/                      # Aset gambar, foto dokumentasi, dan logo resmi
│   │   ├── arva-logo.png            # Logo resmi ARVA Investment Holdings
│   │   ├── hero-building.jpg        # Foto arsitektur bangunan ARVA
│   │   ├── sofyancorp-logo.png      # Logo resmi SofyanCorp (Our Network)
│   │   ├── group-of-arva-logo.png   # Logo resmi Group of Arva / GOArva (Our Network)
│   │   ├── ack-*.png                # 6 Foto plakat sertifikat penghargaan resmi
│   │   └── contrib-*.png            # 8 Foto dokumentasi kegiatan & forum global
│   │
│   ├── components/
│   │   ├── arva/
│   │   │   ├── sections.tsx         # ⭐ SINGLE SOURCE OF TRUTH (Seluruh komponen section ARVA)
│   │   │   └── SiteHeader.tsx       # Komponen navigasi header & logo
│   │   ├── common/
│   │   │   └── ScrollReveal.tsx     # Observer animasi scroll reveal ultra-ringan & accessible
│   │   ├── layout/
│   │   │   └── RootLayout.tsx       # Layout utama pembungkus rute, navbar, footer & scroll top
│   │   └── ScrollToTop.tsx          # Utility auto-scroll ke posisi atas saat pindah rute
│   │
│   ├── pages/
│   │   ├── Home.tsx                 # Halaman utama (Hero, WeAim, Pillars, Network, Contrib, Ack, Contact)
│   │   ├── Background.tsx           # Halaman Background & Roadmap 2026-2045
│   │   ├── Capabilities.tsx         # Halaman 3 Kapabilitas Utama ARVA
│   │   ├── Contact.tsx              # Halaman kontak resmi eksekutif
│   │   ├── UnderConstruction.tsx    # Halaman pengumuman publik saat ini
│   │   └── NotFound.tsx             # Halaman 404
│   │
│   ├── App.tsx                      # Root App component, konfigurasi rute & sakelar Preview Mode
│   ├── main.tsx                     # Entry point React DOM
│   └── styles.css                   # Desain token ARVA (Navy, Burgundy, Cream), tipografi & animasi
│
├── public/                          # Aset statis public
├── package.json                     # Daftar paket dan scripts proyek
├── tsconfig.json                    # Konfigurasi TypeScript
├── vite.config.ts                   # Konfigurasi Vite & path alias (@/ -> src/)
└── README.md                        # Dokumentasi proyek ini
```

---

## 📖 Panduan untuk Pengembang Selanjutnya (Handover Guide)

Bagi pengembang yang melanjutkan pengembangan website ini, harap perhatikan poin-poin arsitektur dan panduan pembaruan konten berikut:

### 1. Prinsip Arsitektur: Single Source of Truth
Sesuai panduan di `AGENTS.md`, seluruh komponen section ARVA disimpan terpusat di:
👉 **[`src/components/arva/sections.tsx`](src/components/arva/sections.tsx)**

Halaman rute pada `src/pages/` (seperti `Home.tsx`, `Background.tsx`, dll.) **hanya meng-compose / menyusun komponen dari `sections.tsx`**. Jangan menduplikasi markup section di dalam file page agar konten di seluruh rute selalu konsisten.

### 2. Item yang Perlu Diperbarui / Diganti (Pending Updates)
Ketika materi dan aset foto terbaru dari pihak manajemen ARVA sudah tersedia:

1. **Foto Dokumentasi Forum (`Our Contribution`)**:
   - File konfigurasi: `CONTRIBUTION_ACTIVITIES` di `src/components/arva/sections.tsx`.
   - File gambar disimpan di `src/assets/`:
     - `contrib-talkshow-mahathir.png` (Talk Show Tun Dr. Mahathir Mohamad)
     - `contrib-award-stage.png` (National Halal Tourism Industry Awards)
     - `contrib-japan-halal-summit.png` (Japan Halal Summit Tokyo)
     - `contrib-wief-speaker.png` (World Islamic Economic Forum / WIEF)
     - `contrib-meeting-maruf-amin.png` (Konsultasi K.H. Ma'ruf Amin)
     - `contrib-roundtable-meeting.png` (Cross-Sector Tourism Institutional Roundtable)
     - `contrib-forum-islamic-tourism.png` (Forum on Islamic Tourism OIC)
     - `contrib-workshop-milenial.png` (Workshop Milenial Halal Tourism)
   - *Cara mengganti:* Timpa file gambar di `src/assets/` dengan foto resolusi tinggi terbaru atau perbarui tautan impornya di baris atas `sections.tsx`.

2. **Foto Plakat & Sertifikat Penghargaan (`Our Acknowledgement`)**:
   - File konfigurasi: array `items` pada fungsi `AcknowledgementSection` di `src/components/arva/sections.tsx`.
   - File gambar di `src/assets/`:
     - `ack-islamica500.png` (The 500 Who Make the Islamic Economy - ISLAMICA 500)
     - `ack-satyalancana.png` (Satyalancana Kepariwisataan dari Presiden RI)
     - `ack-halal-pioneer.png` (Halal Hotel Pioneers - Halal in Travel Awards)
     - `ack-world-halal-travel.png` (World's Best Family Friendly Hotel - Abu Dhabi)
     - `ack-certificate-excellence.png` (Certificate of Excellence dari Menteri Pariwisata RI)
     - `ack-japan-appreciation.png` (Letter of Appreciation dari Wakil Menteri Transportasi & Pariwisata Jepang)

3. **Data Kontak & Informasi Eksekutif (`ContactSection`)**:
   - Jika ada perubahan nomor telepon atau email eksekutif, perbarui data pada komponen `ContactSection` di `src/components/arva/sections.tsx` dan `src/pages/UnderConstruction.tsx`.

### 3. Cara Membuka Status Website ke Publik (Menonaktifkan Under Construction)
Jika semua konten sudah tuntas dan website siap dirilis secara publik:
1. Buka file **[`src/App.tsx`](src/App.tsx)**.
2. Cari baris pengecekan:
   ```tsx
   if (!previewMode) {
     return <UnderConstruction onPreview={enablePreview} />;
   }
   ```
3. Cukup jadikan nilai default `previewMode` selalu `true` atau hapus blok kondisi tersebut, sehingga aplikasi langsung merender rute utama `<BrowserRouter>` tanpa memerlukan parameter pratinjau.

### 4. Aturan Git & Integrasi Lovable
- **Dilarang Force Push:** Hindari melakukan `git push --force` atau rebase/amend commit yang telah ter-push ke GitHub, terutama jika repositori terhubung ke editor [Lovable](https://lovable.dev), agar histori versi project tidak rusak.
- **Validasi Build Sebelum Push:** Selalu jalankan `npm run build` terlebih dahulu sebelum melakukan commit baru untuk memastikan tidak ada kesalahan tipe data TypeScript atau sintaks yang rusak.

---

## 🎨 Panduan Desain & Palet Warna (Brand Guidelines)

Website ini menggunakan palet warna korporat yang mencerminkan martabat, kepemimpinan, dan kemakmuran:
- **Navy** (`#0C1628` / `#0A111F`): Melambangkan tata kelola yang kokoh, integritas, dan stabilitas institusional.
- **Burgundy** (`#7B1113` / `#6B1724`): Melambangkan komitmen kemanusiaan (*investing in people*), keberanian strategis, dan nilai budaya luhur.
- **Warm Cream** (`#F7F5F0` / `#ECE8DF`): Melambangkan transparansi, keterbukaan kolaborasi, dan keramahan hospitality.

---

## 📞 Kontak & Informasi Perusahaan

- **Entitas**: ARVA Investment Holdings (`ARVA.id`)
- **Aliansi Induk**: [SofyanCorp](https://sofyancorp.com)
- **Platform Digital**: [Group of Arva / GOArva](https://goarva.id)
- **Portal Resmi**: [https://arva.website](https://arva.website)
- **Kantor Pusat**: Jakarta, Indonesia
- **Email Eksekutif**: `riyanto.Sofyan@sofyancorp.com`
- **Telepon**: 021-3905971 / 021-8905972

---
*Dokumentasi ini dibuat dan dipelihara untuk menjamin keberlanjutan pengembangan website ARVA Investment Holdings.*
