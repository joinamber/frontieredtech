import { ArrowDown } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

/** First viewport. Server-rendered, no entrance gating: legible immediately. */
export function OpeningQuestion() {
  return (
    <div className="wrap relative flex min-h-[100svh] flex-col justify-center pb-24 pt-28">
      <SectionLabel>01 / THE PROBLEM</SectionLabel>
      <h1 className="display mt-8 text-[clamp(2.75rem,12vw,7.5rem)]">
        The world has changed.
        <br />
        <span className="hl whitespace-nowrap">Has education?</span>
      </h1>
      <a href="#problem-body" aria-label="Scroll to continue" className="absolute bottom-6 left-[clamp(1.25rem,4vw,3.5rem)] flex items-center gap-3 text-muted">
        <ArrowDown aria-hidden className="nudge size-5" />
        <span className="label">Scroll</span>
      </a>
    </div>
  );
}
