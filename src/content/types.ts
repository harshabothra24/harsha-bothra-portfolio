/**
 * Shape of every piece of content on the site.
 * Edit the data in `profile.ts` — these types just keep it honest.
 */

export type NavItem = {
  /** Section id, without the leading `#` */
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  /** Short display form, e.g. "linkedin.com/in/harshabothra" */
  handle: string;
  href: string;
};

export type Credential = {
  /** Big, scannable value — keep it short */
  value: string;
  label: string;
  /** Optional clarifier shown underneath */
  detail?: string;
};

export type Institution = {
  name: string;
  /** What the relationship actually was — keeps the strip honest */
  relation: string;
};

export type Experience = {
  company: string;
  role: string;
  /** Employment type, e.g. "Internship" */
  type?: string;
  location: string;
  /** Human-readable range, e.g. "Apr 2025 — Jun 2025" */
  period: string;
  /** ISO-ish dates for structured data / sorting */
  start: string;
  end: string;
  duration?: string;
  summary: string;
  highlights: string[];
  /** Optional headline result, rendered as a callout */
  impact?: string;
  skills: string[];
};

export type Project = {
  slug: string;
  title: string;
  /** e.g. "MSc Dissertation", "Group Project" */
  kind: string;
  context: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  /** Optional headline figure, e.g. { value: "96", label: "score, 2nd in class" } */
  metric?: { value: string; label: string };
  skills: string[];
  href?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type Education = {
  qualification: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  notes: string[];
  coursework: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  note?: string;
};

export type Principle = {
  title: string;
  body: string;
};
