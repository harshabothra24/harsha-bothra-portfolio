import type {
  Certification,
  Credential,
  Education,
  Experience,
  Institution,
  NavItem,
  Principle,
  Project,
  SkillGroup,
  SocialLink,
} from "./types";

/* ------------------------------------------------------------------ *
 * SITE
 * Change `siteUrl` to your real domain once it's live (or set
 * NEXT_PUBLIC_SITE_URL in your hosting environment).
 * ------------------------------------------------------------------ */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://harshabothra.com";

/* ------------------------------------------------------------------ *
 * IDENTITY
 * ------------------------------------------------------------------ */

export const profile = {
  name: "Hrasha Bothraaa",
  initials: "HB",
  role: "Business Analyst",
  /** Sits under the name in the hero */
  discipline: "Data & Process Analytics",
  /** The one-line version, used in metadata and the OG image */
  tagline:
    "Business Analyst turning research and messy data into decisions people can act on.",
  /** The statement directly under the name in the hero */
  headline: "I turn research and messy data into decisions people can act on.",
  location: "Hyderabad, India",
  availability: "Open to Business Analyst & Consulting roles — India",
  availabilityDetail: "On-site or hybrid",
  email: "harshabothra24@gmail.com",
  /** Hero positioning statement */
  intro:
    "I hold an MSc in Business Analytics & Consultancy and work where research, data and decision-making meet — across AI, digital transformation and operational performance.",
} as const;

export const linkedinUrl = "https://www.linkedin.com/in/harshabothra/";

export const links: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/harshabothra",
    href: linkedinUrl,
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
  },
];

/** File placed in /public — swap it out whenever your CV is updated. */
export const cvPath = "/harsha-bothra-cv.pdf";

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ *
 * CREDENTIALS — the four numbers worth leading with
 * ------------------------------------------------------------------ */

export const credentials: Credential[] = [
  {
    value: "Merit",
    label: "MSc Business Analytics & Consultancy",
    detail: "Heriot-Watt University, Dubai",
  },
  {
    value: "96",
    label: "PMASTER project simulation",
    detail: "Second-highest score in the class",
  },
  {
    value: "Distinction",
    label: "MSc dissertation",
    detail: "Generative AI adoption in consultancies",
  },
  {
    value: "2025",
    label: "McKinsey Forward Program",
    detail: "Completed with the 2025 cohort",
  },
];

export const institutions: Institution[] = [
  { name: "Heriot-Watt University", relation: "MSc, Merit" },
  { name: "McKinsey & Company", relation: "Forward Program '25" },
  { name: "Aetherbot.ai", relation: "Market Research Analyst" },
  { name: "Accenture", relation: "Forage simulation, '24" },
  { name: "IBM", relation: "Coursera course, '24" },
  { name: "St. Francis College for Women", relation: "BMS, Grade A" },
];

/* ------------------------------------------------------------------ *
 * ABOUT
 * ------------------------------------------------------------------ */

export const about = {
  heading: "A consultant’s structure, an analyst’s evidence.",
  paragraphs: [
    "I’m a Business Analytics graduate based in Hyderabad, with an MSc in Business Analytics & Consultancy from Heriot-Watt University in Dubai. My work sits where research, data and decision-making meet: I take business questions that arrive undefined, break them into something structured and answerable, and come back with recommendations that hold up under scrutiny.",
    "I’ve supported consulting and analytics work across AI, digital transformation and operational performance — researching emerging AI markets and competitor positioning for a Dubai product team, and analysing client feedback to lift retention and service satisfaction for an India-based business. My master’s dissertation examined the strategic factors behind generative AI adoption inside digital transformation consultancies, and was awarded a Distinction.",
    "I’m comfortable in the detail — cleaning data in Excel, writing SQL, building Power BI and Tableau dashboards — and equally comfortable at the other end, where the analysis has to become a single clear recommendation. The McKinsey Forward Program sharpened that second half: structured problem-solving, professional communication, and the discipline of leading with the answer rather than the method.",
  ],
  /** Small fact panel beside the prose */
  facts: [
    { label: "Based in", value: "Hyderabad, India" },
    { label: "Also worked in", value: "Dubai, UAE" },
    { label: "Focus", value: "Business analysis · Consulting · BI" },
    { label: "Currently", value: "Open to roles — on-site or hybrid" },
  ],
};

