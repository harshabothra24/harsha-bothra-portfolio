import { cvPath, linkedinUrl, profile } from "@/content/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="shell">
        <div className="flex flex-col gap-7 py-11 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-[1.25rem] tracking-[-0.02em] text-ink">
              {profile.name}
            </p>
            <p className="mt-1.5 text-[0.8125rem] text-faint">
              {profile.role} · {profile.location}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-grow text-[0.875rem] text-muted transition-colors duration-300 hover:text-ink"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="underline-grow text-[0.875rem] text-muted transition-colors duration-300 hover:text-ink"
            >
              Email
            </a>
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-grow text-[0.875rem] text-muted transition-colors duration-300 hover:text-ink"
            >
              CV
            </a>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-line py-6 text-[0.75rem] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="underline-grow self-start transition-colors duration-300 hover:text-ink sm:self-auto"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
