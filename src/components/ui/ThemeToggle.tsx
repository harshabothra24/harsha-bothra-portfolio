"use client";

/**
 * Icon visibility is driven by the `dark` class rather than React state,
 * so the button renders identically on the server and the client.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — the theme just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-line-strong hover:text-ink"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-[15px] dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="hidden size-[15px] dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
