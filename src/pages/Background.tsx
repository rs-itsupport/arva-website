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
        subtitle="A comprehensive narrative based on the ARVA Corporate Profile: Addressing fragmented resources, bridging ecosystem functions, accelerating strategic opportunities, and executing the Strategic Roadmap 2026–2045."
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
