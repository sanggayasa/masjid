import { Card, CardContent } from '@/components/ui/card';
import { IslamicPattern } from '@/components/islamic-pattern';
import { Image as ImageIcon, Video, Camera } from 'lucide-react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

async function getGalleryItems() {
  const { data } = await supabase
    .from('gallery_items')
    .select('*')
    .order('created_at', { ascending: false });

  return data || [];
}

export default async function GaleriPage() {
  const galleryItems = await getGalleryItems();
  // photos variable not used because we render localGallery
  const videos = galleryItems.filter((item) => item.media_type === 'video');

  // Local public gallery images (copied into public/galeri)
  const localGallery = [
    'acara masjid 2.jpg',
    'acara masjid 3.jpg',
    'acara masjid 4.jpg',
    'acara masjid 5.jpg',
    'acara masjid 6.jpg',
    'acara masjid.jpg',
    'kajian masjid.jpg',
    'masjid 6.jpg',
    'pembangunan masjid 2.jpg',
    'pembangunan masjid 3.jpg',
    'pembangunan masjid 4.jpg',
    'pembangunan masjid.jpg',
    'pembangunan massjid 1.jpg',
    'pisah sambut masjid.jpg',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galeri Foto & Video</h1>
            <p className="text-xl text-emerald-100">
              Dokumentasi kegiatan dan momen bersejarah Masjid Daarussalaam
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <ImageIcon className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Galeri Foto</h2>
          </div>

          {localGallery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localGallery.map((filename) => (
                <Card key={filename} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gray-200 overflow-hidden relative">
                    <Image
                      src={`/galeri/${encodeURIComponent(filename)}`}
                      alt={filename}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{filename}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Galeri foto akan segera ditampilkan</p>
                <p className="text-sm text-gray-500">Dokumentasi kegiatan sedang dalam proses upload</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Video className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Galeri Video</h2>
          </div>

          {videos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200">
                    <video
                      controls
                      className="w-full h-full"
                      poster={item.media_url}
                    >
                      <source src={item.media_url} type="video/mp4" />
                      Browser Anda tidak mendukung video tag.
                    </video>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-600">{item.description}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Video className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Galeri video akan segera ditampilkan</p>
                <p className="text-sm text-gray-500">Video dokumentasi sedang dalam proses upload</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
