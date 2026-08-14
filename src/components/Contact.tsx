import { contact, cvPath, linkedinUrl, profile } from "@/content/profile";
import CopyEmail from "./ui/CopyEmail";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const details = [
  { label: "Based in", value: profile.location },
  { label: "Open to", value: "Business Analyst & Consulting roles" },
  { label: "Arrangement", value: profile.availabilityDetail },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad bg-sunken">
      <div className="shell">
        <SectionHeading
          index="08"
          label="Contact"
          titleId="contact-title"
          title={contact.heading}
          lede={contact.body}
        />

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="underline-grow font-display text-[clamp(1.375rem,0.95rem+2.2vw,2.75rem)] leading-none tracking-[-0.03em] text-ink transition-colors duration-300 hover:text-accent"
            >
              {profile.email}
            </a>
            <CopyEmail email={profile.email} />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-11 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              Email me
              <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 8h11M9 4l4 4-4 4" />
              </svg>
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Connect on LinkedIn
              <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow size-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 11 11 5M6 5h5v5" />
              </svg>
            </a>

            <a href={cvPath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <dl className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3">
            {details.map((detail) => (
              <div key={detail.label} className="bg-paper p-7">
                <dt className="eyebrow">{detail.label}</dt>
                <dd className="mt-3 text-[0.9375rem] leading-snug text-ink">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
