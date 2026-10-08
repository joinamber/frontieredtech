import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function AISection() {
  return (
    <section id="ai" className="dark-sec bg-ink py-20 text-paper md:py-44" aria-label="Learning in the Age of AI">
      <div className="wrap">
        <SectionLabel dark>04 / LEARNING IN THE AGE OF AI</SectionLabel>
        <Reveal as="h2" className="display mt-8 max-w-5xl text-[clamp(2.5rem,8vw,6.5rem)]">
          AI is changing what <span className="hl-dark">intelligence</span> can do.
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed text-paper/75 md:col-span-6 md:col-start-6 md:text-xl">
            <Reveal as="p">For our children, AI won&apos;t be a technological revolution they experience halfway through their careers. It will be part of the world they&apos;ve always known.</Reveal>
            <Reveal as="p" className="text-paper">We see this as an extraordinary opportunity to rethink education.</Reveal>
          </div>
        </div>

        <ul className="mt-24 border-t border-paper/20">
          {[
            <>What if AI could help children explore their <span className="hl-dark">curiosity</span> more deeply?</>,
            <>What if technology could make learning more personal, while giving children more room to <span className="hl-dark">think independently</span>?</>,
            <>What if, instead of competing with machines to produce better answers, we helped children become better at <span className="hl-dark">asking questions worth answering</span>?</>,
          ].map((q, i) => (
            <li key={i} className="border-b border-paper/20 py-10 md:py-16">
              <Reveal className="display max-w-5xl text-[clamp(1.75rem,4.2vw,3.5rem)]">{q}</Reveal>
            </li>
          ))}
        </ul>

        <Reveal as="p" className="mt-24 max-w-4xl text-xl font-medium leading-snug md:text-3xl">
          We believe the purpose of education isn&apos;t to compete with AI. It&apos;s to help children develop the <span className="hl-dark">judgment</span>, <span className="hl-dark">imagination</span>, and <span className="hl-dark">agency</span> to shape a world with it.
        </Reveal>
      </div>
    </section>
  );
}
