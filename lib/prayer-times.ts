export interface PrayerTime {
  name: string;
  time: string;
}
export async function fetchPrayerTimesJakarta(date?: Date): Promise<PrayerTime[]> {
  try {
    const url = new URL('https://api.aladhan.com/v1/timingsByCity');
    url.searchParams.set('city', 'Jakarta');
    url.searchParams.set('country', 'Indonesia');
    url.searchParams.set('method', '2');

    if (date) {
      const dd = String(date.getDate()).padStart(2, '0');
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const yyyy = date.getFullYear();
      url.searchParams.set('date', `${dd}-${mm}-${yyyy}`);
    }

    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('Failed to fetch prayer times');
    const data = await res.json();

    // Map API fields to local names
    const timings = data?.data?.timings;
    if (!timings) throw new Error('Invalid response');

    const mapName = (key: string) => {
      switch (key) {
        case 'Fajr':
          return 'Subuh';
        case 'Dhuhr':
          return 'Dzuhur';
        case 'Asr':
          return 'Ashar';
        case 'Maghrib':
          return 'Maghrib';
        case 'Isha':
          return 'Isya';
        default:
          return key;
      }
    };

    const ordered = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    return ordered.map((k) => ({ name: mapName(k), time: timings[k].slice(0,5) }));
  } catch (err) {
    // Log the error then fallback to sensible Jakarta defaults if network fails
    // eslint-disable-next-line no-console
    console.error('fetchPrayerTimesJakarta error:', err);
    return [
      { name: 'Subuh', time: '04:45' },
      { name: 'Dzuhur', time: '12:00' },
      { name: 'Ashar', time: '15:15' },
      { name: 'Maghrib', time: '18:10' },
      { name: 'Isya', time: '19:25' },
    ];
  }
}

export function getCurrentPrayerFromTimes(prayerTimes: PrayerTime[], now?: Date): string {
  // Normalize now to Asia/Jakarta timezone
  const localNow = now
    ? new Date(now)
    : new Date();
  const jakartaNow = new Date(
    localNow.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
  );

  const currentMinutes = jakartaNow.getHours() * 60 + jakartaNow.getMinutes();

  const timesInMinutes = prayerTimes.map((p) => {
    const [hh, mm] = p.time.split(':').map(Number);
    return { name: p.name, minutes: hh * 60 + mm };
  });

  for (let i = timesInMinutes.length - 1; i >= 0; i--) {
    if (currentMinutes >= timesInMinutes[i].minutes) return timesInMinutes[i].name;
  }

  return prayerTimes[0]?.name ?? 'Subuh';
}
