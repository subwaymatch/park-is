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

// Park's page has no site to record, so every figure on it is drawn here from the wordmark's outlines
// (components/park-mark.tsx): nothing is a picture. Coordinates inside a mark are the wordmark's own, 200 × 61.

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

/** A straight line through two points, run out to the heights y0 and y1. */
function through([ax, ay]: [number, number], [bx, by]: [number, number], y0: number, y1: number) {
  const slope = (bx - ax) / (by - ay);
  return `M${n(ax + slope * (y0 - ay))} ${y0}L${n(ax + slope * (y1 - ay))} ${y1}`;
}

const APEX: [number, number] = [78.49, 0.15];
/** R's one straight cut: the outer edge of its leg, which runs on up through the left end of the top bar. */
const CUT: [[number, number], [number, number]] = [
  [113.39, 0],
  [144.58, 61],
];
/** The inner edge of R's leg. */
const LEG: [[number, number], [number, number]] = [
  [135.56, 32.87],
  [149.88, 61],
];
const VERTEX: [number, number] = [176.13, 30.73];

/** The lines the letters lie on, run out to the edges of the sheet. */
const GUIDES = [
  "M-34 0H234",
  "M-34 61H234",
  "M2.36 -30V91",
  "M-34 2.1H234",
  "M-34 30.78H234",
  through([56.59, 61], APEX, -30, 91),
  through([100.38, 61], APEX, -30, 91),
  through(...CUT, -30, 91),
  through([197.23, 0], VERTEX, -30, 91),
  through(VERTEX, [197.21, 61], -30, 91),
];

/** An oval as a path. */
const oval = (cx: number, cy: number, rx: number, ry: number) => `M${n(cx - rx)} ${cy}a${rx} ${ry} 0 1 0 ${n(2 * rx)} 0a${rx} ${ry} 0 1 0 ${n(-2 * rx)} 0Z`;

/** A round-cornered loop, as DIN draws a bowl: two half circles of radius r about x = cx, a straight between them. */
const loop = (cx: number, r: number, top: number, bottom: number) =>
  `M${cx} ${top}A${r} ${r} 0 0 1 ${n(cx + r)} ${n(top + r)}V${n(bottom - r)}A${r} ${r} 0 0 1 ${cx} ${bottom}` +
  `A${r} ${r} 0 0 1 ${n(cx - r)} ${n(bottom - r)}V${n(top + r)}A${r} ${r} 0 0 1 ${cx} ${top}Z`;

/** R's bowl carried all the way round: its outer and inner edge. */
const R_BOWL = [loop(133.69, 15.68, 0, 32.87), loop(133.33, 11.67, 4.25, 28.69)];

/** The curves of the two bowls carried all the way round: the ovals of P's corner, then R's loops. */
const BOWLS = [oval(24.64, 14.13, 15.58, 14.13), oval(24.68, 14.86, 11.06, 10.73), ...R_BOWL];

