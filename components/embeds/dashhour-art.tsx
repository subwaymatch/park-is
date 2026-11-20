import styles from "./dashhour.module.css";

// DashHour's own generated art, from the prototype's repository: the six notepad pages redrawn as line art, the
// app's illustrations and its eight branch scenes. Cut-outs on transparency are set straight on the white page, as
// Dataslope's are; the branch scenes are opaque, so they sit in a grid like prints. The branch and ticket moments and
// the lost visitor were made for this page in the app's illustration style, with GPT Image 2.6 Flare at low quality.

const src = (name: string) => `/media/dashhour/gen/${name}.webp`;

type Art = { name: string; width: number; height: number; alt: string };

const SKETCHES: Art[] = [
  { name: "sketch-main", width: 512, height: 768, alt: "Sketch of the home screen: a starred branch over a list" },
  { name: "sketch-take-ticket", width: 768, height: 512, alt: "Sketch of the take-a-ticket sheet and a ticket" },
  { name: "sketch-ticket", width: 512, height: 768, alt: "Sketch of the ticket: a number, two rings and a button" },
  { name: "sketch-detail", width: 512, height: 768, alt: "Sketch of a branch: a map, travel times and a crowd chart" },
  { name: "sketch-map", width: 512, height: 768, alt: "Sketch of the map with branch pins" },
  { name: "sketch-ticket-box", width: 512, height: 768, alt: "Sketch of the ticket in its box" },
];

const STORY: Art[] = [
  { name: "about-problem", width: 800, height: 626, alt: "Four people waiting on a bench under a clock" },
  { name: "about-step-find", width: 654, height: 800, alt: "A phone map with bank pins around it" },
  { name: "about-step-ticket", width: 647, height: 800, alt: "A woman reading a ticket on her phone" },
  { name: "about-step-arrive", width: 800, height: 762, alt: "A man walking up to a counter on time" },
  { name: "your-turn", width: 640, height: 640, alt: "A teller waving from her counter" },
];

/** A branch page's parts: queues by counter, crowd by hour, the walking route and a favorite. */
const BRANCH_MOMENTS: Art[] = [
  { name: "branch-counters", width: 800, height: 540, alt: "Three tellers at their counters, each with a short queue" },
  { name: "branch-crowd", width: 800, height: 761, alt: "Three people in line beside a clock and a chart of the day's crowd" },
  { name: "branch-route", width: 800, height: 516, alt: "A man following a dotted walking route from the subway to a bank" },
  { name: "branch-favorite", width: 721, height: 800, alt: "A woman starring a bank branch on her phone" },
];

/** A ticket from taking it at home to the counter: the alert three people ahead, the ten minutes, the exchange. */
const TICKET_MOMENTS: Art[] = [
  { name: "ticket-home", width: 800, height: 626, alt: "A grandmother and her grandson taking a ticket on a phone at home" },
  { name: "ticket-leave", width: 800, height: 735, alt: "A man rising from a subway seat as his phone rings: three people ahead" },
  { name: "ticket-hurry", width: 798, height: 800, alt: "A man hurrying to the counter beside an hourglass that is almost empty" },
  { name: "ticket-fx", width: 800, height: 541, alt: "A teller handing foreign currency to a woman with a suitcase" },
];

const BRANCHES = ["exterior", "tower", "lobby", "waiting", "consult", "fx", "atm", "corner"];

function Img({ art, className }: { art: Art; className?: string }) {
  return (
    <img
      className={className}
      src={src(art.name)}
      alt={art.alt}
      width={art.width}
      height={art.height}
      loading="lazy"
      decoding="async"
    />
  );
}

/** The six redrawn notepad pages in a row, standing on one baseline. */
export function SketchStrip() {
  return (
    <ul className={styles.sketches}>
      {SKETCHES.map((s) => (
        <li key={s.name} className={s.width > s.height ? styles.landscape : undefined}>
          <Img art={s} />
        </li>
      ))}
    </ul>
  );
}

/** Illustrations in a row, each scaled to the same height and standing on one baseline. */
function Row({ items }: { items: Art[] }) {
  return (
    <ul className={styles.story}>
      {items.map((s) => (
        <li key={s.name}>
          <Img art={s} />
        </li>
      ))}
    </ul>
  );
}

/** The app's illustrations in the order of a visit: the wait it removes, then find, take, arrive and your turn. */
export function Story() {
  return <Row items={STORY} />;
}

export function BranchMoments() {
  return <Row items={BRANCH_MOMENTS} />;
}

export function TicketMoments() {
  return <Row items={TICKET_MOMENTS} />;
}

/** A visitor lost with a map at a signpost, for the 404. */
export function Lost() {
  return (
    <Img
      className={styles.single}
      art={{ name: "not-found", width: 620, height: 800, alt: "A puzzled woman with a map beside a signpost pointing three ways" }}
    />
  );
}

/** The eight generated branch scenes that stand in for branch photos. */
export function BranchScenes() {
  return (
    <ul className={styles.branches}>
      {BRANCHES.map((b) => (
        <li key={b}>
          <img src={src(`branch-${b}`)} alt="" width={720} height={480} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  );
}

/** The hackathon in the app's own style: a sketchbook of screens, a trophy and a coffee. */
export function Origin() {
  return (
    <Img
      className={styles.single}
      art={{ name: "about-origin", width: 773, height: 800, alt: "A sketchbook of screens, a pen, a trophy and a coffee" }}
    />
  );
}

/** The About page's opening scene, to close the page. */
export function Closing() {
  return (
    <Img
      className={styles.singleLarge}
      art={{
        name: "about-hero",
        width: 1120,
        height: 862,
        alt: "A woman with a coffee checks her ticket while the queue waits outside the bank",
      }}
    />
  );
}
