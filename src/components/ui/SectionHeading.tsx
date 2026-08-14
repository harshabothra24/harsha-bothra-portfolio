import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** Two-digit section index, e.g. "01" */
  index: string;
  /** Short uppercase label shown beside the index */
  label: string;
  /** The id used for aria-labelledby on the parent section */
  titleId: string;
  title: string;
  lede?: string;
};

export default function SectionHeading({
  index,
  label,
  titleId,
  title,
  lede,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span aria-hidden="true" className="index-num tnum">
          {index}
        </span>
        <span className="eyebrow">{label}</span>
        <span aria-hidden="true" className="hairline flex-1" />
      </div>

      <h2 id={titleId} className="h2 mt-7 max-w-4xl">
        {title}
      </h2>

      {lede ? <p className="lede mt-6 max-w-2xl">{lede}</p> : null}
    </Reveal>
  );
}
