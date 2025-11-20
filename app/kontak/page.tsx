import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IslamicPattern } from '@/components/islamic-pattern';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function KontakPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <IslamicPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontak & Lokasi</h1>
            <p className="text-xl text-emerald-100">
              Hubungi kami untuk informasi lebih lanjut
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <Card className="border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                  <span>Alamat</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://maps.app.goo.gl/Rm1cST3aypaSLn5w9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-emerald-600 hover:underline transition-colors cursor-pointer"
                >
                  <p>
                    Bekasi Timur Regency 7B<br />
                    Cluster Dianella<br />
                    Desa Burangkeng<br />
                    Kec. Setu<br />
                    Bekasi
                  </p>
                </a>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-emerald-600" />
                  <span>Nomor Telepon</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Ketua DKM Acep</p>
                    <a 
                      href="https://wa.me/6287789513706"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
                    >
                      +62 8778-9513-706
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bendahara Jayanti</p>
                    <a 
                      href="https://wa.me/6285771838631"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-emerald-600 hover:text-emerald-700 hover:underline cursor-pointer"
                    >
                      +62 8577-1838-631
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-emerald-600" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-gray-900">dianelladarusalam@gmail.com</p>
                <p className="text-sm text-gray-600 mt-2">
                  Kami akan merespons email Anda dalam 1-2 hari kerja
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-emerald-600" />
                  <span>Jam Operasional</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Senin - Kamis</span>
                    <span className="font-semibold">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jumat</span>
                    <span className="font-semibold">08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu - Minggu</span>
                    <span className="font-semibold">08:00 - 15:00 WIB</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Masjid buka 24 jam untuk ibadah
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-lg">Hubungi via WhatsApp</h3>
                    <p className="text-emerald-100 text-sm">Respon cepat untuk pertanyaan Anda</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/6287789513706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-emerald-600 text-center py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Chat WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Youtube & Peta Lokasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full rounded-lg overflow-hidden mb-6">
                  <div className="aspect-video w-full bg-black">
                    <a
                      href="https://www.youtube.com/@DianellaDaarussalaam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full bg-black hover:bg-gray-900 transition-colors relative cursor-pointer"
                    >
                      <iframe
                        src="https://www.youtube.com/embed/QUlzvBWGoyk"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full pointer-events-none"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-opacity">
                        <div className="text-white text-center">
                          <p className="text-lg font-semibold mb-2">Kunjungi Channel YouTube</p>
                          <p className="text-sm">@DianellaDaarussalaam</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="w-full h-[600px] bg-gray-200 rounded-lg overflow-hidden relative group">
                  <a
                    href="https://maps.app.goo.gl/Rm1cST3aypaSLn5w9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <div className="text-white text-center bg-black/60 px-4 py-2 rounded-lg">
                      <p className="font-semibold">Buka di Google Maps</p>
                    </div>
                  </a>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5493.862945006016!2d107.02354147624963!3d-6.3298418936597445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69910fe45da71b%3A0x483045882c27c3a0!2sBTR%207%20Cluster%20Dianella!5e1!3m2!1sen!2sid!4v1763138684569!5m2!1sen!2sid" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Masjid Daarussalaam"
                    className="pointer-events-none"
                  >
                  </iframe>
                </div>
                <div className="mt-4 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Petunjuk Arah:</strong> Masjid Daarussalaam terletak di jalan utama yang mudah diakses dengan kendaraan pribadi maupun transportasi umum. Tersedia lahan parkir yang luas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
