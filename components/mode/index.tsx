"use client";

import { productModeSelected, selectModesData } from "@/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Mode = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className={cn("px-4 bg-gradient-to-b from-primary to-secondary w-full relative py-10 space-y-6 text-center mx-auto", "lg:py-20 lg:space-y-10 lg:px-0")}>
            <div className={cn("flex items-center justify-center gap-4", "lg:gap-6")}>
                {selectModesData.map((data, index) => (
                    <h3 
                        key={index} 
                        onClick={() => setSelected(index)}
                        className={cn("transition-opacity cursor-pointer text-2xl font-bold", "lg:text-3xl", "xl:text-4xl", selected === index ? "text-white" : "text-white/50")}
                    >{data.title}</h3>
                ))}
            </div>
            {productModeSelected(selected).content}
        </section>
    );
};

export default Mode;