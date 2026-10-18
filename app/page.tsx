import Link from "next/link";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import ContactForm from "./iletisim/ContactForm";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  TruckIcon,
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Yalçın Nakliye — Çiğli, Karşıyaka, Menemen & İzmir Evden Eve Nakliyat",
  description:
    "Yalçın Nakliye: Çiğli, Karşıyaka, Menemen ve tüm İzmir bölgesinde güvenilir evden eve, ofis ve şehirler arası taşımacılık hizmetleri. Özenli ambalajlama ve güvenli nakliye.",
};

export default function Home() {
  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <Services />

      {/* 3. Why Us & Process */}
      <WhyUs />

      {/* 5. Real Gallery Showcase */}
      <Gallery />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. FAQ */}
      <Faq />

      {/* 8. Contact & Map Section */}
      <section id="iletisim" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <PhoneIcon className="w-3.5 h-3.5" />
              <span>İletişim & Konum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Bize Ulaşın, <span className="text-orange-500">Taşınmanızı Kolaylaştıralım</span>
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Ücretsiz ekspertiz, randevu oluşturma veya sorularınız için telefon, WhatsApp ya da form üzerinden 7/24 bize ulaşabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 6 cols: Info Cards & Map */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Phone Card */}
                <a
                  href="tel:+905399363912"
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-orange-500 transition-all group block"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 block mb-0.5">Telefon & WhatsApp</span>
                  <span className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    +90 539 936 3912
                  </span>
                  <span className="text-[11px] text-emerald-400 block mt-1 font-medium">● 7/24 Yanıt Veriyoruz</span>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:abdulbasidyalcin006@gmail.com"
                  className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-orange-500 transition-all group block"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <EnvelopeIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-slate-400 block mb-0.5">E-Posta Adresi</span>
                  <span className="text-xs font-semibold text-white break-all group-hover:text-orange-400 transition-colors">
                    abdulbasidyalcin006@gmail.com
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">Teklif talepleri için</span>
                </a>

              </div>

              {/* Address card */}
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Merkez Ofis & Garaj Adresi</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Uğurmumcu mahallesi 8980 sk no:7 d: 3 Çiğli / İzmir
                    </p>
                    <p className="text-[11px] text-slate-400 mt-2">
                      Çiğli, Menemen, Karşıyaka ve tüm İzmir genelinde aynı gün araç yönlendirmesi yapılabilmektedir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800">
                <div className="px-5 py-3 border-b border-slate-700 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">Çiğli / İzmir Hizmet Noktamız</span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=38.5245,27.0416111111"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    Google Haritalarda Aç ↗
                  </a>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <iframe
                    title="Yalçın Nakliye - Konum"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps?q=38.5245,27.0416111111&z=16&output=embed"
                  />
                </div>
              </div>

            </div>

            {/* Right 6 cols: Form */}
            <div className="lg:col-span-6">
              <ContactForm />
            </div>

          </div>

          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "MovingCompany",
                "name": "Yalçın Nakliye",
                "image": "https://yalcinnakliye.com/truck.jpg",
                "telephone": "+905399363912",
                "email": "abdulbasidyalcin006@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Uğurmumcu Mah. 8980 Sk. No:7 D:3",
                  "addressLocality": "Çiğli",
                  "addressRegion": "İzmir",
                  "addressCountry": "TR",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "38.5245",
                  "longitude": "27.0416111111",
                },
                "areaServed": ["Çiğli", "Karşıyaka", "Menemen", "Bayraklı", "Bornova", "İzmir", "Türkiye"],
                "openingHours": "Mo-Su 00:00-24:00",
                "priceRange": "$$",
              }),
            }}
          />
        </div>
      </section>

    </div>
  );
}
