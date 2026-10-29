import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import { HomePage } from "@/pages/Home";
import { BackgroundPage } from "@/pages/Background";
import { CapabilitiesPage } from "@/pages/Capabilities";
import { ContactPage } from "@/pages/Contact";
import { NotFoundPage } from "@/pages/NotFound";
import { UnderConstruction } from "@/pages/UnderConstruction";
import { ArrowLeft } from "lucide-react";

export function App() {
  const [previewMode, setPreviewMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("preview") === "true") return true;
      return localStorage.getItem("arva_preview_mode") === "true";
    }
    return false;
  });

  const enablePreview = () => {
    setPreviewMode(true);
    localStorage.setItem("arva_preview_mode", "true");
  };

  const disablePreview = () => {
    setPreviewMode(false);
    localStorage.removeItem("arva_preview_mode");
  };

  useEffect(() => {
    if (!previewMode) {
      document.title = "Website Under Construction | ARVA Investment Holdings";
    }
  }, [previewMode]);

  if (!previewMode) {
    return <UnderConstruction onPreview={enablePreview} />;
  }

  return (
    <>
      {/* Top Banner indicating preview mode */}
      <div className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-burgundy px-4 py-2 text-xs text-cream shadow-md">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-cream animate-pulse" />
          <span className="font-semibold uppercase tracking-wider">Mode Pratinjau Internal:</span>
          <span className="hidden sm:inline text-cream/90">
            Website saat ini berstatus "Under Construction" untuk pengunjung umum.
          </span>
        </div>
        <button
          onClick={disablePreview}
          className="inline-flex items-center gap-1.5 rounded-none border border-cream/40 bg-cream/10 px-3 py-1 font-medium text-cream hover:bg-cream hover:text-navy transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-3 w-3" />
          <span>Kembali ke Pengumuman</span>
        </button>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="background" element={<BackgroundPage />} />
            <Route path="capabilities" element={<CapabilitiesPage />} />
            {/* Legacy or direct routes redirect smoothly to their respective landing sections */}
            <Route path="strategic-initiatives" element={<Navigate to="/background" replace />} />
            <Route path="contribution" element={<Navigate to="/#our-contribution" replace />} />
            <Route path="acknowledgement" element={<Navigate to="/#our-acknowledgement" replace />} />
            <Route path="network" element={<Navigate to="/#our-network" replace />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

