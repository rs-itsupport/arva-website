import { useEffect } from "react";
import { StrategicInitiativesSection } from "@/components/arva/sections";

export function StrategicInitiativesPage() {
  useEffect(() => {
    document.title = "Strategic Initiatives | ARVA Investment Holdings";
  }, []);

  return <StrategicInitiativesSection />;
}
