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
  engineering: crop("engineering", 917, 234, "Engineering fields"),
  mapC3150: crop("map-c3150", 760, 324, "Europe, CIS, MEA"),
  mapK4440: crop("map-k4440", 760, 324, "Korea, Japan, Europe"),
  mapC520: crop("map-c520", 760, 324, "Americas, Europe"),
};

const one = (span: number, c: Crop): Cell => ({ span, items: [c] });

const SHEETS: Record<string, Cell[][]> = {
  regions: [
    [one(12, C.engineering)],
    [one(4, C.mapC3150), one(4, C.mapK4440), one(4, C.mapC520)],
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
