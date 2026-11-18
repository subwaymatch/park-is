import styles from "./samsung-drs.module.css";

// Pen-and-ink drawings of the printing division's world, generated in one etched style
// (public/media/samsung-drs/gen/): the machines, a test page, a code review and a server rack. They are cut-outs on
// transparency, set straight on the white page as DashHour's are. The machines are drawn after Samsung's MultiXpress
// and ProXpress lines, with every badge left blank.

type Art = { name: string; width: number; height: number; alt: string };

const ART = {
  copier: { name: "copier", width: 457, height: 640, alt: "Pen drawing of an A3 office copier with a tilting touchscreen" },
  mfp: { name: "mfp", width: 406, height: 480, alt: "Pen drawing of a desktop laser multifunction printer" },
  testPage: {
    name: "test-page",
    width: 840,
    height: 598,
    alt: "Pen drawing of a hand circling a streak on a printed test page",
  },
  developer: {
    name: "developer",
    width: 800,
    height: 804,
    alt: "Pen drawing of a developer pointing at a side-by-side code diff",
  },
  serverRack: { name: "server-rack", width: 320, height: 640, alt: "Pen drawing of a server rack" },
} satisfies Record<string, Art>;

function Img({ art, className }: { art: Art; className: string }) {
  return (
    <img
      className={className}
      src={`/media/samsung-drs/gen/${art.name}.webp`}
      alt={art.alt}
      width={art.width}
      height={art.height}
      loading="lazy"
      decoding="async"
    />
  );
}

/** The copier and the desktop printer side by side, standing on one baseline. */
export function Machines() {
  return (
    <div className={styles.machines}>
      <Img art={ART.copier} className={styles.copier} />
      <Img art={ART.mfp} className={styles.mfp} />
    </div>
  );
}

/** One drawing, centred. */
export function Drawing({ art }: { art: "testPage" | "developer" | "serverRack" }) {
  return <Img art={ART[art]} className={styles[art]} />;
}
