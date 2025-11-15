import { Card, CardContent } from '@/components/ui/card';
import { IslamicPattern } from '@/components/islamic-pattern';
import { BookOpen, Calendar, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

async function getArticles() {
  const { data } = await supabase
    .from('articles')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  return data || [];
}

export default async function ArtikelPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white overflow-hidden">
        <IslamicPattern />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Artikel Islami</h1>
            <p className="text-xl text-emerald-100">
              Kumpulan artikel dan tulisan seputar Islam untuk memperdalam ilmu agama
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-lg transition-shadow overflow-hidden group"
              >
                {article.image_url && (
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex flex-col space-y-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(article.published_at).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <Link
                      href={`/artikel/${article.slug}`}
                      className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Belum ada artikel tersedia</p>
              <p className="text-sm text-gray-500">Artikel Islami akan segera ditambahkan</p>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
