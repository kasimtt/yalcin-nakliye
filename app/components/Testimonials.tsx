import { StarIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const REVIEWS = [
  {
    name: "Murat Özdemir",
    location: "Çiğli Ataşehir",
    service: "3+1 Ev Taşıma",
    date: "Ekim 2026",
    comment:
      "Sabah tam söyledikleri saatte kapıdaydılar. 4 kişilik ekip o kadar hızlı ve düzenli çalıştı ki gözlerime inanamadım. Eşyaları son derece özenle taşıdılar, tek bir eşyamız dahi çizilmedi veya kırılmadı. Yalçın Nakliye ailesine sonsuz teşekkürler.",
    rating: 5,
  },
  {
    name: "Elif Karaca",
    location: "Karşıyaka Mavişehir",
    service: "2+1 Ev Taşıma",
    date: "Eylül 2026",
    comment:
      "Taşınmaktan çok korkuyordum ama Yalçın Nakliye sayesinde hiç yorulmadım. Eşyalarımı kalın patpat naylonlarla sarıp bantladılar. Fiyat konusunda da anlaştığımız rakam dışında 1 lira fazladan istemediler. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Kemal Yılmaz",
    location: "Menemen Ulukent → Bornova",
    service: "Ofis & İşyeri Taşımacılığı",
    date: "Ağustos 2026",
    comment:
      "Şirket ofisimizin bilgisayar ve evrak arşivlerini taşıdık. Hafta sonu 1 gün içinde yeni ofise yerleştirdiler ve Pazartesi sabahı çalışmaya başlayabildik. Güvenilir ve dürüst esnaflar.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
            <span>%98 Müşteri Memnuniyeti</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Müşterilerimiz Bizim İçin <span className="text-orange-600">Ne Diyor?</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            İzmir ve Ege bölgesinde tamamladığımız yüzlerce taşınma hikayesinden sadece birkaçı.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col justify-between hover:shadow-lg transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(r.rating)].map((_, idx) => (
                      <StarIcon key={idx} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{r.date}</span>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                  “{r.comment}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{r.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <span>{r.location}</span>
                    <span>•</span>
                    <span className="text-orange-600 font-semibold">{r.service}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
