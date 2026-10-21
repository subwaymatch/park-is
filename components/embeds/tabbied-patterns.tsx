"use client";

import { useEffect, useRef, useState } from "react";
import {
  bauhaus,
  coil,
  diamondconfetti,
  duotonetruchet,
  halftone,
  kawung,
  metro,
  midnightblossoms,
  mitre,
  monstera,
  northernlights,
  ogee,
  petalcut,
  radius,
  truchetrings,
} from "tabbied/patterns";
import { TabbiedPattern, type TabbiedPatternHandle } from "tabbied/react";
import styles from "./tabbied.module.css";

// Live Tabbied patterns for the Tabbied page, drawn by the published `tabbied`
// package. Patterns with a redrawInterval reseed themselves on a timer; the
// package skips those ticks off screen and under reduced motion.

const newSeed = () => Math.random().toString(36).slice(2, 6);

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

/** A full-width band of Radius, the pattern from Tabbied's first homepage. */
export function PatternBand() {
  return (
    <div className={styles.band}>
      <TabbiedPattern pattern={radius} density={0.55} redrawInterval={4000} />
    </div>
  );
}

/** The library's three numbers set large beside a pattern, Swiss poster style. */
export function PatternNumbers() {
  const rows = [
    ["382", "patterns"],
    ["437", "palettes"],
    ["377", "templates"],
  ];
  return (
    <div className={styles.numbers}>
      <div className={styles.numbersArt}>
        <TabbiedPattern pattern={northernlights} density={0.4} redrawInterval={6000} />
      </div>
      <dl className={styles.numbersList}>
        {rows.map(([n, label]) => (
          <div key={label} className={styles.numbersRow}>
            <dt>{label}</dt>
            <dd>{n}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

const SPECIMENS = [
  { pattern: bauhaus, name: "Bauhaus", note: "5 colors" },
  { pattern: coil, name: "Coil", note: "6 colors" },
  { pattern: duotonetruchet, name: "Duotone Truchet", note: "3 colors" },
  { pattern: halftone, name: "Halftone", note: "2 colors" },
  { pattern: petalcut, name: "Petalcut", note: "6 colors" },
  { pattern: monstera, name: "Monstera", note: "6 colors" },
  { pattern: metro, name: "Metro", note: "6 colors" },
  { pattern: kawung, name: "Kawung", note: "5 colors" },
  { pattern: mitre, name: "Mitre", note: "6 colors" },
];

/** A specimen sheet on a 12-column grid: one large plate, eight small, each reseeding on its own clock. */
export function PatternSpecimens() {
  return (
    <div className={styles.specimens}>
      {SPECIMENS.map((s, i) => (
        <figure key={s.name} className={i === 0 ? `${styles.specimen} ${styles.specimenLarge}` : styles.specimen}>
          <div className={styles.plate}>
            <TabbiedPattern pattern={s.pattern} density={i === 0 ? 0.35 : 0.55} redrawInterval={5200 + i * 650} />
          </div>
          <figcaption className={styles.label}>
            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            <span>{s.name}</span>
            <span className={styles.note}>{s.note}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

// From Tabbied's palette library (lib/paletteLibrary.ts), background first.
const PALETTES = [
  { name: "Bauhaus", colors: ["#f4f1ea", "#d7263d", "#1b6ca8", "#f7b32b", "#232529"] },
  { name: "Sunset", colors: ["#2b1d3a", "#ff6b6b", "#ffd23e", "#ff3d8b", "#7048e8"] },
  { name: "Ocean", colors: ["#0b2545", "#8da9c4", "#eef4ed", "#13a8a8"] },
  { name: "Forest", colors: ["#1e2d24", "#6ca31c", "#e7fce3", "#c9a227"] },
  { name: "Neon", colors: ["#0d0d12", "#3fffb2", "#3eecff", "#ff3d8b"] },
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
              palette={p.colors}
              seed="park"
              density={0.6}
            />
          </div>
          <figcaption className={styles.label}>
            <span>{p.name}</span>
            <span className={styles.swatches} aria-hidden="true">
              {p.colors.map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** A thin full-width divider. */
export function PatternStrip() {
  return (
    <div className={styles.strip}>
      <TabbiedPattern pattern={diamondconfetti} density={0.7} redrawInterval={4500} />
    </div>
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
import { midnightblossoms } from "tabbied/patterns";

<TabbiedPattern
  pattern={midnightblossoms}
  seed="`}
          <mark className={styles.seed}>{seed}</mark>
          {`"
  density={0.5}
/>`}
        </code>
      </pre>
      <div className={styles.result}>
        <TabbiedPattern pattern={midnightblossoms} seed={seed} density={0.5} />
        <button type="button" className={styles.shuffle} onClick={() => setSeed(newSeed())}>
          Shuffle
        </button>
      </div>
    </div>
  );
}

/** A tall band to close the page. */
export function PatternClosing() {
  return (
    <div className={styles.closing}>
      <TabbiedPattern pattern={truchetrings} density={0.45} redrawInterval={5000} />
    </div>
  );
}
