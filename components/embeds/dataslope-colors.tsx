import styles from "./dataslope-colors.module.css";

// Dataslope's brand colors, from app/brand.css in the Dataslope repo: four inks, each step 500 of a 50–900 ramp
// built in OKLCH. The palette is dark-native, so text on white takes a deeper step of each ramp, the "ink".

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const INKS = [
  {
    name: "Blue",
    job: "Links, buttons and focus",
    ink: 700,
    ramp: ["#E8F2FF", "#D1E6FF", "#AED3FF", "#8ABFFF", "#5BA7FF", "#148CFF", "#0878DD", "#0064BD", "#00519C", "#00407F"],
  },
  {
    name: "Green",
    job: "Run, passing tests, right answers",
    ink: 800,
    ramp: ["#E8F9E6", "#D4F3D1", "#B4EAAF", "#93E08E", "#66D361", "#20C621", "#0AA80F", "#008B03", "#006F01", "#005600"],
  },
  {
    name: "Red",
    job: "Errors and wrong answers",
    ink: 700,
    ramp: ["#FFEDEC", "#FFDCDA", "#FFC2BF", "#FFA6A3", "#FF807F", "#FF4F59", "#DC3F49", "#BA303A", "#99212C", "#7C141F"],
  },
  {
    name: "Yellow",
    job: "Highlights and warnings",
    ink: 800,
    ramp: ["#FDF8E8", "#FDF5D9", "#FEF0C3", "#FEEBAC", "#FFE48E", "#FFDD6C", "#D4B651", "#AB9137", "#836D1C", "#624F00"],
  },
];

/** The three hues that carry no meaning, for telling chart series apart. */
const CHARTS = [
  { name: "Teal", hex: "#00AEAA" },
  { name: "Purple", hex: "#AB77FA" },
  { name: "Orange", hex: "#E47600" },
];

const hex = (name: string) => INKS.find((i) => i.name === name)!.ramp[5];

/**
 * The four inks printed like the risographs: discs multiplied over one another so each overlap prints a third color,
 * with halftone grain, each a few units off its line like a loose registration, and registration marks at the
 * corners.
 * Ordered so every overlap is a clean mix: green and blue, blue and yellow, yellow and red.
 */
export function InkOverprint() {
  const discs = [
    { color: hex("Green"), cx: 362, cy: 346, seed: 2 },
    { color: hex("Blue"), cx: 652, cy: 354, seed: 5 },
    { color: hex("Yellow"), cx: 949, cy: 347, seed: 8 },
    { color: hex("Red"), cx: 1238, cy: 352, seed: 11 },
  ];
  const marks = [
    [56, 56],
    [1544, 56],
    [56, 644],
    [1544, 644],
  ];
  return (
    <svg className={styles.plate} viewBox="0 0 1600 700" role="img" aria-label="Green, blue, yellow and red discs overprinted in a row">
      <defs>
        {discs.map((d) => (
          <filter key={d.seed} id={`ds-grain-${d.seed}`} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="1" seed={d.seed} result="noise" />
            <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -7 0 0 0 5.3" result="grain" />
            <feComposite in="SourceGraphic" in2="grain" operator="in" />
          </filter>
        ))}
      </defs>
      <g className={styles.inks}>
        {discs.map((d) => (
          <circle
            key={d.seed}
            className={styles.ink}
            cx={d.cx}
            cy={d.cy}
            r={210}
            fill={d.color}
            filter={`url(#ds-grain-${d.seed})`}
          />
        ))}
      </g>
      <g className={styles.marks}>
        {marks.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={12} />
            <path d={`M${x - 22} ${y}h44M${x} ${y - 22}v44`} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/**
 * Each ink's 50–900 ramp as one band: the brand step stands taller, and the ink step used for text on white carries
 * an "Aa". Its name is set in that ink. The chart hues close the set.
 */
export function InkRamps() {
  return (
    <div className={styles.ramps}>
      <ol className={styles.steps} aria-hidden="true">
        {STEPS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>
      {INKS.map((ink) => {
        const inkIndex = STEPS.indexOf(ink.ink);
        return (
          <div key={ink.name} className={styles.row}>
            <p className={styles.label}>
              <span className={styles.name} style={{ color: ink.ramp[inkIndex] }}>
                {ink.name}
              </span>
              <span>{ink.job}</span>
              <span className={styles.hex}>
                {ink.ramp[5]} · ink {ink.ramp[inkIndex]}
              </span>
            </p>
            <ol className={styles.band} aria-label={`${ink.name}, steps 50 to 900`}>
              {ink.ramp.map((c, i) => (
                <li
                  key={c}
                  className={i === 5 ? styles.brand : undefined}
                  style={{ background: c }}
                  title={`${ink.name} ${STEPS[i]} ${c}`}
                >
                  {i === inkIndex && <span className={styles.aa}>Aa</span>}
                </li>
              ))}
            </ol>
          </div>
        );
      })}
      <div className={styles.row}>
        <p className={styles.label}>
          <span className={styles.name}>Charts</span>
          <span>Teal, purple and orange carry no meaning; they tell series apart.</span>
        </p>
        <ol className={`${styles.band} ${styles.charts}`} aria-label="Teal, purple and orange">
          {CHARTS.map((c) => (
            <li key={c.name} style={{ background: c.hex }} title={`${c.name} ${c.hex}`} />
          ))}
        </ol>
      </div>
    </div>
  );
}
