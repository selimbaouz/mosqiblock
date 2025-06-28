"use client";

import { cn } from "@/lib/utils";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useOpenSidebarStore } from "@/store/sidebar";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const NavBarMobile = () => {
    const { cart } = useCartStore();
    const { setIsOpenCart } = useOpenCartStore();
    const { setIsOpenSidebar } = useOpenSidebarStore();
    
    return (
        <div className={cn("z-50 px-3 py-2 flex justify-between items-center max-w-screen-2xl mx-auto", "md:p-4", "lg:hidden")}>
            <div 
                onClick={() => setIsOpenSidebar(true)}
            >
                <HiOutlineMenuAlt4 className={cn("text-2xl uppercase text-foreground hover:text-foreground", "xs:text-3xl")} />
            </div>
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer xs:text-xl font-bold">
                {/* <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} /> */}
                MosqiBlock
            </Link>
            <div className={cn("flex gap-0.5 items-center")}>
                <div 
                    className="relative p-2 cursor-pointer group" 
                    onClick={() => setIsOpenCart(true)}
                >
                    <RiShoppingBag3Fill
                        className={cn("text-3xl text-foreground group-hover:text-primary transition-all ease-in-out hover:scale-110", "sm:text-3xl", "lg:text-2xl", "xl:text-3xl")}  
                    />
                    {cart.totalQuantity ? (
                        <div className="absolute right-0 top-0 -mr-1 -mt-1 size-5 flex justify-center items-center rounded-full bg-primary text-[11px] font-medium text-white">
                            {cart.totalQuantity}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default NavBarMobile;