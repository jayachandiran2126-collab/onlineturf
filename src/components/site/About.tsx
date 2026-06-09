import { Trophy, Sparkles, Users, Clock } from "lucide-react";

const features = [
  { icon: Trophy, t: "Tournament-grade", d: "ICC-spec turf rolled and rolled again." },
  { icon: Sparkles, t: "Floodlit nights", d: "1500-lux LED towers, no shadows." },
  { icon: Users, t: "Coaching cadre", d: "Ex-Ranji & state-level mentors." },
  { icon: Clock, t: "Open till late", d: "Bookable slots until midnight." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-40 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <p className="font-display tracking-[0.3em] text-gold text-sm mb-4">— THE GROUND</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-cream">
            Built for the <span className="italic text-gold-gradient">love</span> of leather on willow.
          </h2>
          <p className="mt-6 text-lg text-cream/75 leading-relaxed">
            The Pitch is a four-acre cricket sanctuary in the heart of the city. Six tournament-grade turf wickets, six batting cages, a lounge that smells of linseed oil — and floodlights that don't quit until midnight.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-10">
            {features.map((f) => (
              <div key={f.t} className="group flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-gold-foreground text-gold transition-colors">
                  <f.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display tracking-wider text-cream">{f.t}</div>
                  <div className="text-sm text-cream/60">{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stylised pitch artwork */}
        <div className="reveal relative aspect-square">
          <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.30 0.08 155), oklch(0.20 0.04 155))", boxShadow: "var(--shadow-deep)" }} />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="195" fill="none" stroke="oklch(0.82 0.16 85)" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="oklch(0.82 0.16 85 / 0.5)" strokeWidth="1" strokeDasharray="4 6" />
            <rect x="180" y="120" width="40" height="160" fill="oklch(0.85 0.05 85 / 0.18)" stroke="oklch(0.82 0.16 85)" strokeWidth="1" />
            <line x1="200" y1="120" x2="200" y2="280" stroke="oklch(0.82 0.16 85)" strokeWidth="0.5" strokeDasharray="2 3" />
            <g stroke="oklch(0.82 0.16 85)" strokeWidth="1.5">
              <line x1="190" y1="135" x2="210" y2="135" />
              <line x1="195" y1="125" x2="195" y2="145" />
              <line x1="205" y1="125" x2="205" y2="145" />
              <line x1="190" y1="265" x2="210" y2="265" />
              <line x1="195" y1="255" x2="195" y2="275" />
              <line x1="205" y1="255" x2="205" y2="275" />
            </g>
            <text x="200" y="210" textAnchor="middle" className="font-display" fill="oklch(0.82 0.16 85)" fontSize="14" letterSpacing="4">22 YARDS</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
