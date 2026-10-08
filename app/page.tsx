import { Header } from "@/components/Header";
import { ProblemSection } from "@/components/ProblemSection";
import { VisionSection } from "@/components/VisionSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { AISection } from "@/components/AISection";
import { ExperimentsSection } from "@/components/ExperimentsSection";
import { InvitationSection } from "@/components/InvitationSection";
import { ClosingSection } from "@/components/ClosingSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main">
        <ProblemSection />
        <VisionSection />
        <PhilosophySection />
        <AISection />
        <ExperimentsSection />
        <InvitationSection />
        <ClosingSection />
      </main>
      <Footer />
    </>
  );
}
