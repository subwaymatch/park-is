// Lucide icons (ISC), inlined.

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base}>
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function ArrowUpRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...base} className="icon-arrow">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
