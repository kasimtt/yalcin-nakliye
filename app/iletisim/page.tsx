import Link from "next/link";
import ContactForm from "./ContactForm";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "İletişim — Yalçın Nakliye | Çiğli & İzmir Nakliyat",
  description:
    "Yalçın Nakliye ile iletişime geçin. Çiğli, Karşıyaka, Menemen ve tüm İzmir bölgesinde ücretsiz ekspertiz ve teklif için telefon, WhatsApp ve form ile 7/24 ulaşın.",
};

export default function IletisimPage() {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Anasayfa
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">İletişim</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>7/24 Kesintisiz Hat</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Bize Kolayca Ulaşın, Hızlıca Fiyat Alın
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              İster telefonla hemen arayın, ister WhatsApp'tan eşyalarınızın fotoğrafını atın. Taşınma planınızı birlikte en uygun şartlarda oluşturalım.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+905399363912"
                className="btn-primary text-sm py-3 px-6 shadow-lg shadow-orange-500/25"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Hemen Ara: +90 539 936 3912</span>
              </a>

              <a
                href="https://wa.me/905399363912?text=Merhaba%2C%20Yal%C3%A7%C4%B1n%20Nakliye%27den%20bilgi%20ve%20fiyat%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp text-sm py-3 px-6 shadow-lg shadow-green-500/20"
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                <span>WhatsApp'tan Yazın</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                İletişim Bilgilerimiz
              </h2>

              <div className="space-y-5">
                <a
                  href="tel:+905399363912"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Telefon / WhatsApp</span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      +90 539 936 3912
                    </span>
                    <span className="text-xs text-emerald-600 block mt-0.5">● 7 Gün 24 Saat Açık</span>
                  </div>
                </a>

                <a
                  href="mailto:abdulbasidyalcin006@gmail.com"
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-Posta</span>
                    <span className="text-xs font-semibold text-slate-800 break-all group-hover:text-orange-600 transition-colors">
                      abdulbasidyalcin006@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Merkez Adres</span>
                    <span className="text-sm font-semibold text-slate-800 leading-snug block">
                      Uğurmumcu mahallesi 8980 sk no:7 d: 3 Çiğli / İzmir
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <ClockIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Çalışma Saatleri</span>
                    <span className="text-sm font-semibold text-slate-800">
                      Haftanın 7 Günü / 24 Saat
                    </span>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      (Resmi ve dini bayramlarda da hizmet verilmektedir)
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Service Areas Badge Box */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Başlıca Hizmet Bölgelerimiz
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                İzmir geneli tüm ilçelere ve Türkiye geneli 81 ile kapalı çelik kasa araçlarımızla nakliyat hizmeti vermekteyiz.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Çiğli", "Karşıyaka", "Menemen", "Bayraklı", "Bornova", "Buca", "Konak", "Gaziemir", "Aliağa", "Torbalı", "Şehirler Arası"].map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Ofis & Hizmet Konumumuz</h3>
              <p className="text-xs text-slate-500 mt-0.5">Çiğli / İzmir merkezli operasyon merkezimiz</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=38.5245,27.0416111111"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs py-2 px-4 inline-flex items-center gap-1.5 self-start"
            >
              <MapPinIcon className="w-3.5 h-3.5 text-orange-600" />
              <span>Google Haritalarda Yol Tarifi Al ↗</span>
            </a>
          </div>

          <div className="h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Yalçın Nakliye - Konum Haritası"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=38.5245,27.0416111111&z=16&output=embed"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
