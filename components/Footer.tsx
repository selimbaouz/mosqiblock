"use client"
import { cn } from "@/lib/utils";
/* import Logo from "@/public/images/logo.webp" */
import { Menu } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
    menu: Menu[];
    footerMenu: Menu[];
}
const Footer = ({
    menu,
    footerMenu
}: FooterProps) => {
    const classLink = "font-light text-base hover:underline";
    const pathname = usePathname();

    return (
        <>
            <footer className={cn('p-8 text-left py-10 space-y-20 bg-background z-10 h-full', "xl:px-0")}>
                <div className={cn("max-w-screen-2xl mx-auto space-y-14", "lg:p-6")}>
                    {/* <Image src={Logo} alt="Logo of HelloPurly" width={250} height={36} /> */}
                    <div className={cn("flex flex-col space-y-10", "lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:max-w-6xl")}>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("uppercase text-lg font-medium")}>À propos de Hello Purly</h6>
                            <p className={cn(classLink, "max-w-xs leading-relaxed", "lg:max-w-sm")}>
                                {"Chez Hello Purly, nous avons lancé cette boutique pour révolutionner votre expérience de toilette. Notre mission est de promouvoir une hygiène supérieure tout en réduisant notre empreinte écologique. Ensemble, faisons un geste pour nos fesses et pour la planète !"}
                            </p>
                        </div>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("uppercase text-lg font-medium")}>Pages Légales</h6>
                            <ul className="leading-relaxed">
                                {footerMenu.map((data, i) => (
                                    <li key={i}>
                                        <Link href={data.path} className={cn(classLink, data.path === pathname && "font-bold")}>{data.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("uppercase text-lg font-medium")}>Pages</h6>
                            <ul className="leading-relaxed">
                                {menu.map((data, i) => (
                                    <li key={i}>
                                        {data.path.includes("contact") ? (
                                            <Link 
                                                href="mailto:im.sejiux@gmail.com"
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className={cn(classLink, data.path === pathname && "font-bold underline")}
                                            >Contact</Link>
                                        ) : (
                                            <Link 
                                                href={data.path} 
                                                target={data.title === "Suivre ma commande" ? "_blank" : undefined} 
                                                rel={data.title === "Suivre ma commande" ? "noopener noreferrer" : undefined} 
                                                className={cn(classLink, data.path === pathname && "font-bold underline")}
                                                >
                                                    {data.title}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={cn("py-6 border-t bg-gradient-to-t from-[#171923] to-background")}>
                <div className={cn("max-w-screen-2xl mx-auto flex flex-col px-6 items-start", "lg:flex-row lg:items-center lg:justify-between")}>
                    <p className={cn("text-sm hidden", "lg:block")}>
                        © 2024 Tous droits réservés.
                    </p>
                    <Link href="https://sejiux.com" target="_blank" rel="noopener noreferrer" className={cn("border-b-2 w-max p-4 rounded-full border-white hover:border-t-2 hover:border-b-0")}>
                        <Image src="/images/sejiux.webp" alt="Logo of HelloPurly" width={36} height={36} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;