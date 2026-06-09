import { Target, Dumbbell, Lightbulb, GraduationCap, Award, Coffee } from "lucide-react";

const items = [
  { icon: Target, t: "Turf Pitches", d: "Six match-ready strips, rolled daily, cut to 8mm." },
  { icon: Dumbbell, t: "Batting Cages", d: "Bola & SideArm bowling machines on every lane." },
  { icon: Lightbulb, t: "Night Play", d: "1500-lux floodlights. Play until midnight." },
  { icon: GraduationCap, t: "Coaching", d: "Ex-Ranji mentors. Group and 1-on-1 plans." },
  { icon: Award, t: "Tournaments", d: "Host T10s, corporate cups, league play." },
  { icon: Coffee, t: "Pavilion Lounge", d: "Live scoring screens, real food, cold drinks." },
];

export function Facilities() {
  return (
    <section id="facilities" className="relative py-24 md:py-32 px-6 lg:px-10 bg-forest-deep">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 reveal">
          <div>
            <p className="font-display tracking-[0.3em] text-gold text-sm mb-3">— THE FACILITIES</p>
            <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.95]">Six ways to <span className="italic text-gold-gradient">play</span>.</h2>
          </div>
          <p className="max-w-md text-cream/70">From a casual hit on weeknights to full T20 league hosting — we set up, you show up.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="reveal group bg-card p-8 md:p-10 hover:bg-forest transition-colors cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                  <it.icon className="w-5 h-5" />
                </div>
                <span className="font-display text-cream/30 text-2xl">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-3xl tracking-wide text-cream">{it.t}</h3>
              <p className="mt-3 text-cream/65 leading-relaxed">{it.d}</p>
              <div className="mt-6 h-px w-12 bg-gold group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
