import { useEffect } from "react";
import {
  Hero,
  WeAim,
  StrategicPillarsSection,
  NetworkSection,
  ContributionSection,
  AcknowledgementSection,
  ContactSection,
} from "@/components/arva/sections";

export function HomePage() {
  useEffect(() => {
    document.title = "ARVA Investment Holdings | Investing in People";
  }, []);

  return (
    <>
      {/* 1. Section Home (Hero + We Aim & Commitment) */}
      <Hero />
      <WeAim />

      {/* Three Core Strategic Acceleration Pillars */}
      <StrategicPillarsSection />

      {/* 2. Section Our Network */}
      <NetworkSection />

      {/* 3. Section Our Contribution */}
      <ContributionSection />

      {/* 4. Section Our Acknowledgement */}
      <AcknowledgementSection />

      {/* 5. Section Contact */}
      <ContactSection />
    </>
  );
}
