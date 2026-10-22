"use client";

import { useEffect, useRef, useState } from "react";
import type { PatternDefinition } from "tabbied";
import {
  bauhaus,
  bothcut,
  cairo,
  chamfer,
  duotonetruchet,
  halftone,
  kawung,
  lintel,
  mitre,
  ogee,
  pentomino,
  petalcut,
  radius,
  truchetrings,
} from "tabbied/patterns";
import { TabbiedPattern, type TabbiedPatternHandle, type TabbiedPatternProps } from "tabbied/react";
import styles from "./tabbied.module.css";

// Live Tabbied patterns for the Tabbied page, drawn by the published `tabbied`
// package on a transparent ground, so the page shows through. The designs and
// palettes here were picked for inks that all read on white. Patterns with a
// redrawInterval reseed themselves on a timer; the package skips those ticks
// off screen and under reduced motion.

const newSeed = () => Math.random().toString(36).slice(2, 6);

/** A palette (a design's own by default) with its background, color0, made transparent. */
function clear(pattern: PatternDefinition, colors = pattern.palette ?? []) {
  return ["transparent", ...colors.slice(1)];
}

/** Calls `tick` every `ms` while `ref` is on screen, unless the reader prefers reduced motion. */
function useVisibleInterval(ref: React.RefObject<HTMLElement | null>, ms: number, tick: () => void) {
  const latest = useRef(tick);
  latest.current = tick;
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(el);
    const id = setInterval(() => visible && !document.hidden && latest.current(), ms);
    return () => {
      io.disconnect();
      clearInterval(id);
    };
  }, [ref, ms]);
}

/**
 * A full-width band of whole cells, `rows` tall. The cell is the band's height over `rows`, rounded down to an even
 * pixel, and the pattern draws on a box of whole cells centered in the band: no row is ever cut, and only the outer
 * columns' overhang is cropped, at the window's edges. (Given the band's own box, the package squares and snaps its
 * cells to the width too, which at most widths leaves the canvas a few pixels taller than the band.)
 */
