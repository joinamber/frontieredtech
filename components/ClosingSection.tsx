import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowLink } from "./ArrowLink";

export function ClosingSection() {
  return (
    <section id="closing" className="py-20 md:py-44" aria-label="Closing">
      <div className="wrap">
        <SectionLabel>07 / CLOSING</SectionLabel>
        <Reveal as="h2" className="display mt-8 max-w-6xl text-[clamp(2.5rem,8vw,6.75rem)]">
          The future is unknown. Let&apos;s raise children who are ready to <span className="hl">explore</span> it.
        </Reveal>
        <div className="mt-14 grid md:grid-cols-12">
          <Reveal as="p" className="text-lg leading-relaxed text-muted md:col-span-6 md:col-start-6 md:text-xl">
            We may not know what the world will look like in twenty years. But we can help children develop the curiosity to understand it, the courage to navigate it, and the imagination to make it better.
          </Reveal>
        </div>
        <Reveal as="p" className="display mt-28 text-[clamp(1.9rem,5vw,4.25rem)]">Let&apos;s rethink what it means to be educated.</Reveal>
        <Reveal className="mt-10"><ArrowLink href="#invitation" direction="right" className="text-xl">Be Part of the Journey</ArrowLink></Reveal>
      </div>
    </section>
  );
}
