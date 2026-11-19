"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./layeris.module.css";

type Still = { file: string; alt: string };

/**
 * Stills from the 2019 competition video in its order, chosen by Ye Joo: the first fourteen in the first row and the
 * other thirteen in the second, each in public/media/layeris/2019/ at 640×360, named for its frame and time.
 */
const ROW_1: Still[] = [
  { file: "layer-is_008_0m32.9s", alt: "LayerImage imported and a photo loaded, typed over a photo of an office." },
  { file: "layer-is_013_0m40.0s", alt: "grayscale().save() typed over the office photo, now grey." },
  { file: "layer-is_017_0m53.6s", alt: "A blue balloon dog sculpture in a gallery, the original photo." },
  { file: "layer-is_019_0m58.2s", alt: "The chaining example: the balloon dog turned grayscale, with its code." },
  { file: "layer-is_021_1m08.7s", alt: "A Vivid Light blend turning the balloon dog yellow and green, with its code." },
  { file: "layer-is_025_1m27.2s", alt: "A portrait in a forest, the original photo for the curves." },
  { file: "layer-is_028_1m34.1s", alt: "The portrait after an S-curve on the red channel, with its code." },
  { file: "layer-is_032_1m48.2s", alt: "A car in the snow, the original photo for the blend modes." },
  { file: "layer-is_033_1m50.8s", alt: "The car with Linear Dodge." },
  { file: "layer-is_034_1m51.7s", alt: "The car with Color Dodge in #BA00FF." },
  { file: "layer-is_035_1m54.7s", alt: "The car with Linear Burn in #49FFE3." },
  { file: "layer-is_037_1m58.7s", alt: "The car in violet, from the blend modes." },
  { file: "layer-is_038_2m02.0s", alt: "brightness() on a waterfront." },
  { file: "layer-is_040_2m04.3s", alt: "contrast() on the waterfront." },
];

const ROW_2: Still[] = [
  { file: "layer-is_041_2m05.3s", alt: "hue() on the waterfront." },
  { file: "layer-is_043_2m08.7s", alt: "The waterfront darkened by an adjustment." },
  { file: "layer-is_053_2m27.8s", alt: "apply_from_json() typed in the editor, applying a look saved as JSON." },
  { file: "layer-is_056_2m40.4s", alt: "A city bus passing, the original photo for the closing montage." },
  { file: "layer-is_057_2m42.1s", alt: "The bus in violet under the video's closing line." },
  { file: "layer-is_060_2m46.8s", alt: "Night traffic under the video's closing line." },
  { file: "layer-is_061_2m47.0s", alt: "The night traffic in black and white." },
  { file: "layer-is_062_2m48.5s", alt: "The night traffic in violet." },
  { file: "layer-is_063_2m49.8s", alt: "The office photo, from the closing montage." },
  { file: "layer-is_064_2m52.0s", alt: "The office photo in magenta." },
  { file: "layer-is_065_2m53.0s", alt: "The balloon dog photo again, from the closing montage." },
  { file: "layer-is_066_2m55.2s", alt: "The balloon dog in pink." },
  { file: "layer-is_067_2m55.3s", alt: "The balloon dog in a cool blue." },
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
