"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("anasayfa");

  useEffect(() => {
    const ids = ["anasayfa", "hakkimizda", "iletisim"];
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
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    `text-sm nav-link ${active === id ? "active font-semibold" : ""}`;

  return (
  <div className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-sm dark:bg-yellow-100/95 shadow-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between py-3 px-4 sm:px-6">
        <Link href="/#anasayfa" className="text-xl font-bold">
          Yalçın Nakliye
        </Link>

        {/* Desktop menu */}
        <nav className="hidden sm:flex gap-4 items-center">
          <Link href="/#anasayfa" className={linkClass("anasayfa")}>
            Anasayfa
          </Link>
          <Link href="/#iletisim" className={linkClass("iletisim")}>
            İletişim
          </Link>
          <Link href="/#hakkimizda" className={linkClass("hakkimizda")}>
            Hakkımızda
          </Link>
          <a href="tel:+905399363912" className="ml-4 inline-block rounded bg-accent px-3 py-1 text-on-accent text-sm">
            Ara: +905399363912
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="sm:hidden flex items-center">
          <a href="tel:+905399363912" className="mr-3 inline-block rounded bg-foreground px-3 py-1 text-background text-sm">
            Ara
          </a>
          <button
            aria-label="Menüyü aç"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded border"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="sm:hidden bg-white dark:bg-black">
          <div className="mx-auto flex max-w-3xl flex-col gap-2 px-4 py-3">
            <a href="/#anasayfa" onClick={() => setOpen(false)} className={`block py-2 ${active === "anasayfa" ? "font-semibold text-accent" : ""}`}>
              Anasayfa
            </a>
            <a href="/#iletisim" onClick={() => setOpen(false)} className={`block py-2 ${active === "iletisim" ? "font-semibold text-accent" : ""}`}>
              İletişim
            </a>
            <a href="/#hakkimizda" onClick={() => setOpen(false)} className={`block py-2 ${active === "hakkimizda" ? "font-semibold text-accent" : ""}`}>
              Hakkımızda
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
