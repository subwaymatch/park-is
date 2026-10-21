import { embeds as layeris } from "./layeris";
import { embeds as react3dMockups } from "./react-3d-mockups";
import { embeds as tabbied } from "./tabbied";

/** Each project's live components, by the name a content file uses in an `embed` block. */
const registry: Record<string, Record<string, () => React.ReactNode>> = {
  tabbied,
  layeris,
  "react-3d-mockups": react3dMockups,
};

export function Embed({ slug, name }: { slug: string; name: string }) {
  const render = registry[slug]?.[name];
  // An unknown name is a typo in a content file: fail the build, not the page.
  if (!render) throw new Error(`No embed "${name}" for ${slug}`);
  return render();
}
