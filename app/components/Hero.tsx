"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  ShieldCheckIcon,
  TruckIcon,
  SparklesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section id="anasayfa" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100">
      
      {/* Background ambient decorative blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold text-slate-800">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>İzmir Çiğli & Ege Bölgesi Nakliyatı</span>
              <span className="text-slate-300">•</span>
              <span className="text-orange-600 font-semibold">7/24 Hizmet</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Eşyalarınız Güvende, Taşınmak Artık <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">Çok Kolay!</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Çiğli, Karşıyaka, Menemen, Bayraklı ve tüm Türkiye genelinde profesyonel ambalajlama, güvenli taşıma ve hasarsız evden eve nakliyat çözümleri sunuyoruz.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/#iletisim"
                className="btn-primary w-full sm:w-auto text-base py-3.5 px-6 shadow-xl shadow-orange-500/25 group"
              >
                <span>Hemen Teklif Al</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://wa.me/905399363912?text=Merhaba%2C%20Yal%C3%A7%C4%B1n%20Nakliye%27den%20evden%20eve%20ta%C5%9F%C4%B1nma%20fiyat%C4%B1%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-base py-3.5 px-6 shadow-lg shadow-green-500/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.45 1.744 1.728 2.257.299.12.537.192.722.251.302.096.577.083.794.051.242-.036.745-.304.85-.598.105-.294.105-.546.074-.598-.031-.052-.116-.087-.246-.152z" />
                </svg>
                <span>WhatsApp İletişim</span>
              </a>

              <a
                href="tel:+905399363912"
                className="btn-secondary w-full sm:w-auto text-base py-3.5 px-6"
              >
                <PhoneIcon className="w-4 h-4 text-orange-600" />
                <span>0539 936 3912</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <StarIcon className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <span className="block font-black text-slate-900 text-sm">4.9 / 5.0</span>
                  <span className="text-[11px] text-slate-500">Müşteri Memnuniyeti</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <TruckIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-black text-slate-900 text-sm">+10 Yıl</span>
                  <span className="text-[11px] text-slate-500">Sektör Tecrübesi</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheckIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-black text-slate-900 text-sm">%100 Güven</span>
                  <span className="text-[11px] text-slate-500">Hasarsız Taşıma</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <ClockIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-black text-slate-900 text-sm">Zamanında</span>
                  <span className="text-[11px] text-slate-500">Dakik Teslimat</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Back card decoration */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-300 opacity-20 blur-xl"></div>

              {/* Main Card */}
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border border-slate-200 overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900">
                  <Image
                    src="/truck.jpg"
                    alt="Yalçın Nakliye Taşıma Aracı"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-orange-600 text-[11px] font-bold tracking-wide uppercase mb-1">
                      Kendi Araç Filomuz
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-100">
                      Özel Tasarım Çelik Kasa & Tenteli Ford Transit Nakliye Aracı
                    </p>
                  </div>
                </div>

                {/* Floating pill features */}
                <div className="mt-3.5 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckBadgeIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Ücretsiz Ekspertiz</span>
                  </div>

                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckBadgeIcon className="w-5 h-5 text-orange-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Özenli Paketleme</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
