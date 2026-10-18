"use client";

import { useState } from "react";
import { ChevronDownIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

const FAQS = [
  {
    q: "Taşınma fiyatları neye göre belirlenmektedir?",
    a: "Fiyatlarımız; eşyanızın hacmine (1+1, 2+1, 3+1 vb.), bulunduğunuz ve taşınacağınız kat durumuna ve gidilecek mesafeye göre şeffaf şekilde belirlenir. Öncesinde anlaştığımız sabit fiyat taşınma günü asla değişmez.",
  },
  {
    q: "Taşınma öncesinde eşyalarımı nasıl hazırlamalıyım?",
    a: "Kişisel ve özel küçük eşyalarınızı koliledikten sonra, beyaz eşyalarınızın ve mobilyalarınızın koruyucu malzemelerle sarılması ve araca güvenle yüklenmesi ekibimiz tarafından özenle yapılır.",
  },
  {
    q: "Eşyalar taşınırken nasıl korunuyor ve ambalajlanıyor?",
    a: "Tüm beyaz eşyalar (buzdolabı, çamaşır ve bulaşık makinesi vb.) ile koltuk takımlarınız kalın patpat balonlu naylonlar ve dayanıklı streç filmler ile hava almayacak ve darbelere karşı korunacak şekilde kat kat sarılır.",
  },
  {
    q: "Şehirler arası nakliyat yapıyor musunuz?",
    a: "Evet, Yalçın Nakliye İzmir merkezli olmakla beraber Türkiye'nin tüm 81 iline kapalı çelik kasa araçlarımızla güvenli, sigortalı ve sözleşmeli şehirler arası evden eve nakliye hizmeti sunmaktadır.",
  },
  {
    q: "Ne kadar önceden randevu almam gerekir?",
    a: "Yoğunluk durumuna göre en az 2-3 gün öncesinden randevu oluşturmanızı tavsiye ederiz. Ancak acil durumlar veya aynı gün taşınma ihtiyaçlarınız için de telefonla iletişime geçerek anlık müsaitlik sorabilirsiniz.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <QuestionMarkCircleIcon className="w-4 h-4 text-orange-600" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sıkça Sorulan <span className="text-orange-600">Sorular</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Taşınma sürecinizle ilgili aklınıza takılan tüm soruların cevapları burada.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-base font-bold text-slate-900 hover:text-orange-600 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-orange-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
