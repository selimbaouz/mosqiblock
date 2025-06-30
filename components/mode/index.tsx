"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Benefits from "./Benefits";
import Utilisation from "./Utilisation";

const Mode = () => {
    const t = useTranslations("fe.mode");
    const [selected, setSelected] = useState(0);

     // Onglets dynamiques depuis la traduction
     const selectModesData = t.raw("selectModesData") as { title: string }[];

    // Sélection du contenu selon l’onglet
    const productModeSelected = (selected: number) => {
        switch (selected) {
            case 0:
                return { content: <Benefits /> };
            case 1:
                return { content: <Utilisation /> };
            default:
                return { content: <Benefits /> };
        }
    };

    return (
        <section className={cn("px-4 w-full relative bg-white py-10 space-y-6 text-center mx-auto", "lg:py-20 lg:space-y-10 lg:px-6", "xl:px-0")}>
            <div className="max-w-screen-xl mx-auto">
                <div className={cn("flex items-center justify-center gap-4", "lg:gap-6")}>
                    {selectModesData.map((data, index) => (
                        <h3 
                            key={index} 
                            onClick={() => setSelected(index)}
                            className={cn("transition-opacity cursor-pointer text-xl font-bold", "lg:text-3xl", "xl:text-4xl", selected === index ? "text-primary underline" : "text-foreground/50")}
                        >{data.title}</h3>
                    ))}
                </div>
                {productModeSelected(selected).content}
            </div>
        </section>
    );
};

export default Mode;