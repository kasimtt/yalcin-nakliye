"use client";

import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Yalçın Nakliye - İletişim Talebi");
    const body = encodeURIComponent(`İsim: ${name}\nTelefon: ${phone}\n\n${message}`);
    // mailto fallback
    window.location.href = `mailto:info@yalcinnakliye.example?subject=${subject}&body=${body}`;
  }

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold">Hızlı İletişim Formu</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label className="block text-sm">İsim</label>
          <input
            className="mt-1 w-full rounded border px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm">Telefon</label>
          <input
            className="mt-1 w-full rounded border px-3 py-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm">Mesaj</label>
          <textarea
            className="mt-1 w-full rounded border px-3 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </div>
        <div>
          <button className="btn-primary inline-flex items-center gap-2" type="submit">
            <EnvelopeIcon className="w-5 h-5" aria-hidden />
            Gönder
          </button>
        </div>
      </form>
    </section>
  );
}
