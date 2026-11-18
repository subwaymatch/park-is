// Drawings of things remembered from Samsung Electronics, in the same etched pen style as samsung-drs-art.tsx
// (public/media/samsung-drs/memories/): the office, food, trips to Bangkok and San Francisco, Everland. Shuffled
// once into this order; the first 17 drift in the carousel, the rest stand in the closing grid.

/** A drawing: its file name, its size in pixels and what it shows. */
export type Memory = { name: string; width: number; height: number; alt: string };

const LIST: [string, number, number, string][] = [
  ["korean-bbq", 400, 262, "pork belly on a Korean barbecue grill, with tongs and scissors"],
  ["lanyard", 158, 400, "an ID card on a lanyard"],
  ["shorts", 400, 303, "a pair of drawstring shorts"],
  ["tuk-tuk", 400, 368, "a Bangkok tuk-tuk"],
  ["elevator", 335, 400, "an elevator with its doors half open"],
  ["headphones", 317, 400, "over-ear headphones"],
  ["grand-piano", 396, 400, "a grand piano and its bench"],
  ["neckties", 178, 400, "two neckties"],
  ["earbuds", 400, 348, "wireless earbuds and their case"],
  ["carousel", 326, 400, "a carousel"],
  ["bicycle", 400, 265, "a city bicycle with a front basket"],
  ["boxing-gloves", 214, 400, "a pair of boxing gloves hanging from a hook"],
  ["matcha-latte", 400, 335, "a matcha latte with leaf latte art"],
  ["windmill", 292, 400, "a small white windmill"],
  ["conference-room", 400, 335, "a conference room table and chairs"],
  ["mango-sticky-rice", 400, 253, "a plate of mango sticky rice"],
  ["tonic-bottle", 206, 400, "a small brown tonic bottle"],
  ["painted-ladies", 400, 272, "three of San Francisco's Painted Ladies"],
  ["sonata", 400, 206, "a Hyundai Sonata sedan"],
  ["gummy-bears", 400, 285, "a heap of gummy bears"],
  ["samgak-gimbap", 400, 330, "a triangle kimbap half out of its wrapper"],
  ["wat-arun", 258, 400, "the spire of Wat Arun in Bangkok"],
  ["desk-fan", 329, 400, "a small desk fan"],
  ["monitors", 400, 203, "two monitors side by side"],
  ["slippers", 400, 263, "a pair of office slippers"],
  ["roller-coaster", 400, 263, "a wooden roller coaster's first drop"],
  ["tteokbokki", 400, 241, "a pan of tteokbokki"],
  ["cola-bottle", 149, 400, "a bottle of cola"],
  ["birthday-cake", 335, 400, "a birthday cake with four candles"],
  ["puppy", 286, 400, "a puppy with its head tilted"],
  ["soccer-ball", 380, 400, "a soccer ball"],
  ["cable-car", 400, 332, "a San Francisco cable car"],
  ["christmas-tree", 266, 400, "a decorated Christmas tree"],
  ["bed", 400, 301, "an unmade bed"],
  ["golden-gate", 400, 364, "a tower of the Golden Gate Bridge"],
];

export const MEMORIES: Memory[] = LIST.map(([name, width, height, alt]) => ({
  name,
  width,
  height,
  alt: `Pen drawing of ${alt}`,
}));

export const CAROUSEL = MEMORIES.slice(0, 17);
export const GRID = MEMORIES.slice(17);

export const memorySrc = (m: Memory) => `/media/samsung-drs/memories/${m.name}.webp`;

/**
 * Width and height, as fractions of a square, that give every drawing about the same area, so a soccer ball and a
 * sedan carry similar weight. Neither side passes `max`.
 */
export function fit(m: Memory, area = 0.42, max = 0.94) {
  const r = m.width / m.height;
  const w = Math.sqrt(area * r);
  const h = Math.sqrt(area / r);
  const s = Math.min(1, max / w, max / h);
  return { w: w * s, h: h * s };
}
