import {
  HomeModernIcon,
  TruckIcon,
  BuildingOffice2Icon,
  CubeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const SERVICES = [
  {
    id: "evden-eve",
    title: "Evden Eve Nakliyat",
    desc: "Eşyalarınız profesyonel ambalaj malzemeleriyle sarılır, deneyimli taşıma personelimizle yeni evinize güvenle ve hasarsız ulaştırılır.",
    icon: HomeModernIcon,
    features: ["Balonlu naylon & streç sarım", "Temiz ve koruyucu battaniyeler", "Kırılacak eşyalar için özenli taşıma"],
    badge: "En Çok Tercih Edilen",
  },
  {
    id: "sehirler-arasi",
    title: "Şehirler Arası Nakliyat",
    desc: "İzmir'den Türkiye'nin 81 iline kapalı çelik kasa ve tenteli araçlarımızla güvenli, sözleşmeli ve zamanında teslimat.",
    icon: TruckIcon,
    features: ["Gününde araç yükleme & yola çıkış", "Telefonla anlık bilgilendirme", "Sözleşmeli & güvenli taşıma"],
    badge: "Türkiye Geneli",
  },
  {
    id: "ofis-tasima",
    title: "Ofis & İşyeri Taşımacılığı",
    desc: "İş kaybı yaşamamanız için esnek planlamayla şirket evrakları, elektronik cihazlar ve çalışma masalarının düzenli sevkiyatı.",
    icon: BuildingOffice2Icon,
    features: ["Arşiv ve dosya düzeni", "Elektronik cihazların hassas taşınması", "Planlı ve hızlı nakliye"],
    badge: "Kurumsal Çözüm",
  },
  {
    id: "parca-esya",
    title: "Parça Eşya Taşımacılığı",
    desc: "Tüm aracı tutmanıza gerek kalmadan, tekil mobilya, beyaz eşya veya öğrenci evi taşımalarında bütçe dostu güvenilir taşıma.",
    icon: CubeIcon,
    features: ["Ekonomik fiyat avantajı", "Aynı güzergahta ortak taşıma", "Hızlı randevu ve teslimat"],
    badge: "Ekonomik",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            Hizmet Yelpazemiz
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            İhtiyacınıza Özel Profesyonel <span className="text-orange-600">Taşıma Çözümleri</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Yalçın Nakliye olarak her taşınmanın kendine özel olduğunu biliyoruz. Eşyalarınızın güvenliği için doğru ekipman ve uzman kadroyla yanınızdayız.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="modern-card p-7 flex flex-col justify-between group hover:border-orange-300 relative overflow-hidden"
              >
                {/* Subtle top accent gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 group-hover:bg-orange-500 text-orange-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-orange-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {s.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/905399363912?text=Merhaba%2C%20web%20sitenizdeki%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 group-hover:text-orange-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Fiyat & Detay Sor</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
