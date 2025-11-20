import { Card, CardContent } from '@/components/ui/card';
import { IslamicPattern } from '@/components/islamic-pattern';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import ProgramsAccordion from '@/components/programs-accordion';
import img1 from '../../images/program/1.webp';
import img2 from '../../images/program/2.webp';
import img3 from '../../images/program/3.webp';
import img4 from '../../images/program/4.webp';
import img5 from '../../images/program/5.webp';
import img6 from '../../images/program/6.webp';
import img7 from '../../images/program/7.webp';
import img8 from '../../images/program/8.webp';
import img9 from '../../images/program/9.webp';
import img10 from '../../images/program/10.webp';
import { supabase } from '@/lib/supabase';

async function getPrograms() {
  const { data } = await supabase
    .from('programs')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  return data || [];
}

export default async function ProgramPage() {
  const programs = await getPrograms();
  const kajian = programs.filter((p) => p.category === 'kajian');
  const madrasah = programs.filter((p) => p.category === 'madrasah');
  const events = programs.filter((p) => p.category === 'event');

  const programImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <IslamicPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Program & Kegiatan</h1>
            <p className="text-xl text-emerald-100">Berbagai kegiatan untuk meningkatkan keimanan dan keilmuan</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProgramsAccordion groups={{ kajian, madrasah, event: events, humas: events, rukem: events }} />

        <div className="mt-12">
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Program Kerja (Dokumen)</h2>
          </div>

          <Card>
            <CardContent>
              <p className="text-gray-700 mb-4">Dokumen program kerja (gambar, lazy-loaded)</p>
              <div className="grid grid-cols-1 gap-6">
                {programImages.map((src) => (
                  <div key={src.src} className="w-full rounded overflow-hidden relative h-[700px] sm:h-[800px] md:h-[900px] bg-gray-100 flex items-center justify-center">
                    <Image src={src} alt={`Program Kerja halaman`} fill className="object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
