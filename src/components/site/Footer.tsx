import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const cols = [
  { t: "Ground", links: ["About", "Facilities", "Gallery", "Pricing"] },
  { t: "Play", links: ["Book a Pitch", "Coaching", "Tournaments", "Memberships"] },
  { t: "Company", links: ["Careers", "Press", "Partners", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative bg-forest-deep border-t border-border pt-20 pb-8 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-10 pb-16 border-b border-border">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="font-display text-2xl tracking-[0.3em] text-cream">THE PITCH</span>
            </div>
            <p className="mt-4 text-cream/65 max-w-sm leading-relaxed">
              Premium cricket turf, batting cages and floodlit nights. Built for cricketers who take the game seriously.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-cream/70 hover:text-gold hover:border-gold transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="font-display tracking-[0.25em] text-gold text-sm mb-4">{c.t.toUpperCase()}</div>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-cream/75 hover:text-gold transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/55">
          <p>© {new Date().getFullYear()} The Pitch Cricket Club. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
