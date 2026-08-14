"use client";

import { useEffect, useState } from "react";

/**
 * Tracks how far down the page we are (0–1) and whether we've left the
 * very top — used for the nav's background and its progress hairline.
 */
export function useScrollProgress(): { progress: number; scrolled: boolean } {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
      setScrolled(window.scrollY > 16);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return { progress, scrolled };
}
