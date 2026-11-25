import type { CSSProperties } from "react";
import {
  PARK_HEIGHT,
  PARK_LETTERS,
  PARK_LINES,
  PARK_OMITTED,
  PARK_OUTLINE,
  PARK_OUTLINES,
  PARK_WIDTH,
  type ParkLetter,
} from "../park-mark";
import { Light, Stage } from "./park-stage";
import styles from "./park.module.css";

// Park's page has no site to record. Its figures are drawn here from the wordmark's outlines
// (components/park-mark.tsx), except the two galleries of generated pictures near the end. Coordinates inside a mark are the wordmark's own, 200 × 61.

const vars = (v: Record<string, string | number>) => v as CSSProperties;
const n = (v: number) => +v.toFixed(2);

/** The wordmark, each letter drawn on by a wide stroke along its line, clipped to its outline. `id` keeps clips apart. */
function DrawnMark({ id, className, label }: { id: string; className?: string; label?: string }) {
  return (
    <svg
      viewBox={`0 0 ${PARK_WIDTH} ${PARK_HEIGHT}`}
      className={className}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <defs>
        {PARK_LETTERS.map((l) => (
          <clipPath key={l} id={`${id}-${l}`}>
            <path d={PARK_OUTLINES[l]} />
          </clipPath>
        ))}
      </defs>
      {PARK_LETTERS.map((l, i) => (
        <g key={l} clipPath={`url(#${id}-${l})`}>
          <path className={styles.line} d={PARK_LINES[l]} pathLength={1} style={vars({ "--i": i })} />
        </g>
      ))}
    </svg>
  );
}

/**
 * Streaks of light for the hero, like a train passing in a long exposure: top and height in percent of the hero,
 * length in percent of its width, opacity, blur in px, seconds to cross, and a head start in seconds.
 */
const STREAKS: [top: number, height: number, length: number, opacity: number, blur: number, seconds: number, start: number][] = [
  [8, 9, 70, 0.05, 26, 13, 2],
  [19, 0.5, 34, 0.3, 1.5, 6.5, 4.4],
  [24, 16, 90, 0.045, 30, 17, 9],
  [33, 0.35, 22, 0.42, 1, 4.6, 1.2],
  [41, 5, 60, 0.07, 14, 9, 6.3],
  [52, 0.4, 40, 0.24, 1.5, 7.4, 3.1],
  [58, 14, 80, 0.05, 28, 15, 12],
  [66, 0.3, 18, 0.5, 1, 3.9, 2.6],
  [73, 6, 55, 0.06, 16, 10.5, 0.4],
  [84, 0.5, 46, 0.2, 2, 8.2, 5.5],
  [88, 10, 75, 0.04, 24, 14, 7.7],
];

/** The hero: the mark stands still, drawn on once, while light streaks past behind it. */
export function Hero() {
  return (
    <Stage className={styles.hero}>
      <div className={styles.streaks} aria-hidden="true">
        {STREAKS.map(([top, height, length, opacity, blur, seconds, start], i) => (
          <span
            key={i}
            style={vars({
              "--top": `${top}%`,
              "--height": `${height}%`,
              "--length": `${length}%`,
              "--opacity": opacity,
              "--blur": `${blur}px`,
              "--seconds": `${seconds}s`,
              "--start": `${-start}s`,
              // Where the streak rests when nothing moves.
              "--rest": `${((i * 37) % 120) - 40}%`,
            })}
          />
        ))}
      </div>
      <DrawnMark id="park-hero" className={styles.heroMark} label="The Park wordmark" />
    </Stage>
  );
}

/** The middle of each letter, for its number underneath. */
const CENTRES: Record<ParkLetter, number> = { P: 20.25, A: 78.49, R: 131.6, K: 186.6 };

/**
 * Four letters, four lines: each letter is traced by its single line in turn, over and over, and the strokes the
 * mark leaves out are dashed in beside them.
 */
