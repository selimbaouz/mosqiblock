"use client";
import { checkProduct, detailsProduct } from "@/data";
import GetRatings from "@/lib/getRating";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Product } from "@/types/types";
import { FC, useState } from "react";
import { AddToCart } from "./cart/add-to-cart";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";
import MoneyBack from "@/public/images/MoneyBack.png"
import Image from "next/image";
import { BestReviews } from "./BestReviews";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface ProductImageProps {
    product: Product;
}

const ProductImage: FC<ProductImageProps> = ({product}) => {
    const [selectedVariant, setSelectedVariant] = useState(product.variants.edges[0].node.title);
    return (
        <div className={cn("space-y-2")}>
            <div className={cn("flex items-center gap-2")}> 
                <p className={cn("font-medium text-sm text-foreground")}>4.8</p>
                <GetRatings value={5} className={cn("text-base sm:text-md text-primary", "md:text-lg", "xl:text-sm")} />
                <Link href="#avis" className={cn("font-medium text-sm text-foreground")}>
                    319+ Clients Satisfaits
                </Link>
            </div>
            <h3 className={cn("text-left text-2xl font-bold pointer-events-none whitespace-pre-wrap text-foreground", "lg:text-3xl")}>
                {product.title}
            </h3>
            <div className={cn("flex items-center pb-2 gap-2 lg:pb-4")}>
                <FaCircleCheck className="text-sm text-primary" />
                <p className="text-sm">Livraison entre le <strong>24 Janvier</strong> et le <strong>29 Janvier</strong></p>
            </div>
            <p className={cn("text-sm", "sm:text-base", "xl:text-lg")}>Pour une grossesse sereine, WeSecure est devenue l’indispensable compagnon de route de toute future maman soucieuse de sa sécurité et de celle de son bébé</p>
            <ul className={cn("flex justify-between items-stretch py-4 gap-4", "xl:justify-around")}>
                {checkProduct.map((data, index) => (
                    <li key={index} className={cn("flex flex-col bg-secondary/30 w-full min-h-full p-4 rounded-xl gap-2 items-center text-center", "lg:px-4 lg:py-6")}>
                        <div className={cn("p-2 bg-secondary text-background dark:text-white rounded-full", "lg:p-3")}>
                            <data.icon className={cn("text-lg", "lg:text-xl")} />
                        </div>
                        <p className={cn("text-xs text-primary dark:text-white font-bold", "xs:text-sm", "lg:text-base")}>{data.title}</p>
                    </li>
                ))}
            </ul>
            <div className={cn("space-y-10 py-4")}>    
                <div className="space-y-8">
                    <h3 className={cn("text-sm uppercase font-medium", "lg:text-base")}>Plus de voiture ?</h3>
                    <RadioGroup 
                        defaultValue={product.variants.edges[0].node.title} 
                        defaultChecked={selectedVariant === product.variants.edges[0].node.title} 
                        className={cn("flex flex-col items-center justify-between gap-3 text-center", "lg:gap-6")}
                        >
                        {product.variants.edges.map((data, index) => {
                            const discount = Number(data.node.price?.amount) - Number(data.node.compareAtPrice.amount);
                            const parseDiscount = parseFloat(String(discount) ?? "").toFixed(0);
                            return (
                                <div key={index} className={cn("border-2 px-6 py-8 w-full flex items-center gap-4 lg:gap-6 rounded-lg cursor-pointer", "lg:p-6", selectedVariant !== data.node.title ? "bg-background border-secondary" : "bg-secondary/30 border-primary")} onClick={() => setSelectedVariant(data.node.title)}>
                                    <RadioGroupItem 
                                        value={data.node.title} 
                                        id={data.node.title} 
                                        checked={selectedVariant === data.node.title} 
                                        onChange={(e) => setSelectedVariant(e.currentTarget.value)}
                                    />
                                    <div className="flex items-center justify-between w-full">
                                        <div className={cn("flex flex-col items-start text-left")}>
                                            <h4 className={cn("text-base font-bold", "lg:text-lg")}>{data.node.title}</h4>
                                            <p className={cn("text-sm")}>Vous économisez {parseDiscount}€</p>
                                        </div>
                                        <div className={cn("flex flex-col items-end")}>
                                            <h4 className={cn("font-semibold text-sm xs:text-base", "lg:text-lg")}>{parseFloat(data.node.price?.amount ?? "").toFixed(2)}€</h4>
                                            <p className={cn("text-xs xs:text-sm font-light line-through", "lg:text-base")}>{parseFloat(data.node.compareAtPrice.amount ?? "").toFixed(2)}€</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </RadioGroup>
                </div>
                <div className="space-y-4">
                    <AddToCart product={product} size="fullWidth" />
                </div>
                <div className="py-5 px-4 bg-secondary/30 rounded-lg flex gap-5 items-center">
                    <Image src={MoneyBack} alt="Logo of HelloPurly" width={500} height={500} className={cn("size-20")} />
                    <div className="space-y-2">
                        <h6 className={cn("text-sm uppercase font-medium", "lg:text-base")}>Remboursement Garantie pendant 90 jours</h6>
                        <p className={cn("text-xs text-light", "lg:text-sm")}>Nous avons confiance en nos produits. Pas convaincu ? Renvoyez-le et nous vous rembourserons votre achat.</p>
                    </div>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {detailsProduct.map((data, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className={cn("border-foreground py-1 whitespace-pre-line")}>
                            <AccordionTrigger className={cn("text-sm", "lg:text-base")}>
                                {data.title}
                            </AccordionTrigger>
                            <AccordionContent className={cn("text-base py-6")}>
                                {data.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className={cn("space-y-4 pb-5")}>
                <BestReviews productPage />
            </div>  
        </div>
    );
};

export default ProductImage;