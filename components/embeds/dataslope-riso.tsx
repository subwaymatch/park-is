import type { Riso } from "./dataslope-riso-data";
import styles from "./dataslope.module.css";

// Dataslope's risograph lesson illustrations, set straight on the page background:
// cut-outs, so no mats, rules or frames. See dataslope-riso-data.ts for the picks.

const src = (r: Riso) => `/media/dataslope/riso/${r.file}.webp`;

function Img({ r, decorative = false }: { r: Riso; decorative?: boolean }) {
  return (
    <img
      src={src(r)}
      alt={decorative ? "" : r.alt}
      width={r.w}
      height={r.h}
      loading="lazy"
      decoding="async"
    />
  );
}

/** Edge to edge, a strict grid of equal columns; each row's images stand on a shared baseline. */
export function RisoGrid({ items }: { items: Riso[] }) {
  return (
    <ul className={styles.grid}>
      {items.map((r) => (
        <li key={r.file}>
          <Img r={r} />
        </li>
      ))}
    </ul>
  );
}

/**
 * The playgrounds' illustration (1536 × 924), shown about 700 CSS px wide and
 * centered (dataslope.module.css).
 */
export function PlaygroundArt() {
  return (
    <img
      className={styles.playground}
      src="/media/dataslope/playground-animals.webp"
      alt="A marmot on a blue slide, a fox and a penguin on a green seesaw, and a yellow climbing block on a pale platform"
      width={1536}
      height={924}
      loading="lazy"
      decoding="async"
    />
  );
}

