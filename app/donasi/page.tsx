import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IslamicPattern } from '@/components/islamic-pattern';
import { Building2, CreditCard, FileText } from 'lucide-react';
import Image from 'next/image';
import QrisImage from '@/images/qris.jpg';
import { supabase } from '@/lib/supabase';

async function getFinancialReports() {
  const { data } = await supabase
    .from('financial_reports')
    .select('*')
    .order('year', { ascending: false })
    .order('month', { ascending: false })
    .limit(6);

  return data || [];
}

export default async function DonasiPage() {
  const financialReports = await getFinancialReports();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getMonthName = (month: number) => {
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return months[month - 1];
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <IslamicPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Donasi Online</h1>
            <p className="text-xl text-emerald-100">
              Mari bersama membangun dan memakmurkan masjid
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-emerald-600">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Image src={QrisImage} alt="QRIS" width={24} height={24} />
                <span>QRIS Payment</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-64 h-80 bg-white border-4  rounded-lg flex items-center justify-center mb-4">
                    <Image src={QrisImage} alt="QRIS Code" width={256} height={256} className="rounded" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Mendukung semua aplikasi pembayaran digital Indonesia
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-emerald-600">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-emerald-600" />
                <span>Transfer Bank</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Bank Syariah Indonesia</span>
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm opacity-90">Nomor Rekening</div>
                    <div className="text-2xl font-bold tracking-wider">7216282177</div>
                    <div className="text-sm opacity-90 mt-4">Atas Nama</div>
                    <div className="text-lg font-semibold">DKM Masjid Daarussalaam</div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Catatan:</strong> Mohon konfirmasi donasi Anda melalui WhatsApp ke nomor takmir untuk memastikan donasi tercatat dengan baik.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-emerald-600" />
              <span>Proposal Pembangunan</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Renovasi dan Perluasan Masjid Daarussalaam
              </h3>
              <p className="text-gray-700 mb-4">
                Kami mengajak seluruh jamaah dan donatur untuk berpartisipasi dalam program renovasi dan perluasan Masjid Daarussalaam. Proposal lengkap dapat diunduh untuk melihat detail rencana pembangunan dan alokasi dana.
              </p>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="/pdf/Proposal Pembangunan V2 - Copy.pdf"
                className="w-full h-96"
                title="Proposal Pembangunan"
              />
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="bg-emerald-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Barakallahu Fiikum</h3>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Semoga Allah membalas kebaikan Anda berlipat ganda dan menjadikan harta yang diinfakkan sebagai keberkahan di dunia dan akhirat
          </p>
        </div>
      </section>
    </div>
  );
}
