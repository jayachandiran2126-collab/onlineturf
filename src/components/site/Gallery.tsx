const panels = [
  { label: "Pitch 01", caption: "Centre square, rolled" },
  { label: "Floodlights", caption: "Towers at full burn" },
  { label: "Cages", caption: "Lane 3 — Bola loaded" },
  { label: "Pavilion", caption: "Late-night lounge" },
];

const gradients = [
  "linear-gradient(135deg, oklch(0.32 0.09 155), oklch(0.18 0.04 155))",
  "linear-gradient(135deg, oklch(0.82 0.16 85), oklch(0.45 0.12 85))",
  "linear-gradient(135deg, oklch(0.25 0.05 165), oklch(0.16 0.04 155))",
  "linear-gradient(135deg, oklch(0.38 0.10 145), oklch(0.20 0.05 155))",
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl mb-12 reveal">
        <p className="font-display tracking-[0.3em] text-gold text-sm mb-3">— VISUAL TOUR</p>
        <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.95]">A walk around the <span className="italic text-gold-gradient">ground</span>.</h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {panels.map((p, i) => (
          <div
            key={p.label}
            className="reveal group relative aspect-[3/4] overflow-hidden rounded-md cursor-pointer"
            style={{ background: gradients[i], transitionDelay: `${i * 100}ms` }}
          >
            <svg className="absolute inset-0 w-full h-full opacity-30 group-hover:scale-110 transition-transform duration-700" viewBox="0 0 100 140">
              <circle cx="50" cy="70" r="40" fill="none" stroke="oklch(0.96 0.02 90)" strokeWidth="0.4" />
              <rect x="44" y="50" width="12" height="40" fill="none" stroke="oklch(0.96 0.02 90)" strokeWidth="0.4" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <div className="font-display text-2xl text-cream tracking-wide">{p.label}</div>
              <div className="text-sm text-cream/70">{p.caption}</div>
            </div>
            <div className="absolute top-4 right-4 font-display text-xs text-cream/50 tracking-widest">0{i + 1}/04</div>
          </div>
        ))}
      </div>
    </section>
  );
}
