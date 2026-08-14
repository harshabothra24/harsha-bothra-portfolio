import { about, cvPath } from "@/content/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="shell">
        <SectionHeading index="01" label="About" titleId="about-title" title={about.heading} />

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 90}>
                <p
                  className={
                    index === 0
                      ? "lede"
                      : "mt-6 text-[1.0625rem] leading-relaxed text-muted"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={280}>
              <a
                href={cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link underline-grow mt-9 inline-flex"
              >
                Download CV
                <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2.5v9M4.5 8 8 11.5 11.5 8M3 13.5h10" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={140}>
              <dl className="border-t border-line">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="border-b border-line py-5">
                    <dt className="eyebrow">{fact.label}</dt>
                    <dd className="mt-2 text-[0.9375rem] leading-snug text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
