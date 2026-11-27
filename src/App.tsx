import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import { HomePage } from "@/pages/Home";
import { BackgroundPage } from "@/pages/Background";
import { ContactPage } from "@/pages/Contact";
import { PortfolioPage } from "@/pages/Portfolio";
import { CapabilitiesPage } from "@/pages/Capabilities";
import { NotFoundPage } from "@/pages/NotFound";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="background" element={<BackgroundPage />} />
          <Route path="capabilities" element={<CapabilitiesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          {/* Old addresses point to where that content lives now */}
                    <Route path="strategic-initiatives" element={<Navigate to="/background" replace />} />
          <Route path="contribution" element={<Navigate to="/#our-contribution" replace />} />
          <Route path="acknowledgement" element={<Navigate to="/#our-acknowledgement" replace />} />
          <Route path="network" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
