import { principles } from "@/content/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Principles() {
  return (
    <section aria-labelledby="principles-title" className="section-pad">
      <div className="shell">
        <SectionHeading
          index="07"
          label="Approach"
          titleId="principles-title"
          title="How I work."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-10 lg:mt-16 lg:gap-14">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 90} className="border-t border-line pt-7">
              <p aria-hidden="true" className="index-num tnum">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="h3 mt-5">{principle.title}</h3>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{principle.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
