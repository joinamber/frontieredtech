import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowLink } from "./ArrowLink";

export function InvitationSection() {
  return (
    <section id="invitation" className="bg-stone py-20 md:py-40" aria-label="An Open Invitation">
      <div className="wrap">
        <SectionLabel>06 / AN OPEN INVITATION</SectionLabel>
        <Reveal as="h2" className="display mt-8 max-w-5xl text-[clamp(2.25rem,6.6vw,5.5rem)]">
          The future of education shouldn&apos;t be designed behind <span className="hl">closed doors.</span>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed md:text-xl lg:col-span-6">
            <Reveal as="p">We don&apos;t claim to have all the answers.</Reveal>
            <Reveal as="p">In fact, we think asking better questions is where meaningful change begins.</Reveal>
            <Reveal as="p" className="text-muted">We&apos;re bringing together people who care about how children learn and who are willing to challenge familiar assumptions.</Reveal>
            <Reveal as="p" className="border-t border-ink/20 pt-6"><strong>If you&apos;re a parent</strong>, we&apos;d love to understand your hopes, concerns, and aspirations for your child&apos;s education.</Reveal>
            <Reveal as="p" className="border-t border-ink/20 pt-6"><strong>If you&apos;re an educator</strong>, we&apos;d love to exchange ideas, explore new teaching approaches, and learn from your experience.</Reveal>
            <Reveal as="p" className="border-t border-ink/20 pt-6"><strong>If you&apos;re a researcher, builder, or simply someone who cares</strong>, there&apos;s room for you in this conversation too.</Reveal>
            <Reveal as="p" className="text-muted">Because rethinking education isn&apos;t the work of one person or one institution.</Reveal>
            <Reveal as="p" className="display text-[clamp(2rem,3.6vw,3rem)]">It&apos;s something we build together.</Reveal>
            <Reveal><ArrowLink href="#contact-form" direction="right" className="text-xl">Join the Conversation</ArrowLink></Reveal>
          </div>
          <div id="contact-form" className="lg:col-span-5 lg:col-start-8">
            <Reveal><ContactForm /></Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
