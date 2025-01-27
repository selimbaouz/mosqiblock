import SideBar from "../SideBar";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";
import { Menu } from "@/types/types";
import { cn } from "@/lib/utils";
import Cart from "@/components/cart/Cart";

interface NavBarProps {
    menu: Menu[];
    isHome?: boolean;
}
export default function NavBar(
    {
        menu,
        isHome,
    }: NavBarProps) {

    return (
        <nav className={cn(!isHome && "bg-background z-[100] border-b")}>
            <NavBarMobile />
            <NavBarWeb menu={menu} isHome={isHome} />

            {/* Panier */}
            <Cart />
            {/* Liens */}
            <SideBar menu={menu} />
        </nav>
    );
};
