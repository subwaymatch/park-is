import styles from "./tabbied-templates.module.css";

// A wall of Tabbied website templates: the top of each home page at desktop
// width (1280×800, saved at 640×400), with its name and trade under it.

const TEMPLATES = [
  { slug: "big-yard-dog-daycare", name: "Big Yard", trade: "Dog daycare" },
  { slug: "bridgeword-translation", name: "Bridgeword", trade: "Translation" },
  { slug: "fix-it-repair-cafe", name: "Fix-It Saturday", trade: "Repair cafe" },
  { slug: "four-frames-photobooth", name: "Four Frames", trade: "Photo booth hire" },
  { slug: "heron-point-golf", name: "Heron Point", trade: "Golf club" },
  { slug: "institut-vollmer", name: "Institut Vollmer", trade: "Materials research" },
  { slug: "madrigal-strings", name: "Madrigal", trade: "Violin atelier" },
  { slug: "pinewood-rv", name: "Pinewood RV Park", trade: "Campground" },
  { slug: "plumbline-payroll", name: "Plumbline Payroll", trade: "Payroll and HR" },
  { slug: "second-life-vintage", name: "Second Life Vintage", trade: "Vintage clothing" },
  { slug: "stillpoint-massage", name: "Stillpoint Massage", trade: "Massage therapist" },
  { slug: "the-gimlet", name: "The Gimlet", trade: "Cocktail bar" },
];

export function TemplateWall() {
  return (
    <ul className={styles.wall}>
      {TEMPLATES.map((t) => (
        <li key={t.slug} className={styles.item}>
          <img
            className={styles.shot}
            src={`/media/tabbied/templates/${t.slug}.webp`}
            alt={`The ${t.name} template, the top of its home page`}
            width={640}
            height={400}
            loading="lazy"
            decoding="async"
          />
          <p className={styles.label}>
            <span>{t.name}</span>
            <span className={styles.trade}>{t.trade}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
