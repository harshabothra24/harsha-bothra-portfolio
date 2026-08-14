# Harsha Bothra — Personal Portfolio

A single-page portfolio site built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.

---

## Running it locally

```bash
npm install      # first time only
npm run dev      # http://localhost:3000
```

Other scripts:

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run build`     | Production build                              |
| `npm start`         | Serve the production build                    |
| `npm run lint`      | ESLint                                        |
| `npm run typecheck` | TypeScript, no emit                           |

---

## Editing your content

**Almost everything you'll ever want to change lives in one file: `src/content/profile.ts`.**

It's plain data — no design code — and it's typed, so if you get a field name wrong the editor
and `npm run build` will tell you. The shapes are defined in `src/content/types.ts`.

| What you want to change              | Where in `profile.ts`                   |
| ------------------------------------ | --------------------------------------- |
| Name, headline, email, location      | `profile`                               |
| LinkedIn and other links             | `linkedinUrl`, `links`                  |
| The four figures in the hero         | `credentials`                           |
| The institution strip under the hero | `institutions`                          |
| About copy and the fact panel        | `about`                                 |
| Roles and internships                | `experience`                            |
| Case studies                         | `projects`                              |
| Skill groups                         | `skillGroups`, `topSkills`              |
| Degrees                              | `education`                             |
| Certifications and courses           | `certifications`                        |
| The three "How I work" principles    | `principles`                            |
| Contact heading and blurb            | `contact`                               |
| Navigation items                     | `nav`                                   |

### Adding a new role

Append an object to the `experience` array — the timeline, the numbering and the reveal
animations all follow automatically:

```ts
{
  company: "Company Name",
  role: "Your Title",
  type: "Full-time",
  location: "City, Country",
  period: "Jan 2026 — Present",
  start: "2026-01",
  end: "Present",
  duration: "1 month",
  summary: "One sentence on what the role is.",
  highlights: ["Bullet one.", "Bullet two."],
  impact: "Optional headline result",       // rendered as the accent callout
  skills: ["Skill A", "Skill B"],
}
```

### Adding a case study

Append to `projects`. `slug` must be unique — it's used for the accordion's element IDs.
`metric` is optional; when present it shows as a badge in the header and a large figure in
the Outcome column. `href` is optional; when present a "View project" link appears.

### Replacing the CV

Overwrite `public/harsha-bothra-cv.pdf` with the new file, keeping the same filename.
If you'd rather rename it, update `cvPath` in `profile.ts` to match.

---

## Design system

All colours, fonts and spacing tokens live at the top of `src/app/globals.css`:

- `:root` holds the light palette, `.dark` holds the dark one — change a hex there and it
  updates everywhere, in both themes.
- `@theme inline` maps those variables onto Tailwind utilities, so `bg-paper`, `text-ink`,
  `border-line`, `text-accent` etc. are theme-aware automatically.
- Reusable classes (`.btn`, `.tag`, `.eyebrow`, `.shell`, `.display`, `.h2`) are defined in the
  same file under `@layer components`.

Typefaces: **Newsreader** (display), **Inter** (interface), **IBM Plex Mono** (labels and
figures). All self-hosted through `next/font`, so there are no external font requests.

> One gotcha worth knowing: don't name a custom class after a Tailwind utility. The disclosure
> panel class is called `.disclosure` rather than `.collapse` because Tailwind's own
> `.collapse` (`visibility: collapse`) would win the cascade and hide the content.

---

## SEO

- Metadata, keywords and Open Graph tags: `src/app/layout.tsx`
- `Person` structured data (JSON-LD): also `layout.tsx`
- Social share image, generated at build time: `src/app/opengraph-image.tsx`
- Favicon: `src/app/icon.svg`; iOS icon: `src/app/apple-icon.tsx`
- `sitemap.xml` and `robots.txt`: `src/app/sitemap.ts`, `src/app/robots.ts`

**Set your real domain before going live.** Either edit `siteUrl` in `profile.ts`, or set an
environment variable in your host:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Canonical URL, sitemap, robots and Open Graph tags all read from it.

---

## Deploying

Easiest route is [Vercel](https://vercel.com):

1. Push this folder to a GitHub repository.
2. Import the repo on Vercel — it detects Next.js with no configuration.
3. Add `NEXT_PUBLIC_SITE_URL` under Project → Settings → Environment Variables.
4. Attach your domain under Project → Settings → Domains.

Every page is statically prerendered, so it works on any static-capable Next.js host.

---

## Accessibility & performance notes

- Semantic landmarks throughout, a skip link, and section headings wired up with
  `aria-labelledby`.
- The case-study accordion uses proper `aria-expanded` / `aria-controls`, and collapsed panels
  are marked `inert` so keyboard focus skips them.
- The mobile menu traps focus, closes on `Escape`, and returns focus to the button that opened it.
- Every animation is switched off under `prefers-reduced-motion: reduce`.
- Scroll reveals use `IntersectionObserver` and CSS transitions — no animation library, so the
  whole page ships around 109 kB of JavaScript.
