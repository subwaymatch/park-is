"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./samsung-drs.module.css";
import { productAlt, productSrc, ROWS, scale } from "./samsung-drs-products";

/**
 * One of the demo's two rows of machines drifting slowly on one baseline, roughly to scale, like Tabbied's carousel:
 * right to left, or left to right with `reverse`; `tall` gives the copiers a taller row. The row is drawn three times
 * and moves by one copy, so two copies always cover even a 2560px window and the loop has no seam; it pauses off
 * screen. With reduced motion it is a row to scroll.
 */
export function ProductCarousel({
  row,
  reverse = false,
  tall = false,
}: {
  row: 0 | 1;
  reverse?: boolean;
  tall?: boolean;
}) {
  const items = ROWS[row];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Off-screen machines in the track would wait for native lazy loading, which some browsers start only at the
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
    <div ref={ref} className={styles.drift} data-playing={visible || undefined} data-tall={tall || undefined}>
      <ul
        className={styles.driftTrack}
        data-reverse={reverse || undefined}
        style={{ "--count": items.length } as CSSProperties}
      >
        {[0, 1, 2].flatMap((copy) =>
          items.map((p) => (
            <li key={`${copy}-${p.id}`} aria-hidden={copy > 0 || undefined} data-copy={copy > 0 || undefined}>
              <img
                src={productSrc(p)}
                alt={copy > 0 ? "" : productAlt(p)}
                width={p.width}
                height={p.height}
                loading={seen ? "eager" : "lazy"}
                decoding="async"
                style={{ "--k": scale(p) } as CSSProperties}
              />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
