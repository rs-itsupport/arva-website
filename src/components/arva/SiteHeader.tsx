import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/arva-logo.png";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/background", label: "Background" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/#contact", label: "Contact" },
] as const;

export function Logo({ className = "h-8" }: { className?: string }) {
  return <img src={logo} alt="ARVA Investment Holdings" className={`${className} w-auto`} />;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isLinkActive = (to: string) => {
    if (to === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (to === "/#contact") {
      return location.hash === "#contact" || location.pathname === "/contact";
    }
    return location.pathname.startsWith(to);
  };

  const handleNavClick = (to: string) => {
    setOpen(false);
    if (to === "/#contact" && location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-arva flex items-center justify-between gap-6 py-5">
        <Link to="/" aria-label="ARVA home" className="shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Logo className="h-8 md:h-9" />
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((n) => {
              const active = isLinkActive(n.to);
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => handleNavClick(n.to)}
                    className={`text-xs uppercase tracking-wider transition-colors hover:text-burgundy ${
                      active ? "text-burgundy font-semibold" : "text-foreground/80"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <button
          className="md:hidden p-2 -mr-2 cursor-pointer text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="md:hidden border-b border-border bg-background">
          <ul className="container-arva flex flex-col py-4">
            {NAV.map((n) => {
              const active = isLinkActive(n.to);
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    onClick={() => handleNavClick(n.to)}
                    className={`block py-3 font-serif text-xl ${
                      active ? "text-burgundy font-semibold" : "text-foreground"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
