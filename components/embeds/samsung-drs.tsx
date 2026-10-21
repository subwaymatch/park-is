import { DetailSheet } from "./samsung-drs-details";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "details-insights": () => <DetailSheet sheet="insights" />,
  "details-regions": () => <DetailSheet sheet="regions" />,
  "details-defect": () => <DetailSheet sheet="defect" />,
  "details-review": () => <DetailSheet sheet="review" />,
  "details-tools": () => <DetailSheet sheet="tools" />,
};
