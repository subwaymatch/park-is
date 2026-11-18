import type { CSSProperties } from "react";
import styles from "./samsung-drs.module.css";

// Illustrations in two styles on trial, generated at low quality on transparency (public/media/samsung-drs/art/):
// isometric 3D ("iso-") and pop-art halftone ("half-"), both in the DRS violets. They stand in pairs, isometric on the
// left and halftone on the right, so the two can be compared down the page.

const ART: Record<string, { width: number; height: number; alt: string }> = {
  "iso-printer": { width: 571, height: 600, alt: "Isometric illustration of an office multifunction printer printing a page" },
  "half-toner": { width: 600, height: 361, alt: "Halftone illustration of a laser toner cartridge" },
  "iso-globe": { width: 433, height: 600, alt: "Isometric illustration of a desk globe with pins in Korea and India" },
  "half-monitors": { width: 600, height: 304, alt: "Halftone illustration of two monitors showing charts" },
  "iso-paper": { width: 600, height: 488, alt: "Isometric illustration of printed test pages on a ream of paper" },
  "half-board": { width: 600, height: 409, alt: "Halftone illustration of a printer's circuit board" },
  "iso-desk": { width: 589, height: 600, alt: "Isometric illustration of a developer's desk with a code diff on screen" },
  "half-meeting": { width: 600, height: 438, alt: "Halftone illustration of a conference table facing a wall screen" },
  "iso-rack": { width: 317, height: 600, alt: "Isometric illustration of a server rack" },
  "half-lanyard": { width: 226, height: 600, alt: "Halftone illustration of an ID card on a lanyard" },
};

const PAIRS = {
  opening: ["iso-printer", "half-toner"],
  insights: ["iso-globe", "half-monitors"],
  defects: ["iso-paper", "half-board"],
  reviews: ["iso-desk", "half-meeting"],
  more: ["iso-rack", "half-lanyard"],
} as const;

/** Width as a share of the pair's box, giving every illustration about the same area. Neither side passes the box. */
function widthShare(name: string, area = 0.62) {
  const { width, height } = ART[name];
  const r = width / height;
  const w = Math.sqrt(area * r);
  const h = Math.sqrt(area / r);
  return w * Math.min(1, 1 / w, 1 / h);
}

/** Two illustrations side by side on one baseline, centred. */
export function ArtPair({ pair }: { pair: keyof typeof PAIRS }) {
  return (
    <div className={styles.artPair}>
      {PAIRS[pair].map((name) => (
        <img
          key={name}
          src={`/media/samsung-drs/art/${name}.webp`}
          alt={ART[name].alt}
          width={ART[name].width}
          height={ART[name].height}
          loading="lazy"
          decoding="async"
          style={{ "--w": widthShare(name).toFixed(3) } as CSSProperties}
        />
      ))}
    </div>
  );
}
