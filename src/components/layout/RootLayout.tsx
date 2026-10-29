import { Outlet } from "react-router-dom";
import { SiteHeader } from "@/components/arva/SiteHeader";
import { SiteFooter } from "@/components/arva/sections";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollReveal } from "@/components/common/ScrollReveal";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollToTop />
      <ScrollReveal />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
