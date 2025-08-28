"use client";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Product } from "@/types/types";
import { FC, useEffect, useState } from "react";
import { AddToCart } from "./cart/add-to-cart";
import Image from "next/image";
import { BestReviews } from "./BestReviews";
import PackProgress from "./PackProgress";
import { FaTruck } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import Link from "next/link";
import GetRatings from "@/lib/fn";
import { useTranslations } from "next-intl";
import { useVariantStore } from "@/store/variantsProduct";

interface ProductImageProps {
    product: Product;
    formattedDeliveryStart: string;
    formattedDeliveryEnd: string;
}

const ProductImage: FC<ProductImageProps> = ({product, formattedDeliveryStart, formattedDeliveryEnd}) => {
    const t = useTranslations("fe.productMosqiBlock");
    const [selectedPack, setSelectedPack] = useState(1);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedColorName, setSelectedColorName] = useState("White");
    const [selectedPackName, setSelectedPackName] = useState("Buy 2 Get 1 Free");
    const {selectedVariant, setSelectedVariant} = useVariantStore();
    const colors = ["White", "Green"] as string[];
    const detailsProduct = t.raw("detailsProduct") as { title: string; content: string }[];

    /* const [startDelivery, endDelivery] = calculateDeliveryDates(5, 10); */

    useEffect(() => {
        if (product.variants.edges.length > 0 && !selectedVariant) {
            setSelectedVariant(product.variants.edges[0]);
        }
    }, [product.variants.edges, selectedVariant, setSelectedVariant]);

    useEffect(() => {
        const variantTitle = `${selectedPackName} / ${selectedColorName}`;
        const matchingVariant = product.variants.edges.find(v => 
            v.node.title === variantTitle
        );
        
        if (matchingVariant) {
            setSelectedVariant(matchingVariant);
        } 
    }, [selectedPack, selectedColorName, product.variants.edges, selectedPackName, setSelectedVariant]);

    const PACKS = [
        {
            image: "/images/Pack1.png",
            ...t.raw("packsList")[0]
        },
        {
            image: "/images/Pack2.png",
            ...t.raw("packsList")[1]
        },
        {
            image: "/images/Pack3.png",
            ...t.raw("packsList")[2]
        },
    ];

    const handleSelectPack = (index: number) => {
        setSelectedPack(index);
        const packTitles = [
            "Buy 1",
            "Buy 2 Get 1 Free",
            "Buy 3 Get 2 Free"
        ];
        setSelectedPackName(packTitles[index]);
    };
    
    return (
        <div className={cn("space-y-2")}>
           {/*  <div className={cn("flex items-center pb-2 gap-2 lg:pb-4")}>
                <FaTruck className="text-base text-secondary" />
                <p className="text-sm">Livraison entre le <strong>{startDelivery}</strong> et le <strong>{endDelivery}</strong></p>
            </div> */}
            <div className={cn('hidden', 'lg:block space-y-3 pb-4')}>
                <h3 className={cn("text-left text-[30px] leading-9 font-bold pointer-events-none whitespace-pre-wrap text-foreground", "lg:text-3xl", "xl:text-4xl")}>
                     {t("mainTitle")}
                </h3>
                <p className={cn("text-xs sm:text-sm text-foreground")}>{t("subtitle")}</p>
                <div className={cn("space-y-2")}>
                    {/* <div className={cn("bg-secondary w-full p-4 flex items-center gap-6 rounded-lg font-bold text-xs")}>
                            <p className='text-nowrap'>Only <span className='text-primary'>60</span> items</p>
                            <div className="w-full h-2 rounded-full bg-primary border border-secondary overflow-hidden">
                                <div className={cn("h-full rounded-full transition-all duration-700")} />
                            </div>
                            <p className='text-nowrap'>Left in Stock</p>
                    </div> */}
                    <div className={cn("bg-primary uppercase lg:text-sm text-white w-full p-4 flex items-center gap-2 rounded-lg font-bold text-xs")}>
                            <span role="img" aria-label="truck">🚚</span>
                            {t("delivery", { start: formattedDeliveryStart, end: formattedDeliveryEnd })}
                    </div>
                    <div className="bg-secondary w-full p-3  lg:text-sm flex items-center gap-2 rounded-lg font-bold text-xs uppercase text-foreground border border-primary">
                            <span role="img" aria-label="alarm">⏰</span>
                            {t("stockAlert")}
                    </div>
                </div>
            </div>
             <div className={cn("flex items-center gap-2")}> 
                    <GetRatings value={4.7} className={cn("text-base sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-sm")} />
                    <p className={cn("text-xs text-foreground")}>{t("rating")}</p>
                    <Link href="#avis" className={cn("text-xs sm:text-sm text-foreground")}>
                        {t("satisfied")}
                    </Link> 
                </div>
            <p className={cn("py-2 text-sm leading-6", "xl:text-lg")}>
                 {t.rich("heroText", {
                    strong: (chunks) => <strong>{chunks}</strong>
                })}
            </p>
            <div className={cn("space-y-6 py-4")}>    
                <div className="space-y-4">
                <h3 className={cn("text-sm font-bold uppercase", "lg:text-base")}> {t("colors")}</h3>
                    <div className="flex gap-2 mb-4">
                        {colors.map((color, i) => (
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
                                    {t(`variants.${color}`)}
                                </h6>
                            </div>
                        </div>
                        ))}
                    </div>
                    <h3 className={cn("text-sm font-bold uppercase", "lg:text-base")}>{t("packs")}</h3>
                    <div className={cn("space-y-6")}>
                       <PackProgress selectedPack={selectedPack} />
                        <div id="bundles" className={cn("grid w-full gap-2 grid-cols-3 items-stretch relative")}>
                            {PACKS.map((data, index) => (
                            <div 
                                key={index} 
                                onClick={() => {
                                setSelectedPack(index);
                                handleSelectPack(index);
                                }} 
                                className={cn(
                                "flex items-center py-4 justify-center text-center rounded-2xl w-full border-2 cursor-pointer relative", // Ajoute relative ici
                                selectedPack !== index ? "bg-transparent border-secondary" : "border-2 border-r-2 border-l-2 bg-white border-[#956BFF]"
                                )}
                            >
                                {/* Badge "Most popular !" uniquement sur le 2ème pack */}
                                {index === 1 && (
                                <div className={cn("absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] px-2 py-1 rounded-lg w-auto text-nowrap uppercase z-10", "lg:text-[10px]")}>
                                    {t("mostPopular")}
                                </div>
                                )}
                                <div className="space-y-1 px-2">
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
                    <div id="add-to-cart-anchor">
                        <AddToCart state={selectedVariant} product={product} size="fullWidth" />
                    </div>
                    <div className={cn("flex items-center gap-1 xs:gap-2 justify-center", "lg:gap-4")}>
                        <Image src="/images/secure.png" className="w-auto h-4" alt="Icon secure" width={20} height={20} />
                        <p className={cn("text-[10px] font-bold", "lg:text-xs", "xl:text-sm")}>{t("securePayment")}</p>
                        <Image src="/images/payments.png" alt="Payments" width={200} height={44} />
                    </div>
                </div>
                <div className={cn("w-full bg-white rounded-2xl py-2 px-6 space-y-2")}>
                        <div className={cn("flex items-center justify-center gap-2 border-secondary")}>
                            <FaTruck className="" />
                            <p className={cn("text-xs font-bold", "xl:text-sm")}>{t("freeDelivery")}</p>
                        </div>
                        <div className="w-full h-[0.1px] bg-secondary"/>
                        <div className={cn("flex items-center justify-center gap-2")}>
                            <TbTruckReturn className="" />
                            <p className={cn("text-xs font-bold", "xl:text-sm")}>{t("riskFree")}</p>
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
            <div className={cn("space-y-4 pb-5", "lg:hidden")}>
                <BestReviews productPage />
            </div>  
        </div>
    );
};

export default ProductImage;