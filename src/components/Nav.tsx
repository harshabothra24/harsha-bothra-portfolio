"use client";

import { useEffect, useRef, useState } from "react";

import { linkedinUrl, nav, profile } from "@/content/profile";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/cn";
import ThemeToggle from "./ui/ThemeToggle";

const sectionIds = nav.map((item) => item.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const { progress, scrolled } = useScrollProgress();

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Lock the page behind the mobile panel. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  /* Escape closes; focus moves in on open and back to the trigger on close. */
  useEffect(() => {
    if (!open) return;

    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn("relative transition-colors duration-500", scrolled && "nav-blur")}>
        <div className="shell flex h-[var(--nav-h)] items-center justify-between gap-6">
          <a
            href="#top"
            onClick={toTop}
            className="font-display text-[1.0625rem] tracking-[-0.015em] text-ink transition-opacity duration-300 hover:opacity-70"
          >
            {profile.name}
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.01em] transition-colors duration-300",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3.5 bottom-1 h-px origin-left bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href="#contact" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Get in touch
            </a>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="grid size-9 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-line-strong md:hidden"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 0.85 : 0 }}
        />
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        inert={!open ? true : undefined}
        className={cn(
          "fixed inset-0 z-50 bg-paper transition-[opacity,visibility] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="shell flex h-[var(--nav-h)] items-center justify-between">
          <span className="font-display text-[1.0625rem] tracking-[-0.015em]">{profile.name}</span>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="Close navigation menu"
            className="grid size-9 place-items-center rounded-full border border-line text-ink"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="shell mt-6 flex flex-col">
          {nav.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 border-b border-line py-5"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <span className="index-num tnum">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-display text-[2rem] leading-none tracking-[-0.03em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="shell mt-10 flex flex-col gap-4">
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
            Get in touch
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
