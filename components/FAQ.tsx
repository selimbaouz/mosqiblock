"use client"
import { cn } from "@/lib/utils";
import { faqData } from "@/data";
import CardFAQ from "./card/CardFAQ";
import { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(faqData.map(() => false));
    return (
        <div className={cn(
            "p-4 text-left max-w-screen-md mx-auto py-10", 
            "lg:p-6 lg:py-20", 
            "xl:px-10"
        )}>
            <div className="space-y-1 mx-auto text-center">
                <h3 className={cn("text-2xl font-bold", "lg:text-3xl", "xl:text-4xl")}>Your questions</h3>
                <h4 className={cn("text-lg", "lg:text-xl")}>Our answers</h4>
            </div>
           <div className={cn('flex flex-col gap-2 py-10')}>
                {faqData.map((data, index) => (
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