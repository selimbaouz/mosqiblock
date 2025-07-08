'use client';

import { Product, VariantsProduct } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { useCartStore, useOpenCartStore, useVisibleFloatingCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import ReactPixel from "react-facebook-pixel";

interface SubmitButtonProps {
  size?: "fullWidth" | "initial";
  price?: string;
  floatingBar?: boolean;
}
function SubmitButton({size = "initial", price, floatingBar}: SubmitButtonProps) {
  const buttonRef = useRef(null);
  const { setIsVisible } = useVisibleFloatingCartStore();
  const t = useTranslations("fe");

  useEffect(() => {
    const target = document.getElementById("add-to-cart-anchor");
    if (!target) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.25, // 25% visible = considéré comme visible
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [setIsVisible]);

  return (
      <button
        ref={buttonRef}
        className={cn(
          "py-4 px-4 lg:px-6 rounded-xl bg-primary hover:bg-tertiary text-white font-medium",
          floatingBar ? "text-xs xs:text-sm" : "lg:text-base",
          size === "fullWidth" ? "min-w-full" : "w-max",
      )}
      >
        <p className={cn("uppercase")}>
         {floatingBar 
            ? t('addToCart') 
            : (
              <>
                {t('addToCart')} {price ? parseFloat(price).toFixed(2) : "27,99"}€
              </>
            )
          }
        </p>
      </button>
  );
}

export function AddToCart({ product, size = "initial", floatingBar, state }: { product: Product, size?: "fullWidth" | "initial", floatingBar?: boolean, state?: VariantsProduct | null}) {
  const variants = product.variants.edges;
  const { addCartItem } = useCartStore();
  const { setIsOpenCart } = useOpenCartStore();
  const { setIsOpenFloatingBar } = useVisibleFloatingCartStore();
  const [message, formAction] = useFormState(addItem, null);

  const variant = variants.find((variant: VariantsProduct) =>
  variant.node.selectedOptions?.every(
    (option) =>
      state?.node.selectedOptions?.some(
        (selOpt) =>
          selOpt.name.toLowerCase() === option.name.toLowerCase() &&
          selOpt.value.toLowerCase() === option.value.toLowerCase()
      )
  )
);

  /* const variantId = variants[0].node.id;
  const actionWithVariant = formAction.bind(null, variantId); */
  const defaultVariantId = variants.length === 1 ? variants[0]?.node.id : undefined;
  const selectedVariantId = variant?.node.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find((variant) => variant.node.id === selectedVariantId)!;
  
  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        await actionWithVariant();
        setIsOpenFloatingBar(false);
        setIsOpenCart(true)
        ReactPixel.track('AddToCart', {
          content_ids: [finalVariant.node.id],
          content_name: finalVariant.node.title,
          content_type: 'product',
          value: finalVariant?.node?.price?.amount,
          currency: 'EUR'
        });
      }}
    >
      <SubmitButton size={size} price={state?.node.price?.amount} floatingBar={floatingBar} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
