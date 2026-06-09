import { useState } from "react";
import { Check } from "lucide-react";

export function Booking() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="relative py-24 md:py-32 px-6 lg:px-10 bg-forest-deep">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 reveal">
          <p className="font-display tracking-[0.3em] text-gold text-sm mb-3">— RESERVE</p>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-[0.95]">Book your <span className="italic text-gold-gradient">slot</span>.</h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            Fill in the form and our ground manager will confirm within 30 minutes between 8AM–11PM. Pitch availability updated live.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex gap-3 items-start">
              <span className="font-display text-gold tracking-widest">01</span>
              <span className="text-cream/80">Choose slot & pitch type</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="font-display text-gold tracking-widest">02</span>
              <span className="text-cream/80">Get confirmation + invoice</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="font-display text-gold tracking-widest">03</span>
              <span className="text-cream/80">Show up. Pad up. Play.</span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 reveal bg-card p-8 md:p-10 rounded-lg border border-border space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" name="name" placeholder="Virat K." required />
            <Field label="Phone" name="phone" type="tel" placeholder="+91 98XXX XXXXX" required />
          </div>
          <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Date" name="date" type="date" required />
            <Field label="Time Slot" name="time" type="time" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-display tracking-[0.2em] text-xs text-cream/70">FACILITY</label>
              <select name="facility" required className="mt-2 w-full bg-input border border-border rounded px-4 py-3 text-cream focus:border-gold focus:outline-none">
                <option value="">Select facility</option>
                <option>Turf Pitch</option>
                <option>Batting Cage</option>
                <option>Full Ground (Tournament)</option>
                <option>Coaching Session</option>
              </select>
            </div>
            <div>
              <label className="font-display tracking-[0.2em] text-xs text-cream/70">DURATION</label>
              <select name="duration" required className="mt-2 w-full bg-input border border-border rounded px-4 py-3 text-cream focus:border-gold focus:outline-none">
                <option value="">Select</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>Half day</option>
              </select>
            </div>
          </div>
          <div>
            <label className="font-display tracking-[0.2em] text-xs text-cream/70">NOTES</label>
            <textarea name="notes" rows={3} placeholder="Anything we should know?" className="mt-2 w-full bg-input border border-border rounded px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none resize-none" />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gold py-4 font-display tracking-[0.25em] text-gold-foreground hover:scale-[1.01] transition-transform"
          >
            {sent ? "BOOKING REQUEST SENT" : "REQUEST BOOKING"}
          </button>
          {sent && (
            <div className="flex items-center gap-2 text-gold animate-in fade-in slide-in-from-bottom-2">
              <Check className="w-4 h-4" />
              <span className="text-sm">We'll confirm your slot within 30 minutes.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-display tracking-[0.2em] text-xs text-cream/70">{label.toUpperCase()}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={120}
        className="mt-2 w-full bg-input border border-border rounded px-4 py-3 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
