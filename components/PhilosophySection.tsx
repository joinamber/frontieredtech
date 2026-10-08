import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const rows = [
  { n: "01", h: "Learn deeply.", d: "Build strong foundations in knowledge, reasoning, and communication." },
  { n: "02", h: "Explore freely.", d: "Follow questions, investigate possibilities, and make unexpected connections." },
  { n: "03", h: "Create boldly.", d: "Experiment, build, collaborate, and learn through real-world experiences." },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 md:py-40" aria-label="Our Philosophy">
      <div className="wrap">
        <SectionLabel>03 / OUR PHILOSOPHY</SectionLabel>
        <Reveal as="p" className="mt-8 max-w-4xl text-xl leading-relaxed md:text-3xl md:leading-snug">
          We believe children learn best when they have opportunities to explore ideas, investigate real problems, build things, and discover what works for themselves—with thoughtful guidance along the way.
        </Reveal>
        <Reveal as="p" className="mt-10 text-lg text-muted">Our approach brings together three elements:</Reveal>

        <ol className="mt-12 border-t border-ink/20">
          {rows.map((r) => (
            <li key={r.n} className="border-b border-ink/20">
              <Reveal className="group grid items-baseline gap-4 py-10 transition-colors hover:bg-lime/30 md:grid-cols-12 md:gap-8 md:py-16">
                <span className="label text-muted md:col-span-1">{r.n}</span>
                <h3 className="display text-[clamp(2.5rem,7vw,6rem)] md:col-span-7">{r.h}</h3>
                <p className="max-w-sm text-lg leading-relaxed text-muted md:col-span-4">{r.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal as="blockquote" className="display mt-24 max-w-5xl text-[clamp(1.9rem,4.6vw,3.75rem)]">
          Not learning <span className="hl">instead of</span> doing. Learning <span className="hl">through</span> thinking, making, and doing.
        </Reveal>
      </div>
    </section>
  );
}
