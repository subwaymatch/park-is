import { ProductCarousel } from "./samsung-drs-carousel";
import { DetailSheet } from "./samsung-drs-details";

/** Live components for this project's page, by name. See components/embeds/index.tsx. */
export const embeds: Record<string, () => React.ReactNode> = {
  "details-regions": () => <DetailSheet sheet="regions" />,
  "product-carousel": () => <ProductCarousel row={0} />,
  "product-carousel-reverse": () => <ProductCarousel row={1} reverse />,
};
