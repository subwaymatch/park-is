"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./samsung-drs.module.css";
import { PRODUCTS, productAlt, productSrc, scale } from "./samsung-drs-products";

/**
 * The demo's 44 printers and copiers drifting slowly right to left on one baseline, roughly to scale, like Tabbied's
 * carousel: the row is drawn twice so it loops, and it pauses off screen. With reduced motion it is a row to scroll.
 */
export function ProductCarousel() {
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
    <div ref={ref} className={styles.drift} data-playing={visible || undefined}>
      <ul className={styles.driftTrack} style={{ "--count": PRODUCTS.length } as CSSProperties}>
        {[0, 1].flatMap((copy) =>
          PRODUCTS.map((p) => (
            <li key={`${copy}-${p.id}`} aria-hidden={copy === 1 || undefined} data-copy={copy === 1 || undefined}>
              <img
                src={productSrc(p)}
                alt={copy === 1 ? "" : productAlt(p)}
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
