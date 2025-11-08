import Link from "next/link";
import ContactForm from "./iletisim/ContactForm";
import { TruckIcon, HeartIcon, ClockIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import HeroSlider from "./components/HeroSlider";
import Lightbox from "./components/Lightbox";

export const metadata = {
  title:
    "Yalçın Nakliye — Çiğli, Bayraklı, Menemen ve İzmir Nakliye Hizmetleri",
  description:
    "Yalçın Nakliye — Çiğli, Bayraklı, Menemen ve İzmir bölgesinde güvenilir ev ve ofis taşıma hizmetleri. Asansörlü taşıma ve paketleme hizmetleri. Hemen iletişime geçin.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] font-sans">
      <main className="mx-auto max-w-6xl py-12 px-6">
  <section id="anasayfa" className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 card bg-white/90 dark:bg-surface p-6 shadow-md hero-animate">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              Yalçın Nakliye
            </h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Çiğli, Bayraklı, Menemen ve tüm İzmir bölgesinde profesyonel
              nakliye hizmetleri. Asansörlü taşıma ve paketleme hizmetleri
              hizmetlerle yanınızdayız.
            </p>

            <ul className="mt-6 list-disc pl-5 text-zinc-700 dark:text-zinc-300">
              <li>Ev taşıma ve ofis taşımacılığı</li>
              <li>Asansörlü taşıma ve montaj</li>
              <li>Paketleme, ambalajlama ve özenli taşıma</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link href="/#iletisim" className="btn-primary inline-flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" aria-hidden />
                Teklif Al
              </Link>
              <a href="https://wa.me/905399363912" target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2" aria-label="WhatsApp ile iletişime geç">
                <PhoneIcon className="w-5 h-5" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md">
              <HeroSlider images={["/truck.jpg", "/move-1.jpg", "/move-2.jpg"]} />
            </div>
          </div>
        </section>
        <section id="hakkimizda" className="mt-8 card bg-white/90 dark:bg-surface rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold">Hakkımızda</h2>

          <p className="mt-4 leading-relaxed">
            Yalçın Nakliye olarak Çiğli ve İzmir merkezli hizmetlerimizin
            yanında şehirler arası taşımacılıkta da deneyimliyiz. İzmir'den
            Türkiye içindeki tüm şehirlere düzenli ve güvenli taşıma yapıyoruz.
            Eşyalarınızı özenle paketliyor, montaj ve asansörlü taşıma ihtiyaçlarını
            karşılıyor, teslimatlarda özen gösteriyoruz. Teslimatlarda ekstra
            önlemler alıyor; eşyalarınızı uygun ambalajlama, sabitleme ve
            taşıma teknikleriyle güvenli biçimde naklediyoruz. Tecrübeli
            ekiplerimizle hızlı lojistik ve zamanında teslimat sağlarken, uygun
            fiyat politikamızla müşteri memnuniyetini ön planda tutuyoruz.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 stat-badges">
            <div>
              <span className="stat-badge">
                <span className="badge-icon" aria-hidden>
                  <TruckIcon className="w-4 h-4 text-white" />
                </span>
                +10 Yıl Deneyim
              </span>
            </div>

            <div>
              <span className="stat-badge">
                <span className="badge-icon" aria-hidden>
                  <HeartIcon className="w-4 h-4 text-white" />
                </span>
                %98 Memnuniyet
              </span>
            </div>

            <div>
              <span className="stat-badge">
                <span className="badge-icon" aria-hidden>
                  <ClockIcon className="w-4 h-4 text-white" />
                </span>
                7/24 Destek
              </span>
            </div>
          </div>

          <p className="hakkimizda-quote">“Hızlı ve dikkatli taşıdılar — kesinlikle tavsiye ederim.”</p>
          
          {/* Galeri kaldırıldı — Hakkımızda bölümünde fotoğraf gösterilmeyecek */}
        </section>

        <section id="iletisim" className="mt-8 card bg-white/90 dark:bg-surface rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold">İletişim</h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300">
            Yalçın Nakliye ile ücretsiz keşif ve teklif için formu doldurun veya doğrudan arayın.
          </p>

          <div className="mt-4 text-zinc-700 dark:text-zinc-300">
            <p>Telefon: <a href="tel:+905399363912" className="font-medium">+905399363912</a></p>
            <p className="mt-2">E-posta: <a href="mailto:abdulbasidyalcin006@gmail.com">abdulbasidyalcin006@gmail.com</a></p>
            <p className="mt-2">Adres: Uğurmumcu mahallesi 8980 sk no:7 d: 3 Çiğli / İzmir</p>
          </div>

          <ContactForm />

          <div className="mt-6">
            <a
              className="inline-block text-blue-600"
              href="https://www.google.com/maps/search/?api=1&query=38.5245,27.0416111111"
              target="_blank"
              rel="noreferrer"
            >
              Haritada Gör (Google Maps)
            </a>

            <div className="mt-4 w-full overflow-hidden rounded">
              <div className="h-64 sm:h-80 md:h-96 w-full">
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

          <script type="application/ld+json">
            {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Yalçın Nakliye",
  "telephone": "+905399363912",
  "areaServed": ["Çiğli", "Bayraklı", "Menemen", "İzmir"],
  "description": "Yalçın Nakliye - Çiğli ve İzmir çevresinde ev ve ofis taşıma hizmetleri. Şehirler arası nakliye de yapılır.",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.5245",
    "longitude": "27.0416111111"
  },
  "hasMap": "https://www.google.com/maps/search/?api=1&query=38.5245,27.0416111111"
}`}
          </script>
        </section>

        <section className="mt-12 card bg-white/90 dark:bg-surface rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold">Hizmet Bölgelerimiz</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            Öne çıkan bölgeler: <strong>Çiğli</strong>, <strong>Bayraklı</strong>,{' '}
            <strong>Menemen</strong> ve tüm <strong>İzmir</strong> çevresi. İzmirden
            şehirler arası nakliye hizmetleri de sunmaktayız.
          </p>
        </section>
      </main>
      {/* Lightbox provider mounted client-side to handle data-lightbox clicks */}
      <Lightbox />
    </div>
  );
}
