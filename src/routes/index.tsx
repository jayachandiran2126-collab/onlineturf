import { createFileRoute } from "@tanstack/react-router";
import { Announcement } from "@/components/site/Announcement";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Facilities } from "@/components/site/Facilities";
import { Gallery } from "@/components/site/Gallery";
import { Booking } from "@/components/site/Booking";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Pitch — Premium Cricket Turf, Cages & Floodlit Nights" },
      { name: "description", content: "Book premium cricket pitches, batting cages, coaching and tournaments at The Pitch. Floodlit till midnight. Tournament-grade turf in Bengaluru." },
      { property: "og:title", content: "The Pitch — Premium Cricket Turf" },
      { property: "og:description", content: "Where legends take guard. Six pitches, six cages, floodlit till midnight." },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();
  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Cursor />
      <Announcement />
      <Nav />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Gallery />
        <Booking />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
