"use client";
import { detailsProduct } from "@/data";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Product, VariantsProduct } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { AddToCart } from "./cart/add-to-cart";
import Image from "next/image";
import { BestReviews } from "./BestReviews";
import PackProgress from "./PackProgress";
import { FaTruck } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import Link from "next/link";
import GetRatings from "@/lib/fn";

interface ProductImageProps {
    product: Product;
}

const ProductImage: FC<ProductImageProps> = ({product}) => {
    const [selectedPack, setSelectedPack] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedColorName, setSelectedColorName] = useState("White");
    const [selectedPackName, setSelectedPackName] = useState("Buy 1");
    const [selectedVariant, setSelectedVariant] = useState<VariantsProduct | null>(null);

    /* const [startDelivery, endDelivery] = calculateDeliveryDates(5, 10); */

    useEffect(() => {
        if (product.variants.edges.length > 0 && !selectedVariant) {
            setSelectedVariant(product.variants.edges[0]);
        }
    }, [product.variants.edges, selectedVariant]);

    useEffect(() => {
        const variantTitle = `${selectedPackName} / ${selectedColorName}`;
        const matchingVariant = product.variants.edges.find(v => 
            v.node.title === variantTitle
        );

        if (matchingVariant) {
            setSelectedVariant(matchingVariant);
        } 
    }, [selectedPack, selectedColorName, product.variants.edges, selectedPackName]);

    const PACKS = [
        {
            image: "/images/Pack1.png",
            title: "Buy 1",
            subTitle: ""
        },
        {
            image: "/images/Pack2.png",
            title: "Buy 2 Get 1 Free",
            subTitle: "Your save €27,99 😱",
        },
        {
            image: "/images/Pack3.png",
            title: "Buy 3 Get 2 Free",
            subTitle: "One for every room 😍",
        },
    ];
    
    return (
        <div className={cn("space-y-2")}>
           {/*  <div className={cn("flex items-center pb-2 gap-2 lg:pb-4")}>
                <FaTruck className="text-base text-secondary" />
                <p className="text-sm">Livraison entre le <strong>{startDelivery}</strong> et le <strong>{endDelivery}</strong></p>
            </div> */}
            <div className={cn('hidden', 'lg:block space-y-3 pb-4')}>
                <h3 className={cn("text-left text-[30px] leading-9 font-bold pointer-events-none whitespace-pre-wrap text-foreground", "lg:text-3xl", "xl:text-4xl")}>
                    MosqiBlock - Keep Your Family Safe
                </h3>
                <p className={cn("text-xs sm:text-sm text-foreground")}>Instant Peace | Pure comfort | Total Freedom</p>
                <div className={cn("space-y-2")}>
                    {/* <div className={cn("bg-secondary w-full p-4 flex items-center gap-6 rounded-lg font-bold text-xs")}>
                            <p className='text-nowrap'>Only <span className='text-primary'>60</span> items</p>
                            <div className="w-full h-2 rounded-full bg-primary border border-secondary overflow-hidden">
                                <div className={cn("h-full rounded-full transition-all duration-700")} />
                            </div>
                            <p className='text-nowrap'>Left in Stock</p>
                    </div> */}
                    <div className={cn("bg-primary uppercase text-white w-full p-4 flex items-center gap-2 rounded-lg font-bold text-xs")}>
                            <span role="img" aria-label="truck">🚚</span>
                            Order now, delivery July 1-3
                    </div>
                </div>
            </div>
             <div className={cn("flex items-center gap-2")}> 
                    <GetRatings value={4.7} className={cn("text-base sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-sm")} />
                    <p className={cn("text-xs text-foreground")}>4.7 | </p>
                    <Link href="#avis" className={cn("text-xs sm:text-sm text-foreground")}>
                        1000+ Satisfied customers
                    </Link>
                </div>
            <p className={cn("py-2 text-sm leading-6", "xl:text-lg")}><strong>Enjoy peaceful nights</strong>, free from buzzing and bites. <strong>Protect your loved ones</strong> with safe, silent technology. Easy to use anywhere,  <strong>comfort and freedom, every day.</strong></p>
            <div className={cn("space-y-6 py-4")}>    
                <div className="space-y-4">
                <h3 className={cn("text-sm font-bold uppercase", "lg:text-base")}>Colors</h3>
                    <div className="flex gap-2 mb-4">
                        {["White", "Green"].map((color, i) => (
                            <div 
                            key={i} 
                            onClick={() => {
                                setSelectedColorName(color);
                                setSelectedColor(i)
                            }} 
                            className={cn(
                                "flex items-center py-3 justify-center text-center rounded-2xl w-full border-2 cursor-pointer",
                                selectedColor !== i ? "bg-transparent border-secondary" : "border-2 border-r-2 border-l-2 bg-white border-[#956BFF]"
                            )}
                            >
                            <div className="space-y-1">
                                <h6 className={cn("text-xs font-bold", "lg:text-sm")}>
                                    {color}
                                </h6>
                            </div>
                        </div>
                        ))}
                    </div>
                    <h3 className={cn("text-sm font-bold uppercase", "lg:text-base")}>Pack</h3>
                    <div className={cn("space-y-6")}>
                       <PackProgress selectedPack={selectedPack} />
                        <div id="bundles" className={cn("grid w-full gap-2 grid-cols-3 items-stretch relative")}>
                            {PACKS.map((data, index) => (
                            <div 
                                key={index} 
                                onClick={() => {
                                setSelectedPack(index);
                                setSelectedPackName(data.title);
                                }} 
                                className={cn(
                                "flex items-center py-4 justify-center text-center rounded-2xl w-full border-2 cursor-pointer relative", // Ajoute relative ici
                                selectedPack !== index ? "bg-transparent border-secondary" : "border-2 border-r-2 border-l-2 bg-white border-[#956BFF]"
                                )}
                            >
                                {/* Badge "Most popular !" uniquement sur le 2ème pack */}
                                {index === 1 && (
                                <div className={cn("absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] px-2 py-1 rounded-lg w-auto text-nowrap uppercase z-10", "lg:text-[10px]")}>
                                    Most popular !
                                </div>
                                )}
                                <div className="space-y-1">
                                <Image src={data.image} alt="image of pack" className="w-auto h-20 mx-auto" width={100} height={100} />
                                <h6 className={cn("text-xs font-bold", "lg:text-sm")}>
                                    {data.title}
                                </h6>
                                <p className={cn("text-[10px] font-medium", "lg:text-xs")}>
                                    {data.subTitle}
                                </p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="space-y-4">
                    <AddToCart state={selectedVariant} product={product} size="fullWidth" />
                    <div className={cn("flex items-center gap-2 justify-center", "lg:gap-4")}>
                        <Image src="/images/secure.png" className="w-auto h-4" alt="Icon secure" width={20} height={20} />
                        <p className={cn("text-[10px] font-bold", "lg:text-xs", "xl:text-sm")}>Secure payment</p>
                        <Image src="/images/payments.png" alt="Payments" width={200} height={44} />
                    </div>
                </div>
                <div className={cn("w-full bg-white rounded-2xl py-2 px-6 space-y-2")}>
                        <div className={cn("flex items-center justify-center gap-2 border-secondary")}>
                            <FaTruck className="" />
                            <p className={cn("text-xs font-bold", "xl:text-sm")}>Free delivery</p>
                        </div>
                        <div className="w-full h-[0.1px] bg-secondary"/>
                        <div className={cn("flex items-center justify-center gap-2")}>
                            <TbTruckReturn className="" />
                            <p className={cn("text-xs font-bold", "xl:text-sm")}>60 Day Risk Free Trial</p>
                        </div>
                </div>
                <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-secondary">
                    {detailsProduct.map((data, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className={cn("border-secondary px-4 whitespace-pre-line")}>
                            <AccordionTrigger className={cn("text-xs font-semibold")}>
                                {data.title}
                            </AccordionTrigger>
                            <AccordionContent className={cn("text-xs font-medium py-6", "lg:text-base")}>
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