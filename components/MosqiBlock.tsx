"use client";
import React, { FC, useEffect } from 'react';
import ProductImage from '@/components/ProductImage';
import { cn } from '@/lib/utils';
import ImagesGallery from '@/components/ImagesGallery';
import StickyBar from '@/components/navigation/StickyBar';
import NavBar from '@/components/navigation/NavBar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer'
import Mode from '@/components/mode';
import BestPlaces from '@/components/BestPlaces';
import { Reviews } from '@/components/Reviews';
import FamilyBenefits from '@/components/FamilyBenefits';
import MosquitoesKiller from '@/components/MosquitoesKiller';
import Comparaison from '@/components/Comparaison';
import ReviewSummary from '@/components/ReviewSummary';
import AnnouncementBar from '@/components/navigation/AnnouncementBar';
import { Product } from '@/types/types';
import { format, addDays } from 'date-fns';
import { useTranslations } from "next-intl";
/* import WhatsApp from './navigation/WhatsApp'; */
import FloatingBar from './navigation/FloatingBar';
import { useVisibleFloatingCartStore } from "@/store/cart";
import Guarantee from './Guarantee';
import ReactPixel from "react-facebook-pixel";

interface MosqiBlockProps {
    product: Product;
}
const MosqiBlock: FC<MosqiBlockProps> = ({product}) => {
    const t = useTranslations("fe.productMosqiBlock");
    const {isVisible} = useVisibleFloatingCartStore();
    // 📆 Calcul des dates de livraison
    const today = new Date();
    const deliveryStart = addDays(today, 7);
    const deliveryEnd = addDays(today, 10);

    // 🗓️ Formatage des dates (mois abrégé + jour)
    const formattedDeliveryStart = format(deliveryStart, 'MMM d');
    const formattedDeliveryEnd = format(deliveryEnd, 'd');

    useEffect(() => {
        ReactPixel.track('ViewContent', {
            content_ids: [product.id],
            content_name: product.title,
            content_type: 'product',
            value: product.priceRange.minVariantPrice.amount,
            currency: 'EUR'
        });
    }, [product]);

    return (
        <div className='relative'>
            <div className="sticky top-0 w-full z-[150]">
                <AnnouncementBar className='bg-primary text-white' iconClassName='text-white' />
                <NavBar />
            </div>
            <div className='bg-[#EEE8FF] pt-4 lg:pt-0 lg:pb-20'>
                <div className={cn('space-y-3 p-4', "lg:hidden")}>
                    <h3 className={cn("text-left text-2xl xs:text-3xl leading-9 font-bold pointer-events-none whitespace-pre-wrap text-foreground", "lg:text-3xl", "xl:text-4xl")}>
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
                       <div className={cn("bg-primary uppercase text-white w-full p-4 flex items-center gap-2 rounded-lg font-bold text-[10px] xs:text-xs")}>
                            <span role="img" aria-label="truck">🚚</span>
                             {t("delivery", { start: formattedDeliveryStart, end: formattedDeliveryEnd })}
                        </div>
                        {/*  <div className="flex items-center bg-secondary rounded p-2 border border-primary text-foreground text-left text-xs font-sans">
                            <div className="flex ml-2 mr-3">
                                <img 
                                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" 
                                    className="w-[22px] h-[22px] rounded-full border-2 border-white object-cover -ml-2 first:ml-0" 
                                    alt="Customer 1" 
                                />
                                <img 
                                    src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-man-avatar-with-circle-frame-vector-ilustration-png-image_6110328.png" 
                                    className="w-[22px] h-[22px] rounded-full border-2 border-white object-cover -ml-2" 
                                    alt="Customer 2" 
                                />
                                <img 
                                    src="https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg" 
                                    className="w-[22px] h-[22px] rounded-full border-2 border-white object-cover -ml-2" 
                                    alt="Customer 3" 
                                />
                            </div>
                            <span className="whitespace-nowrap uppercase font-bold">
                                 {t("trustedBy")}
                            </span>
                        </div> */}
                        <div className="bg-secondary w-full p-3 flex items-center gap-2 rounded-lg font-bold text-[10px] xs:text-xs uppercase text-foreground border border-primary">
                            <span role="img" aria-label="alarm">⏰</span>
                            {t("stockAlert")}
                        </div>
                    </div>
                </div>
            
                <section className={cn(
                    "w-full text-left space-y-6 max-w-screen-xl mx-auto px-4", 
                    "lg:pt-14 xl:px-0 lg:grid lg:grid-cols-2 lg:space-y-0 lg:justify-start lg:gap-10"
                )}>
                    <div className='lg:sticky lg:top-44 self-start'>
                        <ImagesGallery
                            images={product?.images.edges ?? []}
                        />
                    </div>
                    <div>
                        <ProductImage product={product!} formattedDeliveryStart={formattedDeliveryStart} formattedDeliveryEnd={formattedDeliveryEnd} />
                    </div>
                </section>
            </div>
            <StickyBar className='bg-secondary text-foreground h-12' iconClassName='text-foreground' />
            <Mode />
            <BestPlaces />
            <Reviews />
            <MosquitoesKiller />
            <FamilyBenefits />
            <Comparaison />
            <ReviewSummary />
            <FAQ />
            <Guarantee />
            <Footer />
            {/* <WhatsApp /> */}
             {!isVisible && <FloatingBar product={product} />}
        </div>
    );
};

export default MosqiBlock;