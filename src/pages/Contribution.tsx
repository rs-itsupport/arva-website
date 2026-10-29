import { useEffect } from "react";
import { PageIntro, ContributionSection } from "@/components/arva/sections";

export function ContributionPage() {
  useEffect(() => {
    document.title = "Our Contribution | ARVA Investment Holdings";
  }, []);

  return (
    <>
      <PageIntro
        title="Our Contribution"
        subtitle="National stewardship, global forums, and pioneering initiatives accelerating the Islamic economy."
      />
      <ContributionSection />
    </>
  );
}
