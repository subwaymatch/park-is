import { InkOverprint, InkRamps } from "./dataslope-colors";
import { PlaygroundArt, RisoGrid } from "./dataslope-riso";
import { CHALLENGES, CLOSING, LESSONS, STRIP, WALL } from "./dataslope-riso-data";
import { RisoStrip } from "./dataslope-strip";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "ink-overprint": () => <InkOverprint />,
  "ink-ramps": () => <InkRamps />,
  "riso-wall": () => <RisoGrid items={WALL} />,
  "riso-lessons": () => <RisoStrip items={LESSONS} />,
  "riso-challenges": () => <RisoGrid items={CHALLENGES} />,
  "riso-strip": () => <RisoStrip items={STRIP} />,
  "riso-closing": () => <RisoGrid items={CLOSING} />,
  "playground-art": () => <PlaygroundArt />,
};
