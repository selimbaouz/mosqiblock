'use client';

import { Product, VariantsProduct } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { useCartStore, useOpenCartStore, useVisibleFloatingCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface SubmitButtonProps {
  size?: "fullWidth" | "initial";
  price?: string;
}
function SubmitButton({size = "initial", price}: SubmitButtonProps) {
  const buttonRef = useRef(null);
  const { setIsVisible } = useVisibleFloatingCartStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(buttonRef.current);
      }
    };
  }, [setIsVisible]);

  return (
      <button
        aria-label="Add to cart"
        ref={buttonRef}
        className={cn(
          "py-4 px-2 lg:px-6 rounded-lg bg-gradient-to-b from-primary to-secondary hover:bg-secondary text-white font-medium text-base border-t",
          size === "fullWidth" ? "min-w-full" : "w-max",
          "hover:bg-gradient-to-tr"
      )}
      >
        <p className={cn("uppercase")}>Ajouter au panier - {parseFloat(price ?? "").toFixed(2)}€</p>
      </button>
  );
}

export function AddToCart({ product, size = "initial", state }: { product: Product, size?: "fullWidth" | "initial", color?: "gradient" | "foreground", state?: {
  title: string,
  price?: string;
} }) {
  const variants = product.variants.edges;
  const { addCartItem } = useCartStore();
  const { setIsOpenCart } = useOpenCartStore();
  const { setIsOpenFloatingBar } = useVisibleFloatingCartStore();
  const [message, formAction] = useFormState(addItem, null);

  const variant = variants.find((variant: VariantsProduct) =>
    variant.node.selectedOptions?.every((option) => option.value.toLocaleLowerCase() === state?.title.toLocaleLowerCase())
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
      }}
      onClick={() => setIsOpenCart(true)}
    >
      <SubmitButton size={size} price={state?.price} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
