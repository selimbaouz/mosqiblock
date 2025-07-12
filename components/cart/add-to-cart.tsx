// add-to-cart.tsx (SERVER COMPONENT)
import { Product, VariantsProduct } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { SubmitButtonClient } from './SubmitButton';

export function AddToCart({ 
  product, 
  size = "initial", 
  floatingBar, 
  state 
}: { 
  product: Product, 
  size?: "fullWidth" | "initial", 
  floatingBar?: boolean, 
  state?: VariantsProduct | null 
}) {
  const variants = product.variants.edges;
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

  const defaultVariantId = variants.length === 1 ? variants[0]?.node.id : undefined;
  const selectedVariantId = variant?.node.id || defaultVariantId;
  const finalVariant = variants.find((variant) => variant.node.id === selectedVariantId)!;

  return (
    <form action={formAction.bind(null, selectedVariantId)}>
      <SubmitButtonClient
        size={size}
        floatingBar={floatingBar}
        price={state?.node.price?.amount}
        variant={finalVariant}
        product={product}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