/* ------------------------------------------------------------------ *
 * EXPERIENCE
 * ------------------------------------------------------------------ */

export const experience: Experience[] = [
  {
    company: "Aetherbot.ai",
    role: "Market Research Analyst",
    type: "Internship",
    location: "Dubai, United Arab Emirates",
    period: "Apr 2025 – Jun 2025",
    start: "2025-04",
    end: "2025-06",
    duration: "3 months",
    summary:
      "Researched emerging AI technologies and market movement for a Dubai-based AI product team, turning findings into strategy leadership could act on.",
    highlights: [
      "Led a research project on emerging AI solutions that produced strategic recommendations adopted by leadership.",
      "Ran structured research and data analysis on emerging AI technologies and market trends to surface growth opportunities.",
      "Analysed competitor offerings and customer insight to identify strategic openings for new product development.",
      "Condensed research and data into concise reports and presentations, communicating implications rather than raw findings.",
      "Worked with cross-functional teams to develop and implement client-focused AI solution initiatives.",
    ],
    impact: "Research-led recommendations adopted by leadership",
    skills: [
      "Market Research",
      "Competitive Analysis",
      "Data Analysis",
      "Microsoft Excel",
      "Generative AI",
      "Executive Reporting",
    ],
  },
  {
    company: "Innovation Living India Pvt Ltd",
    role: "Business Strategy Intern",
    type: "Internship",
    location: "Hyderabad, India",
    period: "May 2023 – Jun 2023",
    start: "2023-05",
    end: "2023-06",
    duration: "2 months",
    summary:
      "Supported strategy and customer-experience work, from client-facing documents through to CRM development and project coordination.",
    highlights: [
      "Analysed client feedback to generate actionable insight that improved retention and service satisfaction.",
      "Built client presentations and strategy documents supporting customer-experience initiatives.",
      "Contributed to project coordination and CRM development, improving team efficiency and internal communication.",
    ],
    impact: "Improved client retention and service satisfaction",
    skills: [
      "Business Strategy",
      "Client Presentations",
      "Customer Insight",
      "CRM",
      "Project Coordination",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * PROJECTS — written as case studies
 * ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: "genai-adoption-consultancies",
    title: "Generative AI Adoption in Digital Transformation Consultancies",
    kind: "MSc Dissertation",
    context: "Heriot-Watt University, Dubai",
    year: "2025",
    role: "Sole researcher",
    summary:
      "A study of what actually drives — and stalls — generative AI adoption inside the consultancies advising everyone else on it.",
    problem:
      "Digital transformation consultancies in Dubai were being asked to guide clients through generative AI while still working out how, and whether, to adopt it internally. The strategic factors behind that decision were not well understood.",
    approach:
      "Scoped the research question, reviewed the strategic and organisational literature on technology adoption, and examined how those factors play out for digital transformation consultancies operating in the Dubai market. The work deliberately treated AI adoption as a strategic decision rather than a technical one.",
    outcome:
      "Awarded a Distinction — the strongest component of an MSc awarded with Merit.",
    metric: { value: "Distinction", label: "awarded grade" },
    skills: [
      "Research Design",
      "Strategic Analysis",
      "Digital Transformation",
      "Generative AI",
      "Academic Writing",
    ],
  },
  {
    slug: "dls-mall-retail-analytics",
    title: "DLS Mall — Four-Year Retail Sales Analysis",
    kind: "Data Analytics Project",
    context: "Excel · Retail performance",
    year: "2025",
    role: "Analyst",
    summary:
      "Four years of departmental sales data, read for the categories actually carrying the business — and the ones quietly absorbing inventory and marketing spend.",
    problem:
      "The mall held four years of departmental sales history but no clear view of which categories were driving performance, which were declining, and where inventory and marketing budget should follow.",
    approach:
      "Analysed the full four-year dataset in Excel using Pareto and ABC analysis to rank departments by contribution, alongside descriptive statistics and trend analysis to separate genuine growth categories from the long tail and read performance across the period.",
    outcome:
      "Identified the high-growth categories and produced inventory and marketing recommendations grounded in four years of evidence rather than intuition.",
    metric: { value: "4 yrs", label: "of sales data analysed" },
    skills: [
      "Advanced Excel",
      "Pareto Analysis",
      "ABC Analysis",
      "Descriptive Statistics",
      "Trend Analysis",
      "Retail Analytics",
    ],
  },
  {
    slug: "plastify-smart-waste",
    title: "Plastify — Smart Waste Management Programme",
    kind: "Group Project",
    context: "Heriot-Watt University, Dubai",
    year: "2025",
    role: "Planning, scheduling & financials",
    summary:
      "A smart bin and mobile app concept for raising plastic recycling in Dubai, taken from idea to a delivery plan a sponsor could sign off.",
    problem:
      "Recycling rates depend on people making the effort at the bin. Plastify proposed a smart bin paired with a mobile app to change that behaviour — but the concept needed a delivery plan detailed enough to be costed, scheduled and approved.",
    approach:
      "Built a complete project management plan for an eight-month implementation: scope definition, work breakdown structure, cost breakdown structure, stakeholder analysis, a risk register, scheduling through Gantt and PERT, and financial planning across the rollout.",
    outcome:
      "A sponsor-ready plan covering scope, schedule, cost and risk end to end for an eight-month implementation.",
    metric: { value: "8 mo", label: "implementation planned" },
    skills: [
      "Project Management",
      "WBS & CBS",
      "Stakeholder Analysis",
      "Risk Management",
      "Gantt & PERT",
      "Financial Planning",
    ],
  },
  {
    slug: "pmaster-simulation",
    title: "PMASTER Project Management Simulation",
    kind: "Simulation",
    context: "Heriot-Watt University, Dubai",
    year: "2025",
    role: "Individual",
    summary:
      "A live simulation of the trade-off every project runs into: scope, budget, people and time all moving at once.",
    problem:
      "The simulation puts you in charge of a project where constraints shift as it runs and every decision compounds into the next milestone.",
    approach:
      "Ran the project end to end — planning, resource allocation and milestone tracking — holding the schedule and budget together as conditions changed.",
    outcome:
      "Scored 96, the second-highest result in the class.",
    metric: { value: "96", label: "score · 2nd in class" },
    skills: [
      "Project Planning",
      "Resource Allocation",
      "Milestone Tracking",
      "Decision-Making Under Constraint",
    ],
  },
  {
    slug: "social-media-skincare",
    title: "The Role of Social Media in Skincare Purchase Decisions",
    kind: "Undergraduate Dissertation",
    context: "St. Francis College for Women, Hyderabad",
    year: "2024",
    role: "Sole researcher",
    summary:
      "A quantitative study of how much of the skincare purchase decision social media is genuinely responsible for.",
    problem:
      "Skincare buying moved onto social platforms faster than most brands understood it, leaving the size of social media’s real influence on the purchase decision an open question.",
    approach:
      "Designed and ran a quantitative survey study, then analysed the responses to test how social media exposure relates to skincare purchase behaviour.",
    outcome:
      "Submitted as the final-year dissertation of a Bachelor of Management Studies completed with Grade A.",
    skills: [
      "Quantitative Research",
      "Survey Design",
      "Consumer Behaviour",
      "Statistical Analysis",
      "Marketing",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * SKILLS
 * ------------------------------------------------------------------ */

/** Endorsed as top skills on LinkedIn — rendered with a marker. */
export const topSkills = ["Tableau", "Power BI", "Project Management"];

export const skillGroups: SkillGroup[] = [
  {
    title: "Consulting & Strategy",
    description: "Framing undefined problems and turning research into a recommendation.",
    items: [
      "Management Consulting",
      "Structured Problem-Solving",
      "Market Research",
      "Competitive Analysis",
      "Strategic Change",
      "Business Optimisation",
    ],
  },
  {
    title: "Data & Analytics",
    description: "Getting from raw data to a number someone can rely on.",
    items: [
      "Data Analysis",
      "Statistical Analysis",
      "SQL",
      "Advanced Excel",
      "Data Cleaning",
      "Pivot Tables & Lookups",
      "Pareto & ABC Analysis",
      "Trend Analysis",
      "KPI Development",
    ],
  },
  {
    title: "Business Intelligence",
    description: "Making performance legible to the people who have to act on it.",
    items: [
      "Power BI",
      "Tableau",
      "Dashboard Design",
      "Data Visualisation",
      "Business Storytelling",
      "Reporting",
    ],
  },
  {
    title: "Project & Delivery",
    description: "Plans detailed enough to survive contact with reality.",
    items: [
      "Project Management",
      "Agile & Waterfall",
      "WBS & CBS",
      "Stakeholder Analysis",
      "Risk Registers",
      "Gantt & PERT Scheduling",
      "Resource Allocation",
    ],
  },
  {
    title: "Technology & AI",
    description: "Where the tooling is heading, and what it means commercially.",
    items: [
      "Generative AI",
      "Digital Transformation",
      "AI Market Research",
      "Process Analytics",
      "Process Improvement",
    ],
  },
  {
    title: "Communication & Leadership",
    description: "The part where the analysis actually has to land.",
    items: [
      "Executive Reporting",
      "Client Presentations",
      "Stakeholder Communication",
      "Leadership",
      "Teamwork",
      "Cross-Functional Collaboration",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * EDUCATION
 * ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    qualification: "MSc Business Analytics & Consultancy",
    institution: "Heriot-Watt University",
    location: "Dubai, UAE",
    period: "Sep 2024 – Sep 2025",
    grade: "Merit · Distinction in Dissertation",
    notes: [
      "Specialised in business analytics, management consulting, data analytics and strategic change, with hands-on work in data visualisation, project management and big data applications.",
      "Dissertation examined the strategic factors influencing generative AI adoption in digital transformation consultancies in Dubai.",
      "Scored 96 in the PMASTER Project Management Simulation — the second-highest result in the class — across planning, resource allocation and milestone tracking.",
      "Graduated November 2025.",
    ],
    coursework: [
      "Business Analytics",
      "Management Consulting",
      "Data Analytics",
      "Strategic Change",
      "Data Visualisation",
      "Project Management",
      "Big Data Applications",
    ],
  },
  {
    qualification: "Bachelor of Management Studies",
    institution: "St. Francis College for Women",
    location: "Hyderabad, India",
    period: "Jun 2021 – Apr 2024",
    grade: "Grade A",
    notes: [
      "Specialised in business management, analytics, marketing and consumer behaviour.",
      "Dissertation: “The role of social media in influencing skincare purchase decisions”, using quantitative survey methods.",
    ],
    coursework: [
      "Business Management",
      "Analytics",
      "Marketing",
      "Consumer Behaviour",
    ],
  },
];

/* ------------------------------------------------------------------ *
 * CERTIFICATIONS
 * ------------------------------------------------------------------ */

export const certifications: Certification[] = [
  {
    name: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    year: "2025",
    note: "Practical training in leadership, structured problem-solving, analytical thinking and communication, aligned to top-tier consulting standards.",
  },
  {
    name: "Data Analytics & Visualization Simulation",
    issuer: "Accenture · via Forage",
    year: "2024",
    note: "Applied data analysis and visualisation against a client-style brief.",
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "IBM · via Coursera",
    year: "2024",
    note: "Foundations of the analytics workflow, from data collection through to insight.",
  },
  {
    name: "Power BI with AI Workshop",
    issuer: "Office Master",
    year: "2025",
    note: "Building Power BI dashboards with AI-assisted analysis features.",
  },
];

/* ------------------------------------------------------------------ *
 * HOW I WORK
 * ------------------------------------------------------------------ */

export const principles: Principle[] = [
  {
    title: "Structure before analysis",
    body: "Most business questions arrive undefined. Breaking one into parts that can actually be answered is the work that decides whether the analysis is worth anything.",
  },
  {
    title: "Lead with the answer",
    body: "Research is only useful when someone can act on it. I write to the decision — the finding first, the evidence behind it, the implication last.",
  },
  {
    title: "Measure what you want to move",
    body: "Dashboards and KPIs earn their place when they change something. I build them around what the business is trying to improve, not around what is easiest to count.",
  },
];

/* ------------------------------------------------------------------ *
 * CONTACT
 * ------------------------------------------------------------------ */

export const contact = {
  heading: "Let’s build something meaningful.",
  body: "I’m open to Business Analyst and Consulting roles in India, and always glad to hear from founders, teams and collaborators working on problems where the data isn’t clean and the answer isn’t obvious.",
};
