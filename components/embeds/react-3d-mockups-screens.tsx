"use client";

import styles from "./react-3d-mockups.module.css";

/*
 * Screen and print content for the live scenes. Plain React: each piece is
 * placed on the glass or the paper as DOM by react-3d-mockups.
 */

const img = (name: string) => `/media/react-3d-mockups/gen/${name}.webp`;

export const PRODUCTS = [
  { id: "mug", name: "Clay mug", price: "€24", tint: "#f1e4da", ring: "#d0693f", eta: "Arrives Thu" },
  { id: "lamp", name: "Dome lamp", price: "€140", tint: "#efe9d8", ring: "#c9a24a", eta: "Arrives Fri" },
  { id: "plant", name: "Fiddle fig", price: "€58", tint: "#e4ebdf", ring: "#5f8f4e", eta: "Arrives Sat" },
  { id: "chair", name: "Cane chair", price: "€420", tint: "#ece4d6", ring: "#b58a55", eta: "Arrives Mon" },
] as const;

/** The laptop: the shop's front page, with the featured product outlined. */
export function ShopDesktop({ active }: { active: number }) {
  return (
    <div className={styles.shop}>
      <div className={styles.shopBar}>
        <span className={styles.shopMark}>Objects</span>
        <span>Living</span>
        <span>Work</span>
        <span>Kitchen</span>
        <span className={styles.shopBag}>Bag · {active + 1}</span>
      </div>
      <div className={styles.shopBody}>
        {PRODUCTS.map((p, i) => (
          <div key={p.id} className={`${styles.card} ${i === active ? styles.cardOn : ""}`}>
            <div className={styles.tile} style={{ background: p.tint }}>
              <img src={img(p.id)} alt="" />
            </div>
            <div className={styles.cardText}>
              <span>{p.name}</span>
              <span className={styles.price}>{p.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** The phone: the featured product's page. */
export function ShopPhone({ active }: { active: number }) {
  const p = PRODUCTS[active];
  return (
    <div className={styles.phone}>
      <div className={styles.phoneHero} style={{ background: p.tint }}>
        <img src={img(p.id)} alt="" />
      </div>
      <div className={styles.phoneName}>{p.name}</div>
      <div className={styles.phoneMeta}>
        {p.price} · {p.eta.toLowerCase()}
      </div>
      <div className={styles.phoneButton}>Add to bag</div>
    </div>
  );
}

/** The watch: the order, with a progress ring in the product's color. */
export function ShopWatch({ active }: { active: number }) {
  const p = PRODUCTS[active];
  const turn = 0.25 + active * 0.2;
  return (
    <div className={styles.watch}>
      <div className={styles.watchInner}>
        <div className={styles.watchRing} style={{ background: `conic-gradient(${p.ring} ${turn}turn, #2a2a28 0)` }}>
          <div className={styles.watchRing} style={{ width: 100, height: 100, background: "#000" }}>
            <img src={img(p.id)} alt="" />
          </div>
        </div>
        <div className={styles.watchLine}>{p.eta}</div>
        <div className={styles.watchSub}>{p.name}</div>
      </div>
    </div>
  );
}

export function BookCover() {
  return (
    <div className={styles.cover}>
      <div className={styles.coverTitle}>
        Late
        <br />
        Pears
      </div>
      <div className={styles.coverArt}>
        <img src={img("pear")} alt="" />
      </div>
      <div className={styles.coverFoot}>
        <span>Ines Moreau</span>
        <span>Stories</span>
      </div>
    </div>
  );
}

export function BookSpine() {
  return <div className={styles.spine}>Late Pears · Ines Moreau</div>;
}

export function TeaFront() {
  return (
    <div className={styles.box}>
      <div className={styles.boxBrand}>Hollow Tea Co.</div>
      <div className={styles.boxArt}>
        <img src={img("tea")} alt="" />
      </div>
      <div>
        <div className={styles.boxName}>Jasmine Green</div>
        <div className={styles.boxNote}>20 pyramid bags · 40 g</div>
      </div>
    </div>
  );
}

export function TeaSide() {
  return (
    <div className={styles.boxSide}>
      Steep 3 minutes at 80°C. Picked in spring, scented with fresh jasmine over six nights.
    </div>
  );
}

export function CameraPoster() {
  return (
    <div className={styles.poster}>
      <div className={styles.posterTitle}>
        Contact
        <br />
        Sheet
      </div>
      <div className={styles.posterArt}>
        <img src={img("camera")} alt="" />
      </div>
      <div className={styles.posterFoot}>
        <span>Photographs
          <br />
          1968–1979</span>
        <span>Hall 2
          <br />
          Until 30 Nov</span>
      </div>
    </div>
  );
}

export function CraneCard() {
  return (
    <div className={styles.greeting}>
      <img src={img("crane")} alt="" />
    </div>
  );
}

export function SneakerBoard() {
  return (
    <div className={styles.board}>
      <div>
        <div className={styles.boardTitle}>
          Run <span>lighter.</span>
        </div>
        <div className={styles.boardMeta}>Strata 2 · 198 g</div>
      </div>
      <div className={styles.boardArt}>
        <img src={img("sneaker")} alt="" />
      </div>
    </div>
  );
}

export function SneakerSixSheet() {
  return (
    <div className={styles.sixSheet}>
      <div className={styles.sixTitle}>
        Run
        <br />
        lighter.
      </div>
      <div className={styles.sixArt}>
        <img src={img("sneaker")} alt="" />
      </div>
      <div className={styles.sixFoot}>Strata 2 · 198 g</div>
    </div>
  );
}
