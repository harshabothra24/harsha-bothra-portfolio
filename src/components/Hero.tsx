"use client";

import { useEffect, useRef, type CSSProperties } from "react";

import { credentials, linkedinUrl, profile } from "@/content/profile";

const words = profile.name.split(" ");

/** Cumulative character index, so the stagger runs across the whole name. */
function characterDelays() {
  let index = 0;
  return words.map((word) =>
    Array.from(word).map((character) => ({ character, delay: 140 + index++ * 26 })),
  );
}

const nameCharacters = characterDelays();
const nameSettleMs = 140 + profile.name.replace(/\s/g, "").length * 26;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* A soft light that tracks the cursor. Fine pointers only, motion permitting. */
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        element.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
        element.style.setProperty("--my", `${event.clientY - bounds.top}px`);
      });
    };

    element.addEventListener("pointermove", onPointerMove);
    return () => {
      element.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-[var(--nav-h)]"
    >
      <div aria-hidden="true" className="grid-field pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="spotlight pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper"
      />

      <div className="shell relative w-full pb-10 pt-10 sm:pt-14">
        <p
          className="hero-in eyebrow flex items-start gap-2.5"
          style={{ "--d": "0ms" } as CSSProperties}
        >
          <span
            aria-hidden="true"
            className="mt-[0.45em] inline-block size-1.5 shrink-0 rounded-full bg-accent"
          />
          {profile.availability}
        </p>

        <h1 className="display mt-6 sm:mt-7" aria-label={profile.name}>
          <span aria-hidden="true">
            {nameCharacters.map((word, wordIndex) => (
              <span key={wordIndex}>
                {wordIndex > 0 ? " " : null}
                <span className="inline-block">
                  {word.map(({ character, delay }, characterIndex) => (
                    <span
                      key={characterIndex}
                      className="hero-char"
                      style={{ "--d": `${delay}ms` } as CSSProperties}
                    >
                      {character}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </span>
        </h1>

        <p
          className="hero-in mt-6 max-w-3xl font-display text-[clamp(1.375rem,1.05rem+1.4vw,2.05rem)] leading-[1.26] tracking-[-0.02em] text-ink sm:mt-7"
          style={{ "--d": `${nameSettleMs + 60}ms` } as CSSProperties}
        >
          {profile.headline}
        </p>

        <div
          className="hero-in mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
          style={{ "--d": `${nameSettleMs + 140}ms` } as CSSProperties}
        >
          <span className="eyebrow">{profile.role}</span>
          <span aria-hidden="true" className="hidden h-px w-6 bg-line-strong sm:block" />
          <span className="eyebrow">{profile.discipline}</span>
          <span aria-hidden="true" className="hidden h-px w-6 bg-line-strong sm:block" />
          <span className="eyebrow">{profile.location}</span>
        </div>

        <p
          className="hero-in mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-muted"
          style={{ "--d": `${nameSettleMs + 200}ms` } as CSSProperties}
        >
          {profile.intro}
        </p>

        <div
          className="hero-in mt-9 flex flex-wrap items-center gap-3"
          style={{ "--d": `${nameSettleMs + 260}ms` } as CSSProperties}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work
            <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 8h11M9 4l4 4-4 4" />
            </svg>
          </a>

          <a href="#contact" className="btn btn-ghost">
            Get In Touch
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="arrow-link underline-grow ml-1 h-12 px-1"
          >
            LinkedIn
            <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow size-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 11 11 5M6 5h5v5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="shell relative w-full">
        <div aria-hidden="true" className="hairline" />
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 py-9 lg:grid-cols-4 lg:gap-x-10">
          {credentials.map((credential, index) => (
            <div
              key={credential.label}
              className="hero-in"
              style={{ "--d": `${nameSettleMs + 340 + index * 70}ms` } as CSSProperties}
            >
              <dt className="font-display text-[clamp(1.75rem,1.4rem+1.1vw,2.35rem)] leading-none tracking-[-0.03em] text-ink tnum">
                {credential.value}
              </dt>
              <dd className="mt-3 text-[0.8125rem] font-medium leading-snug text-ink">
                {credential.label}
              </dd>
              {credential.detail ? (
                <dd className="mt-1 text-[0.75rem] leading-snug text-faint">{credential.detail}</dd>
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
