import type { ReactElement, ReactNode } from "react";

import { hero } from "@/app/(design)/blocks/[slug]/(demos)/hero";
import { login } from "@/app/(design)/blocks/[slug]/(demos)/login";
import { productGrid } from "@/app/(design)/blocks/[slug]/(demos)/product-grid";
import { promo } from "@/app/(design)/blocks/[slug]/(demos)/promo";
import { UpworkFreelanceProductCard } from "@/app/(design)/blocks/[slug]/(demos)/upwork-card";

interface Block {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Block } = {
  hero,
  login,
  promo,
  "freelance-card": UpworkFreelanceProductCard,
  "product-grid": productGrid,
};
