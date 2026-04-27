export function PolissonografiaGraphic() {
  return (
    <div className="aspect-[4/5] relative overflow-hidden border border-dg-sand/20 bg-gradient-to-br from-dg-deep via-dg-kraft/40 to-dg-deep">
      {/* subtle grain */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,_rgba(243,235,220,0.4),_transparent_50%)]" />

      {/* stars / constellation */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice">
        <circle cx="60" cy="80" r="1" fill="#f3ebdc" />
        <circle cx="340" cy="60" r="1.2" fill="#f3ebdc" />
        <circle cx="280" cy="120" r="0.8" fill="#f3ebdc" />
        <circle cx="90" cy="180" r="0.6" fill="#f3ebdc" />
        <circle cx="360" cy="200" r="1" fill="#f3ebdc" />
      </svg>

      {/* crescent moon */}
      <svg className="absolute top-10 right-10 w-20 h-20 opacity-30" viewBox="0 0 100 100" fill="none">
        <path d="M 65 20 A 35 35 0 1 0 65 80 A 28 28 0 1 1 65 20 Z" fill="#d9c9a8" />
      </svg>

      {/* big label */}
      <div className="absolute top-10 left-10 right-10">
        <p className="text-[10px] tracking-[0.35em] uppercase text-dg-sand/80">Tipo III · Home Sleep Test</p>
      </div>

      {/* central waveform — represents sleep breathing pattern */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8">
        <svg viewBox="0 0 400 140" className="w-full" fill="none">
          <defs>
            <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#c7a97a" stopOpacity="0" />
              <stop offset="0.15" stopColor="#c7a97a" stopOpacity="1" />
              <stop offset="0.85" stopColor="#c7a97a" stopOpacity="1" />
              <stop offset="1" stopColor="#c7a97a" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* baseline */}
          <line x1="0" y1="70" x2="400" y2="70" stroke="#c7a97a" strokeOpacity="0.15" strokeDasharray="2 4" />
          {/* respiration wave (smooth, then apnea pause, then recovery) */}
          <path
            d="M 0 70 Q 20 40 40 70 T 80 70 T 120 70 Q 140 45 160 70 T 200 70 L 260 70 Q 280 90 300 70 Q 320 30 340 70 T 380 70 L 400 70"
            stroke="url(#wave)"
            strokeWidth="1.5"
            fill="none"
          />
          {/* apnea marker */}
          <rect x="200" y="55" width="60" height="30" stroke="#c7a97a" strokeOpacity="0.3" strokeWidth="0.5" fill="none" />
          <text x="230" y="48" textAnchor="middle" fontSize="7" fill="#c7a97a" opacity="0.6" letterSpacing="2">
            APNEIA
          </text>
        </svg>
      </div>

      {/* bottom metadata */}
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
        <div>
          <p className="font-serif text-6xl leading-none text-dg-sand">30s</p>
          <p className="text-[10px] tracking-[0.3em] uppercase text-dg-cream/60 mt-2">Epoch padrão</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] tracking-[0.3em] uppercase text-dg-cream/60">SpO₂ · Fluxo · Esforço</p>
          <p className="font-serif text-2xl text-dg-sand mt-2 italic">em casa</p>
        </div>
      </div>
    </div>
  );
}
