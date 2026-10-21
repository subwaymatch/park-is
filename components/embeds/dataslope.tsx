import { PlaygroundArt, RisoClosing, RisoCluster, RisoWall } from "./dataslope-riso";
import { RisoStrip } from "./dataslope-strip";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "riso-wall": () => <RisoWall />,
  "riso-lessons": () => <RisoCluster set="lessons" />,
  "riso-challenges": () => <RisoCluster set="challenges" />,
  "riso-strip": () => <RisoStrip />,
  "riso-closing": () => <RisoClosing />,
  "playground-art": () => <PlaygroundArt />,
};
