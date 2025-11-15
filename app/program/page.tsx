import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { IslamicPattern } from '@/components/islamic-pattern';
import { BookOpen, Users, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
// Removed incorrect module import for RencanaImg
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
  const event = programs.filter((p) => p.category === 'event');

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <IslamicPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Program & Kegiatan</h1>
            <p className="text-xl text-emerald-100">
              Berbagai kegiatan untuk meningkatkan keimanan dan keilmuan
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Kajian Rutin</h2>
          </div>

          {kajian.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kajian.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  {program.image_url && (
                    <div className="h-48 bg-gray-200 overflow-hidden rounded-t-lg">
                      <img
                        src={program.image_url}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge className="bg-emerald-600">Kajian</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.schedule && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.schedule}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center text-gray-600">
                Program kajian akan segera ditambahkan
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Users className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Program Pendidikan</h2>
          </div>

          {madrasah.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {madrasah.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  {program.image_url && (
                    <div className="h-48 bg-gray-200 overflow-hidden rounded-t-lg">
                      <img
                        src={program.image_url}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge className="bg-blue-600">Madrasah</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.schedule && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.schedule}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center text-gray-600">
                Program madrasah akan segera ditambahkan
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Rencana Pembangunan</h2>
          </div>

          {event.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden rounded-t-lg relative">
                    {program.image_url ? (
                      // keep showing remote image when provided
                      <img
                        src={program.image_url}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // fallback to local rencana pembangunan image
                        <Image
                          src="/images/rencana-pembangunan.jpg"
                          alt="Rencana Pembangunan"
                          fill
                          className="object-cover"
                        />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge className="bg-orange-600">Event</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.schedule && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.schedule}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center text-gray-600">
                  Event akan segera ditambahkan
              </CardContent>
            </Card>
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Humas</h2>
          </div>

          {event.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden rounded-t-lg relative">
                    {program.image_url ? (
                      // keep showing remote image when provided
                      <img
                        src={program.image_url}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // fallback to local rencana pembangunan image
                        <Image
                          src="/images/rencana-pembangunan.jpg"
                          alt="Rencana Pembangunan"
                          fill
                          className="object-cover"
                        />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge className="bg-orange-600">Event</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.schedule && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.schedule}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center text-gray-600">
                Humas akan segera ditambahkan
              </CardContent>
            </Card>
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="h-6 w-6 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">Rukem</h2>
          </div>

          {event.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 overflow-hidden rounded-t-lg relative">
                    {program.image_url ? (
                      // keep showing remote image when provided
                      <img
                        src={program.image_url}
                        alt={program.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // fallback to local rencana pembangunan image
                        <Image
                          src="/images/rencana-pembangunan.jpg"
                          alt="Rencana Pembangunan"
                          fill
                          className="object-cover"
                        />
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge className="bg-orange-600">Event</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    {program.schedule && (
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{program.schedule}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center text-gray-600">
                Rukem akan segera ditambahkan
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ingin Berpartisipasi?</h3>
              <p className="text-emerald-100 mb-6">
                Hubungi takmir masjid untuk informasi lebih lanjut tentang program dan kegiatan
              </p>
              <p className="text-lg font-semibold">WhatsApp: +62 812-3456-7890</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
