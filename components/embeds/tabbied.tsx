import {
  PatternBand,
  PatternClosing,
  PatternCode,
  PatternNumbers,
  PatternPalettes,
  PatternSpecimens,
  PatternStrip,
} from "./tabbied-patterns";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  band: () => <PatternBand />,
  numbers: () => <PatternNumbers />,
  specimens: () => <PatternSpecimens />,
  palettes: () => <PatternPalettes />,
  strip: () => <PatternStrip />,
  code: () => <PatternCode />,
  closing: () => <PatternClosing />,
};
