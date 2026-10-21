"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { data } from "./layeris-data";
import { breakable } from "./layeris-static";
import styles from "./layeris.module.css";

type Img = { readonly src: string; readonly width: number; readonly height: number };

function reducedMotion() {
  return typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Calls `onChange(visible)` as the element enters or leaves the viewport. */
function useVisible(ref: React.RefObject<HTMLElement | null>, onChange: (visible: boolean) => void, threshold = 0.4) {
  const cb = useRef(onChange);
  cb.current = onChange;
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => cb.current(entry.isIntersecting), { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
}

function Photo({ img, alt, className, style }: { img: Img; alt: string; className?: string; style?: CSSProperties }) {
  return (
    <img
      src={img.src}
      alt={alt}
      width={img.width}
      height={img.height}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
      draggable={false}
    />
  );
}

const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

/* ------------------------------------------------------------------------ */
/* Before/after slider                                                       */
/* ------------------------------------------------------------------------ */

type CompareKey = keyof typeof data.compares;

export function Compare({
  which,
  layout,
  focus,
}: {
  which: CompareKey;
  layout: "wide" | "portrait" | "bleed";
  /** object-position for both photos when the frame crops them, e.g. "50% 80%". */
  focus?: string;
}) {
  const c = data.compares[which];
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const touched = useRef(false);
  const anim = useRef(0);

  const stop = useCallback(() => {
    cancelAnimationFrame(anim.current);
    anim.current = 0;
  }, []);

  // A slow sweep each time the slider comes into view, until someone drags it.
  useVisible(box, (visible) => {
    stop();
    if (!visible || touched.current || reducedMotion()) return;
    const keys = [50, 24, 76, 50];
    const leg = 1500;
    const t0 = performance.now() + 400;
    const tick = (now: number) => {
      const t = Math.max(0, now - t0) / leg;
      const i = Math.min(Math.floor(t), keys.length - 2);
      const k = Math.min(1, t - i);
      setPos(keys[i] + (keys[i + 1] - keys[i]) * ease(k));
      if (t < keys.length - 1) anim.current = requestAnimationFrame(tick);
      else anim.current = 0;
    };
    anim.current = requestAnimationFrame(tick);
  });
  useEffect(() => stop, [stop]);

  const fromPointer = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
  };

  const slider = (
    <div
      ref={box}
      className={styles.compare}
      style={{ "--pos": `${pos}%`, ...(focus ? { "--focus": focus } : {}) } as CSSProperties}
      onPointerDown={(e) => {
        touched.current = true;
        stop();
        e.currentTarget.setPointerCapture(e.pointerId);
        fromPointer(e);
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) fromPointer(e);
      }}
    >
      <Photo img={c.after} alt={`${c.photo} after ${c.name}`} />
      <Photo img={c.before} alt={`${c.photo}, original`} className={styles.before} />
      <span className={styles.divider} />
      <span className={styles.handle} aria-hidden="true">
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M4.5 1 1 5l3.5 4M9.5 1 13 5 9.5 9" />
        </svg>
      </span>
      <span className={`${styles.tag} ${styles.tagStart}`}>Original</span>
      <span className={`${styles.tag} ${styles.tagEnd}`}>{c.name}</span>
      <input
        className={styles.range}
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(pos)}
        aria-label={`Compare ${c.photo} before and after ${c.name}`}
        onChange={(e) => {
          touched.current = true;
          stop();
          setPos(Number(e.target.value));
        }}
      />
    </div>
  );

  const meta = (
    <div className={styles.meta}>
      <span className={styles.name}>{c.name}</span>
      <span>{c.photo}</span>
    </div>
  );
  const code = <pre className={styles.code}>{c.code}</pre>;

  if (layout === "bleed") {
    return (
      <div className={styles.cmpBleed}>
        {slider}
        <div className={`${styles.inner} ${styles.grid}`}>
          {meta}
          <div className={styles.rest}>{code}</div>
        </div>
      </div>
    );
  }
  if (layout === "portrait") {
    return (
      <div className={`${styles.grid} ${styles.cmpPortrait}`}>
        {slider}
        <div className={styles.side}>
          {meta}
          {code}
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.grid} ${styles.cmpWide}`}>
      {slider}
      {meta}
      {code}
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Pipeline: each step of a chain with its line of code                      */
/* ------------------------------------------------------------------------ */

export function Pipeline({ which }: { which: "chain" | "curveChain" }) {
  const p = data[which];
  const tall = p.steps[0].img.height > p.steps[0].img.width;
  const [active, setActive] = useState(p.steps.length - 1);
  const root = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const held = useRef(false);

  // While on screen, a marker walks through the steps, one every 1.6 s.
  useVisible(root, (visible) => {
    clearInterval(timer.current);
    if (!visible || reducedMotion()) return;
    timer.current = setInterval(() => {
      if (!held.current) setActive((a) => (a + 1) % p.steps.length);
    }, 1600);
  }, 0.3);
  useEffect(() => () => clearInterval(timer.current), []);

  // The load line sits above the strip, in the page column; each step shows the line it adds.
  return (
    <div ref={root} className={styles.pipeWrap}>
      <pre className={`${styles.code} ${styles.pipeLead}`}>{p.steps[0].line}</pre>
      <div
        className={`${styles.pipe} ${tall ? styles.tallSteps : ""}`}
        style={{ "--n": p.steps.length } as CSSProperties}
        onPointerLeave={() => (held.current = false)}
      >
        {p.steps.map((s, i) => (
          <div
            key={i}
            className={styles.step}
            data-active={i === active}
            tabIndex={0}
            onPointerEnter={() => {
              held.current = true;
              setActive(i);
            }}
            onFocus={() => {
              held.current = true;
              setActive(i);
            }}
            onBlur={() => (held.current = false)}
          >
            <div className={`${styles.tile} ${tall ? styles.portrait : styles.landscape}`}>
              <Photo img={s.img} alt={i === 0 ? `${p.photo}, original` : `${p.photo} after: ${s.line}`} />
            </div>
            <div className={styles.under}>
              <div className={styles.underLabel}>{i === 0 ? "Original" : `Step ${i}`}</div>
              {i > 0 && <pre className={`${styles.code} ${styles.wrap}`}>{breakable(s.line)}</pre>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* One preset, many photos                                                   */
/* ------------------------------------------------------------------------ */

export function Preset() {
  const p = data.preset;
  const [on, setOn] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const touched = useRef(false);

  // On screen, it flips between the originals and the preset every 2.8 s until someone picks one.
  useVisible(root, (visible) => {
    clearInterval(timer.current);
    if (!visible || touched.current || reducedMotion()) return;
    timer.current = setInterval(() => setOn((v) => !v), 2800);
  }, 0.3);
  useEffect(() => () => clearInterval(timer.current), []);

  const pick = (v: boolean) => {
    touched.current = true;
    clearInterval(timer.current);
    setOn(v);
  };

  return (
    <div ref={root} className={styles.grid}>
      <div className={`${styles.meta} ${styles.first}`}>
        <span className={styles.name}>One preset</span>
        <span>{p.photos.length} photos</span>
        <div className={styles.toggle} role="group" aria-label="Show">
          <button type="button" aria-pressed={!on} onClick={() => pick(false)}>
            Original
          </button>
          <button type="button" aria-pressed={on} onClick={() => pick(true)}>
            Preset
          </button>
        </div>
      </div>
      <div className={styles.presetGrid}>
        {p.photos.map((ph) => (
          <div key={ph.photo} className={styles.presetItem}>
            <div className={`${styles.tile} ${styles.landscape}`} title={ph.code}>
              <Photo img={ph.before} alt={`${ph.photo}, original`} />
              <Photo
                img={ph.after}
                alt={`${ph.photo} with ${p.file}`}
                className={styles.fade}
                style={{ opacity: on ? 1 : 0 }}
              />
            </div>
            <span>{ph.photo}</span>
          </div>
        ))}
      </div>
      <div className={`${styles.meta} ${styles.first}`}>
        <span>{p.file}</span>
      </div>
      <pre className={`${styles.code} ${styles.rest}`}>{p.json}</pre>
      <div className={`${styles.meta} ${styles.first}`}>
        <span>Python</span>
      </div>
      <pre className={`${styles.code} ${styles.rest}`}>{p.photos[0].code}</pre>
    </div>
  );
}