export function Strokes() {
  return (
    <Stage className={styles.strokes}>
      <svg viewBox="-34 -22 268 112" role="img" aria-label="The four letters of Park, each traced by a single line">
        <defs>
          {PARK_LETTERS.map((l) => (
            <clipPath key={l} id={`park-strokes-${l}`}>
              <path d={PARK_OUTLINES[l]} />
            </clipPath>
          ))}
        </defs>
        <g className={styles.omitted}>
          {PARK_OMITTED.map((o) => (
            <path key={o.d} d={o.d} />
          ))}
        </g>
        <path className={styles.faint} d={PARK_OUTLINE} />
        {PARK_LETTERS.map((l, i) => (
          <g key={l} clipPath={`url(#park-strokes-${l})`}>
            <path className={styles.trace} d={PARK_LINES[l]} pathLength={1} style={vars({ "--i": i })} />
          </g>
        ))}
        {PARK_LETTERS.map((l, i) => (
          <text key={l} className={styles.note} x={CENTRES[l]} y="76" textAnchor="middle">
            {i + 1}
          </text>
        ))}
      </svg>
    </Stage>
  );
}

type Point = [number, number];
/** One edge of a straight stroke, as two points on it. */
type Edge = [Point, Point];

/** A straight line through two points, run out to the heights y0 and y1. */
function through([ax, ay]: Point, [bx, by]: Point, y0: number, y1: number) {
  const slope = (bx - ax) / (by - ay);
  return `M${n(ax + slope * (y0 - ay))} ${y0}L${n(ax + slope * (y1 - ay))} ${y1}`;
}

// The construction shows the two edges of every straight stroke, never its middle.

/** The levels: the cap line, the underside of the two top bars, the top and underside of R's lower bar, the baseline. */
const LEVELS = [0, 4.19, 28.69, 32.87, 61];

/** The upright edges: P's stem and the straight tail of its bowl, and the short straight on the side of R's bowl. */
const UPRIGHTS: Partial<Record<ParkLetter, number[]>> = { P: [0.16, 4.57, 35.74, 40.23], R: [145, 149.37] };

/** R's one straight cut: the outer edge of its leg, which runs on up through the left end of the top bar. */
const CUT: Edge = [
  [113.39, 0],
  [144.58, 61],
];

/** The slanted edges: A's legs outside and in, R's cut and the inner edge of its leg, K's arms outside and in. */
const SLANTS: Partial<Record<ParkLetter, Edge[]>> = {
  A: [
    [[54.09, 61], [76.38, 0]],
    [[59.09, 61], [78.49, 6.26]],
    [[78.49, 6.26], [97.88, 61]],
    [[80.6, 0], [102.88, 61]],
  ],
  R: [CUT, [[135.56, 32.87], [149.88, 61]]],
  K: [
    [[194.46, 0], [173.25, 30.73]],
    [[200, 0], [179.01, 30.73]],
    [[179.01, 30.73], [200, 61]],
    [[173.25, 30.73], [194.41, 61]],
  ],
};

/** Where each bowl's curve is struck from, marked with a small cross. */
const BOWL_CENTRES: Partial<Record<ParkLetter, Point>> = { P: [24.66, 14.5], R: [133.51, 16.45] };

/**
 * A letter's construction lines: its upright and slanted edges run from the height `top` to `bottom`, and a cross at
 * the centre of its bowl.
 */
function edgeLines(letter: ParkLetter, top: number, bottom: number) {
  const centre = BOWL_CENTRES[letter];
  return [
    ...(UPRIGHTS[letter] ?? []).map((x) => `M${x} ${top}V${bottom}`),
    ...(SLANTS[letter] ?? []).map(([a, b]) => through(a, b, top, bottom)),
    ...(centre ? [`M${n(centre[0] - 1.8)} ${centre[1]}h3.6M${centre[0]} ${n(centre[1] - 1.8)}v3.6`] : []),
  ];
}

/** Every construction line on the sheet: the levels across it, then each letter's edges, left to right. */
const GUIDES = [...LEVELS.map((y) => `M-34 ${y}H234`), ...PARK_LETTERS.flatMap((l) => edgeLines(l, -30, 91))];

/**
 * The construction: the mark in ink, with both edges of every straight stroke run out to the edges of the sheet, a
 * cross where each bowl is struck from, and its three angles.
 */
