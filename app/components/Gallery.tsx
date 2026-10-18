"use client";

import Image from "next/image";
import { CameraIcon, MagnifyingGlassPlusIcon } from "@heroicons/react/24/solid";

const GALLERY_ITEMS = [
  {
    src: "/truck.jpg",
    title: "Yalçın Nakliye Taşıma Aracımız",
    desc: "Özel donanımlı, geniş hacimli ve eşya koruma sistemine sahip nakliye kamyonetimiz.",
  },
  {
    src: "/move-1.jpg",
    title: "Özenli Yükleme ve Sabitleme",
    desc: "Koliler ve mobilyalar araç içine sarsıntıya ve çizilmeye karşı güvenle istiflenir.",
  },
  {
    src: "/move-2.jpg",
    title: "Hassas Eşya & Koli Düzeni",
    desc: "Kırılabilir eşyalar ve koliler araç içine dengeli biçimde yerleştirilir.",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="py-20 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            <CameraIcon className="w-4 h-4" />
            <span>Gerçek Operasyon Kareleri</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Araç Filomuz ve <span className="text-orange-600">Taşıma Anlarımız</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Fotoğraflarımız temsili değil, Yalçın Nakliye ekibimizin bizzat sahada gerçekleştirdiği işlerden gerçek karelerdir.
          </p>
        </div>

        {/* Gallery Grid (3 Real Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <a
              key={idx}
              href={item.src}
              data-lightbox="gallery"
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Hover zoom badge */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <MagnifyingGlassPlusIcon className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Yalçın Nakliye Güvencesi</span>
                  <span className="text-orange-600 font-semibold group-hover:underline">Büyütmek için tıkla ›</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
