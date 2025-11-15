import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IslamicPattern } from '@/components/islamic-pattern';
import { Target, Eye, History, Users as UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Struktur from '@/images/struktur.jpg';
import { supabase } from '@/lib/supabase';

async function getCommitteeMembers() {
  const { data } = await supabase
    .from('committee_members')
    .select('*')
    .order('order_index', { ascending: true });

  return data || [];
}

export default async function ProfilPage() {
  const committeeMembers = await getCommitteeMembers();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <IslamicPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Masjid</h1>
            <p className="text-xl text-emerald-100">Mengenal Masjid Daarussalaam Lebih Dekat</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <History className="h-6 w-6 text-emerald-600" />
              <span>Sejarah Masjid Daarussalaam</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Masjid Daarussalaam didirikan pada tahun 2021 dengan tujuan menjadi pusat kegiatan ibadah dan pendidikan Islam bagi masyarakat sekitar. Berawal dari sebuah musala sederhana, masjid ini berkembang menjadi kompleks ibadah yang megah berkat dukungan dan partisipasi aktif dari jamaah yang terus bertambah.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dalam perjalanannya, Masjid Daarussalaam telah mengalami beberapa kali renovasi dan perluasan untuk memenuhi kebutuhan jamaah yang terus meningkat. Kini, masjid ini tidak hanya menjadi tempat ibadah, tetapi juga pusat kegiatan pendidikan, sosial, dan dakwah Islam.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan nama Daarussalaam yang berarti &quot;Rumah Kedamaian&quot;, masjid ini berkomitmen untuk menjadi tempat yang memberikan kedamaian spiritual bagi semua jamaah dan masyarakat sekitar.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-emerald-600">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-6 w-6 text-emerald-600" />
                <span>Visi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Menjadikan Masjid Daarussalaam sebagai masjid yang indah, bersih dan nyaman untuk digunakan sebagai tempat umat Islam melaksanakan ibadah dengan khusuk serta sebagai Islamic Centre yang mendorong dan mendukung pendidikan dan dakwah Islam serta kegiatan pemberdayaan masyarakat yang dapat meningkatkan kualitas umat yang islami serta mensyiarkan Islam sebagai rahmatan lil alamin.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-emerald-600">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-emerald-600" />
                <span>Misi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menyelenggarakan sholat lima waktu berjamaah, sholat jumat, sholat tarawih di bulan Ramadhan serta sholat-sholat hari raya.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menyelenggarakan peringatan-peringatan hari besar Islam.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menjaga keindahan, kebersihan dan tata kelola masjid yang baik</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menyelenggarakan pendidikan informal membaca Alquran untuk anak anak usia dini, remaja dan orang dewasa disertai dengan pendidikan akhlak islami.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menyelenggarakan pelatihan-pelatihan ilmu agama dan ilmu lain bagi guru-guru agama sekolah formal, para da’i serta pengurus-pengurus pesantren dan masjid di bidang-bidang yang dipandang perlu untuk meningkatkan kualitas dan kapasitas mereka.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menyedikan buku-buku agama dan pengetahuan lain yang relevan diperpustakaan masjid yang terbuka untuk umum. sekolah formal, para da’i serta pengurus-pengurus pesantren dan masjid di bidang-bidang yang dipandang perlu untuk meningkatkan kualitas dan kapasitas mereka.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menyelenggarakan pengajian-pengajian berbagai topik secara rutin dan terencana di masjid.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Menyelenggarakan pengajian-pengajian berbagai topik secara rutin dan terencana di masjid.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>Membantu masyarakat, sesuai dengan kemampuan untuk mendorong kegiatan- kegiatan ekonomi masyarakat.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-2xl">
              <UsersIcon className="h-6 w-6 text-emerald-600" />
              <span>Struktur Pengurus</span>
            </CardTitle>
            <p className="text-gray-600 mt-2">Dewan Kemakmuran Masjid (DKM) Daarussalaam</p>
          </CardHeader>
          <CardContent>
            {committeeMembers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {committeeMembers.map((member) => (
                  <div key={member.id} className="text-center">
                    <div className="mb-4">
                      {member.photo_url ? (
                        <img
                          src={member.photo_url}
                          alt={member.name}
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-emerald-100"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full mx-auto bg-emerald-100 flex items-center justify-center border-4 border-emerald-200">
                          <UsersIcon className="h-16 w-16 text-emerald-600" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{member.name}</h3>
                    <p className="text-emerald-600 font-medium mb-1">{member.position}</p>
                    {member.phone && (
                      <p className="text-sm text-gray-600">{member.phone}</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto  flex items-center justify-center mb-4">
                  <Image src={Struktur} alt="Loading" width={800} height={800} />
                </div>
               </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
