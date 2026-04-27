"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-serif text-xl md:text-2xl text-ink">{it.q}</span>
              <span
                className={`text-gold text-2xl font-light transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-mute leading-relaxed max-w-3xl">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
