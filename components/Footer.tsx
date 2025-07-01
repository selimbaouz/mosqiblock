"use client"
import { cn } from "@/lib/utils";
/* import Logo from "@/public/images/logo.webp" */
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

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
       <div className={cn(className, "font-light text-sm lg:text-base")}>
            <footer className={cn('p-4 text-left py-10 text-white space-y-20 bg-primary z-10 h-full', "lg:py-14 lg:px-0")}>
                <div className={cn("max-w-screen-xl mx-auto space-y-14", "lg:p-6")}>
                    {/* <Image src={Logo} alt="Logo of HelloPurly" width={250} height={36} /> */}
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
                                        <Link href={`/${locale}${data.link}`} className={cn("font-light text-sm lg:text-base", data.link === pathname && "font-bold")}>{data.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={cn("space-y-4")}>
                            <h6 className={cn("lg:text-xl font-medium")}>{t("contactTitle")}</h6>
                            <div className="leading-relaxed space-y-2 text-sm">
                                <Link href="mailto:mosqiblock@contact.com" className={cn("font-light text-sm lg:text-base")}>mosqiblock@contact.com</Link>
                                <p>{t("contactAvailability")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;