import { CapabilityBlock, type Capability } from "./CapabilityBlock";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const caps: Capability[] = [
  { n: "01", title: "Critical Thinkers", tagline: "Question thoughtfully. Think independently.", body: "Children who don't simply accept information, but learn to examine evidence, challenge assumptions, and form their own judgments." },
  { n: "02", title: "Curious Learners", tagline: "Stay curious. Keep discovering.", body: "Children who ask questions, pursue their interests, and discover the joy of learning—not because they have to, but because they want to." },
  { n: "03", title: "Creative Builders", tagline: "Imagine possibilities. Make things happen.", body: "Children who connect ideas, experiment with solutions, and turn their imagination into meaningful creations." },
  { n: "04", title: "Fearless Adventurers", tagline: "Embrace the unknown. Find your own way.", body: "Children who are willing to try, fail, adapt, and try again. Who approach uncertainty with courage, resilience, and an open mind." },
];

export function VisionSection() {
  return (
    <section id="vision" className="bg-stone py-20 md:py-40" aria-labelledby="vision-h">
      <div className="wrap">
        <SectionLabel>02 / OUR VISION</SectionLabel>
        <Reveal as="h2" className="display mt-8 max-w-5xl text-[clamp(2.25rem,7vw,5.5rem)]">
          <span id="vision-h">Raising thinkers, makers, and explorers.</span>
        </Reveal>
        <Reveal as="p" className="mt-8 max-w-xl text-lg text-muted md:text-xl">
          We envision an education that develops four essential human capabilities.
        </Reveal>
        <div className="mt-20 grid gap-x-16 md:grid-cols-2">
          {caps.map((c, i) => <CapabilityBlock key={c.n} c={c} index={i} />)}
        </div>
        <Reveal as="p" className="display mt-20 max-w-4xl text-[clamp(1.6rem,3.4vw,2.75rem)]">
          Because the future belongs to those who can think, imagine, and act—not simply follow instructions.
        </Reveal>
      </div>
    </section>
  );
}
