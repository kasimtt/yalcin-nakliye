"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PhoneIcon, TruckIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("anasayfa");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["anasayfa", "hizmetler", "neden-biz", "galeri", "iletisim"];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: "/#anasayfa", label: "Anasayfa", id: "anasayfa" },
    { href: "/#hizmetler", label: "Hizmetlerimiz", id: "hizmetler" },
    { href: "/#neden-biz", label: "Neden Biz?", id: "neden-biz" },
    { href: "/#galeri", label: "Galeri", id: "galeri" },
    { href: "/hakkimizda", label: "Hakkımızda", id: "hakkimizda" },
    { href: "/iletisim", label: "İletişim", id: "iletisim" },
  ];

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5" 
        : "bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3.5"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link href="/#anasayfa" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <TruckIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                YALÇIN
              </span>
              <span className="text-xl font-extrabold text-orange-500 ml-1">
                NAKLİYE
              </span>
            </div>
            <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase -mt-1">
              İzmir & Şehirler Arası
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-orange-600 bg-orange-50 font-semibold"
                    : "text-slate-700 hover:text-orange-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Phone CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden xl:flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-semibold text-emerald-600">7/24 Kesintisiz Hat</span>
            </div>
            <a
              href="tel:+905399363912"
              className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors"
            >
              +90 539 936 3912
            </a>
          </div>

          <a
            href="tel:+905399363912"
            className="btn-primary text-sm py-2 px-4 shadow-sm"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Hemen Ara</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+905399363912"
            aria-label="Ara"
            className="sm:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-orange-50 text-orange-600 border border-orange-200"
          >
            <PhoneIcon className="w-4 h-4" />
          </a>
          <button
            aria-label="Menüyü aç/kapat"
            onClick={() => setOpen((prev) => !prev)}
            className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 focus:outline-none"
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-3 rounded-xl text-base font-medium transition-colors ${
                  active === link.id
                    ? "bg-orange-50 text-orange-600 font-bold"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="tel:+905399363912"
                onClick={() => setOpen(false)}
                className="btn-primary w-full text-center py-3"
              >
                <PhoneIcon className="w-5 h-5 inline-block mr-2" />
                Hemen Ara: +90 539 936 3912
              </a>
              <a
                href="https://wa.me/905399363912?text=Merhaba%2C%20Yal%C3%A7%C4%B1n%20Nakliye%27den%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-whatsapp w-full text-center py-3"
              >
                WhatsApp'tan Mesaj Gönder
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
