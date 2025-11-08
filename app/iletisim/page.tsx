import ContactForm from "./ContactForm";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const metadata = {
  title: "İletişim — Yalçın Nakliye (Çiğli, Bayraklı, Menemen, İzmir)",
  description:
    "Yalçın Nakliye ile iletişime geçin — Çiğli, Bayraklı, Menemen ve İzmir bölgesinde ücretsiz keşif ve teklif. Telefon, e-posta ve iletişim formu.",
};

export default function IletisimPage() {
  
  // Contact form is a client component (see ContactForm.tsx)
  return (
    <div className="min-h-screen bg-[var(--background)] py-12 px-6">
      <main className="mx-auto max-w-6xl">
        <header className="rounded-2xl overflow-hidden bg-gradient-to-r from-[var(--accent)]/10 to-transparent p-8 mb-8">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand)]">İletişim</h1>
              <p className="mt-2 text-[var(--muted)] max-w-xl">
                Ücretsiz keşif ve doğru fiyatlandırma için hemen bize ulaşın. Aşağıdaki formu doldurabilir veya doğrudan arayarak hızlıca fiyat alabilirsiniz.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <a href="tel:+905399363912" className="btn-primary inline-flex items-center gap-2"><PhoneIcon className="w-5 h-5" aria-hidden />Ara: +90 539 936 3912</a>
              <a href="https://wa.me/905399363912" target="_blank" rel="noreferrer" className="btn-ghost inline-flex items-center gap-2"><PhoneIcon className="w-5 h-5" aria-hidden />WhatsApp</a>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold">İletişim Bilgileri</h2>
            <p className="mt-3 text-[var(--muted)]">Hızlıca aramak için telefon numaramızdan ulaşabilirsiniz.</p>

            <div className="mt-4 space-y-3">
              <div>
                <div className="text-sm text-[var(--muted)]">Telefon</div>
                <a href="tel:+905399363912" className="text-lg font-medium text-[var(--brand)]">+90 539 936 3912</a>
              </div>

              <div>
                <div className="text-sm text-[var(--muted)]">E-posta</div>
                <a href="mailto:abdulbasidyalcin006@gmail.com" className="text-sm text-[var(--brand)]">abdulbasidyalcin006@gmail.com</a>
              </div>

              <div>
                <div className="text-sm text-[var(--muted)]">Adres</div>
                <div className="text-sm text-[var(--brand)]">Uğurmumcu mah 8980 sk no 7 d 3, Çiğli / İzmir</div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-[var(--brand)]">Hizmet Bölgelerimiz</h3>
              <p className="text-sm text-[var(--muted)] mt-2">Çiğli, Bayraklı, Menemen ve tüm İzmir bölgesi. Ayrıca İzmir'den şehirler arası taşımacılık yapıyoruz.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <ContactForm />
          </div>
        </section>

        <section className="mt-8 bg-white rounded-2xl p-4 shadow-md">
          <h3 className="text-lg font-semibold">Konum</h3>
          <div className="mt-3 w-full overflow-hidden rounded">
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
        </section>

        <script type="application/ld+json">
          {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Yalçın Nakliye",
  "telephone": "+905399363912",
  "areaServed": ["Çiğli", "Bayraklı", "Menemen", "İzmir"],
  "description": "Yalçın Nakliye - Çiğli ve İzmir çevresinde ev ve ofis taşıma hizmetleri. Taşıma ve paketleme hizmetleri.",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.5245",
    "longitude": "27.0416111111"
  },
  "hasMap": "https://www.google.com/maps/search/?api=1&query=38.5245,27.0416111111"
}`}
        </script>
      </main>
    </div>
  );
}
