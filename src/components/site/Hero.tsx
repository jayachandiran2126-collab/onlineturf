import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.4;
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(0.32 0.08 155) 0%, oklch(0.18 0.04 155) 70%)",
        }}
      />
      {/* Animated pitch markings */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldStroke" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.17 85)" />
            <stop offset="100%" stopColor="oklch(0.72 0.18 70)" />
          </linearGradient>
        </defs>
        <ellipse cx="720" cy="500" rx="600" ry="320" fill="none" stroke="url(#goldStroke)" strokeWidth="1.5" className="draw-line" />
        <ellipse cx="720" cy="500" rx="420" ry="220" fill="none" stroke="url(#goldStroke)" strokeWidth="1" strokeDasharray="6 8" className="draw-line" style={{ animationDelay: "0.3s" }} />
        <rect x="660" y="380" width="120" height="240" fill="none" stroke="url(#goldStroke)" strokeWidth="1.5" className="draw-line" />
        <line x1="720" y1="380" x2="720" y2="620" stroke="url(#goldStroke)" strokeWidth="1" className="draw-line" />
        <line x1="660" y1="500" x2="780" y2="500" stroke="url(#goldStroke)" strokeWidth="1" className="draw-line" />
      </svg>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-44 md:pt-52 pb-20">
        <p className="font-display tracking-[0.4em] text-gold text-sm md:text-base mb-6 word-reveal">
          <span>EST. 2019 · FLOODLIT GROUND</span>
        </p>
        <h1 className="font-display text-[3.5rem] sm:text-[5rem] md:text-[7.5rem] lg:text-[9rem] leading-[0.95] tracking-tight text-cream">
          <span className="word-reveal block"><span style={{ animationDelay: "0.1s" }}>WHERE</span></span>
          <span className="word-reveal block"><span className="text-gold-gradient italic" style={{ animationDelay: "0.25s" }}>LEGENDS</span></span>
          <span className="word-reveal block"><span style={{ animationDelay: "0.4s" }}>TAKE GUARD.</span></span>
        </h1>
        <div className="mt-10 max-w-xl">
          <p className="text-lg md:text-xl text-cream/80 leading-relaxed font-body">
            Premium turf wickets, batting cages and floodlit nights. Built for weekend warriors, club cricketers and academies serious about the game.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#booking" className="rounded-full bg-gold px-7 py-3.5 font-display tracking-[0.2em] text-sm text-gold-foreground hover:scale-[1.03] transition-transform">
              RESERVE A PITCH
            </a>
            <a href="#facilities" className="rounded-full border border-cream/30 px-7 py-3.5 font-display tracking-[0.2em] text-sm text-cream hover:border-gold hover:text-gold transition-colors">
              EXPLORE GROUND
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl">
          {[
            { n: "06", l: "Premium Pitches" },
            { n: "24/7", l: "Floodlit Access" },
            { n: "12K+", l: "Sessions Played" },
            { n: "4.9★", l: "Player Rating" },
          ].map((s, i) => (
            <div key={s.l} className="border-l-2 border-gold/40 pl-4 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="font-display text-4xl md:text-5xl text-cream">{s.n}</div>
              <div className="font-display text-xs tracking-[0.25em] text-cream/60 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 scroll-indicator">
        <span className="font-display text-xs tracking-[0.3em] text-cream/60">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-gold" />
      </div>
    </section>
  );
}
