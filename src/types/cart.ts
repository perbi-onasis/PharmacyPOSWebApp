// extendedProductProp.ts
import { ProductProp } from "@/types/productProp";

export type ExtendedProductProp = ProductProp & {
  quantity: number;
};
