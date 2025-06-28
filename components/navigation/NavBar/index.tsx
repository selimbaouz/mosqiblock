import SideBar from "../SideBar";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";
import { Menu } from "@/types/types";
import { cn } from "@/lib/utils";
import Cart from "@/components/cart/Cart";

interface NavBarProps {
    menu: Menu[];
}
export default function NavBar(
    {
        menu,
    }: NavBarProps) {

    return (
        <nav className={cn("z-[100] bg-background")}>
            <NavBarMobile />
            <NavBarWeb menu={menu} />

            {/* Panier */}
            <Cart />
            {/* Liens */}
            <SideBar menu={menu} />
        </nav>
    );
};
