import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheckIcon,
  TruckIcon,
  HeartIcon,
  ClockIcon,
  CheckCircleIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Hakkımızda — Yalçın Nakliye | Çiğli & İzmir Nakliyat",
  description:
    "Yalçın Nakliye hakkında: 10 yılı aşkın tecrübemiz, profesyonel kadromuz, hizmet ilkelerimiz ve İzmir geneli çalışma vizyonumuz.",
};

const STATS = [
  { value: "10+", label: "Yıllık Tecrübe", icon: TruckIcon },
  { value: "%98", label: "Müşteri Memnuniyeti", icon: HeartIcon },
  { value: "5.000+", label: "Taşınan Ev & Ofis", icon: ShieldCheckIcon },
  { value: "81", label: "İle Düzenli Sevkiyat", icon: ClockIcon },
];

const VALUES = [
  {
    title: "Şeffaf & Dürüst Fiyatlandırma",
    desc: "Anlaştığımız fiyat taşınma günü asla değişmez. Kat, mesafe veya eşya bahanesiyle sürpriz maliyetler çıkarılmaz.",
  },
  {
    title: "Hasarsız Taşıma Güvencesi",
    desc: "Eşyalarınızın her biri özel balonlu naylonlar, streçler ve battaniyeler ile sarılır; araç içinde sabitlenir.",
  },
  {
    title: "Eğitimli & Sabit Kadro",
    desc: "Dışarıdan günübirlik elemanlarla değil, yıllardır birlikte çalıştığımız deneyimli ve güler yüzlü taşıma personelimizle çalışırız.",
  },
  {
    title: "Zamanında & Dakik Hizmet",
    desc: "Belirlenen randevu saatinde adresinizde olur, planlanan sürede taşınma sürecini tamamlarız.",
  },
];

export default function Hakkimizda() {
  return (
    <div className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Anasayfa
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Hakkımızda</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-2xl mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
              Yalçın Nakliye Kimdir?
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Eşyalarınızı Güvenle, Sizi Huzurla Taşıyoruz
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              İzmir Çiğli merkezli kurulan Yalçın Nakliye, evden eve ve kurumsal ofis taşımacılığında güvenilirlik, titizlik ve müşteri memnuniyeti ilkeleriyle sektörde öncü hizmet sunmaktadır.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STATS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-500">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
              Hikayemiz & Hizmet Anlayışımız
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Taşınmayı Zahmetli Bir Süreç Olmaktan Çıkarıyoruz
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Yalçın Nakliye olarak Çiğli, Karşıyaka, Menemen ve tüm İzmir bölgesinde başladığımız taşımacılık serüvenimize, bugün Türkiye'nin 81 iline uzanan güçlü bir lojistik ağı ile devam ediyoruz.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Taşınma sürecinde en büyük endişenin eşyaların zarar görmesi veya anlaşılan şartların dışına çıkılması olduğunu çok iyi biliyoruz. Bu yüzden her eşyayı özenle ambalajlıyor, koruyucu malzemelerle sararak yeni adresinize hasarsız ulaştırıyoruz.
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Özel donanımlı kapalı çelik kasa araçlar</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Tek kullanımlık hijyenik ambalajlama malzemeleri</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Özenli istifleme ve eşya sabitleme teknikleri</span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <Image
              src="/move-1.jpg"
              alt="Yalçın Nakliye Güvenli Yükleme ve Taşıma"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-2">
              İlkelerimiz
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Bizi Farklı Kılan Değerlerimiz
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 font-bold flex items-center justify-center text-sm mb-3">
                  0{i + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Güvenli Bir Taşınma İçin Hemen Bize Ulaşın
            </h3>
            <p className="mt-2 text-white/90 text-sm sm:text-base max-w-xl">
              Ücretsiz ekspertiz ve uygun fiyat teklifi için bir telefon veya WhatsApp mesajı uzağınızdayız.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="tel:+905399363912"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <PhoneIcon className="w-5 h-5 text-orange-400" />
              <span>0539 936 3912</span>
            </a>
            <Link
              href="/iletisim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all"
            >
              <span>İletişime Geçin</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
