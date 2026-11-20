// The Park wordmark as vectors, redrawn from the site's old 200 × 61 PNG: each letter's outline was fitted to that
// image to within a fraction of a pixel, so the units are its pixels. The letters were cut from DIN, which shows:
// the horizontals are a little lighter than the stems, and a bowl is straight runs joined by round corners, not a
// circle. Three things are set by rule instead of by the fit: every letter stands on the baseline and reaches the
// cap line exactly (the PNG's P sat a third of a pixel low), the top bars of P and R are one weight (the fit put
// them a seventh of a unit apart), and R's stem is taken off by one straight cut, the outer edge of its leg run up
// through the top bar.

export const PARK_WIDTH = 200;
export const PARK_HEIGHT = 61;

export const PARK_LETTERS = ["P", "A", "R", "K"] as const;
export type ParkLetter = (typeof PARK_LETTERS)[number];

/** Each letter's outline, for fills and clips. */
export const PARK_OUTLINES: Record<ParkLetter, string> = {
  P: "M0.16 61V0H24.64A15.58 14.13 0 0 1 40.23 14.13V18.25H35.74V14.86A11.06 10.67 0 0 0 24.68 4.19H4.57V61Z",
  A: "M54.09 61L76.38 0H80.6L102.88 61H97.88L78.49 6.26L59.09 61Z",
  R: "M113.39 0H133.69A15.68 15.68 0 0 1 149.37 15.68V17.19A15.68 15.68 0 0 1 135.51 32.76L149.88 61H144.58L128.06 28.69H133.33A11.67 11.67 0 0 0 145 17.02V15.86A11.67 11.67 0 0 0 133.33 4.19H115.53Z",
  K: "M194.46 0H200L179.01 30.73L200 61H194.41L173.25 30.73Z",
};

/** The whole wordmark as one path. */
export const PARK_OUTLINE = PARK_LETTERS.map((l) => PARK_OUTLINES[l]).join("");

/**
 * Each letter as the single line it is drawn with, down the middle of its outline. The ends run a little past the
 * outline, so a wide stroke along one, clipped to the letter, fills it exactly: that is how the mark draws itself on.
 */
export const PARK_LINES: Record<ParkLetter, string> = {
  P: "M2.36 64V2.1H24.66A13.32 12.4 0 0 1 37.98 14.5V18.25",
  A: "M55.51 64L78.49 0.15L101.46 64",
  R: "M110 2.1H133.51A13.68 13.68 0 0 1 147.18 15.78V17.11A13.68 13.68 0 0 1 133.51 30.78H131.82L148.76 64",
  K: "M199.29 -3L176.13 30.73L199.28 64",
};

/**
 * The strokes the mark leaves out, as the outlines they would have: the close of P's bowl, A's crossbar, and the
 * stems of R and K. They are drawn at the mark's own weights, the bowl closing on the level of R's lower bar.
 */
export const PARK_OMITTED: { letter: ParkLetter; d: string }[] = [
  { letter: "P", d: "M40.23 18.25A15.58 14.62 0 0 1 24.64 32.87H4.57" },
  { letter: "P", d: "M35.74 18.25A11.06 10.44 0 0 1 24.68 28.69H4.57" },
  { letter: "A", d: "M67.24 38H89.74" },
  { letter: "A", d: "M65.76 42.19H91.22" },
  { letter: "R", d: "M117.8 4.19V28.69H128.06" },
  { letter: "R", d: "M130.2 32.87H117.8V61H113.39V0" },
  { letter: "K", d: "M168.84 0H173.25V61H168.84Z" },
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
