import { Compare, Pipeline, Preset } from "./layeris-live";
import { Band, BlendGrid, Opacity, PortraitSplits, Triptych } from "./layeris-static";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  chain: () => <Pipeline which="chain" />,
  "curve-chain": () => <Pipeline which="curveChain" />,
  "compare-river": () => <Compare which="han-river" layout="bleed" />,
  "compare-jeju": () => <Compare which="jeju-wall" layout="wide" />,
  "compare-celadon": () => <Compare which="celadon" layout="portrait" />,
  "compare-tea": () => <Compare which="tea-field" layout="bleed" />,
  "compare-namsan": () => <Compare which="namsan-fog" layout="bleed" />,
  "compare-bukchon": () => <Compare which="bukchon-dusk" layout="bleed" focus="50% 80%" />,
  "compare-lake": () => <Compare which="lake-pavilion" layout="bleed" />,
  band: () => <Band />,
  triptych: () => <Triptych />,
  "blend-grid": () => <BlendGrid />,
  opacity: () => <Opacity />,
  preset: () => <Preset />,
  portraits: () => <PortraitSplits />,
};
