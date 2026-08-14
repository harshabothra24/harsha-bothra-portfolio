"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — the mailto link beside this still works */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-300 hover:border-line-strong hover:text-ink"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      {copied ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-3.5 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 13 4 4L19 7" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="11" height="11" rx="2.5" />
          <path d="M5 15V6a2 2 0 0 1 2-2h8" />
        </svg>
      )}
      <span className="sr-only">email address to clipboard</span>
    </button>
  );
}
