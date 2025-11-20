'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

type Program = {
  id: string | number;
  title: string;
  image_url?: string | null;
  description?: string | null;
  schedule?: string | null;
  category?: string | null;
};

type Props = Readonly<{ groups: Record<string, Program[]> }>;

export default function ProgramsAccordion(props: Props) {
  const { groups } = props;
  const [openId, setOpenId] = useState<string | number | null>(null);

  const toggle = (id: string | number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const renderProgram = (program: Program) => {
    const isOpen = openId === program.id;
    return (
      <Card key={program.id} className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <button
            type="button"
            onClick={() => toggle(program.id)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(program.id); }}
            className="w-full text-left cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <CardTitle className="text-xl">{program.title}</CardTitle>
              <div className="flex items-center space-x-2">
                {program.category && <Badge className="bg-emerald-600">{program.category}</Badge>}
              </div>
            </div>
          </button>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col">
              <div className="w-full h-24 sm:h-28 md:h-32 lg:h-36 bg-gray-100 rounded overflow-hidden relative flex items-center justify-center">
                {program.image_url ? (
                  <Image
                    src={program.image_url}
                    alt={program.title}
                    fill
                    className="object-contain"
                    loading="lazy"
                    unoptimized
                  />
                ) : (
                  <div className="text-sm text-gray-500">Tidak ada gambar</div>
                )}
              </div>

              {isOpen && (
                <div className="mt-4">
                  <div className="w-full rounded overflow-hidden relative h-[520px] sm:h-[600px] md:h-[700px] bg-gray-100 flex items-center justify-center">
                    {program.image_url ? (
                      <Image
                        src={program.image_url}
                        alt={program.title}
                        fill
                        className="object-contain"
                        loading="lazy"
                        unoptimized
                      />
                    ) : (
                      <div className="text-sm text-gray-500">Tidak ada gambar</div>
                    )}
                  </div>

                  {program.description && (
                    <p className="text-gray-700 mt-4">{program.description}</p>
                  )}

                  {program.schedule && (
                    <div className="flex items-center text-sm text-gray-600 mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{program.schedule}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      {Object.entries(groups).map(([sectionName, programs]) => (
        <section key={sectionName}>
          <div className="flex items-center space-x-2 mb-6">
            <h2 className="text-3xl font-bold text-gray-900 capitalize">{sectionName}</h2>
          </div>

          {programs.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center text-gray-600">{sectionName} akan segera ditambahkan</CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {programs.map(renderProgram)}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
