import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollReveal: Lightweight, zero-dependency, accessible scroll animator.
 * Uses a single passive IntersectionObserver to reveal elements as they enter viewport.
 * Automatically respects `prefers-reduced-motion` for maximum accessibility.
 * Unobserves elements once revealed for zero continuous CPU/battery consumption.
 */
export function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Check if user prefers reduced motion (Accessibility requirement)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const prefersReducedMotion = mediaQuery.matches;

    // Enable scroll reveal styling on html element
    document.documentElement.classList.add("has-scroll-reveal");

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      // Immediately reveal all elements without transition or motion
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Disconnect observation once revealed (no wasted memory/CPU)
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe all elements with [data-reveal]
    const elements = document.querySelectorAll("[data-reveal]:not(.is-revealed)");
    elements.forEach((el) => observer.observe(el));

    // Cleanup on unmount or route change
    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}
