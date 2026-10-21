import { Compare, Pipeline, Preset } from "./layeris-live";
import { Band, BlendGrid, Opacity, Triptych } from "./layeris-static";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  chain: () => <Pipeline which="chain" />,
  "curve-chain": () => <Pipeline which="curveChain" />,
  "compare-river": () => <Compare which="han-river" layout="bleed" />,
  "compare-jeju": () => <Compare which="jeju-wall" layout="wide" />,
  "compare-celadon": () => <Compare which="celadon" layout="portrait" />,
  band: () => <Band />,
  triptych: () => <Triptych />,
  "blend-grid": () => <BlendGrid />,
  opacity: () => <Opacity />,
  preset: () => <Preset />,
};
