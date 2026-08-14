import { skillGroups, topSkills } from "@/content/profile";
import { cn } from "@/lib/cn";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pad bg-sunken">
      <div className="shell">
        <SectionHeading
          index="04"
          label="Skills"
          titleId="skills-title"
          title="What I bring to the work."
          lede="Grouped by what they’re actually for, rather than listed as a wall of tools."
        />

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60} className="bg-paper p-7 lg:p-9">
              <h3 className="font-sans text-[1.0625rem] font-medium tracking-[-0.011em] text-ink">
                {group.title}
              </h3>
              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-faint">
                {group.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className={cn("tag", topSkills.includes(item) && "tag-accent")}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-faint">
            <span className="tag tag-accent">Highlighted</span>
            Endorsed as a top skill on LinkedIn.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
