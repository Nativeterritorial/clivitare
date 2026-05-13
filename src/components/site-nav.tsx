"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#especialidades", label: "Especialidades" },
  { href: "/#equipe", label: "Equipe" },
  { href: "/ronco-e-apneia", label: "Ronco & Apneia" },
  { href: "/#contato", label: "Contato" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Clivitare">
          <img
            src="/media/clivitare/logo-lockup.png"
            alt="Centro Clínico Clivitare"
            className="h-12 md:h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] tracking-wider uppercase text-mute hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/555436983038"
            target="_blank"
            rel="noopener"
            className="text-[13px] tracking-wider uppercase px-5 py-2.5 border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors"
          >
            Agendar
          </a>
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ivory border-t border-line px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-wider uppercase text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/555436983038"
            className="text-sm tracking-wider uppercase px-5 py-3 border border-ink text-center"
          >
            Agendar
          </a>
        </div>
      )}
    </header>
  );
}
