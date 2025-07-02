import SideBar from "../SideBar";
import NavBarMobile from "./NavBarMobile";
import NavBarWeb from "./NavBarWeb";
import { cn } from "@/lib/utils";
import Cart from "@/components/cart/Cart";
import { useLocale, useTranslations } from "next-intl";

export default function NavBar() {
    const locale = useLocale();
    const t = useTranslations("fe.navigation");

    const menu = [
        { title: t("home"), path: "/" },
        { title: t("mosqiblock"), path: `/${locale}/products/mosqiblock` },
        { title: t("contact"), path: "contact" }, // à traiter en mailto
        { title: t("trackOrder"), path: "https://www.17track.net/fr" }
    ];

    return (
        <nav className={cn("bg-background")}>
            <NavBarMobile />
            <NavBarWeb menu={menu} />

            {/* Panier */}
            <Cart />
            {/* Liens */}
            <SideBar menu={menu} />
        </nav>
    );
};
