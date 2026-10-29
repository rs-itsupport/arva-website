import { useEffect } from "react";
import { ContactSection, PageIntro } from "@/components/arva/sections";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact | ARVA Investment Holdings";
  }, []);

  return (
    <>
      <PageIntro
        title="Contact ARVA"
        subtitle="Connect with our investment, advisory, and governance leadership team."
      />
      <ContactSection />
    </>
  );
}
