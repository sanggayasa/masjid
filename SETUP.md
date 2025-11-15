# Setup Website Masjid Daarussalaam

Website masjid modern dengan CMS admin untuk mengelola konten dan laporan keuangan.

## Fitur Utama

- **Beranda**: Hero image, jadwal sholat realtime, pengumuman terbaru
- **Profil Masjid**: Sejarah, visi misi, struktur pengurus
- **Program & Kegiatan**: Kajian rutin, madrasah, event spesial
- **Donasi Online**: QRIS payment, transfer bank BSI (7216282177), proposal PDF, laporan keuangan transparan
- **Galeri**: Foto dan video kegiatan masjid
- **Artikel Islami**: Kumpulan artikel dan tulisan seputar Islam
- **Kontak & Lokasi**: Google Maps, informasi kontak lengkap
- **CMS Admin**: Dashboard untuk mengelola semua konten dan laporan keuangan

## Teknologi

- Next.js 13 dengan App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Supabase (Database & Authentication)
- Lucide React Icons

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Supabase

1. Buat akun di [Supabase](https://supabase.com)
2. Buat project baru
3. Copy URL dan Anon Key dari project settings
4. Database schema sudah tersedia di migration file

### 3. Environment Variables

Rename `.env.local` dan isi dengan credentials Supabase Anda:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Database Setup

Database schema sudah dibuat dengan tables:
- `announcements` - Pengumuman masjid
- `articles` - Artikel Islami
- `programs` - Program dan kegiatan
- `financial_reports` - Laporan keuangan
- `committee_members` - Struktur pengurus
- `gallery_items` - Galeri foto dan video

### 5. Create Admin User

Buat user admin melalui Supabase Dashboard:
1. Go to Authentication > Users
2. Add user dengan email dan password
3. Gunakan credentials ini untuk login ke `/admin/login`

### 6. Run Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:3000`

### 7. Build for Production

```bash
npm run build
npm start
```

## Struktur Project

```
├── app/
│   ├── page.tsx              # Beranda
│   ├── profil/               # Profil Masjid
│   ├── program/              # Program & Kegiatan
│   ├── donasi/               # Donasi Online
│   ├── galeri/               # Galeri
│   ├── artikel/              # Artikel Islami
│   ├── kontak/               # Kontak & Lokasi
│   └── admin/                # CMS Admin Dashboard
│       ├── login/            # Admin Login
│       └── financial-reports/ # Kelola Laporan Keuangan
├── components/
│   ├── navbar.tsx            # Navigation bar
│   ├── footer.tsx            # Footer
│   ├── islamic-pattern.tsx   # Islamic geometric pattern
│   └── prayer-times-card.tsx # Jadwal sholat
└── lib/
    ├── supabase.ts           # Supabase client
    └── prayer-times.ts       # Prayer times logic
```

## CMS Admin Features

Akses admin dashboard di `/admin/login`

### Fitur Admin:
1. **Laporan Keuangan** - Tambah, edit, hapus laporan pemasukan dan pengeluaran
2. **Pengumuman** - Kelola pengumuman masjid (coming soon)
3. **Artikel** - Tulis dan publikasikan artikel Islami (coming soon)
4. **Program** - Kelola program kajian, madrasah, event (coming soon)
5. **Struktur Pengurus** - Kelola data pengurus DKM (coming soon)
6. **Galeri** - Upload foto dan video kegiatan (coming soon)

## Customization

### Update Informasi Masjid

1. **Nama Masjid**: Edit di `components/navbar.tsx` dan `components/footer.tsx`
2. **Alamat**: Edit di `app/kontak/page.tsx`
3. **Rekening Bank**: Edit di `app/donasi/page.tsx`
4. **Kontak**: Edit di `components/footer.tsx` dan `app/kontak/page.tsx`
5. **Jadwal Sholat**: Edit di `lib/prayer-times.ts`

### Update Warna Brand

Edit Tailwind config di `tailwind.config.ts` untuk mengubah warna emerald ke warna pilihan Anda.

## Security Notes

- Semua table menggunakan Row Level Security (RLS)
- Authentication required untuk admin dashboard
- Public read access untuk content
- Admin-only write access untuk semua data

## Support

Untuk bantuan dan customization lebih lanjut, hubungi developer.
