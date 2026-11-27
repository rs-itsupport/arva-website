import { useEffect } from "react";
import {
  PageIntro,
  BackgroundSection,
  BridgingSection,
  AcceleratorSection,
  StrategicInitiativesSection,
} from "@/components/arva/sections";

export function BackgroundPage() {
  useEffect(() => {
    document.title = "Background & Strategic Roadmap | ARVA Investment Holdings";
  }, []);

  return (
    <div>
      {/* Narrative Page Introduction */}
      <PageIntro
        title="Background & Strategic Framework"
        subtitle="Why ARVA exists, how existing resources can work as one ecosystem, and the roadmap we are following through 2045."
      />

      {/* Slide 01: Background (Distributed Resources ≠ Ecosystem Capability) */}
      <BackgroundSection />

      {/* Slide 02: Bridging Resources to Ecosystem Functions */}
      <BridgingSection />

      {/* Slide 03: Key Strategic Accelerator */}
      <AcceleratorSection />

      {/* Slide 04: Strategic Initiatives & Roadmap 2026–2045 */}
      <StrategicInitiativesSection />
    </div>
  );
}
