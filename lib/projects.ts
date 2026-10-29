import { dataslope } from "./content/dataslope";
import { layeris } from "./content/layeris";
import { react3dMockups } from "./content/react-3d-mockups";
import { samsungDrs } from "./content/samsung-drs";
import { tabbied } from "./content/tabbied";

export type Link = { label: string; url: string };

/**
 * How a clip or still was framed, which sets its aspect ratio on the page.
 * wide: a desktop browser, full frame (1920×1080). tall: the same, 4:3
 * (1920×1440). phone: a phone screen on the surface colour (1200×1500).
 */
export type Shape = "wide" | "tall" | "phone";

export type Figure = {
  /** File name in public/media/<slug>/, without extension. */
  file: string;
  /** loop: a muted clip that plays while on screen; video: the walkthrough, with controls; still: a .jpg. */
  kind: "loop" | "video" | "still";
  shape: Shape;
  caption: string;
  /**
   * Set a desktop shot on the surface colour with a margin around it, the way the phone shots sit: for white pages
   * that would otherwise dissolve into this one.
   */
  mat?: boolean;
};

/** Paragraphs may hold inline links written as [text](https://…). */
export type Block =
  | { type: "text"; label?: string; paragraphs: string[] }
  /** A figure across the full width, caption below. */
  | { type: "full"; figure: Figure }
  /** Two figures side by side, usually phones. */
  | { type: "pair"; figures: [Figure, Figure] }
  /** A figure in the right three columns, its caption beside it. */
  | { type: "aside"; figure: Figure }
  /** The project's own logo, drawn and animated on the page. */
  | { type: "logo"; caption: string }
  /**
   * A live component from components/embeds/<slug>.tsx, by name: patterns,
   * sliders, 3D scenes. `bleed` runs it the full width of the window.
   */
  | { type: "embed"; name: string; caption?: string; bleed?: boolean };

export type Project = {
  slug: string;
  name: string;
  year: string;
  revived?: string;
  tagline: string;
  links: Link[];
  /** The About row: what the project is, in brief. */
  summary: string[];
  /** Short facts listed under the summary, label first. */
  facts: [string, string][];
  sections: Block[];
  /** A wide figure's file whose .jpg is the Open Graph image. */
  ogImage: string;
  /** Tone of the hero loop's top band, where the header sits: "dark" gets white ink. */
  heroTone: "light" | "dark";
  /**
   * The logo's colour, as in the glow behind it on the project page: the home card's hover glow. Tabbied's mark is
   * a plain outline, so it takes the yellow of its page's seed highlight.
   */
  color: string;
};

export const projects: Project[] = [tabbied, dataslope, react3dMockups, layeris, samsungDrs];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function yearText(p: Project) {
  return p.revived ? `${p.year}, revived ${p.revived}` : p.year;
}

/** Intrinsic size and CSS ratio class of each shape. */
export const SHAPES = {
  wide: { width: 1920, height: 1080, ratio: "ratio-16-9" },
  tall: { width: 1920, height: 1440, ratio: "ratio-4-3" },
  phone: { width: 1200, height: 1500, ratio: "ratio-4-5" },
} as const;

export function media(slug: string) {
  const base = `/media/${slug}/`;
  return {
    /** The hero loop, also the home card: a desktop browser on the surface colour. */
    hero: base + "hero.mp4",
    heroPoster: base + "hero.jpg",
    clip: (file: string) => base + file + ".mp4",
    image: (file: string) => base + file + ".jpg",
  };
}
