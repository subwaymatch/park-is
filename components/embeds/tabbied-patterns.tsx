"use client";

import { useEffect, useRef, useState } from "react";
import type { PatternDefinition } from "tabbied";
import {
  bauhaus,
  cairo,
  chamfer,
  diamondconfetti,
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
  windowpane,
} from "tabbied/patterns";
import { TabbiedPattern, type TabbiedPatternHandle } from "tabbied/react";
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

/** A full-width band of Radius, the pattern from Tabbied's first homepage. Its pale cyan ink would vanish on white, so its blue ground takes that slot. */
export function PatternBand() {
  return (
    <div className={styles.band}>
      <TabbiedPattern
        pattern={radius}
        palette={["transparent", "#3B3F45", "#3FFFB2", "#3EECFF", "#3E8BFF", "#FF3D8B"]}
        density={0.55}
        redrawInterval={4000}
      />
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
        <TabbiedPattern pattern={windowpane} palette={clear(windowpane)} density={0.4} redrawInterval={6000} />
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
  { pattern: bauhaus, name: "Bauhaus", slug: "bauhaus" },
  { pattern: lintel, name: "Lintel", slug: "lintel" },
  { pattern: duotonetruchet, name: "Duotone Truchet", slug: "duotonetruchet" },
  { pattern: halftone, name: "Halftone", slug: "halftone" },
  { pattern: petalcut, name: "Petalcut", slug: "petalcut" },
  { pattern: pentomino, name: "Pentomino", slug: "pentomino" },
  { pattern: cairo, name: "Cairo", slug: "cairo" },
  { pattern: kawung, name: "Kawung", slug: "kawung" },
  { pattern: mitre, name: "Mitre", slug: "mitre" },
];

/** A specimen sheet on a 12-column grid: one large plate, eight small, each reseeding on its own clock. */
export function PatternSpecimens() {
  return (
    <div className={styles.specimens}>
      {SPECIMENS.map((s, i) => (
        <figure key={s.slug} className={i === 0 ? `${styles.specimen} ${styles.specimenLarge}` : styles.specimen}>
          <div className={styles.plate}>
            <TabbiedPattern
              pattern={s.pattern}
              palette={clear(s.pattern)}
              density={i === 0 ? 0.35 : 0.55}
              redrawInterval={5200 + i * 650}
            />
          </div>
          <figcaption className={styles.label}>
            <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            <span>{s.name}</span>
            <code className={styles.note}>{s.slug}</code>
          </figcaption>
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

/** A thin full-width divider. */
export function PatternStrip() {
  return (
    <div className={styles.strip}>
      <TabbiedPattern pattern={diamondconfetti} palette={clear(diamondconfetti)} density={0.7} redrawInterval={4500} />
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

/** A tall band to close the page. */
export function PatternClosing() {
  return (
    <div className={styles.closing}>
      <TabbiedPattern pattern={truchetrings} palette={clear(truchetrings)} density={0.45} redrawInterval={5000} />
    </div>
  );
}
