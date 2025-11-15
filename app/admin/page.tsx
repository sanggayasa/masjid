'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { FileText, Users, BookOpen, Calendar, Image as ImageIcon, DollarSign, LogOut } from 'lucide-react';

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
      return;
    }
    setUser(session.user);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Selamat datang, {user?.email}</p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Keluar
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/financial-reports">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-emerald-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                  <span>Laporan Keuangan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Kelola laporan pemasukan dan pengeluaran masjid</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/announcements">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Pengumuman</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tambah dan kelola pengumuman masjid</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/articles">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-purple-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  <span>Artikel</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tulis dan publikasikan artikel Islami</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/programs">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-orange-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <span>Program & Kegiatan</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Kelola program kajian, madrasah, dan event</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/committee">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-red-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-red-600" />
                  <span>Struktur Pengurus</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Kelola data pengurus DKM masjid</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/gallery">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer border-t-4 border-pink-600">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ImageIcon className="h-6 w-6 text-pink-600" />
                  <span>Galeri</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Upload dan kelola foto & video kegiatan</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
