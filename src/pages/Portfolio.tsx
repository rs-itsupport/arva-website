import { useEffect } from "react";
import { PageIntro } from "@/components/arva/sections";
import { PORTFOLIO_INTRO, SelectedPortfolio } from "@/components/arva/profile";

export function PortfolioPage() {
  useEffect(() => {
    document.title = "Portfolio | ARVA Investment Holdings";
  }, []);

  return (
    <>
      <PageIntro title="Selected Portfolio" subtitle={PORTFOLIO_INTRO} />
      <SelectedPortfolio withHead={false} />
    </>
  );
}