function WholeCellBand({ className, rows, ...pattern }: { className: string; rows: number } & PatternDrawing) {
  const box = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number }>();
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setSize({ width: entry.contentRect.width, height: entry.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const cell = size ? 2 * Math.floor(size.height / rows / 2) : 0;
  return (
    <div ref={box} className={`${styles.wholeCells} ${className}`}>
      {size && cell > 0 && (
        <TabbiedPattern {...pattern} cellSize={cell} width={Math.ceil(size.width / cell) * cell} height={rows * cell} />
      )}
    </div>
  );
}

type PatternDrawing = Pick<TabbiedPatternProps, "pattern" | "palette" | "redrawInterval">;

/** The page's neutral inks: warm greys a step off its surface colour, palest first. */
const GREYS = ["#E9E8E3", "#DCDAD4", "#CDCAC3", "#BCB9B1", "#F0EFEB"];

/** A full-width band of Radius, the pattern from Tabbied's first homepage, three rows tall. */
export function PatternBand() {
  return (
    <WholeCellBand
      className={styles.band}
      rows={3}
      pattern={radius}
      palette={["transparent", ...GREYS]}
      redrawInterval={4000}
    />
  );
}

const SPECIMENS = [
  { pattern: bauhaus, name: "Bauhaus" },
  { pattern: lintel, name: "Lintel" },
  { pattern: duotonetruchet, name: "Duotone Truchet" },
  { pattern: halftone, name: "Halftone" },
  { pattern: petalcut, name: "Petalcut" },
  { pattern: pentomino, name: "Pentomino" },
  { pattern: cairo, name: "Cairo" },
  { pattern: kawung, name: "Kawung" },
  { pattern: mitre, name: "Mitre" },
];

// Limeade, from Tabbied's palette library, ground and all: one palette across the sheet.
const LIMEADE = ["#f7ffe0", "#a1c349", "#4a7c2f", "#22333b"];

/** A specimen sheet on a 12-column grid: one large plate, eight small, each reseeding on its own clock. */
export function PatternSpecimens() {
  return (
    <div className={styles.specimens}>
      {SPECIMENS.map((s, i) => (
        <figure key={s.name} className={i === 0 ? `${styles.specimen} ${styles.specimenLarge}` : styles.specimen}>
          <div className={styles.plate}>
            <TabbiedPattern
              pattern={s.pattern}
              palette={LIMEADE}
              density={i === 0 ? 0.35 : 0.55}
              redrawInterval={5200 + i * 650}
            />
          </div>
          <figcaption className={styles.label}>{s.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}

// From Tabbied's palette library (lib/paletteLibrary.ts), background first.
// These six have no ink too pale to show on white.
const PALETTES = [
  { name: "Bauhaus", colors: ["#f4f1ea", "#d7263d", "#1b6ca8", "#f7b32b", "#232529"] },
  { name: "Sunset", colors: ["#2b1d3a", "#ff6b6b", "#ffd23e", "#ff3d8b", "#7048e8"] },
  { name: "Berry", colors: ["#fdf3f7", "#8e2a5c", "#d7639b", "#3a1f3d", "#ffd23e", "#2e6cc0", "#101010"] },
  { name: "Matcha", colors: ["#eef2df", "#8ab17d", "#3a5a40", "#dda15e"] },
  { name: "Candy", colors: ["#fff0f6", "#ff3d8b", "#7048e8", "#3eecff", "#ffd23e"] },
  { name: "Terracotta", colors: ["#f7ede2", "#c1502e", "#84582c", "#2f3e46"] },
];

/** One design in six palettes, all reseeded together so only the color changes between them. */
export function PatternPalettes() {
  const box = useRef<HTMLDivElement>(null);
  const handles = useRef<(TabbiedPatternHandle | null)[]>([]);
  useVisibleInterval(box, 5000, () => {
    const seed = newSeed();
    handles.current.forEach((h) => h?.redraw(seed));
  });
  return (
    <div ref={box} className={styles.palettes}>
      {PALETTES.map((p, i) => (
        <figure key={p.name} className={styles.palette}>
          <div className={styles.panel}>
            <TabbiedPattern
              ref={(h) => {
                handles.current[i] = h;
              }}
              pattern={ogee}
              palette={clear(ogee, p.colors)}
              seed="park"
              density={0.6}
            />
          </div>
          <figcaption className={styles.label}>
            <span>{p.name}</span>
            <span className={styles.swatches} aria-hidden="true">
              {p.colors.slice(1).map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** A full-width divider of Bothcut's lenses on the open page, four rows tall, in the opening band's greys. */
export function PatternStrip() {
  return (
    <WholeCellBand
      className={styles.strip}
      rows={4}
      pattern={bothcut}
      palette={["transparent", ...GREYS]}
      redrawInterval={4500}
    />
  );
}

/** The package's React snippet beside what it draws; Shuffle (or the clock) writes a new seed into both. */
export function PatternCode() {
  const box = useRef<HTMLDivElement>(null);
  const [seed, setSeed] = useState("park");
  useVisibleInterval(box, 6000, () => setSeed(newSeed()));
  return (
    <div ref={box} className={styles.code}>
      <pre className={styles.snippet}>
        <code>
          {`import { TabbiedPattern } from "tabbied/react";
import { chamfer } from "tabbied/patterns";

<TabbiedPattern
  pattern={chamfer}
  palette={["transparent", "#FF4D6D", "#2E86AB",
    "#F5B82E", "#7E4A8C", "#2BB3A3"]}
  seed="`}
          <mark className={styles.seed}>{seed}</mark>
          {`"
  density={0.5}
/>`}
        </code>
      </pre>
      <div className={styles.result}>
        <TabbiedPattern pattern={chamfer} palette={clear(chamfer)} seed={seed} density={0.5} />
        <button type="button" className={styles.shuffle} onClick={() => setSeed(newSeed())}>
          Shuffle
        </button>
      </div>
    </div>
  );
}

/** A tall band to close the page, six rows of rings in the opening band's greys a step deeper, so the 2px rings still read. */
export function PatternClosing() {
  return (
    <WholeCellBand
      className={styles.closing}
      rows={6}
      pattern={truchetrings}
      palette={["transparent", "#BDBAB2", "#A5A29A", "#D3D1CA"]}
      redrawInterval={5000}
    />
  );
}
