import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-8 inset-x-0 z-40 transition-all ${scrolled ? "nav-frost" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold" />
          <span className="font-display text-xl tracking-[0.3em] text-cream">THE PITCH</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-display text-sm tracking-[0.2em] text-cream/80 hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#booking" className="hidden md:inline-flex items-center rounded-full bg-gold px-5 py-2.5 font-display text-sm tracking-[0.2em] text-gold-foreground hover:scale-[1.03] transition-transform">
          BOOK NOW
        </a>
        <button onClick={() => setOpen(true)} className="md:hidden text-cream" aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-forest-deep flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-display text-xl tracking-[0.3em] text-cream">THE PITCH</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream">
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center flex-1 gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="font-display text-3xl tracking-[0.2em] text-cream">
                  {l.label}
                </a>
              </li>
            ))}
            <a onClick={() => setOpen(false)} href="#booking" className="mt-4 rounded-full bg-gold px-7 py-3 font-display text-sm tracking-[0.25em] text-gold-foreground">
              BOOK NOW
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
