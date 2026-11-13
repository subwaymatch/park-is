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

/**
 * Each ink's 50–900 ramp as one even band, all set in Inter; the ink step used for text on white carries an "Aa".
 * Its name is set in that ink.
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
            </p>
            <ol className={styles.band} aria-label={`${ink.name}, steps 50 to 900`}>
              {ink.ramp.map((c, i) => (
                <li key={c} style={{ background: c }} title={`${ink.name} ${STEPS[i]} ${c}`}>
                  {i === inkIndex && <span className={styles.aa}>Aa</span>}
                </li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
