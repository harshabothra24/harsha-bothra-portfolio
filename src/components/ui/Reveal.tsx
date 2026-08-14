"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Tag to render. Defaults to a div. */
  as?: "div" | "li" | "article" | "section" | "header" | "figure";
  /** Stagger, in milliseconds. */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts its children into view once, the first time they're
 * scrolled to. All the motion lives in globals.css so it can be switched
 * off wholesale under `prefers-reduced-motion`.
 */
export default function Reveal({ children, as, delay = 0, className }: RevealProps) {
  // Rendered tag is dynamic; typed as a div so the ref and props stay checked.
  const Tag = (as ?? "div") as "div";
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={visible ? "visible" : "hidden"}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
