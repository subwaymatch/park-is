import type { CSSProperties } from "react";
import styles from "./samsung-drs.module.css";

// Isometric 3D illustrations of the printing division's world, generated at low quality on transparency
// (public/media/samsung-drs/art/) in white, warm greys and a near-black for details. They were drawn with violet
// accents, which were then turned into the warm greys by hue (keeping their light and shade), so the palette is white
// throughout. They stand in rows of five, each row opening a part of the page.

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
  scanner: { width: 518, height: 600, alt: "Isometric illustration of a flatbed scanner with its lid raised" },
  stapler: { width: 600, height: 548, alt: "Isometric illustration of an office stapler" },
  pie: { width: 600, height: 510, alt: "Isometric illustration of a pie chart with one slice pulled out" },
  calendar: { width: 580, height: 600, alt: "Isometric illustration of a desk calendar" },
  warning: { width: 571, height: 600, alt: "Isometric illustration of a warning sign" },
  notes: { width: 600, height: 501, alt: "Isometric illustration of a pad of sticky notes" },
  gears: { width: 600, height: 527, alt: "Isometric illustration of two interlocking gears" },
  truck: { width: 600, height: 590, alt: "Isometric illustration of a delivery truck" },
  mug: { width: 420, height: 600, alt: "Isometric illustration of a coffee mug" },
  headphones: { width: 469, height: 600, alt: "Isometric illustration of over-ear headphones" },
  chair: { width: 380, height: 600, alt: "Isometric illustration of an office chair" },
  keycard: { width: 382, height: 600, alt: "Isometric illustration of an office door with a keycard reader" },
  phone: { width: 303, height: 600, alt: "Isometric illustration of a smartphone showing a notification" },
  keycaps: { width: 600, height: 491, alt: "Isometric illustration of two keyboard keycaps" },
};

const ROWS = {
  opening: ["scanner", "printer", "toner", "paper", "stapler"],
  insights: ["pie", "dashboard", "globe", "hourglass", "calendar"],
  defects: ["warning", "test-page", "board", "clipboard", "notes"],
  repairs: ["gears", "jam", "toolbox", "box", "truck"],
  reviews: ["mug", "desk", "comments", "laptop", "headphones"],
  roles: ["chair", "lanyard", "padlock", "meeting", "keycard"],
  more: ["phone", "envelope", "bell", "rack", "keycaps"],
} as const;

/** Width as a share of the row's box, giving every illustration about the same area. Neither side passes the box. */
function widthShare(name: string, area = 0.62) {
  const { width, height } = ART[name];
  const r = width / height;
  const w = Math.sqrt(area * r);
  const h = Math.sqrt(area / r);
  return w * Math.min(1, 1 / w, 1 / h);
}

/** Five illustrations side by side on one baseline, centred. */
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
