import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Masjid Daarussalaam - Beriman, Berilmu, Beramal',
  description: 'Masjid Daarussalaam adalah pusat kegiatan ibadah dan pendidikan Islam yang melayani masyarakat dengan berbagai program kajian, madrasah, dan kegiatan sosial.',
  keywords: 'masjid, daarussalaam, islam, kajian, madrasah, donasi, Jakarta',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
