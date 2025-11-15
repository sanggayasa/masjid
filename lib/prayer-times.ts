export interface PrayerTime {
  name: string;
  time: string;
}

export function getPrayerTimes(): PrayerTime[] {
  const today = new Date();

  return [
    { name: 'Subuh', time: '04:45' },
    { name: 'Dzuhur', time: '12:00' },
    { name: 'Ashar', time: '15:15' },
    { name: 'Maghrib', time: '18:10' },
    { name: 'Isya', time: '19:25' },
  ];
}

export function getCurrentPrayer(): string {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const prayerTimes = [
    { name: 'Subuh', minutes: 4 * 60 + 45 },
    { name: 'Dzuhur', minutes: 12 * 60 },
    { name: 'Ashar', minutes: 15 * 60 + 15 },
    { name: 'Maghrib', minutes: 18 * 60 + 10 },
    { name: 'Isya', minutes: 19 * 60 + 25 },
  ];

  for (let i = prayerTimes.length - 1; i >= 0; i--) {
    if (currentTime >= prayerTimes[i].minutes) {
      return prayerTimes[i].name;
    }
  }

  return 'Subuh';
}
