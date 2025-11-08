"use client";

import React, { useEffect, useRef, useState } from "react";

type State = {
  open: boolean;
  group: string | null;
  images: string[];
  index: number;
  lastActive?: Element | null;
};

export default function Lightbox() {
  const [state, setState] = useState<State>({ open: false, group: null, images: [], index: 0, lastActive: null });
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target) return;
      const anchor = target.closest && target.closest('[data-lightbox]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      const group = anchor.getAttribute('data-lightbox') || 'default';
      // collect all anchors with same group
      const all = Array.from(document.querySelectorAll(`a[data-lightbox="${group}"]`)) as HTMLAnchorElement[];
      const images = all.map(a => a.getAttribute('href') || '').filter(Boolean);
      const index = images.indexOf(href);
      e.preventDefault();
      setState({ open: true, group, images, index: index >= 0 ? index : 0, lastActive: document.activeElement });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!state.open) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.open, state.index, state.images]);

  useEffect(() => {
    if (state.open) {
      // set focus to close button
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // restore focus
      try {
        (state.lastActive as HTMLElement | null)?.focus?.();
      } catch (_) {}
    }
  }, [state.open]);

  function close() {
    setState(s => ({ ...s, open: false }));
  }

  function prev() {
    setState(s => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  }

  function next() {
    setState(s => ({ ...s, index: (s.index + 1) % s.images.length }));
  }

  if (!state.open) return null;

  const src = state.images[state.index];

  return (
    <div className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Görsel görüntüleyici" onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-black/80 rounded">
        <button ref={closeBtnRef} className="lightbox-close absolute right-2 top-2 text-white bg-black/40 rounded p-2" onClick={close} aria-label="Kapat">✕</button>

        <button className="lightbox-nav absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded p-2" onClick={prev} aria-label="Önceki">‹</button>
        <button className="lightbox-nav absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded p-2" onClick={next} aria-label="Sonraki">›</button>

        <div className="flex items-center justify-center p-6">
          <img src={src} alt={`Görsel ${state.index + 1}`} className="lightbox-image max-h-[80vh] object-contain" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
          {state.images.map((_, i) => (
            <button key={i} onClick={() => setState(s => ({ ...s, index: i }))} aria-label={`Resim ${i + 1}`} className={`w-2 h-2 rounded-full ${i === state.index ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
