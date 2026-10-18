import {
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const REASONS = [
  {
    title: "Sürpriz Ek Ücret Yok",
    desc: "Anlaştığımız fiyat neyse o geçerlidir. Taşınma günü kat veya eşya bahanesiyle ek ücret talep etmeyiz.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Sabit & Güvenilir Kadro",
    desc: "Günübirlik yabancı işçilerle değil, yıllardır birlikte çalıştığımız eğitimli ve güler yüzlü personelimizle taşıyoruz.",
    icon: UserGroupIcon,
  },
  {
    title: "Özenli Ambalaj & Hijyen",
    desc: "Eşyalarınız temiz battaniyeler, kalın balonlu patpat naylonlar ve endüstriyel streç filmlerle kat kat sarılır.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Dakik & Zamanında Teslim",
    desc: "Söz verdiğimiz gün ve saatte kapınızda oluruz; taşınma sürecinizi planlanan zaman diliminde tamamlarız.",
    icon: ClockIcon,
  },
];

const STEPS = [
  {
    step: "01",
    title: "Hızlı Teklif & Randevu",
    desc: "Telefon veya WhatsApp ile eşya durumunuzu paylaşın, anında şeffaf fiyatınızı ve taşınma gününüzü belirleyelim.",
  },
  {
    step: "02",
    title: "Özenli Paketleme",
    desc: "Belirlenen saatte gelen ekibimiz beyaz eşyalarınızı, kolilerinizi ve eşyalarınızı koruyucu ambalaja alır.",
  },
  {
    step: "03",
    title: "Özel Araçla Güvenli Sevkiyat",
    desc: "Eşyalar nakliye aracımızın içine sarsılmayacak ve çizilmeyecek şekilde düzenli istiflenir ve bağlanır.",
  },
  {
    step: "04",
    title: "Adrese Teslimat & Yerleşim",
    desc: "Yeni adresinizde eşyalarınız dilediğiniz odalara özenle taşınır ve sağlam biçimde teslim edilir.",
  },
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Yalçın Nakliye */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Güven & Şeffaflık
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Neden <span className="text-orange-600">Yalçın Nakliye</span>'yi Seçmelisiniz?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Eşyalarınız sadece bir yük değil, sizin için değerli birer hatıra ve emektir. Onlara en az sizin kadar özen gösteriyoruz.
          </p>
        </div>

        {/* 4 Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 4 Steps Banner */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-2">
              Süreç Nasıl İlerliyor?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              4 Kolay Adımda Sorunsuz Taşının
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {STEPS.map((s, idx) => (
              <div key={idx} className="relative z-10 flex flex-col">
                <div className="text-4xl font-black text-orange-500/40 mb-3 font-mono">
                  {s.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{s.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