export function Construction() {
  return (
    <Stage className={styles.construction}>
      <svg viewBox="-34 -30 268 121" role="img" aria-label="The Park wordmark with its construction lines">
        <g className={styles.guides}>
          {GUIDES.map((d, i) => (
            <path key={d} d={d} pathLength={1} style={vars({ "--i": i })} />
          ))}
        </g>
        <path className={styles.ink} d={PARK_OUTLINE} />
        <g className={styles.angles}>
          {/* Between A's legs, between the baseline and R's cut, and between K's arms. */}
          <path d="M75.49 14.74A9 9 0 0 0 81.49 14.74" />
          <path d="M139.08 61A5.5 5.5 0 0 1 142.07 56.1" />
          <path d="M181.84 26.6A5 5 0 0 1 181.86 34.84" />
        </g>
        <g className={styles.labels}>
          <text x="78.49" y="27" textAnchor="middle">
            40°
          </text>
          <text x="137.4" y="59" textAnchor="end">
            63°
          </text>
          <text x="185.6" y="31.9">
            111°
          </text>
          <text x="-32" y="-1.6">
            cap
          </text>
          <text x="-32" y="59.4">
            base
          </text>
          <text x="232" y="66.4" textAnchor="end">
            1 : 3.28
          </text>
        </g>
      </svg>
    </Stage>
  );
}

/** Each letter's left and right edge in the wordmark. */
const EDGES: Record<ParkLetter, [number, number]> = { P: [0.16, 40.23], A: [54.09, 102.88], R: [113.39, 149.88], K: [173.25, 200] };

/** A transform that stands a letter `height` tall on the line y = `base`, centred on x = `cx`. */
function stand(letter: ParkLetter, cx: number, base: number, height: number) {
  const s = height / PARK_HEIGHT;
  const [x0, x1] = EDGES[letter];
  return `translate(${n(cx - (s * (x0 + x1)) / 2)} ${n(base - height)}) scale(${n(s)})`;
}

const use = (l: ParkLetter) => `#park-letter-${l}`;

/** One plate of the studies: a 4:5 sheet of black with a label under it. */
function Plate({ name, label, children }: { name: string; label: string; children: React.ReactNode }) {
  return (
    <li className={styles.plate}>
      <svg viewBox="0 0 100 125" role="img" aria-label={label}>
        {children}
      </svg>
      <span>{name}</span>
    </li>
  );
}

/** Echo: the wordmark three times, each trailing copies of itself as if it were passing. */
function Echo() {
  const rows = [
    { y: 26, x: 30, dir: -1 },
    { y: 53.3, x: 10, dir: 1 },
    { y: 80.6, x: 30, dir: -1 },
  ];
  return (
    <Plate name="Echo" label="The wordmark three times, each with a trail of fading copies">
      {rows.map((r) => (
        <g key={r.y} transform={`translate(${r.x} ${r.y}) scale(0.3)`} style={vars({ "--dir": r.dir })}>
          {Array.from({ length: 14 }, (_, k) => 14 - k).map((i) => (
            <use key={i} href="#park-word" className={styles.echo} opacity={n(0.5 * (1 - i / 15) ** 1.6)} style={vars({ "--i": i })} />
          ))}
          <use href="#park-word" />
        </g>
      ))}
    </Plate>
  );
}

/** How far the cut leans: across for every unit down. */
const LEAN = (CUT[1][0] - CUT[0][0]) / (CUT[1][1] - CUT[0][1]);
/** The width of a slice, in the wordmark's units. */
const SLICE = 24;
/** A slice's left edge at a height: slice 0 starts on R's own cut. */
const sliceEdge = (k: number, y: number) => n(CUT[0][0] + k * SLICE + LEAN * y);
/** The slices that cover the wordmark, and how far each slides along the cut. */
const SLICES: [k: number, slide: number][] = [
  [-7, 16],
  [-6, -22],
  [-5, 10],
  [-4, -18],
  [-3, 24],
  [-2, -12],
  [-1, 20],
  [0, -14],
  [1, 12],
  [2, -24],
  [3, 18],
];

