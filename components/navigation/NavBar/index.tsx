import SideBar from "../SideBar";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";
import { Menu, Product } from "@/types/types";
import { cn } from "@/lib/utils";
import Cart from "@/components/cart/Cart";

interface NavBarProps {
    menu: Menu[];
    isHome?: boolean;
    product?: Product;
}
export default function NavBar(
    {
        menu,
        isHome,
        product
    }: NavBarProps) {

    return (
        <nav className={cn(!isHome && "bg-background z-[100] border-b")}>
            <NavBarMobile />
            <NavBarWeb menu={menu} isHome={isHome} />

            {/* Panier */}
            <Cart product={product} />
            {/* Liens */}
            <SideBar menu={menu} />
        </nav>
    );
};
