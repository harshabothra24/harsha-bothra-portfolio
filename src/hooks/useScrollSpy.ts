"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently under the sticky nav.
 * Deliberately scroll-position based rather than IntersectionObserver —
 * sections here vary hugely in height, and "whichever heading you have
 * most recently passed" is the behaviour people expect from a nav.
 */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState<string>("");
  const key = ids.join(",");

  useEffect(() => {
    const sectionIds = key.split(",").filter(Boolean);
    if (sectionIds.length === 0) return;

    let frame = 0;

    const measure = () => {
      const navHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
      );
      // --nav-h is in rem; convert using the root font size.
      const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const offset = (Number.isNaN(navHeight) ? 4 : navHeight) * rootFontSize + 32;

      // Bottom of the page: always light up the last section.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      setActive(current);
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
  }, [key]);

  return active;
}
