'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/lib/supabase';
import { ArrowLeft, Plus, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function FinancialReportsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
    income: 0,
    expenses: 0,
    balance: 0,
  });

  useEffect(() => {
    checkUser();
    loadReports();
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

  const loadReports = async () => {
    const { data } = await supabase
      .from('financial_reports')
      .select('*')
      .order('year', { ascending: false })
      .order('month', { ascending: false });

    if (data) {
      setReports(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const balance = formData.income - formData.expenses;
    const reportData = {
      ...formData,
      balance,
      created_by: user?.id,
    };

    if (editingId) {
      const { error } = await supabase
        .from('financial_reports')
        .update(reportData)
        .eq('id', editingId);

      if (!error) {
        setShowForm(false);
        setEditingId(null);
        loadReports();
        resetForm();
      }
    } else {
      const { error } = await supabase
        .from('financial_reports')
        .insert([reportData]);

      if (!error) {
        setShowForm(false);
        loadReports();
        resetForm();
      }
    }
  };

  const handleEdit = (report: any) => {
    setFormData({
      month: report.month,
      year: report.year,
      income: report.income,
      expenses: report.expenses,
      balance: report.balance,
    });
    setEditingId(report.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Yakin ingin menghapus laporan ini?')) {
      const { error } = await supabase
        .from('financial_reports')
        .delete()
        .eq('id', id);

      if (!error) {
        loadReports();
      }
    }
  };

  const resetForm = () => {
    setFormData({
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      income: 0,
      expenses: 0,
      balance: 0,
    });
  };

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

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/admin">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Laporan Keuangan</h1>
                <p className="text-sm text-gray-600">Kelola laporan pemasukan dan pengeluaran</p>
              </div>
            </div>
            {!showForm && (
              <Button onClick={() => setShowForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Tambah Laporan
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingId ? 'Edit Laporan' : 'Tambah Laporan Baru'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="month">Bulan</Label>
                    <select
                      id="month"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      value={formData.month}
                      onChange={(e) => setFormData({ ...formData, month: parseInt(e.target.value) })}
                      required
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                        <option key={month} value={month}>
                          {getMonthName(month)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="year">Tahun</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="income">Pemasukan (Rp)</Label>
                  <Input
                    id="income"
                    type="number"
                    value={formData.income}
                    onChange={(e) => setFormData({ ...formData, income: parseFloat(e.target.value) })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="expenses">Pengeluaran (Rp)</Label>
                  <Input
                    id="expenses"
                    type="number"
                    value={formData.expenses}
                    onChange={(e) => setFormData({ ...formData, expenses: parseFloat(e.target.value) })}
                    required
                  />
                </div>
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Saldo:</strong> {formatCurrency(formData.income - formData.expenses)}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button type="submit">
                    {editingId ? 'Update' : 'Simpan'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowForm(false);
                      setEditingId(null);
                      resetForm();
                    }}
                  >
                    Batal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Daftar Laporan Keuangan</CardTitle>
          </CardHeader>
          <CardContent>
            {reports.length > 0 ? (
              <div className="space-y-4">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {getMonthName(report.month)} {report.year}
                      </h3>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(report)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(report.id)}
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1">Pemasukan</div>
                        <div className="font-semibold text-emerald-600">
                          {formatCurrency(report.income)}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Pengeluaran</div>
                        <div className="font-semibold text-red-600">
                          {formatCurrency(report.expenses)}
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Saldo</div>
                        <div className="font-semibold text-blue-600">
                          {formatCurrency(report.balance)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-600">
                Belum ada laporan keuangan
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
