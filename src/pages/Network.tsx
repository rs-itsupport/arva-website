import { useEffect } from "react";
import { NetworkSection, PageIntro } from "@/components/arva/sections";

export function NetworkPage() {
  useEffect(() => {
    document.title = "Our Network | ARVA Investment Holdings";
  }, []);

  return (
    <>
      <PageIntro title="Our Network" />
      <NetworkSection />
    </>
  );
}
