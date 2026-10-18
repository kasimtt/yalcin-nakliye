import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ShieldCheckIcon, ClockIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/20">
                Y
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">YALÇIN</span>
                <span className="text-xl font-bold text-orange-500 ml-1">NAKLİYE</span>
                <p className="text-xs text-slate-400 font-medium">İzmir & Şehirler Arası Taşıma</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Çiğli, Karşıyaka, Menemen, Bayraklı ve tüm Türkiye genelinde güvenilir, sigortalı ve profesyonel evden eve nakliyat çözümleri sunuyoruz.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                7/24 Kesintisiz Hizmet
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-4 bg-orange-500 rounded-sm"></span>
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#anasayfa" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-500 text-xs">›</span> Anasayfa
                </Link>
              </li>
              <li>
                <Link href="/#hizmetler" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-500 text-xs">›</span> Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/#neden-biz" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-500 text-xs">›</span> Neden Yalçın Nakliye?
                </Link>
              </li>
              <li>
                <Link href="/#galeri" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-500 text-xs">›</span> Araç Filomuz & Galeri
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-500 text-xs">›</span> Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="text-orange-500 text-xs">›</span> İletişim & Harita
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-4 bg-orange-500 rounded-sm"></span>
              Hizmet Bölgeleri
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <span className="hover:text-white transition-colors">• Çiğli Nakliyat</span>
              <span className="hover:text-white transition-colors">• Karşıyaka Nakliyat</span>
              <span className="hover:text-white transition-colors">• Menemen Nakliyat</span>
              <span className="hover:text-white transition-colors">• Bayraklı Nakliyat</span>
              <span className="hover:text-white transition-colors">• Bornova Nakliyat</span>
              <span className="hover:text-white transition-colors">• Buca Nakliyat</span>
              <span className="hover:text-white transition-colors">• Konak Nakliyat</span>
              <span className="hover:text-white transition-colors">• Gaziemir Nakliyat</span>
              <span className="hover:text-white transition-colors">• Aliağa Nakliyat</span>
              <span className="hover:text-white transition-colors">• Şehirler Arası</span>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              * İzmir merkezli tüm ilçelere ve Türkiye geneline sevkiyatımız mevcuttur.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-4 bg-orange-500 rounded-sm"></span>
              İletişim & Konum
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="tel:+905399363912"
                  className="flex items-start gap-3 group text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Telefon / WhatsApp</span>
                    <span className="font-semibold text-white">+90 539 936 3912</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:abdulbasidyalcin006@gmail.com"
                  className="flex items-start gap-3 group text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                    <EnvelopeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">E-Posta</span>
                    <span className="font-medium text-slate-200 text-xs break-all">abdulbasidyalcin006@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Adres</span>
                    <span className="text-xs text-slate-300 leading-snug">
                      Uğurmumcu Mah. 8980 Sk. No:7 D:3 Çiğli / İzmir
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Yalçın Nakliye. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <span>Güvenli & Sigortalı Nakliyat</span>
            <span>•</span>
            <span>İzmir Evden Eve Taşımacılık</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
