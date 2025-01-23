import SideBar from "../SideBar";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";
import CardBar from "../CardBar";
import { Menu } from "@/types/types";
import { cn } from "@/lib/utils";

interface NavBarProps {
    menu: Menu[];
    isHome?: boolean;
}
export default function NavBar(
    {
        menu,
        isHome
    }: NavBarProps) {

    return (
        <nav className={cn(!isHome && "bg-background z-[100]")}>
            <NavBarMobile />
            <NavBarWeb menu={menu} isHome={isHome} />

            {/* Panier */}
            <CardBar />
            {/* Liens */}
            <SideBar menu={menu} />
        </nav>
    );
};
