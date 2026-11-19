"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./layeris.module.css";

type Still = { file: string; alt: string };

/** Stills from the 2019 competition video in its order, each in public/media/layeris/2019/ at 640×360. */
const ROW_1: Still[] = [
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

/** Twelve more stills from the same video, mixed so no two alike stand together. */
const ROW_2: Still[] = [
  { file: "dog", alt: "A blue balloon dog sculpture in a gallery, the original photo." },
  { file: "skyline-dark", alt: "The waterfront darkened by an adjustment." },
  { file: "portrait", alt: "A portrait in a forest, the original photo for the curves." },
  { file: "traffic-violet", alt: "Night traffic in violet, from the closing montage." },
  { file: "linear-dodge", alt: "The car in the snow with Linear Dodge." },
  { file: "traffic-mono", alt: "Night traffic in black and white under the video's closing line." },
  { file: "saturation", alt: "saturation() on the waterfront." },
  { file: "dog-pink", alt: "The balloon dog in pink, from the closing montage." },
  { file: "multiply", alt: "The car with Multiply in #AF5DEF." },
  { file: "traffic-night", alt: "Night traffic under the video's closing line." },
  { file: "chain-grayscale", alt: "The balloon dog in grayscale, the first step of a chain, with its code." },
  { file: "contrast", alt: "contrast() on the waterfront." },
];

/** One row, drawn three times and moved by one copy so the loop has no seam; `reverse` drifts it to the right. */
function Row({ stills, reverse = false, seen }: { stills: Still[]; reverse?: boolean; seen: boolean }) {
  return (
    <ul
      className={styles.stillsTrack}
      data-reverse={reverse || undefined}
      style={{ "--count": stills.length } as CSSProperties}
    >
      {[0, 1, 2].flatMap((copy) =>
        stills.map((s) => (
          <li key={`${copy}-${s.file}`} aria-hidden={copy > 0 || undefined} data-copy={copy > 0 || undefined}>
            <img
              src={`/media/layeris/2019/${s.file}.jpg`}
              alt={copy > 0 ? "" : s.alt}
              width={640}
              height={360}
              loading={seen ? "eager" : "lazy"}
              decoding="async"
            />
          </li>
        )),
      )}
    </ul>
  );
}

/**
 * The 2019 video's stills in two rows edge to edge, with no gap between stills or rows, drifting slowly in opposite
 * directions like Samsung DRS's carousels. Both pause off screen; with reduced motion each is a row to scroll.
 */
export function StillsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  // Off-screen stills in the tracks would wait for native lazy loading; once the carousel is first near, all load.
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
    <div ref={ref} className={styles.stills} data-carousel data-playing={visible || undefined}>
      <Row stills={ROW_1} seen={seen} />
      <Row stills={ROW_2} reverse seen={seen} />
    </div>
  );
}
