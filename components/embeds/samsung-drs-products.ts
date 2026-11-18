// The demo's 44 printers and copiers, from the samsung-drs-demo repository's public/products: generated stand-ins
// for the product shots, under the demo's made-up "PS-" model numbers, with no logos. Trimmed to the machine
// (public/media/samsung-drs/products/) and shuffled once into this order.

type Series = "Xpress" | "ProXpress" | "MultiXpress";

/** A model: its id, series and kind as the demo lists them, and its image's size in pixels. */
export type Product = { id: string; series: Series; kind: string; width: number; height: number };

const LIST: [string, Series, string, number, number][] = [
  ["PS-C3100ND", "ProXpress", "Color laser printer", 267, 215],
  ["PS-K4390LX", "MultiXpress", "Mono A3 copier", 140, 215],
  ["PS-X7690LX", "MultiXpress", "Color A3 copier", 318, 215],
  ["PS-C4100ND", "ProXpress", "Color laser printer", 213, 215],
  ["PS-M4670FX", "ProXpress", "Mono laser MFP", 162, 215],
  ["PS-C2760FW", "ProXpress", "Color laser MFP", 221, 215],
  ["PS-M4110ND", "ProXpress", "Mono laser printer", 208, 215],
  ["PS-X4340LX", "MultiXpress", "Color A3 copier", 141, 215],
  ["PS-M4620ND", "ProXpress", "Mono laser printer", 251, 215],
  ["PS-K7490LX", "MultiXpress", "Mono A3 copier", 210, 215],
  ["PS-M2110W", "Xpress", "Mono laser printer", 284, 215],
  ["PS-K4340RX", "MultiXpress", "Mono A3 copier", 140, 215],
  ["PS-M2970FW", "Xpress", "Mono laser MFP", 244, 215],
  ["PS-C2710DW", "ProXpress", "Color laser printer", 286, 215],
  ["PS-M3155FW", "ProXpress", "Mono laser MFP", 237, 215],
  ["PS-X7590LX", "MultiXpress", "Color A3 copier", 253, 215],
  ["PS-K2290ND", "MultiXpress", "Mono A3 copier", 321, 212],
  ["PS-M2920DW", "Xpress", "Mono laser printer", 301, 215],
  ["PS-M3105DW", "ProXpress", "Mono laser printer", 297, 215],
  ["PS-M4165FR", "ProXpress", "Mono laser MFP", 232, 215],
  ["PS-M2925DW", "Xpress", "Mono laser printer", 302, 215],
  ["PS-X4390LX", "MultiXpress", "Color A3 copier", 175, 215],
  ["PS-C520W", "Xpress", "Color laser printer", 259, 215],
  ["PS-C1950FW", "Xpress", "Color laser MFP", 180, 215],
  ["PS-M3960FW", "ProXpress", "Mono laser MFP", 205, 215],
  ["PS-M3910ND", "ProXpress", "Mono laser printer", 283, 215],
  ["PS-M3410ND", "ProXpress", "Mono laser printer", 282, 215],
  ["PS-K4440LX", "MultiXpress", "Mono A3 copier", 130, 215],
  ["PS-K7690LX", "MultiXpress", "Mono A3 copier", 301, 215],
  ["PS-K7590LX", "MultiXpress", "Mono A3 copier", 173, 215],
  ["PS-X3310NR", "MultiXpress", "Color A3 copier", 132, 215],
  ["PS-M4115ND", "ProXpress", "Mono laser printer", 293, 215],
  ["PS-M4170FX", "ProXpress", "Mono laser MFP", 196, 215],
  ["PS-M2975FW", "Xpress", "Mono laser MFP", 261, 215],
  ["PS-X7490LX", "MultiXpress", "Color A3 copier", 209, 215],
  ["PS-C4150FX", "ProXpress", "Color laser MFP", 178, 215],
  ["PS-C570FW", "Xpress", "Color laser MFP", 223, 215],
  ["PS-X4310RX", "MultiXpress", "Color A3 copier", 130, 215],
  ["PS-C3150FR", "ProXpress", "Color laser MFP", 197, 215],
  ["PS-M2160FW", "Xpress", "Mono laser MFP", 231, 215],
  ["PS-X3370NR", "MultiXpress", "Color A3 copier", 131, 215],
  ["PS-M4160FR", "ProXpress", "Mono laser MFP", 230, 215],
  ["PS-C1900W", "Xpress", "Color laser printer", 245, 215],
  ["PS-C2770FX", "ProXpress", "Color laser MFP", 205, 215],
];

export const PRODUCTS: Product[] = LIST.map(([id, series, kind, width, height]) => ({ id, series, kind, width, height }));

export const productSrc = (p: Product) => `/media/samsung-drs/products/${p.id.toLowerCase()}.webp`;

export const productAlt = (p: Product) => `${p.id}, a ${p.series} ${p.kind.replace(/^\w/, (c) => c.toLowerCase())}`;

/**
 * Height as a share of the tallest machine's, roughly to scale: a desktop Xpress printer stands at about two fifths
 * of a floor-standing MultiXpress A3 copier. Every image fills its own height, so this sets the size.
 */
export function scale(p: Product) {
  if (p.series === "MultiXpress") return 1;
  const mfp = p.kind.includes("MFP");
  if (p.series === "ProXpress") return mfp ? 0.64 : 0.5;
  return mfp ? 0.52 : 0.42;
}
