"use client";

import { cn } from "@/lib/utils";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { useOpenSidebarStore } from "@/store/sidebar";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import ToggleMode from "@/components/ToggleMode";

const NavBarMobile = () => {
    const { cart } = useCartStore();
    const { setIsOpenCart } = useOpenCartStore();
    const { setIsOpenSidebar } = useOpenSidebarStore();
    
    return (
        <div className={cn("px-3 py-2 flex justify-between items-center max-w-screen-2xl mx-auto", "md:p-4", "lg:hidden")}>
            <div 
                onClick={() => setIsOpenSidebar(true)}
            >
                <HiOutlineMenuAlt4 className={cn("text-lg uppercase text-foreground hover:text-foreground", "sm:text-3xl")} />
            </div>
            <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer text-2xl font-medium">
                {/* <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} /> */}
                We<span className="font-medium text-primary">mom</span>
            </Link>
            <div className={cn("flex gap-0.5 items-center")}>
                <ToggleMode />
                <div 
                    className="relative p-2 cursor-pointer group" 
                    onClick={() => setIsOpenCart(true)}
                >
                    <RiShoppingBag3Fill
                        className={cn("text-2xl text-foreground group-hover:text-secondary transition-all ease-in-out hover:scale-110", "sm:text-3xl", "lg:text-2xl", "xl:text-3xl")}  
                    />
                    {cart.totalQuantity ? (
                        <div className="absolute right-0 top-0 -mr-1 -mt-1 size-5 flex justify-center items-center rounded-full bg-secondary text-[11px] font-medium text-white">
                            {cart.totalQuantity}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default NavBarMobile;