import { VariantsProduct } from "@/types/types";
import { create } from "zustand";

type VariantsProductStore = {
  selectedVariant: VariantsProduct | null;
  setSelectedVariant: (variant: VariantsProduct | null) => void;
};

export const useVariantStore = create<VariantsProductStore>((set) => ({
  selectedVariant: null,
  setSelectedVariant: (variant) => set({ selectedVariant: variant }),
}));
