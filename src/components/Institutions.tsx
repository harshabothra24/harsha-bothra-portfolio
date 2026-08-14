import { institutions } from "@/content/profile";
import Reveal from "./ui/Reveal";

export default function Institutions() {
  return (
    <section aria-label="Education, training and experience" className="border-y border-line bg-sunken">
      <div className="shell py-9 sm:py-11">
        <Reveal>
          <p className="eyebrow">Education, training &amp; experience</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
            {institutions.map((item) => (
              /* justify-between keeps the sub-labels on a shared baseline
                 when a name wraps to two lines */
              <li key={item.name} className="flex flex-col justify-between">
                <p className="text-[0.875rem] font-medium leading-snug text-ink">{item.name}</p>
                <p className="mt-1 text-[0.75rem] leading-snug text-faint">{item.relation}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
