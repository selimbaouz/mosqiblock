// SubmitButtonClient.tsx
"use client";

import { useVisibleFloatingCartStore, useCartStore, useOpenCartStore } from '@/store/cart';
import ReactPixel from "react-facebook-pixel";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Product, VariantsProduct } from '@/types/types';

interface SubmitButtonProps {
  size?: "fullWidth" | "initial";
  price?: string;
  floatingBar?: boolean;
  variant: VariantsProduct;
  product: Product;
}

export function SubmitButtonClient({ size = "initial", price, floatingBar, variant, product }: SubmitButtonProps) {
  const buttonRef = useRef(null);
  const { setIsVisible } = useVisibleFloatingCartStore();
  const { addCartItem } = useCartStore();
  const { setIsOpenCart } = useOpenCartStore();

  useEffect(() => {
    const target = document.getElementById("add-to-cart-anchor");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [setIsVisible]);

  return (
    <button
      type="submit"
      ref={buttonRef}
      className={cn(
        "py-4 px-4 lg:px-6 rounded-xl bg-primary hover:bg-tertiary text-white font-medium",
        floatingBar ? "text-xs xs:text-sm" : "lg:text-base",
        size === "fullWidth" ? "min-w-full" : "w-max"
      )}
      onClick={async () => {
        addCartItem(variant, product);
        setIsOpenCart(true);
        ReactPixel.track('AddToCart', {
          content_ids: [variant.node.id],
          content_name: variant.node.title,
          content_type: 'product',
          value: variant?.node?.price?.amount,
          currency: 'EUR',
        });
      }}
    >
      <p className="uppercase">
        {floatingBar ? "Ajouter au panier" : `Ajouter au panier ${price ? parseFloat(price).toFixed(2) : "27,99"}€`}
      </p>
    </button>
  );
}
