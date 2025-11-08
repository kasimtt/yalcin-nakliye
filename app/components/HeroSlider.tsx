"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  interval?: number; // ms
  ariaLabel?: string;
};

export default function HeroSlider({ images, interval = 4200, ariaLabel = "Ana görsel kaydırıcı" }: Props) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length, interval]);

  function startTimer() {
    stopTimer();
    // window.setInterval returns number in browsers
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval) as unknown as number;
  }

  function stopTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function go(i: number) {
    setIndex((_) => ((i % images.length) + images.length) % images.length);
    startTimer();
  }

  function prev() {
    go(index - 1);
  }

  function next() {
    go(index + 1);
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStartX.current;
    const end = e.changedTouches?.[0]?.clientX ?? null;
    if (start == null || end == null) return;
    const diff = start - end;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next(); else prev();
    }
    touchStartX.current = null;
  }

  return (
  <div className="relative w-full max-w-md rounded hero-image-wrapper h-64 sm:h-80 md:h-96" aria-roledescription="carousel" aria-label={ariaLabel} onMouseEnter={stopTimer} onMouseLeave={startTimer} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {images.map((src, i) => (
        <div key={src} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`} aria-hidden={i !== index}>
          {/* Use a plain <img> so the image renders in its natural size while remaining responsive */}
          <img src={src} alt={`${ariaLabel} ${i + 1}`} className="mx-auto max-w-full max-h-[85vh] object-contain" />
        </div>
      ))}

      {/* Overlay for contrast */}
      <div className="hero-overlay" aria-hidden />

      {/* Controls */}
      <button onClick={prev} aria-label="Önceki" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white p-2 hover:bg-black/45">
        ‹
      </button>
      <button onClick={next} aria-label="Sonraki" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white p-2 hover:bg-black/45">
        ›
      </button>

      {/* Indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
        {images.map((_, i) => (
          <button key={i} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`} />
        ))}
      </div>
    </div>
  );
}
