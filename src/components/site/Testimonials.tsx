const items = [
  { q: "The square plays truer than any private ground in the city. Bounce is honest.", a: "Rohan M.", r: "Club Captain" },
  { q: "Floodlights are unreal. We finished a T20 at 11:45 PM under perfect light.", a: "Priya S.", r: "League Organiser" },
  { q: "My son's technique transformed in one season at the academy.", a: "Anil K.", r: "Parent" },
  { q: "Bola machines on tap, real grass, ice-cold drinks. What else do you need?", a: "Saif T.", r: "Weekend warrior" },
  { q: "We host all our corporate cups here. Logistics are smooth as cover drives.", a: "Meera J.", r: "HR, Fintech Co." },
  { q: "Coaches actually coach. Not just throwdowns and timers.", a: "Vikram R.", r: "U-19 player" },
];

export function Testimonials() {
  const loop = [...items, ...items];
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-forest-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12 reveal">
        <p className="font-display tracking-[0.3em] text-gold text-sm mb-3">— THE TALK</p>
        <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.95]">Word from the <span className="italic text-gold-gradient">crease</span>.</h2>
      </div>
      <div className="relative">
        <div className="flex marquee-track gap-6 w-max">
          {loop.map((t, i) => (
            <figure key={i} className="w-[340px] md:w-[420px] shrink-0 bg-card border border-border rounded-lg p-8">
              <div className="text-gold font-display text-4xl leading-none mb-4">"</div>
              <blockquote className="text-cream/90 text-lg leading-relaxed">{t.q}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center font-display text-gold">{t.a[0]}</div>
                <div>
                  <div className="font-display tracking-wider text-cream">{t.a}</div>
                  <div className="text-xs text-cream/60">{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-forest-deep to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-forest-deep to-transparent" />
      </div>
    </section>
  );
}
