import { Drawing, Machines } from "./samsung-drs-art";
import { DetailSheet } from "./samsung-drs-details";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "details-regions": () => <DetailSheet sheet="regions" />,
  machines: () => <Machines />,
  "test-page": () => <Drawing art="testPage" />,
  developer: () => <Drawing art="developer" />,
  "server-rack": () => <Drawing art="serverRack" />,
};
