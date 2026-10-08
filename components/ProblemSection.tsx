import { OpeningQuestion } from "./OpeningQuestion";
import { Reveal } from "./Reveal";

const questions = [
  "Can our children think for themselves?",
  "Can they recognize a problem nobody has pointed out?",
  "Can they challenge assumptions, imagine possibilities, and turn ideas into reality?",
];

export function ProblemSection() {
  return (
    <section id="idea" aria-label="The Problem">
      <OpeningQuestion />
      <div id="problem-body" className="wrap pb-32 pt-24 md:pt-40">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 md:col-start-5">
            <Reveal as="p" className="text-lg leading-relaxed text-muted md:text-xl">
              For generations, education has largely followed a familiar formula:
            </Reveal>
            <Reveal as="p" className="display mt-6 text-[clamp(1.9rem,4.2vw,3.25rem)]">
              Learn the material. Remember the answers. Pass the test.
            </Reveal>
            <Reveal as="p" className="mt-10 text-lg leading-relaxed md:text-xl">
              That approach has helped millions build essential knowledge and skills. But in a world where AI can generate answers, write code, and solve increasingly complex problems, knowing the right answer is no longer enough.
            </Reveal>
          </div>
        </div>

        <Reveal as="h2" className="display mt-32 max-w-4xl text-[clamp(2.25rem,6vw,5rem)]">
          The questions we should be asking are changing.
        </Reveal>

        <ol className="mt-16 border-t border-ink/20">
          {questions.map((q, i) => (
            <li key={q} className="border-b border-ink/20 py-10 md:py-14">
              <Reveal className="grid gap-4 md:grid-cols-12">
                <span className="label text-muted md:col-span-1">0{i + 1}</span>
                <p className="display text-[clamp(1.75rem,4.4vw,3.75rem)] md:col-span-11">{q}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal as="p" className="mt-16 max-w-3xl text-xl font-semibold leading-snug md:text-2xl">
          We believe these questions deserve a bigger place in education.
        </Reveal>
      </div>
    </section>
  );
}
