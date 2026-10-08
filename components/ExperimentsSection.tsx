import { InitiativePanel, type Initiative } from "./InitiativePanel";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const initiatives: Initiative[] = [
  {
    n: "01", name: "Frontier Kids Club", tagline: "Little explorers. Big possibilities.",
    body: [
      "A pilot initiative exploring how curiosity, creativity, and hands-on discovery can help children become more independent thinkers and confident problem solvers.",
      "Through playful exploration and real-world challenges, we're experimenting with learning experiences that go beyond the conventional classroom.",
    ],
    cta: "Discover Frontier Kids Club", href: "https://www.frontierkidsclub.com/",
  },
  {
    n: "02", name: "Day of AI Singapore", tagline: "Helping the next generation navigate an AI-powered world.",
    body: [
      "An initiative bringing AI education and exploration to Singapore's learning community.",
      "We're exploring how children and educators can understand, question, and creatively engage with artificial intelligence—not simply as users of technology, but as thoughtful participants in shaping its future.",
    ],
    cta: "Explore Day of AI Singapore", href: "https://www.dayofaisingapore.com/",
  },
];

export function ExperimentsSection() {
  return (
    <section id="experiments" className="py-20 md:py-40" aria-label="Our Experiments">
      <div className="wrap">
        <SectionLabel>05 / OUR EXPERIMENTS</SectionLabel>
        <Reveal as="h2" className="display mt-8 max-w-5xl text-[clamp(2.25rem,6.4vw,5.25rem)]">
          We&apos;re not just imagining a different education. We&apos;re <span className="hl">experimenting</span> with it.
        </Reveal>
        <div className="mt-12 grid gap-6 text-lg leading-relaxed md:grid-cols-12 md:text-xl">
          <Reveal as="p" className="md:col-span-5">Reimagining education is too important to leave at the level of ideas.</Reveal>
          <div className="space-y-5 text-muted md:col-span-6 md:col-start-7">
            <Reveal as="p">We&apos;re starting small: bringing children, parents, educators, and communities together to explore new ways of learning.</Reveal>
            <Reveal as="p">Through hands-on programs, real-world challenges, and conversations about the future of education, we&apos;re learning what works, what doesn&apos;t, and what deserves to be developed further.</Reveal>
          </div>
        </div>
        <div className="mt-20 grid gap-12 md:grid-cols-2 md:gap-6">
          {initiatives.map((i, idx) => <InitiativePanel key={i.n} i={i} index={idx} />)}
        </div>
        <Reveal as="p" className="mt-14 max-w-2xl italic text-muted md:text-lg">
          These initiatives are early steps in a longer journey to research, experiment with, and develop new approaches to education.
        </Reveal>
      </div>
    </section>
  );
}
