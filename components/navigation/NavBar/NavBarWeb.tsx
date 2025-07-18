"use client"
import { cn } from "@/lib/utils";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Menu } from "@/types/types";
import { FC } from "react";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useLocale } from "next-intl";
/* import Image from "next/image";
import Logo from "@/public/images/MosqiBlock-Logo.png" */

interface NavBarWebProps {
    menu: Menu[];
}
const NavBarWeb: FC<NavBarWebProps> = ({ menu}) => {
    const classLink = "z-50 font-medium text-base text-foreground lg:text-sm xl:text-base hover:text-primary hover:font-bold";
    const { cart } = useCartStore();
    const { setIsOpenCart } = useOpenCartStore();
    const pathname = usePathname();
    const locale = useLocale();

    return (
        <div className={cn("hidden", "z-50 relative max-w-screen-xl lg:p-6 lg:flex lg:justify-between lg:items-center lg:mx-auto lg:py-4", "xl:px-0")}>
            <Link href="/" className={cn("cursor-pointer z-50 font-bold", "lg:text-xl", "xl:text-2xl")}>
                {/* <Image src={Logo} alt="Logo of MosqiBlock" width={Logo.width} height={Logo.height} className={cn("lg:w-32", "xl:w-48")} /> */}
                MosqiBlock
            </Link>
            <ul className={cn("absolute inset-0 m-auto flex justify-center items-center gap-5", "xl:gap-6")}>
                {menu.map((data, i) => (
                    <li key={i}>
                        {data.path.includes("contact") ? (
                            <Link 
                                href="mailto:contact@mosqiblock.com"
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
                <LocaleSwitcher locale={locale} />
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