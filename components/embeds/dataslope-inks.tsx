"use client";

import { useEffect, useRef } from "react";
import styles from "./dataslope-inks.module.css";

// Step 500 of each of Dataslope's four ink ramps (dataslope-colors.tsx).
const DISCS = [
  { name: "green", color: "#20C621", cx: 362 },
  { name: "blue", color: "#148CFF", cx: 652 },
  { name: "yellow", color: "#FFDD6C", cx: 942 },
  { name: "red", color: "#FF4F59", cx: 1232 },
];

/**
 * The four inks as flat discs multiplied over one another, so each overlap prints a third color. Ordered so every
 * overlap is a clean mix: green and blue, blue and yellow, yellow and red. When first seen they fade in one after
 * another, then drift: alternate discs lean together and apart, so the overlaps keep widening and narrowing. The
 * drift pauses off screen; with reduced motion, or without JavaScript, the discs stand still. The plate sits under
 * the text column, like the ramps below it.
 */
export function InkOverprint() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The discs wait, hidden, for their entrance.
    el.dataset.ready = "";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.seen = "";
          el.dataset.visible = "";
        } else delete el.dataset.visible;
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // The view box is the row of discs: the drift only moves the outer two inward.
  return (
    <div className={styles.stage}>
      <svg
        ref={ref}
        className={styles.plate}
        viewBox="152 140 1290 420"
        role="img"
        aria-label="Green, blue, yellow and red discs overprinted in a row"
      >
        <g className={styles.inks}>
          {DISCS.map((d, i) => (
            <circle
              key={d.name}
              className={`${styles.ink} ${i % 2 ? styles.odd : styles.even}`}
              cx={d.cx}
              cy={350}
              r={210}
              fill={d.color}
              style={{ "--i": i } as React.CSSProperties}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
