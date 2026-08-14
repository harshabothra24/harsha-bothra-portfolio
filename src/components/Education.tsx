import { education } from "@/content/profile";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="section-pad">
      <div className="shell">
        <SectionHeading
          index="05"
          label="Education"
          titleId="education-title"
          title="Where the thinking was trained."
        />

        <ol className="mt-14 border-b border-line lg:mt-16">
          {education.map((item) => (
            <Reveal as="li" key={item.qualification} className="border-t border-line">
              <div className="grid gap-7 py-10 lg:grid-cols-12 lg:gap-10 lg:py-14">
                <div className="lg:col-span-4">
                  <p className="eyebrow tnum">{item.period}</p>
                  <p className="mt-3 text-[0.875rem] leading-snug text-faint">{item.location}</p>
                  {item.grade ? (
                    <p className="mt-5">
                      <span className="tag tag-accent">{item.grade}</span>
                    </p>
                  ) : null}
                </div>

                <div className="lg:col-span-8">
                  <h3 className="h3">{item.qualification}</h3>
                  <p className="mt-2.5 text-[1rem] font-medium text-accent">{item.institution}</p>

                  <ul className="mt-6 space-y-3.5">
                    {item.notes.map((note) => (
                      <li
                        key={note}
                        className="flex gap-3.5 text-[0.9375rem] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.62em] size-[3px] shrink-0 rounded-full bg-line-strong"
                        />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <p className="eyebrow">Relevant coursework</p>
                    <ul className="mt-3.5 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <li key={course} className="tag">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
