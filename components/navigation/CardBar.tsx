"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { useOpenCartStore } from "@/store/cart";
import Cart from "../cart/Cart";

const CardBar = () => {
    const { isOpenCart, setIsOpenCart } = useOpenCartStore();

    return (
        <Sheet open={isOpenCart} onOpenChange={setIsOpenCart}>
            <SheetContent side="right" className="h-full w-full">
                <SheetHeader>
                    <SheetTitle className="text-white text-xl font-bold">Mon Panier</SheetTitle>
                </SheetHeader>
                <SheetDescription></SheetDescription>
                <Cart />
            </SheetContent>
        </Sheet>
    );
};

export default CardBar;