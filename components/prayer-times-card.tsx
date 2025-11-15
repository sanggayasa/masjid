'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { getPrayerTimes, getCurrentPrayer } from '@/lib/prayer-times';
import { useEffect, useState } from 'react';

export function PrayerTimesCard() {
  const [currentPrayer, setCurrentPrayer] = useState('');
  const prayerTimes = getPrayerTimes();

  useEffect(() => {
    setCurrentPrayer(getCurrentPrayer());
    const interval = setInterval(() => {
      setCurrentPrayer(getCurrentPrayer());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-0">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Jadwal Sholat Hari Ini</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {prayerTimes.map((prayer) => (
            <div
              key={prayer.name}
              className={`flex justify-between items-center py-2 px-3 rounded-lg transition-all ${
                currentPrayer === prayer.name
                  ? 'bg-white/20 border border-white/30'
                  : 'bg-white/5'
              }`}
            >
              <span className="font-medium">{prayer.name}</span>
              <span className="text-lg font-bold">{prayer.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-emerald-100 text-center">
          Waktu sholat berdasarkan lokasi Jakarta
        </div>
      </CardContent>
    </Card>
  );
}
