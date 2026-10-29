import { useEffect } from "react";
import { CapabilitiesSection, PageIntro } from "@/components/arva/sections";

export function CapabilitiesPage() {
  useEffect(() => {
    document.title = "Our Capabilities | ARVA Investment Holdings";
  }, []);

  return (
    <>
      <PageIntro title="Our Capabilities" />
      <CapabilitiesSection />
    </>
  );
}
