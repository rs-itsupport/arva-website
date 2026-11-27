import { useEffect } from "react";
import { Hero, WeAim } from "@/components/arva/sections";
import { CapabilitiesOverview, ContributionsSection, AcknowledgementsSection } from "@/components/arva/profile";

export function HomePage() {
  useEffect(() => {
    document.title = "ARVA Investment Holdings | Investing in People";
  }, []);

  return (
    <>
      <Hero />
      <WeAim />
      <CapabilitiesOverview />
      <ContributionsSection />
      <AcknowledgementsSection />
    </>
  );
}
