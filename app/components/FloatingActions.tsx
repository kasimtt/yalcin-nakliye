"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";

export default function FloatingActions() {
  const phoneNumber = "+905399363912";
  const whatsappUrl = "https://wa.me/905399363912?text=Merhaba%2C%20Yal%C3%A7%C4%B1n%20Nakliye%27den%20ta%C5%9F%C4%B1nma%20fiyat%C4%B1%20ve%20bilgi%20almak%20istiyorum.";

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside aria-label="Hızlı iletişim butonları" className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden mesaj gönderin"
          className="group relative flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-105 hover:shadow-green-500/30"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.45 1.744 1.728 2.257.299.12.537.192.722.251.302.096.577.083.794.051.242-.036.745-.304.85-.598.105-.294.105-.546.074-.598-.031-.052-.116-.087-.246-.152z" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-xs font-medium text-emerald-100">WhatsApp Destek</span>
            <span className="text-sm font-bold">Teklif Al & Danış</span>
          </div>
        </a>
      </aside>

      {/* Mobile Sticky Quick Action Bar */}
      <nav aria-label="Mobil hızlı erişim çubuğu" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 px-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform"
          >
            <PhoneIcon className="w-4 h-4 text-orange-400" />
            <span>Hemen Ara</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 px-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.588-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.179.182-.077.357.101.174.45 1.744 1.728 2.257.299.12.537.192.722.251.302.096.577.083.794.051.242-.036.745-.304.85-.598.105-.294.105-.546.074-.598-.031-.052-.116-.087-.246-.152z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </>
  );
}
