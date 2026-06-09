import { Check } from "lucide-react";

const plans = [
  {
    name: "Casual",
    price: "₹1,200",
    unit: "/hour",
    blurb: "For a quick weeknight hit with the boys.",
    features: ["1 turf pitch", "Standard floodlights", "Match ball & stumps", "Pavilion access"],
    featured: false,
  },
  {
    name: "Club",
    price: "₹18,000",
    unit: "/month",
    blurb: "Most chosen by club & corporate teams.",
    features: ["8 hours weekly", "Priority weekend slots", "1 coaching session", "Tournament discount 20%", "Locker & kit storage"],
    featured: true,
  },
  {
    name: "Academy",
    price: "₹45,000",
    unit: "/season",
    blurb: "Full bore for serious developing players.",
    features: ["Unlimited cages", "12 coaching sessions", "Match-day analysis", "Strength room access", "Tournament entries"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <p className="font-display tracking-[0.3em] text-gold text-sm mb-3">— MEMBERSHIPS</p>
          <h2 className="font-display text-5xl md:text-7xl text-cream leading-[0.95]">Pick your <span className="italic text-gold-gradient">format</span>.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative rounded-2xl p-8 md:p-10 flex flex-col border transition-transform hover:-translate-y-1 ${
                p.featured
                  ? "bg-gold text-gold-foreground border-gold md:scale-105"
                  : "bg-card border-border text-cream"
              }`}
              style={{ transitionDelay: `${i * 100}ms`, boxShadow: p.featured ? "var(--shadow-gold)" : undefined }}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest-deep text-gold font-display tracking-[0.25em] text-xs px-4 py-1.5 rounded-full">
                  MOST PICKED
                </span>
              )}
              <h3 className="font-display text-4xl tracking-wide">{p.name}</h3>
              <p className={`mt-2 text-sm ${p.featured ? "text-gold-foreground/80" : "text-cream/65"}`}>{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-6xl">{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-gold-foreground/70" : "text-cream/60"}`}>{p.unit}</span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-1 ${p.featured ? "text-gold-foreground" : "text-gold"}`} />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-8 inline-block text-center rounded-full py-3 font-display tracking-[0.2em] text-sm transition-colors ${
                  p.featured
                    ? "bg-forest-deep text-gold hover:bg-forest"
                    : "border border-gold text-gold hover:bg-gold hover:text-gold-foreground"
                }`}
              >
                CHOOSE {p.name.toUpperCase()}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
