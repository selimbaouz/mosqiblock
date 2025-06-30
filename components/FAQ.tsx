"use client"
import { cn } from "@/lib/utils";
import CardFAQ from "./card/CardFAQ";
import { useState } from "react";
import { useTranslations } from "next-intl";

const FAQ = () => {
    const t = useTranslations("fe.faq");
    const faq = t.raw("items") as { title: string; content: string }[];
    const [isOpen, setIsOpen] = useState(faq.map(() => false));

    return (
        <div className={cn(
            "p-4 text-left max-w-screen-md mx-auto py-10", 
            "lg:p-6 lg:py-20", 
            "xl:px-10"
        )}>
            <div className="space-y-1 mx-auto text-center">
                <h3 className={cn("text-2xl font-bold", "lg:text-3xl", "xl:text-4xl")}>{t("sectionTitle")}</h3>
                <h4 className={cn("text-lg", "lg:text-xl")}>{t("sectionSubtitle")}</h4>
            </div>
           <div className={cn('flex flex-col gap-2 py-10')}>
                {faq.map((data, index) => (
                  <CardFAQ
                    key={index}
                    index={index}
                    title={data.title}
                    content={data.content}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                ))}
            </div>
        </div>
    );
};

export default FAQ;