"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that reveals any element with the
 * `.reveal` class as it scrolls into view. Rendered once at the page root.
 */
export default function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
