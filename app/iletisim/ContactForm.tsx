"use client";

import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [method, setMethod] = useState<"whatsapp" | "phone">("whatsapp");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (method === "whatsapp") {
      const waText = `Merhaba Yalçın Nakliye, web sitenizden iletişim formu gönderiyorum:
• İsim: ${name}
• Telefon: ${phone}
• Mesaj / Talep: ${message}`;
      window.open(`https://wa.me/905399363912?text=${encodeURIComponent(waText)}`, "_blank");
    } else {
      const subject = encodeURIComponent("Yalçın Nakliye - İletişim / Teklif Talebi");
      const body = encodeURIComponent(`İsim: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message}`);
      window.location.href = `mailto:abdulbasidyalcin006@gmail.com?subject=${subject}&body=${body}`;
    }

    setSubmitted(true);
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
          <EnvelopeIcon className="w-3.5 h-3.5" />
          <span>Hızlı Teklif Formu</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Size Nasıl Yardımcı Olabiliriz?
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
          Formu doldurun, taşınma uzmanımız 10 dakika içinde dönüş yapsın.
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
          <CheckCircleIcon className="w-12 h-12 text-emerald-500 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900">Talebiniz Alındı!</h4>
          <p className="text-xs text-emerald-700">
            Bilgileriniz yönlendirildi. Dilerseniz hemen arayarak da hızlandırabilirsiniz.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-900"
          >
            Yeni mesaj gönder
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Reply Method toggle */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Size nasıl ulaşalım?
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMethod("whatsapp")}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  method === "whatsapp"
                    ? "bg-emerald-500 text-white border-emerald-600 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <ChatBubbleLeftRightIcon className="w-4 h-4" />
                <span>WhatsApp İle</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod("phone")}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  method === "phone"
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <PhoneIcon className="w-4 h-4" />
                <span>Telefon Aşaması</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Adınız & Soyadınız
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <UserIcon className="w-4 h-4" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-slate-50 text-slate-900 transition-all"
                placeholder="Örn: Mehmet Yılmaz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Telefon Numaranız
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <input
                type="tel"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-slate-50 text-slate-900 transition-all"
                placeholder="05XX XXX XX XX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Taşınma Detayları (Nereden nereye, oda sayısı vb.)
            </label>
            <textarea
              className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-slate-50 text-slate-900 transition-all"
              rows={4}
              placeholder="Örn: Çiğli'den Karşıyaka'ya 2+1 ev taşınacak, 3. kattan 2. kata güvenli taşıma..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all ${
              method === "whatsapp"
                ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-green-500/20"
                : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 shadow-orange-500/20"
            }`}
          >
            <PaperAirplaneIcon className="w-4 h-4" />
            <span>{method === "whatsapp" ? "WhatsApp İle Gönder & Fiyat Al" : "Teklif Formunu Gönder"}</span>
          </button>

          <p className="text-[11px] text-center text-slate-400">
            🔒 Bilgileriniz yalnızca taşınma teklifi için kullanılır, 3. taraflarla paylaşılmaz.
          </p>
        </form>
      )}
    </div>
  );
}
