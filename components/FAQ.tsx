import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { faqData } from "@/data";

const FAQ = () => {
    return (
        <div className={cn(
            "p-4 text-left max-w-screen-md mx-auto py-10", 
            "lg:p-6 lg:py-20", 
            "xl:px-10"
        )}>
            <div className="space-y-1 mx-auto text-center pb-10">
                <h3 className={cn("text-2xl font-bold", "lg:text-3xl", "xl:text-4xl")}>Vos questions</h3>
                <h4 className={cn("text-lg", "lg:text-xl")}>Nos réponses</h4>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqData.map((data, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className={cn("border-foreground/30 py-1")}>
                        <AccordionTrigger className={cn("text-base", "xl:text-lg")}>
                            {data.title}
                        </AccordionTrigger>
                        <AccordionContent className={cn("text-base py-6 whitespace-pre-line")}>
                            {data.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;