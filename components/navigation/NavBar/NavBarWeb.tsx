"use client"
import { cn } from "@/lib/utils";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Menu } from "@/types/types";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface NavBarWebProps {
    menu: Menu[];
}
const NavBarWeb: FC<NavBarWebProps> = ({ menu}) => {
    const classLink = "font-medium text-base text-foreground lg:text-sm xl:text-base hover:text-primary hover:font-bold";
    const { cart } = useCartStore();
    const { setIsOpenCart } = useOpenCartStore();
    const pathname = usePathname();

    return (
        <div className={cn("hidden", "relative max-w-screen-xl lg:p-6 lg:flex lg:justify-between lg:items-center lg:mx-auto lg:py-4", "xl:px-0")}>
            <Link href="/" className={cn("cursor-pointer z-50 font-bold", "lg:text-xl", "xl:text-2xl")}>
                {/* <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} className={cn("lg:w-32", "xl:w-44")} /> */}
                MosqiBlock
            </Link>
            <ul className={cn("absolute inset-0 m-auto flex justify-center items-center gap-5", "xl:gap-6")}>
                {menu.map((data, i) => (
                    <li key={i}>
                        {data.path.includes("contact") ? (
                            <Link 
                                href="mailto:im.sejiux@gmail.com"
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={cn(classLink, data.path === pathname && "font-bold")}
                            >Contact</Link>
                        ) : (
                            <Link href={data.path} className={cn(classLink, data.path === pathname && "font-bold text-primary")}>{data.title}</Link>
                        )}
                    </li>
                ))}
            </ul>
            <div className={cn("flex gap-0.5 items-center")}>
                <div 
                    className="relative p-2 cursor-pointer group" 
                    onClick={() => setIsOpenCart(true)}
                >
                    <RiShoppingBag3Fill 
                        className={cn("text-3xl text-foreground group-hover:text-primary transition-all ease-in-out hover:scale-110", "lg:text-2xl", "xl:text-3xl")}  
                    />
                    {cart.totalQuantity ? (
                        <div className="absolute right-0 top-0 -mr-2 -mt-2 size-6 flex justify-center items-center rounded-full bg-primary text-[11px] font-medium text-white">
                            {cart.totalQuantity}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default NavBarWeb;