/** The construction: the mark in ink, the lines and curves it is built on run out around it, and its three angles. */
export function Construction() {
  return (
    <Stage className={styles.construction}>
      <svg viewBox="-34 -30 268 121" role="img" aria-label="The Park wordmark with its construction lines">
        <g className={styles.guides}>
          {GUIDES.map((d, i) => (
            <path key={d} d={d} pathLength={1} style={vars({ "--i": i })} />
          ))}
          {BOWLS.map((d, i) => (
            <path key={d} d={d} pathLength={1} style={vars({ "--i": GUIDES.length + i })} />
          ))}
        </g>
        <path className={styles.ink} d={PARK_OUTLINE} />
        <g className={styles.angles}>
          {/* A's apex, R's cut on the baseline, and the opening of K. */}
          <path d="M75.45 8.62A9 9 0 0 0 81.53 8.62" />
          <path d="M136.58 61A8 8 0 0 1 140.94 53.88" />
          <path d="M180.67 24.15A8 8 0 0 1 180.67 37.31" />
        </g>
        <g className={styles.labels}>
          <text x="78.49" y="27" textAnchor="middle">
            40°
          </text>
          <text x="134.6" y="56.6" textAnchor="end">
            63°
          </text>
          <text x="186.2" y="31.9">
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
const EDGES: Record<ParkLetter, [number, number]> = { P: [0.15, 40.35], A: [54.09, 102.88], R: [113.43, 149.88], K: [173.25, 200] };

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

/** Monogram: the four letters on one spot at one height, as outlines, each filling in turn. */
function Monogram() {
  return (
    <Plate name="Monogram" label="The four letters laid over one another as outlines">
      {PARK_LETTERS.map((l, i) => (
        <use key={l} href={use(l)} transform={stand(l, 50, 103, 80)} className={styles.monogram} style={vars({ "--i": i })} />
      ))}
    </Plate>
  );
}

/** Extended: the R alone, with every line and curve it is made of run out to the edges of the sheet. */
function Extended() {
  return (
    <Plate name="Extended" label="The letter R with its lines and curves run out to the edges">
      <g transform={stand("R", 46, 96, 54)}>
        <g className={styles.hair}>
          <path d="M-200 2.12H400M-200 30.78H400" />
          <path d={through(...CUT, -200, 300)} />
          <path d={through(...LEG, -200, 300)} />
          {R_BOWL.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <use href={use("R")} />
      </g>
    </Plate>
  );
}

/** Peaks: the A five times at five sizes on one baseline, the nearer ones standing in front. */
function Peaks() {
  const peaks: [cx: number, height: number, opacity: number][] = [
    [27, 44, 0.3],
    [74, 56, 0.42],
    [49, 84, 1],
    [19, 26, 0.62],
    [83, 30, 0.75],
  ];
  return (
    <Plate name="Peaks" label="The letter A five times at five sizes, like a range of peaks">
      {peaks.map(([cx, height, opacity], i) => (
        <g key={cx} transform={stand("A", cx, 103, height)} className={styles.peak} style={vars({ "--i": i })}>
          {/* The ground between its legs, so a nearer peak hides the ones behind it. */}
          <path d="M53.73 62L76.38 0H80.6L103.25 62Z" className={styles.ground} />
          <use href={use("A")} opacity={opacity} />
        </g>
      ))}
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

/**
 * How much line each letter takes, joint by joint: stem, bar, bowl and tail for P; two legs for A; bar, bowl, waist
 * and leg for R; two arms for K. In the wordmark's units.
 */
const LENGTHS: Record<ParkLetter, number[]> = {
  P: [58.94, 22.3, 20.23, 3.75],
  A: [64.67, 64.67],
  R: [19.04, 44.29, 1.69, 33.92],
  K: [37.28, 36.89],
};

/** Unrolled: each letter's line pulled straight and stood up, a notch at every joint. A takes the most line, K the least. */
function Unrolled() {
  const scale = 0.64;
  return (
    <Plate name="Unrolled" label="Each letter's line pulled straight and stood upright, to compare their lengths">
      {PARK_LETTERS.map((l, i) => {
        const x = 23 + i * 18;
        const total = LENGTHS[l].reduce((a, b) => a + b, 0) * scale;
        let at = 0;
        return (
          <g key={l}>
            <g className={styles.bar} style={vars({ "--i": i })}>
              <rect x={x - 1.45} y={n(101 - total)} width="2.9" height={n(total)} />
              {LENGTHS[l].slice(0, -1).map((len) => {
                at += len * scale;
                return <rect key={at} className={styles.notch} x={x - 2} y={n(101 - at - 0.3)} width="4" height="0.6" />;
              })}
            </g>
            <use href={use(l)} transform={stand(l, x, 112, 5.5)} opacity="0.6" />
          </g>
        );
      })}
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
        <Monogram />
        <Extended />
        <Peaks />
        <Weave />
        <Unrolled />
      </ul>
    </Stage>
  );
}

/** The wordmark at a width, with its top left corner at (x, y), optionally turned a quarter. */
function Mark({ x, y, width, className, turn }: { x: number; y: number; width: number; className?: string; turn?: boolean }) {
  const s = n(width / PARK_WIDTH);
  return <path d={PARK_OUTLINE} className={className} transform={`translate(${x} ${y})${turn ? " rotate(90)" : ""} scale(${s})`} />;
}

/**
 * The 2014 stationery, laid out flat and redrawn: letterhead and pencil, notebook, phone, matches, two erasers, a
 * USB stick, cards and an envelope. Everything is black on black but the match heads; the mark is white on most
 * pieces and glossy black on the envelope.
 */
export function Stationery() {
  return (
    <div className={styles.stationery}>
      <svg viewBox="0 0 1600 900" role="img" aria-label="A black stationery set seen from above, each piece carrying the Park wordmark">
        <defs>
          <radialGradient id="park-desk" cx="0.42" cy="0.3" r="0.9">
            <stop offset="0" stopColor="#2b2b2b" />
            <stop offset="1" stopColor="#141414" />
          </radialGradient>
          <linearGradient id="park-paper" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1d1d1d" />
            <stop offset="1" stopColor="#141414" />
          </linearGradient>
          <linearGradient id="park-card" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#191919" />
            <stop offset="1" stopColor="#0f0f0f" />
          </linearGradient>
          <linearGradient id="park-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#101010" />
            <stop offset="0.5" stopColor="#060606" />
            <stop offset="1" stopColor="#0b0b0b" />
          </linearGradient>
          <linearGradient id="park-barrel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#060606" />
            <stop offset="0.35" stopColor="#262626" />
            <stop offset="1" stopColor="#050505" />
          </linearGradient>
          {/* Filters work in sRGB: in the default linear space these blacks fall into two or three steps. */}
          <filter id="park-shadow" x="-20%" y="-20%" width="150%" height="150%" colorInterpolationFilters="sRGB">
            <feDropShadow dx="7" dy="12" stdDeviation="11" floodColor="#000" floodOpacity="0.6" />
          </filter>
          <filter id="park-shadow-small" x="-30%" y="-30%" width="170%" height="170%" colorInterpolationFilters="sRGB">
            <feDropShadow dx="3" dy="5" stdDeviation="4" floodColor="#000" floodOpacity="0.6" />
          </filter>
        </defs>
        <rect width="1600" height="900" fill="url(#park-desk)" />

        {/* Letterhead, with a pencil lying on it. */}
        <g filter="url(#park-shadow)">
          <rect x="200" y="110" width="481" height="680" fill="url(#park-paper)" />
        </g>
        <Mark x={573} y={150} width={68} className={styles.white} />
        <g filter="url(#park-shadow-small)">
          <rect x="262" y="214" width="12" height="470" fill="url(#park-barrel)" />
          <path d="M262 214L268 186L274 214Z" fill="#c9a57a" />
          <path d="M266.3 194L268 186L269.7 194Z" fill="#111" />
          <rect x="262" y="684" width="12" height="20" fill="#9a9a9a" />
          <rect x="262" y="704" width="12" height="16" rx="2" fill="#ececec" />
        </g>
        <Mark x={271.5} y={590} width={30} className={styles.dim} turn />

        {/* Notebook: a lighter panel across the cover and an elastic band down its edge. */}
        <g filter="url(#park-shadow)">
          <rect x="731" y="110" width="280" height="390" rx="9" fill="url(#park-card)" />
        </g>
        <rect x="731" y="232" width="280" height="146" fill="#202020" />
        <rect x="962" y="110" width="12" height="390" fill="#0a0a0a" />
        <Mark x={820} y={296.5} width={56} className={styles.white} />

        {/* Phone. */}
        <g filter="url(#park-shadow)">
          <rect x="1061" y="110" width="150" height="300" rx="24" fill="#0a0a0a" />
        </g>
        <rect x="1061.5" y="110.5" width="149" height="299" rx="23.5" fill="none" stroke="#2c2c2c" />
        <rect x="1072" y="152" width="128" height="208" fill="url(#park-glass)" />
        <rect x="1124" y="131" width="24" height="4" rx="2" fill="#1c1c1c" />
        <circle cx="1136" cy="385" r="11" fill="none" stroke="#242424" strokeWidth="1.5" />
        <Mark x={1114} y={249.3} width={44} className={styles.white} />

        {/* USB stick. */}
        <g filter="url(#park-shadow-small)">
          <rect x="1061" y="466" width="104" height="34" rx="5" fill="url(#park-card)" />
          <rect x="1165" y="471" width="46" height="24" fill="#8f8f8f" />
          <rect x="1180" y="477" width="9" height="5" fill="#3a3a3a" />
          <rect x="1180" y="485" width="9" height="5" fill="#3a3a3a" />
        </g>

        {/* Matches: the tray pushed out of its sleeve. */}
        <g filter="url(#park-shadow)">
          <rect x="1269" y="110" width="123" height="70" fill="#151515" />
          {Array.from({ length: 11 }, (_, i) => (
            <g key={i}>
              <rect x={1276.2 + i * 10.2} y="128" width="6.4" height="52" fill="#c8a57b" />
              <rect x={1275.6 + i * 10.2} y="118" width="7.6" height="13" rx="3.6" fill="#6b3f33" />
            </g>
          ))}
          <rect x="1261" y="160" width="139" height="140" fill="url(#park-card)" />
        </g>
        <Mark x={1345.5} y={205} width={50} className={styles.white} turn />

        {/* Two erasers: one in a black sleeve, one bare. */}
        <g filter="url(#park-shadow-small)">
          <rect x="1261" y="340" width="139" height="64" rx="3" fill="#e9e9e7" />
          <rect x="1261" y="340" width="96" height="64" fill="url(#park-card)" />
        </g>
        <Mark x={1288} y={365.9} width={40} className={styles.white} />
        <g filter="url(#park-shadow-small)">
          <rect x="1261" y="436" width="139" height="64" rx="3" fill="#e9e9e7" />
        </g>

        {/* Two stacks of cards. */}
        {[550, 682].map((y) => (
          <g key={y}>
            <g filter="url(#park-shadow)">
              <rect x="734" y={y + 3} width="210" height="108" fill="#0b0b0b" />
              <rect x="731" y={y} width="210" height="108" fill="url(#park-card)" />
            </g>
            <Mark x={812} y={y + 46.7} width={48} className={styles.white} />
          </g>
        ))}

        {/* Envelope: the flap's two edges, and the mark in gloss, black on black. */}
        <g filter="url(#park-shadow)">
          <rect x="991" y="550" width="409" height="240" fill="url(#park-paper)" />
        </g>
        <path d="M991 550L1195.5 668L1400 550" fill="none" stroke="#0c0c0c" strokeWidth="1.5" />
        <Mark x={1165.5} y={716} width={60} className={styles.gloss} />
      </svg>
    </div>
  );
}

/** Black on black: the mark in gloss on matt black, seen only where the light falls. The pointer carries the light. */
export function Gloss() {
  return (
    <Light className={styles.light}>
      <div className={styles.lightMark} role="img" aria-label="The Park wordmark in gloss black on matt black" />
    </Light>
  );
}
