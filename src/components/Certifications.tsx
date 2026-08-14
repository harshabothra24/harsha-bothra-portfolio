import { certifications } from "@/content/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-title"
      className="section-pad bg-sunken"
    >
      <div className="shell">
        <SectionHeading
          index="06"
          label="Certifications"
          titleId="certifications-title"
          title="Programmes & certifications."
        />

        <ol className="mt-14 border-b border-line lg:mt-16">
          {certifications.map((item, index) => (
            <Reveal as="li" key={item.name} className="border-t border-line" delay={index * 60}>
              <div className="grid gap-3 py-7 sm:grid-cols-12 sm:gap-8 sm:py-9">
                <p className="eyebrow tnum sm:col-span-2 sm:pt-1.5">{item.year}</p>

                <div className="sm:col-span-5">
                  <h3 className="font-sans text-[1.0625rem] font-medium leading-snug tracking-[-0.011em] text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-[0.875rem] text-accent">{item.issuer}</p>
                </div>

                {item.note ? (
                  <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-5">
                    {item.note}
                  </p>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
