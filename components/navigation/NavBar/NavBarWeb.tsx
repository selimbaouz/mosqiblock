"use client"
import { cn } from "@/lib/utils";
import { useCartStore, useOpenCartStore } from "@/store/cart";
import Link from "next/link";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { Menu } from "@/types/types";
import { FC } from "react";
import { usePathname } from "next/navigation";
import ToggleMode from "@/components/ToggleMode";
import { useOpenSidebarStore } from "@/store/sidebar";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

interface NavBarWebProps {
    menu: Menu[];
    isHome?: boolean;
}
const NavBarWeb: FC<NavBarWebProps> = ({ menu, isHome }) => {
    const classLink = "font-light text-base uppercase text-foreground lg:text-sm xl:text-base hover:text-primary";
    const { cart } = useCartStore();
    const { setIsOpenCart } = useOpenCartStore();
    const { setIsOpenSidebar, isOpenSidebar } = useOpenSidebarStore();
    const pathname = usePathname();

    if (isHome) {
        return (
            <div className={cn("hidden", "relative max-w-screen-2xl lg:flex lg:justify-between lg:items-center lg:mx-auto lg:py-6")}>
                <Link href="/" className={cn("cursor-pointer z-50 font-medium", "lg:text-2xl", "xl:text-3xl", "3xl:text-5xl")}>
                    {/* <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} className={cn("lg:w-32", "xl:w-44")} /> */}
                    We<span className="font-semibold text-primary">mom</span>
                </Link>
                <div className={cn("flex gap-4 items-center")}>
                    <ToggleMode />
                    <div 
                        onClick={() => setIsOpenSidebar(true)}
                        className={cn("cursor-pointer bg-foreground flex items-center gap-3 text-background py-3 px-6 rounded-full", "hover:bg-primary", isOpenSidebar && "bg-primary")}
                    >
                        <p className={cn("text-sm", "3xl:text-xl")}>menu</p>
                        <HiOutlineMenuAlt4 className={cn("text-lg uppercase text-background", "sm:text-xl", "3xl:text-2xl")} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={cn("hidden", "relative max-w-screen-xl lg:p-6 lg:flex lg:justify-between lg:items-center lg:mx-auto lg:py-6", "xl:px-0")}>
            <Link href="/" className={cn("cursor-pointer uppercase z-50 font-medium", "lg:text-2xl", "xl:text-3xl")}>
                {/* <Image src={Logo} alt="Logo of HelloPurly" width={170} height={36} className={cn("lg:w-32", "xl:w-44")} /> */}
                WE<span className="font-medium text-primary">mom</span>
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
                <ToggleMode />
                <div 
                    className="relative p-2 cursor-pointer group" 
                    onClick={() => setIsOpenCart(true)}
                >
                    <RiShoppingBag3Fill 
                        className={cn("text-3xl text-foreground group-hover:text-secondary transition-all ease-in-out hover:scale-110", "lg:text-2xl", "xl:text-3xl")}  
                    />
                    {cart.totalQuantity ? (
                        <div className="absolute right-0 top-0 -mr-2 -mt-2 size-6 flex justify-center items-center rounded-full bg-secondary text-[11px] font-medium text-white">
                            {cart.totalQuantity}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default NavBarWeb;