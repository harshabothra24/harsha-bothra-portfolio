import { experience } from "@/content/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-pad bg-sunken">
      <div className="shell">
        <SectionHeading
          index="02"
          label="Experience"
          titleId="experience-title"
          title="Where the work has been."
          lede="Two roles across Dubai and Hyderabad — one researching an emerging AI market, one closer to clients and customer experience."
        />

        <ol className="mt-14 border-b border-line lg:mt-16">
          {experience.map((role, index) => (
            <Reveal as="li" key={`${role.company}-${role.start}`} className="border-t border-line">
              <div className="grid gap-7 py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
                <div className="lg:col-span-4">
                  <p aria-hidden="true" className="index-num tnum">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="eyebrow mt-4 tnum">{role.period}</p>
                  <p className="mt-3 text-[0.875rem] leading-snug text-faint">{role.location}</p>
                  {role.type ? (
                    <p className="mt-1 text-[0.875rem] leading-snug text-faint">
                      {role.type}
                      {role.duration ? ` · ${role.duration}` : null}
                    </p>
                  ) : null}
                </div>

                <div className="lg:col-span-8">
                  <h3 className="h3">{role.role}</h3>
                  <p className="mt-2.5 text-[1rem] font-medium text-accent">{role.company}</p>

                  <p className="mt-6 max-w-2xl text-[1.0625rem] leading-relaxed text-muted">
                    {role.summary}
                  </p>

                  <ul className="mt-8 space-y-3.5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.62em] size-[3px] shrink-0 rounded-full bg-line-strong"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {role.impact ? (
                    <p className="mt-8 border-l-2 border-accent py-1 pl-4 text-[0.9375rem] font-medium leading-snug text-ink">
                      {role.impact}
                    </p>
                  ) : null}

                  <ul className="mt-8 flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <li key={skill} className="tag">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
