import { Reveal } from "./Reveal";
import { ArrowLink } from "./ArrowLink";

export type Initiative = { n: string; name: string; tagline: string; body: string[]; cta: string; href: string };

export function InitiativePanel({ i, index }: { i: Initiative; index: number }) {
  return (
    <Reveal delay={index * 0.12} className="h-full">
      <article className="group flex h-full flex-col justify-between border-t border-ink/20 bg-transparent p-0 transition-colors duration-500 hover:bg-lime md:border md:p-10 lg:p-14">
        <div>
          <p className="label text-muted transition-colors group-hover:text-ink">Initiative {i.n}</p>
          <h3 className="display mt-6 text-[clamp(2.25rem,4.4vw,4rem)]">{i.name}</h3>
          <p className="mt-6 text-xl font-medium leading-snug md:text-2xl">{i.tagline}</p>
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted transition-colors group-hover:text-ink md:text-lg">
            {i.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <ArrowLink href={i.href} external className="mt-12 text-lg">{i.cta}</ArrowLink>
      </article>
    </Reveal>
  );
}
