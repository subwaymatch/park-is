import type { CSSProperties } from "react";
import styles from "./samsung-drs.module.css";

/**
 * Close-up stills of small DRS details, cropped from the live demo at 2x
 * (public/media/samsung-drs/details/). w and h are the crop's CSS size; an
 * image is never shown larger than that.
 */
type Crop = { file: string; w: number; h: number; label: string };
/** A grid cell: `span` of 12 columns on desktop, one crop or a vertical stack of them. */
type Cell = { span: number; items: Crop[] };

const crop = (file: string, w: number, h: number, label: string): Crop => ({ file, w, h, label });

const C = {
  legacy: crop("sys-legacy", 235, 152, "Legacy system"),
  kpi: crop("kpi", 280, 171, "KPI tile"),
  target: crop("target", 610, 296, "48-hour target"),
  heatmap: crop("heatmap", 532, 624, "Product lines"),
  donut: crop("donut", 544, 307, "Migration state"),
  waves: crop("waves", 540, 299, "Waves"),
  waffle: crop("waffle", 540, 193, "Review outcomes"),
  engineering: crop("engineering", 917, 234, "Engineering fields"),
  mapC3150: crop("map-c3150", 760, 324, "Europe, CIS, MEA"),
  mapK4440: crop("map-k4440", 760, 324, "Korea, Japan, Europe"),
  mapC520: crop("map-c520", 760, 324, "Americas, Europe"),
  reporter: crop("reporter", 544, 137, "Reporter"),
  badges: crop("badges", 325, 41, "Status line"),
  clocks: crop("clocks", 299, 204, "Severity clocks"),
  dupes: crop("dupes", 792, 161, "Duplicates"),
  bulk: crop("bulk", 796, 96, "Bulk edit"),
  subscribers: crop("subscribers", 295, 157, "Subscribers"),
  active: crop("active", 1101, 203, "Most active"),
  diff: crop("diff", 765, 330, "Line comment"),
  reviewers: crop("reviewers", 295, 170, "Reviewers"),
  swarm: crop("swarm", 378, 130, "Swarm votes"),
  changelists: crop("changelists", 765, 168, "Changelists"),
  approval: crop("approval", 719, 80, "Approval"),
  drawer: crop("drawer", 248, 844, "Phone drawer"),
  roles: crop("roles", 456, 412, "Role switcher"),
  palette: crop("palette", 508, 279, "Search"),
  settings: crop("digest-settings", 334, 768, "Digest settings"),
  shortcuts: crop("shortcuts", 250, 246, "Shortcuts"),
  digest: crop("digest", 753, 94, "Digest counts"),
  person: crop("person", 548, 187, "Person card"),
};

const one = (span: number, c: Crop): Cell => ({ span, items: [c] });
const stack = (span: number, ...items: Crop[]): Cell => ({ span, items });

/** The sheets, in page order. */
const SHEETS: Record<string, Cell[][]> = {
  insights: [
    [one(3, C.legacy), one(3, C.kpi), one(6, C.target)],
    [one(6, C.heatmap), stack(6, C.donut, C.waves)],
    [one(6, C.waffle)],
  ],
  regions: [
    [one(12, C.engineering)],
    [one(4, C.mapC3150), one(4, C.mapK4440), one(4, C.mapC520)],
  ],
  defect: [
    [stack(7, C.reporter, C.badges), one(5, C.clocks)],
    [stack(8, C.dupes, C.bulk), one(4, C.subscribers)],
    [one(12, C.active)],
  ],
  review: [
    [one(8, C.diff), stack(4, C.reviewers, C.swarm)],
    [stack(8, C.changelists, C.approval)],
  ],
  tools: [
    [one(3, C.drawer), stack(5, C.roles, C.palette), one(4, C.settings)],
    [stack(8, C.digest, C.person), one(4, C.shortcuts)],
  ],
};

/** On phones the grid has two columns: narrow crops share a row, wider ones take both. */
const phoneSpan = (c: Crop) => (c.w <= 300 ? 1 : 2);

export function DetailSheet({ sheet }: { sheet: keyof typeof SHEETS }) {
  return (
    <div className={styles.sheet}>
      {SHEETS[sheet].map((row, r) => (
        <div key={r} className={styles.row}>
          {row.map((cell, i) => (
            <div key={i} className={styles.cell} style={{ "--s": cell.span } as CSSProperties}>
              {cell.items.map((c) => (
                <figure key={c.file} className={styles.item} style={{ "--m": phoneSpan(c), "--w": `${c.w}px` } as CSSProperties}>
                  <div className={styles.panel}>
                    <img
                      src={`/media/samsung-drs/details/${c.file}.webp`}
                      alt={`Close-up from the DRS demo: ${c.label}`}
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className={styles.label}>{c.label}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
