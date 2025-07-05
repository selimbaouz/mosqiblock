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
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { cn } from '@/lib/utils';
import { Cross2Icon } from '@radix-ui/react-icons';
import { MdLock } from 'react-icons/md';
import CartTimer from './cart-timer';
import FreeShippingBar from './FreeShippingBar';
import { useLocale, useTranslations } from "next-intl";
import ReactPixel from "react-facebook-pixel";

export default function Cart() {
  const locale = useLocale();
  const { timeLeft, cart, updateCartItem } = useCartStore();
  const {isOpenCart, setIsOpenCart} = useOpenCartStore();
  const quantityRef = useRef(cart?.totalQuantity);
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("fe.cart");

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
        const url = await redirectToCheckoutUrl(cart.lines[0].merchandise.id, cart.totalQuantity, locale);
        if (url) {
          ReactPixel.track('InitiateCheckout', {
            content_ids: cart.lines.map(line => line.merchandise.id),
            num_items: cart.totalQuantity,
            value: cart.cost.totalAmount.amount,
            currency: cart.cost.totalAmount.currencyCode
          });
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
    <Sheet open={isOpenCart} onOpenChange={setIsOpenCart}>
      <SheetContent side="right" className="h-full w-full z-[200] bg-white">
        <SheetHeader className="border-b border-secondary">
          <div className='flex justify-between items-center p-4'>
            <SheetTitle className="text-foreground text-lg font-medium uppercase">{t("cartTitle")}</SheetTitle>
            <SheetClose>
              <Cross2Icon className="size-5" />
              <span className="sr-only">{t("close")}</span>
            </SheetClose>
          </div>
        </SheetHeader>
        {timeLeft > 0 && (
          <div className={cn("w-full py-3 bg-secondary flex justify-center")}>
            <CartTimer />
          </div>
        )}
        <div className='py-6 text-sm flex flex-col justify-center text-center px-4 border-b border-secondary'>
          <FreeShippingBar />
        </div>
        <div className={cn("text-foreground h-auto flex-grow overflow-hidden")}>
          {!cart || cart.lines.length === 0 ? (
              <div className="flex w-full flex-col items-center justify-center pt-14">
                <ShoppingCartIcon className="size-14" />
                <p className="mt-6 text-center text-lg font-medium">{t("cartEmpty")}</p>
              </div>
          ) : (
              <div className='h-[92%] flex flex-col justify-between'>
                <ul className="flex-1 overflow-auto">
                  {cart.lines
                  .sort((a, b) =>
                      a.merchandise.product.title.localeCompare(b.merchandise.product.title)
                  ).map((item, i) => {
                    const amount = Number(item.cost.totalAmount.amount);
                    return (
                      <li key={i} className="w-full border-b border-secondary">
                        <div className='flex w-full justify-between gap-1 items-stretch py-6 px-4'>
                          <Image src={item.merchandise.product.featuredImage.node.originalSrc} alt="Image of Product" width={500} height={500} className="size-20 max-w-20 lg:h-32 lg:w-32 lg:max-w-32 rounded-lg object-fill" />
                          <div className='ml-4 w-full space-y-4'>
                            <div>
                              <p className="text-sm font-bold">{item.merchandise.product.title}</p>
                              <p className='text-sm'>{item.merchandise.title}</p>
                            </div>
                            <div className="flex items-center border border-secondary w-max">
                              <EditItemQuantityButton
                                  item={item}
                                  type="minus"
                                  optimisticUpdate={updateCartItem}
                              />
                              <span className="mx-4 text-sm font-semibold">{item.quantity}</span>
                              <EditItemQuantityButton
                                  item={item}
                                  type="plus"
                                  optimisticUpdate={updateCartItem}
                              />
                            </div>
                          </div>
                          <div className={cn("flex flex-col justify-between h-auto items-end")}>
                            <DeleteItemButton item={item} optimisticUpdate={updateCartItem} />
                            <Price
                                className="text-sm text-foreground font-montserrat"
                                amount={String(amount)}
                                currencyCode={item.cost.totalAmount.currencyCode}
                            />
                          </div>
                        </div>
                      </li>
                    )}  
                  )}
                </ul>
            </div>
          )}
          </div>
          <div className='absolute bottom-0 pb-6 w-full'>
            <div className={cn("w-full py-3 bg-secondary flex justify-center")}>
              <p className='text-primary uppercase font-semibold text-xs'>{t("satisfactionGuarantee")}</p>
            </div>
            <div className="z-50 border-t p-4 pt-6 flex items-center justify-between border-secondary">
                <p className={cn("uppercase font-semibold")}>{t("total")}</p>
                <span className='ml-1 inline'>
                    <Price
                        className="flex justify-end space-y-2 text-right text-sm"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                    />
                </span>
            </div>
            <form onSubmit={handleRedirectToCheckout} className='px-4'>
                <CheckoutButton isLoading={isLoading} buttonText={t("protectButton")} />
            </form>
          </div>
      </SheetContent>
  </Sheet>
  );
}


function CheckoutButton({isLoading, buttonText}: {isLoading: boolean, buttonText: string}) {
    return (
      <button
        className="bg-primary rounded-lg text-white uppercase py-[18px] w-full flex items-center justify-around text-sm font-semibold"
        type='submit'
        disabled={isLoading}
      >
        <MdLock className={cn("text-white flex justify-start text-lg uppercase")} />
        {isLoading ? <PulseLoader size={7} color="white" /> : buttonText}
        <div />
      </button>
    );
  }