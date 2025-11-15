import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PrayerTimesCard } from '@/components/prayer-times-card';
import { IslamicPattern } from '@/components/islamic-pattern';
import { Bell, BookOpen, Calendar, HandHeart, Users, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import BgImage from '@/images/bg.png';
import { supabase } from '@/lib/supabase';

async function getAnnouncements() {
  const { data } = await supabase
    .from('announcements')
    .select('*')
    .eq('is_active', true)
    .order('published_at', { ascending: false })
    .limit(3);

  return data || [];
}

async function getLatestArticles() {
  const { data } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(3);

  return data || [];
}

export default async function Home() {
  const announcements = await getAnnouncements();
  const articles = await getLatestArticles();

  return (
    <div className="min-h-screen">
      <section className="relative text-white overflow-hidden">
        {/* Full-width banner: height adjustable via tailwind classes (h-96/md:h-[520px]) */}
        <div className="relative w-full">
          <div className="relative w-full h-96  md:h-[1000px]">
            <Image src={BgImage} alt="Banner Background" fill className="object-cover" priority />
            {/* translucent green overlay on top of the image */}
            <div className="absolute inset-0 bg-emerald-900/40 z-20 pointer-events-none" />
          </div>
        </div>

        <IslamicPattern />

        {/* Overlayed content positioned over the banner; content is centered within max-w container */}
        <div className="absolute inset-0 flex items-center z-30">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_4px_4px_rgba(21,128,61,0.8)]">
                Masjid Daarussalaam
              </h1>
              <p
                className="text-xl md:text-2xl max-w-3xl mx-auto text-white drop-shadow-[0_4px_4px_rgba(21,128,61,0.8)]"
              >
                Beriman, Berilmu, Beramal
              </p>
              <p className="text-lg text-white drop-shadow-[0_4px_4px_rgba(21,128,61,0.8)] max-w-2xl mx-auto">
                Pusat kegiatan ibadah dan pendidikan Islam yang melayani masyarakat dengan penuh kasih sayang
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-white text-emerald-900 hover:bg-emerald-50">
                  <Link href="/donasi">Donasi Sekarang</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-emerald-900 hover:bg-white/10">
                  <Link href="/profil">Tentang Kami</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Bell className="h-6 w-6 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">Pengumuman Terbaru</h2>
            </div>

            <div className="space-y-4">
              {announcements.length > 0 ? (
                announcements.map((announcement) => (
                  <Card key={announcement.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {announcement.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{announcement.content}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(announcement.published_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Belum ada pengumuman terbaru</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          <div>
            <PrayerTimesCard />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Layanan & Fasilitas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-emerald-600">
              <CardContent className="p-6">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kajian Rutin</h3>
                <p className="text-gray-600">
                  Kajian Islam berkala dengan ustadz terpercaya untuk memperdalam ilmu agama
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-emerald-600">
              <CardContent className="p-6">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">TPQ</h3>
                <p className="text-gray-600">
                  Pendidikan Al-Quran dan Islam untuk anak-anak dan remaja
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-emerald-600">
              <CardContent className="p-6">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Ramadhan</h3>
                <p className="text-gray-600">
                  Berbagai kegiatan di bulan Ramadhan seperti tarawih, tadarus, dan buka puasa bersama
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-emerald-600">
              <CardContent className="p-6">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <HandHeart className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sosial</h3>
                <p className="text-gray-600">
                  Program bantuan untuk kaum dhuafa dan kegiatan sosial kemasyarakatan
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-emerald-600">
              <CardContent className="p-6">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Lokasi Strategis</h3>
                <p className="text-gray-600">
                  Lokasi mudah diakses dengan fasilitas parkir yang memadai
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-t-4 border-emerald-600">
              <CardContent className="p-6">
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Informasi</h3>
                <p className="text-gray-600">
                  Update kegiatan dan pengumuman masjid secara berkala
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Artikel Islami Terbaru</h2>
            <Button variant="outline" asChild>
              <Link href="/artikel">Lihat Semua</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  {article.image_url && (
                    <div className="h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{article.author}</span>
                      <span>
                        {new Date(article.published_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-600 py-12">
                Belum ada artikel tersedia
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Mari Bersama Membangun Masjid</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Kontribusi Anda akan membantu pembangunan dan operasional masjid untuk kebaikan bersama
          </p>
          <Button size="lg" asChild className="bg-white text-emerald-600 hover:bg-emerald-50">
            <Link href="/donasi">Donasi Sekarang</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
