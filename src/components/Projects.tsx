"use client";

import { useState } from "react";

import { projects } from "@/content/profile";
import { cn } from "@/lib/cn";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {
  const [openSlug, setOpenSlug] = useState<string>(projects[0]?.slug ?? "");

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad">
      <div className="shell">
        <SectionHeading
          index="03"
          label="Projects"
          titleId="projects-title"
          title="Selected case studies."
          lede="Research, analysis and delivery work from my master’s and undergraduate degrees — set out the way I would present it to a client: the problem, the approach, the outcome."
        />

        <div className="mt-14 border-b border-line lg:mt-16">
          {projects.map((project, index) => {
            const isOpen = openSlug === project.slug;
            const panelId = `case-${project.slug}`;
            const triggerId = `case-${project.slug}-trigger`;

            return (
              <Reveal key={project.slug} className="border-t border-line" delay={index * 60}>
                <h3 className="m-0">
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenSlug(isOpen ? "" : project.slug)}
                    className="group flex w-full items-start gap-4 pb-4 pt-8 text-left sm:gap-6 lg:pt-10"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "index-num tnum mt-[0.55rem] w-4 shrink-0 transition-colors duration-300 sm:w-8",
                        !isOpen && "text-faint group-hover:text-accent",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
                        <span className="eyebrow">{project.kind}</span>
                        <span aria-hidden="true" className="text-ghost">
                          ·
                        </span>
                        <span className="eyebrow">{project.year}</span>
                        {project.metric ? (
                          <span className="tag tag-accent tnum">{project.metric.value}</span>
                        ) : null}
                      </span>

                      <span
                        className={cn(
                          "mt-3 block font-display text-[clamp(1.3rem,1.05rem+1.15vw,2.05rem)] leading-[1.15] tracking-[-0.025em] transition-colors duration-300",
                          isOpen ? "text-ink" : "text-ink group-hover:text-accent",
                        )}
                      >
                        {project.title}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-1 grid size-9 shrink-0 place-items-center rounded-full border transition-[transform,background-color,border-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                        isOpen
                          ? "rotate-45 border-accent bg-accent text-accent-ink"
                          : "border-line text-faint group-hover:border-ink group-hover:text-ink",
                      )}
                    >
                      <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Outside the button so the heading's accessible name stays short. */}
                <p className="max-w-2xl pb-8 pl-8 text-[0.9375rem] leading-relaxed text-muted sm:pl-14 lg:pb-10">
                  {project.summary}
                </p>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  data-open={isOpen}
                  className="disclosure"
                >
                  <div className="disclosure-inner" inert={!isOpen || undefined}>
                    <div className="pb-10 pl-8 sm:pl-14 lg:pb-14">
                      <dl className="grid gap-8 border-t border-line pt-8 lg:grid-cols-3 lg:gap-12">
                        <div>
                          <dt className="eyebrow">The problem</dt>
                          <dd className="mt-3.5 text-[0.9375rem] leading-relaxed text-muted">
                            {project.problem}
                          </dd>
                        </div>

                        <div>
                          <dt className="eyebrow">The approach</dt>
                          <dd className="mt-3.5 text-[0.9375rem] leading-relaxed text-muted">
                            {project.approach}
                          </dd>
                        </div>

                        <div>
                          <dt className="eyebrow">The outcome</dt>
                          {project.metric ? (
                            <dd className="mt-3.5">
                              <span className="block font-display text-[2.5rem] leading-none tracking-[-0.03em] text-accent tnum">
                                {project.metric.value}
                              </span>
                              <span className="mt-2 block text-[0.75rem] leading-snug text-faint">
                                {project.metric.label}
                              </span>
                            </dd>
                          ) : null}
                          <dd className="mt-3.5 text-[0.9375rem] leading-relaxed text-muted">
                            {project.outcome}
                          </dd>
                        </div>
                      </dl>

                      <div className="mt-9 flex flex-wrap items-start justify-between gap-6 border-t border-line pt-7">
                        <div>
                          <p className="eyebrow">My role</p>
                          <p className="mt-2 text-[0.9375rem] text-ink">{project.role}</p>
                          <p className="mt-1 text-[0.8125rem] text-faint">{project.context}</p>
                        </div>

                        {project.href ? (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arrow-link underline-grow"
                          >
                            View project
                            <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow size-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 11 11 5M6 5h5v5" />
                            </svg>
                          </a>
                        ) : null}
                      </div>

                      <ul className="mt-7 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <li key={skill} className="tag">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
