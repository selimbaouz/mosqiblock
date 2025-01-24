"use client"
import { useCartStore, useOpenCartStore } from '../../store/cart';
import { ShoppingCartIcon } from 'lucide-react';
import Price from '../Price';
import { DeleteItemButton } from '@/components/cart/delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import { createCartAndSetCookie, redirectToCheckoutUrl } from './actions';
import { PulseLoader } from 'react-spinners';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Cart() {
  const { cart, updateCartItem } = useCartStore();
  const {isOpenCart, setIsOpenCart} = useOpenCartStore();
  const quantityRef = useRef(cart?.totalQuantity);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cart.lines.length > 0 && isOpenCart) {
        createCartAndSetCookie();
    }
  }, [cart, isOpenCart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpenCart) {
        setIsOpenCart(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpenCart, cart?.totalQuantity, quantityRef, setIsOpenCart]);

  const handleRedirectToCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);
    try {
        const url = await redirectToCheckoutUrl(cart.lines[0].merchandise.id, cart.totalQuantity);
        if (url) {
          window.location.href = url;
          } else {
            console.error("L'URL de redirection est indéfinie.");
            setIsLoading(false);
          }
      } catch (error) {
        console.error("Erreur lors de la redirection vers le checkout:", error); 
        setIsLoading(false);
      }
      setIsLoading(false);
  }

  return (
    <div className="bg-background text-foreground h-full py-10">
        {!cart || cart.lines.length === 0 ? (
            <div className="pb-14 flex w-full h-full flex-col items-center justify-center overflow-hidden">
            <ShoppingCartIcon className="size-14" />
            <p className="mt-6 text-center text-2xl font-bold">Votre panier est vide.</p>
            </div>
        ) : (
            <div className='h-full flex flex-col justify-between'>
                <ul className="flex-grow overflow-auto py-4">
                    {cart.lines
                    .sort((a, b) =>
                        a.merchandise.product.title.localeCompare(b.merchandise.product.title)
                    ).map((item, i) => {
                      const amount = Number(item.cost.totalAmount.amount);
                      return (
                        <li key={i} className="flex w-full justify-between gap-1 items-center p-2">
                            <div className='relative'>
                                <Image src={item.merchandise.product.featuredImage.node.originalSrc} alt="Image of Product" width={500} height={500} className="h-14 w-14 max-w-14 rounded-xl object-fill" />
                                <div className="absolute z-40 -top-2 -left-2">
                                    <DeleteItemButton item={item} optimisticUpdate={updateCartItem} />
                                </div>
                            </div>
                                <div className='ml-4 w-full'>
                                    <p className="text-lg">{item.merchandise.product.title}</p>
                                    <Price
                                        className="text-sm text-foreground/50 font-montserrat"
                                        amount={String(amount)}
                                        currencyCode={item.cost.totalAmount.currencyCode}
                                    />
                            </div>
                            <div className="flex items-center">
                            <EditItemQuantityButton
                                item={item}
                                type="minus"
                                optimisticUpdate={updateCartItem}
                            />
                            <span className="mx-3">{item.quantity}</span>
                            <EditItemQuantityButton
                                item={item}
                                type="plus"
                                optimisticUpdate={updateCartItem}
                            />
                            </div>
                        </li>
                    )} 
                    )}
                </ul>

                <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                        <p>Taxes</p>
                        <span className='ml-1 inline'>
                            <Price
                                className="flex justify-end space-y-2 text-right text-sm"
                                amount={cart.cost.totalTaxAmount.amount}
                                currencyCode={cart.cost.totalTaxAmount.currencyCode}
                            />
                        </span>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Expédition</p>
                        <p className="text-right text-sm text-foreground">Livraison Offerte</p>
                    </div>
                    {/* <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Offre spéciale fêtes</p>
                        <p className="text-right text-sm text-foreground">- 20,00 €</p>
                    </div> */}
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Total</p>
                        <span className='ml-1 inline'>
                            <Price
                                className="flex justify-end space-y-2 text-right text-sm"
                                amount={cart.cost.totalAmount.amount}
                                currencyCode={cart.cost.totalAmount.currencyCode}
                            />
                        </span>
                    </div>
                    <form onSubmit={handleRedirectToCheckout}>
                        <CheckoutButton isLoading={isLoading} />
                    </form>
                </div>
            </div>
        )}
    </div>
  );
}


function CheckoutButton({isLoading}: {isLoading: boolean}) {
    return (
      <button
        className="bg-gradient-to-b from-primary to-secondary rounded-3xl text-white py-3 w-full mt-6"
        type='submit'
        disabled={isLoading}
      >
        {isLoading ? <PulseLoader size={7} color="white" /> : "Passez à l'étape suivante"}
      </button>
    );
  }