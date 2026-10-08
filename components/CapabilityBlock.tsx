import { Reveal } from "./Reveal";

export type Capability = { n: string; title: string; tagline: string; body: string };

export function CapabilityBlock({ c, index }: { c: Capability; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.1} className="group h-full">
      <article className="h-full border-t border-ink/20 py-10 transition-colors duration-300 group-hover:border-ink md:px-0 md:py-14 md:pr-12">
        <p className="display text-[clamp(4rem,9vw,7rem)] text-ink/15 transition-colors duration-300 group-hover:text-ink">{c.n}</p>
        <h3 className="display mt-6 text-[clamp(1.65rem,3vw,2.75rem)]">{c.title}</h3>
        <p className="mt-3 text-lg italic text-muted">{c.tagline}</p>
        <p className="mt-6 max-w-md text-[17px] leading-relaxed md:text-lg">{c.body}</p>
      </article>
    </Reveal>
  );
}
