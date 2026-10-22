import type { CSSProperties } from "react";
import { data } from "./layeris-data";
import { portraits } from "./layeris-portraits";
import styles from "./layeris.module.css";

type Img = { readonly src: string; readonly width: number; readonly height: number };

function Photo({ img, alt }: { img: Img; alt: string }) {
  return <img src={img.src} alt={alt} width={img.width} height={img.height} loading="lazy" decoding="async" />;
}

const num = (i: number) => String(i).padStart(2, "0");

/** A line of code with wrap points after method dots and commas, so a narrow column breaks between calls, not inside a number. */
export function breakable(line: string) {
  return line.split(/(?<=\.(?=[a-z_])|,)/).flatMap((part, i) => (i === 0 ? [part] : [<wbr key={i} />, part]));
}
/** The code after the load line, which every look shares. */
const body = (code: string) => code.split("\n").slice(1).join("\n");

/** One photo in several looks, edge to edge across the window, each with its code below. */
export function Band() {
  const { photo, looks } = data.band;
  return (
    <div className={styles.band} style={{ "--n": looks.length } as CSSProperties}>
      {looks.map((l, i) => (
        <div key={l.name} className={styles.bandItem}>
          <div className={`${styles.tile} ${styles.landscape}`}>
            <Photo img={l.img} alt={`${photo}, ${l.name}`} />
          </div>
          <div className={styles.under}>
            <div className={styles.underLabel}>
              <span className={styles.num}>{num(i)}</span>&ensp;{l.name}
            </div>
            {i > 0 && <pre className={`${styles.code} ${styles.wrap}`}>{breakable(body(l.code).replace(/^\s+/gm, "  "))}</pre>}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Three looks of a portrait photo, each above its code. */
export function Triptych() {
  const { photo, looks } = data.triptych;
  return (
    <div className={styles.trip}>
      {looks.map((l, i) => (
        <div key={l.name} className={styles.tripItem}>
          <div className={styles.tripHead}>
            <span className={styles.num}>{num(i)}</span>
            <span>{l.name}</span>
          </div>
          <div className={`${styles.tile} ${styles.portrait}`}>
            <Photo img={l.img} alt={`${photo}, ${l.name}`} />
          </div>
          <pre className={styles.code}>{i === 0 ? l.code : body(l.code)}</pre>
        </div>
      ))}
    </div>
  );
}

const GROUPS: Record<string, string> = { darken: "Darken", lighten: "Lighten", overlay: "Contrast" };

/** All 14 blend modes with one color on one photo; hover a result to see the base. */
export function BlendGrid() {
  const b = data.blend;
  return (
    <div>
      <div className={`${styles.grid} ${styles.blendHead}`}>
        <div className={`${styles.meta} ${styles.first}`}>
          <span className={styles.name}>
            <span className={styles.swatch} style={{ background: b.color }} />
            {b.color}
          </span>
        </div>
        <pre className={`${styles.code} ${styles.rest}`}>{`${b.base.code}\nimage.<mode>("${b.color}")`}</pre>
      </div>
      <div className={styles.blend}>
        <div className={styles.blendItem}>
          <div className={`${styles.tile} ${styles.landscape}`}>
            <Photo img={b.base.img} alt={`${b.photo}, original`} />
          </div>
          <div className={styles.blendLabel}>
            <span className={styles.num}>00</span>
            <span>base</span>
          </div>
        </div>
        {b.modes.map((m, i) => (
          <div key={m.name} className={styles.blendItem}>
            <div className={`${styles.tile} ${styles.landscape}`} title={m.code}>
              <Photo img={m.img} alt={`${b.photo} with ${m.name}("${b.color}")`} />
              <Photo img={b.base.img} alt="" />
            </div>
            <div className={styles.blendLabel}>
              <span className={styles.num}>{num(i + 1)}</span>
              <span>{m.name}</span>
              {GROUPS[m.name] && <span className={styles.group}>{GROUPS[m.name]}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** One blend mode at five opacities. */
export function Opacity() {
  const o = data.opacity;
  return (
    <div className={styles.grid}>
      <div className={`${styles.meta} ${styles.first}`}>
        <span className={styles.name}>
          <span className={styles.swatch} style={{ background: "#ff4f8b" }} />
          opacity
        </span>
        <pre className={`${styles.code} ${styles.wrap}`}>{'image.overlay("#ff4f8b", opacity=…)'}</pre>
      </div>
      <div className={`${styles.strip} ${styles.rest}`} style={{ "--n": o.steps.length } as CSSProperties}>
        {o.steps.map((s) => (
          <div key={s.value} className={styles.stripItem}>
            <div className={`${styles.tile} ${styles.landscape}`} title={s.code}>
              <Photo img={s.img} alt={`${o.photo} with overlay at opacity ${s.value}`} />
            </div>
            <span>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Ten portraits, one to a row: the recipe on the left, then the original and its look side by side, each in full. */
export function PortraitPairs() {
  return (
    <div className={styles.pairs}>
      {portraits.map((p, i) => (
        <figure key={p.slug} className={styles.grid}>
          <figcaption className={`${styles.meta} ${styles.first}`}>
            <span className={styles.name}>
              <span className={styles.num}>{num(i + 1)}</span>&ensp;{p.look}
            </span>
            <span>{p.style}</span>
            <pre className={`${styles.code} ${styles.wrap} ${styles.pairCode}`}>{breakable(body(p.code).replace(/^\s+/gm, "  "))}</pre>
          </figcaption>
          <div className={`${styles.rest} ${styles.pair}`}>
            {(["before", "after"] as const).map((side) => (
              <div key={side} className={`${styles.tile} ${styles.portrait}`}>
                <Photo img={p[side]} alt={side === "before" ? `${p.alt}, the original` : `${p.alt}, in ${p.look}`} />
                <span className={`${styles.tag} ${styles.tagStart}`}>{side === "before" ? "Before" : "After"}</span>
              </div>
            ))}
          </div>
        </figure>
      ))}
    </div>
  );
}
