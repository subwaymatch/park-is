"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import { STRIP } from "./dataslope-riso-data";
import styles from "./dataslope.module.css";

/**
 * One long row of risograph illustrations that drifts slowly to the left.
 * The row is rendered twice so the loop has no seam; the copy is hidden from
 * assistive tech. It moves only while on screen, and not at all for people
 * who ask for reduced motion (the row then scrolls by hand).
 */
export function RisoStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "120px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.strip} data-playing={visible || undefined}>
      <ul className={styles.track} style={{ "--count": STRIP.length } as CSSProperties}>
        {[0, 1].flatMap((copy) =>
          STRIP.map((r) => (
            <li key={`${copy}-${r.file}`} aria-hidden={copy === 1 || undefined} data-copy={copy === 1 || undefined}>
              <img
                src={`/media/dataslope/riso/${r.file}.webp`}
                alt={copy === 1 ? "" : r.alt}
                width={r.w}
                height={r.h}
                loading="lazy"
                decoding="async"
              />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
