import { useEffect } from "react";
import { AcknowledgementSection, PageIntro } from "@/components/arva/sections";

export function AcknowledgementPage() {
  useEffect(() => {
    document.title = "Our Acknowledgement | ARVA Investment Holdings";
  }, []);

  return (
    <>
      <PageIntro title="Our Acknowledgement" />
      <AcknowledgementSection />
    </>
  );
}
