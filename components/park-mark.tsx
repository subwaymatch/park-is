// The Park wordmark as vectors, redrawn from the site's old 200 × 61 PNG: each letter's outline was fitted to that
// image to within a fraction of a pixel, so the units are its pixels. The horizontals are a little lighter than the
// stems, the bowls are slightly oval, and A's strokes thin towards its apex; all of that is in the original.

export const PARK_WIDTH = 200;
export const PARK_HEIGHT = 61;

export const PARK_LETTERS = ["P", "A", "R", "K"] as const;
export type ParkLetter = (typeof PARK_LETTERS)[number];

/** Each letter's outline, for fills and clips. */
export const PARK_OUTLINES: Record<ParkLetter, string> = {
  P: "M0.15 61V0.37H24.92A15.43 13.63 0 0 1 40.35 14V18.07H35.71V14.85A10.9 10.73 0 0 0 24.81 4.12H4.65V61Z",
  A: "M54.09 61L76.38 0H80.6L102.88 61H97.88L78.49 6.26L59.09 61Z",
  R: "M113.43 0.05H133.63A15.95 16.43 0 0 1 135.53 32.78L149.88 61H144.68L128.05 28.74H133.18A11.95 12.25 0 0 0 133.18 4.25H115.38Z",
  K: "M194.46 0H200L179.01 30.73L200 61H194.41L173.25 30.73Z",
};

/** The whole wordmark as one path. */
export const PARK_OUTLINE = PARK_LETTERS.map((l) => PARK_OUTLINES[l]).join("");

/**
 * Each letter as the single line it is drawn with, down the middle of its outline. The ends run a little past the
 * outline, so a wide stroke along one, clipped to the letter, fills it exactly: that is how the mark draws itself on.
 */
export const PARK_LINES: Record<ParkLetter, string> = {
  P: "M2.4 64V2.25H24.87A13.16 12.18 0 0 1 38.03 14.43V18.07",
  A: "M55.51 64L78.49 0.15L101.46 64",
  R: "M110 2.15H133.4A13.95 14.34 0 0 1 133.4 30.82H131.83L148.82 64",
  K: "M199.29 -3L176.13 30.73L199.28 64",
};

/** The strokes the mark leaves out: the close of P's bowl, A's crossbar, and the stems of R and K. */
export const PARK_OMITTED: { letter: ParkLetter; d: string }[] = [
  { letter: "P", d: "M38.03 18.07A13.16 12.75 0 0 1 24.87 30.82H2.4" },
  { letter: "A", d: "M64.15 40H92.83" },
  { letter: "R", d: "M115.7 2.15V61" },
  { letter: "R", d: "M131.83 30.82H115.7" },
  { letter: "K", d: "M171 0V61" },
  { letter: "K", d: "M176.13 30.73H171" },
];

/** The wordmark in the current text colour. */
export function ParkWordmark({ className, label }: { className?: string; label?: string }) {
  return (
    <svg
      viewBox={`0 0 ${PARK_WIDTH} ${PARK_HEIGHT}`}
      className={className}
      fill="currentColor"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <path d={PARK_OUTLINE} />
    </svg>
  );
}
