import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center pt-[var(--nav-h)]">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1 className="display mt-6">Not found.</h1>
        <p className="lede mt-7 max-w-md">
          That page doesn&rsquo;t exist. Everything lives on the one page here.
        </p>
        <Link href="/" className="btn btn-primary mt-10">
          Back to the start
          <svg aria-hidden="true" viewBox="0 0 16 16" className="arrow size-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 8h11M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
