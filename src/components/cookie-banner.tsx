"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "clv_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[60] bg-ivory border border-line shadow-[0_20px_60px_-20px_rgba(31,29,26,0.25)] p-6"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-gold">Cookies</p>
      <p className="mt-3 text-sm text-mute leading-relaxed">
        Usamos cookies para entender como o site é utilizado e melhorar sua
        experiência. Veja nossa{" "}
        <Link href="/privacidade" className="text-ink underline underline-offset-2">
          política de privacidade
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => decide("accepted")}
          className="px-5 py-2.5 bg-ink text-ivory text-[11px] tracking-[0.2em] uppercase hover:bg-gold transition-colors"
        >
          Aceitar
        </button>
        <button
          onClick={() => decide("declined")}
          className="px-5 py-2.5 border border-ink text-[11px] tracking-[0.2em] uppercase hover:bg-ink hover:text-ivory transition-colors"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