/** Cut: the wordmark sliced by lines parallel to R's cut, each slice sliding along its line and back into register. */
function Cut() {
  return (
    <Plate name="Cut" label="The wordmark cut into slanted slices that slide out of line">
      <defs>
        {SLICES.map(([k]) => (
          <clipPath key={k} id={`park-slice-${k + 7}`}>
            <path d={`M${sliceEdge(k, -90)} -90H${sliceEdge(k + 1, -90)}L${sliceEdge(k + 1, 150)} 150H${sliceEdge(k, 150)}Z`} />
          </clipPath>
        ))}
      </defs>
      <g transform="translate(8 49.7) scale(0.42)">
        <g className={styles.cuts}>
          {[...SLICES.map(([k]) => k), 4].map((k) => (
            <path key={k} d={`M${sliceEdge(k, -200)} -200L${sliceEdge(k, 300)} 300`} />
          ))}
        </g>
        {SLICES.map(([k, slide]) => (
          <g key={k} clipPath={`url(#park-slice-${k + 7})`}>
            <use href="#park-word" className={styles.slice} style={vars({ "--slide": slide })} />
          </g>
        ))}
      </g>
    </Plate>
  );
}

/** Extended: the R alone, drawn as the construction draws it: both edges of each stroke run out to the edges of the sheet. */
function Extended() {
  return (
    <Plate name="Extended" label="The letter R with the edges of its strokes run out to the edges of the sheet">
      <g transform={stand("R", 46, 96, 54)}>
        <g className={styles.hair}>
          {LEVELS.map((y) => (
            <path key={y} d={`M-200 ${y}H400`} />
          ))}
          {edgeLines("R", -200, 300).map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <use href={use("R")} />
      </g>
    </Plate>
  );
}

/**
 * Ripple: the wordmark's outline sent outwards as rings, like a stone's in water. Each ring is the outline stroked
 * wide in white and then a little less wide in black, widest first, so only its rim shows.
 */
function Ripple() {
  return (
    <Plate name="Ripple" label="The wordmark with its outline spreading outwards in rings">
      <g transform="translate(16 52.1) scale(0.34)">
        {[5, 4, 3, 2, 1, 0].map((k) => (
          <g key={k} style={vars({ "--k": k })}>
            <use href="#park-word" className={styles.ring} />
            <use href="#park-word" className={styles.gap} />
          </g>
        ))}
        <use href="#park-word" />
      </g>
    </Plate>
  );
}

/** Weave: the four letters in rows, each row starting one letter later, so every letter runs down a diagonal. */
function Weave() {
  return (
    <Plate name="Weave" label="The four letters in rows, each row starting one letter later">
      {Array.from({ length: 6 }, (_, row) =>
        PARK_LETTERS.map((_, col) => {
          const l = PARK_LETTERS[(col + row) % 4];
          return (
            <use
              key={`${row}-${col}`}
              href={use(l)}
              transform={stand(l, 20 + col * 20, 27.5 + row * 16.5, 9.5)}
              className={styles.weave}
              style={vars({ "--i": col - row + 5 })}
            />
          );
        }),
      )}
    </Plate>
  );
}

/** Turn: the wordmark twelve times about one point, each copy fainter than the one ahead of it, the whole turning slowly. */
function Turn() {
  const count = 12;
  return (
    <Plate name="Turn" label="The wordmark twelve times about one point, fading as it goes round">
      <g className={styles.turn}>
        {Array.from({ length: count }, (_, i) => (
          <use
            key={i}
            href="#park-word"
            transform={`rotate(${(-i * 360) / count} 50 62.5) translate(63 57.3) scale(0.17)`}
            opacity={n(1 - (0.88 * i) / (count - 1))}
          />
        ))}
      </g>
    </Plate>
  );
}

/** Six studies made of nothing but the wordmark's outlines. The letters are defined once and used by every plate. */
export function Studies() {
  return (
    <Stage className={styles.studies}>
      <svg width="0" height="0" className={styles.defs} aria-hidden="true">
        <defs>
          {PARK_LETTERS.map((l) => (
            <path key={l} id={`park-letter-${l}`} d={PARK_OUTLINES[l]} />
          ))}
          <path id="park-word" d={PARK_OUTLINE} />
        </defs>
      </svg>
      <ul>
        <Echo />
        <Cut />
        <Extended />
        <Ripple />
        <Weave />
        <Turn />
      </ul>
    </Stage>
  );
}

/** A picture in a gallery: its file in public/media/park/, without extension, and what it shows. */
type Shot = { file: string; alt: string; cutout?: boolean };

/**
 * Generated pictures (GPT Image 2.6, low quality), 1536 × 1024. The scene is generated; the wordmark in it is not:
 * whatever the model drew was painted out and the vector outline set in its place, small, at the same angle.
 */
const MOCKUPS: Shot[][] = [
  [{ file: "mockups/01-cards", alt: "Two stacks of black business cards, the wordmark small and white on each" }],
  [
    { file: "mockups/02-letterhead", alt: "A black letterhead with a black pencil across it, the wordmark small at its head" },
    { file: "mockups/03-envelopes", alt: "Two black envelopes, the wordmark small on the front of one" },
  ],
  [{ file: "mockups/10-set", alt: "A black stationery set laid out in a grid and seen from above, the wordmark small on every piece" }],
  [
    { file: "mockups/04-notebook", alt: "A black notebook with an elastic band beside a black pen, the wordmark small on its cover" },
    { file: "mockups/08-box", alt: "A black box with its lid on, the wordmark small on the lid" },
  ],
  [
    { file: "mockups/05-phone", alt: "A black phone lying on a dark surface, its screen black but for the small wordmark" },
    { file: "mockups/06-laptop", alt: "An open laptop in a dim room, its screen black but for the small wordmark" },
  ],
  [{ file: "mockups/07-sign", alt: "A black wall at night with the wordmark on it as a small sign of white light" }],
  [{ file: "mockups/09-screen", alt: "An empty cinema, the wordmark small and white in the middle of the dark screen" }],
];

/** Abstract fields, and cut-outs that stand on the page's white: the wordmark small at the middle of each. */
const FIELDS: Shot[][] = [
  [{ file: "abstract/a01-streaks", alt: "Streaks of light across black, the wordmark small between them" }],
  [
    { file: "abstract/t01-ink", alt: "A pool of black ink with the wordmark small at its middle", cutout: true },
    { file: "abstract/t02-stone", alt: "A smooth black stone with the wordmark small at its middle", cutout: true },
  ],
  [
    { file: "abstract/a02-smoke", alt: "Wisps of smoke at two corners of a black field, the wordmark small at its middle" },
    { file: "abstract/a03-dunes", alt: "Ripples of black sand under raking light, the wordmark small at the middle" },
  ],
  [
    { file: "abstract/t03-paper", alt: "A torn sheet of black paper with the wordmark small at its middle", cutout: true },
    { file: "abstract/t05-cloth", alt: "A round of black cloth in soft folds with the wordmark small at its middle", cutout: true },
  ],
  [
    { file: "abstract/a04-paper", alt: "Curved sheets of black paper, the wordmark small at the middle" },
    { file: "abstract/a05-water", alt: "Black water with ripples at one corner, the wordmark small at the middle" },
  ],
  [{ file: "abstract/a06-light", alt: "Shafts of light across a dark wall, the wordmark small at the middle" }],
];

/** Rows of pictures: one to a row at full width, or two side by side (one above the other on phones). */
function Gallery({ rows }: { rows: Shot[][] }) {
  return (
    <ul className={styles.gallery}>
      {rows.flat().map((shot) => (
        <li key={shot.file} className={rows.some((row) => row.length === 1 && row[0] === shot) ? styles.wide : undefined}>
          <img
            className={shot.cutout ? styles.cutout : undefined}
            src={`/media/park/${shot.file}.webp`}
            alt={shot.alt}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}

/** The mark in use: cards, letterhead, envelopes, the whole set, a notebook, a box, a phone, a laptop, a sign and a cinema screen. */
export function Mockups() {
  return <Gallery rows={MOCKUPS} />;
}

/** The mark on abstract fields and cut-outs. */
export function Fields() {
  return <Gallery rows={FIELDS} />;
}

/** Black on black: the mark in gloss on matt black, seen only where the light falls. The pointer carries the light. */
export function Gloss() {
  return (
    <Light className={styles.light}>
      <div className={styles.lightMark} role="img" aria-label="The Park wordmark in gloss black on matt black" />
    </Light>
  );
}
