"use client"
import { cn } from "@/lib/utils";
/* import Logo from "@/public/images/logo.webp" */
import { Menu } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
    footerMenu: Menu[];
}
const Footer = ({
    footerMenu
}: FooterProps) => {
    const classLink = "font-light text-base";
    const pathname = usePathname();

    return (
       <div className={classLink}>
            <footer className={cn('p-4 text-left py-10 text-white space-y-20 bg-primary z-10 h-full', "lg:py-14 lg:px-0")}>
                <div className={cn("max-w-screen-xl mx-auto space-y-14", "lg:p-6")}>
                    {/* <Image src={Logo} alt="Logo of HelloPurly" width={250} height={36} /> */}
                    <div className={cn("flex flex-col space-y-10", "lg:flex-row lg:items-start lg:justify-between lg:space-y-0")}>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("lg:text-xl font-medium")}>About</h6>
                            <p className={cn(classLink, "max-w-xs leading-relaxed", "lg:max-w-sm")}>
                                I created <strong>MosqiBlock</strong> to give families and outdoor lovers a safe, powerful, and easy way to enjoy life without mosquitoes—no chemicals, no hassle, just results.
                            </p>
                        </div>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("lg:text-xl font-medium")}>Legal pages</h6>
                            <ul className="leading-relaxed text-sm">
                                {footerMenu.map((data, i) => (
                                    <li key={i}>
                                        <Link href={data.path} className={cn(classLink, data.path === pathname && "font-bold")}>{data.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("lg:text-xl font-medium")}>Contact</h6>
                            <div className="leading-relaxed space-y-2 text-sm">
                                <Link href="mailto:mosqiblock@gmail.com" className={cn(classLink)}>mosqiblock@gmail.com</Link>
                                <p>Available 24/7</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;