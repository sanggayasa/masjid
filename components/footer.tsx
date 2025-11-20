import Link from 'next/link';
import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Play } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">Masjid Daarussalaam</div>
                <div className="text-sm text-gray-400">Beriman, Berilmu, Beramal</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Masjid Daarussalaam adalah pusat kegiatan ibadah dan pendidikan Islam yang melayani masyarakat dengan berbagai program kajian, madrasah, dan kegiatan sosial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Play className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-emerald-500 transition-colors">Beranda</Link></li>
              <li><Link href="/profil" className="hover:text-emerald-500 transition-colors">Profil Masjid</Link></li>
              <li><Link href="/program" className="hover:text-emerald-500 transition-colors">Program & Kegiatan</Link></li>
              <li><Link href="/donasi" className="hover:text-emerald-500 transition-colors">Donasi</Link></li>
              <li><Link href="/galeri" className="hover:text-emerald-500 transition-colors">Galeri</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/Rm1cST3aypaSLn5w9" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors cursor-pointer">Perumahan BTR 7B, Cluster Dianella, Burangkeng, Setu, Bekasi Timur</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="https://wa.me/6287789513706" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors cursor-pointer">Acep +62 8778 9513 706</a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="https://wa.me/6285771838631" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors cursor-pointer">Jayanti +62 8577 1838 631</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>dianelladarusalam@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Play className="h-4 w-4 flex-shrink-0" />
                <a href="https://www.youtube.com/@DianellaDaarussalaam" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors cursor-pointer">@DianellaDaarussalaam</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Masjid Daarussalaam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
