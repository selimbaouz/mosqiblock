"use client"
import { cn } from "@/lib/utils";
/* import Logo from "@/public/images/logo.webp" */
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import Logo from "@/public/images/MosqiBlock-Logo-White.png";

interface FooterProps {
     className?: string;
}

const Footer = ({
    className
}: FooterProps) => {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("fe.legalsFooter");
    const legalsLinksData = t.raw("legalsLinks") as { link: string; label: string }[];

    return (
       <div className={cn(className,"font-light text-sm lg:text-base")}>
            <footer className={cn('p-4 text-left py-10 text-white space-y-20 bg-foreground z-10 h-full', "xl:py-14 xl:px-0")}>
                <div className={cn("max-w-screen-xl mx-auto space-y-14")}>
                    <div className={cn("flex flex-col space-y-10", "lg:flex-row lg:items-start lg:justify-between lg:space-y-0")}>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("lg:text-xl font-medium")}>{t("aboutTitle")}</h6>
                            <p className={cn("font-light text-sm lg:text-base", "max-w-xs leading-relaxed", "lg:max-w-sm")}>
                                {t("aboutText")}
                            </p>
                        </div>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("lg:text-xl font-medium")}>{t("legalTitle")}</h6>
                            <ul className="leading-relaxed text-sm">
                                {legalsLinksData.map((data, i) => (
                                    <li key={i}>
                                        <Link href={`/${locale}${data.link}`} className={cn("font-light text-sm lg:text-base hover:font-bold", data.link === pathname && "font-bold")}>{data.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("lg:text-xl font-medium")}>{t("contactTitle")}</h6>
                            <div className="leading-relaxed space-y-2 text-sm">
                                <Link href="mailto:contact@mosqiblock.com" className={cn("font-light text-sm lg:text-base hover:underline")}>contact@mosqiblock.com</Link>
                                <p>{t("contactAvailability")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start lg:justify-center lg:items-center mx-auto w-full space-y-4 pt-10">
                        <Image src={Logo} alt="Logo of Mosqiblock" className="w-auto h-14 lg:h-32" width={Logo.width} height={Logo.height} /> 
                        <Image src="/images/payments.png" alt="Payments" width={200} height={44} />
                        <p className="text-xs lg:text-sm pt-20">
                            <Link 
                                href="https://selimmersive.com" target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white/80 uppercase hover:text-white hover:underline font-bold">
                                    Selimmersive
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;