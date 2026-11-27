import { useEffect } from "react";
import { PageIntro } from "@/components/arva/sections";
import { CAPABILITIES_INTRO, PILLARS, CapabilityDetail } from "@/components/arva/profile";

export function CapabilitiesPage() {
  useEffect(() => {
    document.title = "Capabilities | ARVA Investment Holdings";
  }, []);

  return (
    <>
      <PageIntro title="Our Capabilities" subtitle={CAPABILITIES_INTRO} />
      {PILLARS.map((p, i) => (
        <CapabilityDetail key={p.id} p={p} flip={i % 2 === 1} />
      ))}
    </>
  );
}
