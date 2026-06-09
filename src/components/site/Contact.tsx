import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  { icon: MapPin, t: "Visit", d: "12 Greenfields Road, Whitefield, Bengaluru 560066" },
  { icon: Phone, t: "Call", d: "+91 80 4123 8899" },
  { icon: Mail, t: "Email", d: "play@thepitch.club" },
  { icon: Clock, t: "Hours", d: "Mon–Sun · 6:00 AM — 12:00 AM" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="reveal">
          <p className="font-display tracking-[0.3em] text-gold text-sm mb-3">— FIND US</p>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.95]">Drop by for a <span className="italic text-gold-gradient">net</span>.</h2>
          <div className="mt-10 space-y-6">
            {info.map((i) => (
              <div key={i.t} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <i.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-display tracking-[0.2em] text-sm text-gold">{i.t.toUpperCase()}</div>
                  <div className="text-cream/85 mt-1">{i.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="reveal relative aspect-square lg:aspect-auto rounded-lg overflow-hidden border border-border" style={{ background: "linear-gradient(135deg, oklch(0.22 0.05 155), oklch(0.16 0.04 155))" }}>
          <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 400">
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 35} x2="400" y2={i * 35} stroke="oklch(0.82 0.16 85)" strokeWidth="0.3" />
            ))}
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 35} y1="0" x2={i * 35} y2="400" stroke="oklch(0.82 0.16 85)" strokeWidth="0.3" />
            ))}
            <path d="M40 60 Q200 120 360 80" fill="none" stroke="oklch(0.82 0.16 85 / 0.6)" strokeWidth="2" />
            <path d="M80 340 Q160 200 320 280" fill="none" stroke="oklch(0.82 0.16 85 / 0.6)" strokeWidth="2" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" style={{ width: 60, height: 60, left: -30, top: -30 }} />
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-gold-foreground">
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 font-display tracking-[0.2em] text-cream/70 text-xs">THE PITCH · 12.97°N 77.75°E</div>
        </div>
      </div>
    </section>
  );
}
