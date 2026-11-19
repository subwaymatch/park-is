"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./layeris.module.css";

/** Stills from the 2019 competition video, in its order, each in public/media/layeris/2019/ at 960×540. */
const STILLS = [
  { file: "layerimage", alt: "Loading a photo with LayerImage.from_file, typed over a photo of an office." },
  { file: "grayscale", alt: "grayscale().save() in one line, over the office photo it turned grey." },
  { file: "autocomplete", alt: "The editor suggesting clone, color_burn and color_dodge over a photo of a balloon dog sculpture." },
  { file: "chain", alt: "A chain: grayscale, save, then a Vivid Light blend of #b4ff00 at 0.8 opacity, the balloon dog yellow and green." },
  { file: "curve-before", alt: "A curve on the red channel, typed over a portrait in a forest, before." },
  { file: "curve-after", alt: "The portrait after an S-curve on the red channel." },
  { file: "blend-original", alt: "A car in the snow, the original photo for the blend modes." },
  { file: "color-dodge", alt: "The car with Color Dodge in #BA00FF." },
  { file: "linear-burn", alt: "The car with Linear Burn in #49FFE3." },
  { file: "brightness", alt: "brightness() on a waterfront." },
  { file: "hue", alt: "hue() on the same waterfront." },
  { file: "ending", alt: "The office photo in magenta, from the video's closing montage." },
];

/**
 * The 2019 video's stills edge to edge in one row, drifting slowly to the left like Samsung DRS's carousel. The row
 * is drawn three times and moves by one copy, so the loop has no seam; it pauses off screen. With reduced motion it
 * is a row to scroll.
 */
export function StillsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Off-screen stills in the track would wait for native lazy loading; once the carousel is first near, all load.
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
    <div ref={ref} className={styles.stills} data-playing={visible || undefined}>
      <ul className={styles.stillsTrack} style={{ "--count": STILLS.length } as CSSProperties}>
        {[0, 1, 2].flatMap((copy) =>
          STILLS.map((s) => (
            <li key={`${copy}-${s.file}`} aria-hidden={copy > 0 || undefined} data-copy={copy > 0 || undefined}>
              <img
                src={`/media/layeris/2019/${s.file}.jpg`}
                alt={copy > 0 ? "" : s.alt}
                width={960}
                height={540}
                loading={seen ? "eager" : "lazy"}
                decoding="async"
              />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
