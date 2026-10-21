import { Compare, Pipeline, Preset } from "./layeris-live";
import { Band, BlendGrid, Opacity, Triptych } from "./layeris-static";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  chain: () => <Pipeline which="chain" />,
  "curve-chain": () => <Pipeline which="curveChain" />,
  "compare-sea": () => <Compare which="sea" layout="bleed" />,
  "compare-dune": () => <Compare which="dune" layout="wide" />,
  "compare-vase": () => <Compare which="vase" layout="portrait" />,
  band: () => <Band />,
  triptych: () => <Triptych />,
  "blend-grid": () => <BlendGrid />,
  opacity: () => <Opacity />,
  preset: () => <Preset />,
};
