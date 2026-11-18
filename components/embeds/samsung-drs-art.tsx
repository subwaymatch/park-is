import type { CSSProperties } from "react";
import styles from "./samsung-drs.module.css";

// Isometric 3D illustrations of the printing division's world, generated at low quality on transparency
// (public/media/samsung-drs/art/) in one small palette: white, two warm greys, one violet for accents and a near-black
// for details. They stand in rows of three, each row opening a part of the page.

const ART: Record<string, { width: number; height: number; alt: string }> = {
  printer: {
    width: 541,
    height: 600,
    alt: "Isometric illustration of an office multifunction printer printing a page",
  },
  toner: { width: 600, height: 469, alt: "Isometric illustration of a laser toner cartridge" },
  paper: { width: 600, height: 462, alt: "Isometric illustration of a ream of printer paper" },
  dashboard: { width: 447, height: 600, alt: "Isometric illustration of a monitor showing charts" },
  globe: { width: 406, height: 600, alt: "Isometric illustration of a desk globe pinned at Korea and India" },
  hourglass: { width: 352, height: 600, alt: "Isometric illustration of an hourglass" },
  "test-page": {
    width: 600,
    height: 469,
    alt: "Isometric illustration of a magnifying glass over a streak on a printed test page",
  },
  board: { width: 600, height: 421, alt: "Isometric illustration of a printer's circuit board" },
  clipboard: { width: 366, height: 600, alt: "Isometric illustration of a QA checklist on a clipboard" },
  jam: { width: 600, height: 591, alt: "Isometric illustration of a printer with a page jammed in its rollers" },
  toolbox: {
    width: 483,
    height: 600,
    alt: "Isometric illustration of an open toolbox with a screwdriver and a wrench",
  },
  box: { width: 563, height: 600, alt: "Isometric illustration of a taped shipping box" },
  desk: { width: 566, height: 600, alt: "Isometric illustration of a developer's desk with a code diff on screen" },
  comments: { width: 524, height: 600, alt: "Isometric illustration of two comment bubbles" },
  laptop: { width: 514, height: 600, alt: "Isometric illustration of a laptop showing code" },
  lanyard: { width: 178, height: 600, alt: "Isometric illustration of an ID card on a lanyard" },
  padlock: { width: 484, height: 600, alt: "Isometric illustration of an open padlock and its key" },
  meeting: { width: 537, height: 600, alt: "Isometric illustration of a meeting table facing a wall screen" },
  envelope: { width: 520, height: 542, alt: "Isometric illustration of an envelope with a notification dot" },
  bell: { width: 421, height: 600, alt: "Isometric illustration of a notification bell" },
  rack: { width: 363, height: 600, alt: "Isometric illustration of a server rack" },
};

const ROWS = {
  opening: ["printer", "toner", "paper"],
  insights: ["dashboard", "globe", "hourglass"],
  defects: ["test-page", "board", "clipboard"],
  repairs: ["jam", "toolbox", "box"],
  reviews: ["desk", "comments", "laptop"],
  roles: ["lanyard", "padlock", "meeting"],
  more: ["envelope", "bell", "rack"],
} as const;

/** Width as a share of the row's box, giving every illustration about the same area. Neither side passes the box. */
function widthShare(name: string, area = 0.62) {
  const { width, height } = ART[name];
  const r = width / height;
  const w = Math.sqrt(area * r);
  const h = Math.sqrt(area / r);
  return w * Math.min(1, 1 / w, 1 / h);
}

/** Three illustrations side by side on one baseline, centred. */
export function ArtRow({ row }: { row: keyof typeof ROWS }) {
  return (
    <div className={styles.artRow}>
      {ROWS[row].map((name) => (
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
