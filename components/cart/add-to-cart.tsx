'use client';

import { Product } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { useCartStore, useOpenCartStore, useVisibleFloatingCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface SubmitButtonProps {
  size?: "fullWidth" | "initial";
}
function SubmitButton({size = "initial"}: SubmitButtonProps) {
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
        <p className={cn("uppercase")}>Ajouter au panier</p>
      </button>
  );
}

export function AddToCart({ product, size = "initial" }: { product: Product, size?: "fullWidth" | "initial", color?: "gradient" | "foreground" }) {
  const { addCartItem } = useCartStore();
  const { setIsOpenCart } = useOpenCartStore();
  const { setIsOpenFloatingBar } = useVisibleFloatingCartStore();
  const [message, formAction] = useFormState(addItem, null);
  const variantId = product.variants.edges[0].node.id;
  const actionWithVariant = formAction.bind(null, variantId);

  return (
    <form
      action={async () => {
        addCartItem(product.variants.edges[0], product);
        await actionWithVariant();
        setIsOpenFloatingBar(false);
      }}
      onClick={() => setIsOpenCart(true)}
    >
      <SubmitButton size={size} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
