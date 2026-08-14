import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { education, links, profile, siteUrl } from "@/content/profile";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "Harsha Bothra — Business Analyst with an MSc in Business Analytics & Consultancy. Market research, data and process analytics, Power BI and Tableau. Based in Hyderabad, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role} | ${profile.discipline}`,
    template: `%s · ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} — Portfolio`,
  keywords: [
    "Harsha Bothra",
    "Harsha Bothra consulting",
    "Harsha Bothra finance",
    "Harsha Bothra management consulting",
    "Harsha Bothra business analyst",
    "Harsha Bothra Hyderabad",
    "business analyst portfolio",
    "business analytics consultant",
    "MSc Business Analytics and Consultancy",
    "Heriot-Watt University Dubai",
    "McKinsey Forward Program",
    "Power BI",
    "Tableau",
    "SQL",
    "data analytics",
    "market research analyst",
    "digital transformation",
    "generative AI adoption",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "Business",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role} | ${profile.discipline}`,
    description,
    url: siteUrl,
    locale: "en_GB",
    firstName: "Harsha",
    lastName: "Bothra",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0e" },
  ],
};

/** Applies the saved theme before first paint so there's no flash. */
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  givenName: "Harsha",
  familyName: "Bothra",
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  description: profile.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  sameAs: links.filter((l) => l.href.startsWith("http")).map((l) => l.href),
  alumniOf: education.map((e) => ({
    "@type": "CollegeOrUniversity",
    name: e.institution,
  })),
  knowsAbout: [
    "Business Analysis",
    "Management Consulting",
    "Market Research",
    "Data Analytics",
    "Business Intelligence",
    "Power BI",
    "Tableau",
    "SQL",
    "Project Management",
    "Digital Transformation",
    "Generative AI",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "MSc Business Analytics & Consultancy",
      credentialCategory: "degree",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "Heriot-Watt University" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "McKinsey Forward Program",
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: "McKinsey & Company" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
