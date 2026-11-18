"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./samsung-drs.module.css";
import { CAROUSEL, fit, memorySrc } from "./samsung-drs-memories";

/**
 * Drawings of things remembered from Samsung, drifting slowly right to left on one baseline, like Tabbied's carousel:
 * the row is drawn twice so it loops, and it pauses off screen. With reduced motion it is a row to scroll instead.
 */
export function MemoryCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Off-screen drawings in the track would wait for native lazy loading, which some browsers start only at the
  // viewport's edge; once the carousel is first near, all of them load.
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setSeen(true);
      },
      { rootMargin: "120px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.drift} data-playing={visible || undefined}>
      <ul className={styles.driftTrack} style={{ "--count": CAROUSEL.length } as CSSProperties}>
        {[0, 1].flatMap((copy) =>
          CAROUSEL.map((m) => (
            <li key={`${copy}-${m.name}`} aria-hidden={copy === 1 || undefined} data-copy={copy === 1 || undefined}>
              <img
                src={memorySrc(m)}
                alt={copy === 1 ? "" : m.alt}
                width={m.width}
                height={m.height}
                loading={seen ? "eager" : "lazy"}
                decoding="async"
                style={{ "--k": fit(m).h.toFixed(3) } as CSSProperties}
              />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
