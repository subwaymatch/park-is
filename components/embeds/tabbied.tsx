import {
  PatternBand,
  PatternCarousel,
  PatternClosing,
  PatternCode,
  PatternDrypoint,
  PatternPalettes,
  PatternSpecimens,
  PatternStrip,
} from "./tabbied-patterns";
import { TemplateWall } from "./tabbied-templates";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  band: () => <PatternBand />,
  specimens: () => <PatternSpecimens />,
  palettes: () => <PatternPalettes />,
  carousel: () => <PatternCarousel />,
  strip: () => <PatternStrip />,
  drypoint: () => <PatternDrypoint />,
  code: () => <PatternCode />,
  closing: () => <PatternClosing />,
  templates: () => <TemplateWall />,
};
