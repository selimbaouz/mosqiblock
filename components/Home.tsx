"use client";
import Header from "@/components/Header";
import StickyBar from "@/components/navigation/StickyBar";
import NavBar from "@/components/navigation/NavBar";
import { cn } from "@/lib/utils";
import AnnouncementBar from "@/components/navigation/AnnouncementBar";
import ImageText from "@/components/ImageText";
import ImgOfProduct from "@/public/images/Home.png";
import ImgOfProduct2 from "@/public/images/sections-home.webp";
import { Reviews } from "@/components/Reviews";
import BestPlaces from "@/components/BestPlaces";
import Comparaison from "@/components/Comparaison";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ProductFeatures from "@/components/ProductFeatures";
import { useTranslations } from "next-intl";
/* import WhatsApp from "./navigation/WhatsApp"; */
import Guarantee from "./Guarantee";
import { useEffect } from "react";

const Home = () => {
    const t = useTranslations("fe");

  useEffect(() => {
        fetch('/api/fb-view-content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                eventTime: Math.floor(Date.now() / 1000),
                eventSourceUrl: window.location.href,
                userAgent: navigator.userAgent,
                pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
                content_ids: ['homepage'],      // identifiant générique ou slug
                content_name: 'Homepage',       // titre du contenu
                content_type: 'home',           // type bien explicite
                // value, currency: tu peux les omettre pour la page d'accueil
                fbp: document.cookie.split('; ').find(row => row.startsWith('_fbp='))?.split('=')[1],
            })
        });
    }, []);


    return (
        <div>
            <div className={cn("sticky top-0 w-full z-[150]")}>
                <AnnouncementBar className='bg-primary text-white' iconClassName='text-white' />
                <NavBar />
            </div>
            <Header />
            <StickyBar className='bg-secondary text-foreground h-12' iconClassName='text-foreground' />
            <ImageText 
                alt="img of product"
                title={t("productCTA.title")}
                content={t("productCTA.content")}
                src={ImgOfProduct.src}
                width={ImgOfProduct.width}
                height={ImgOfProduct.height}
                className={cn("pb-20 text-center", "lg:text-left")}
                classNameButton={cn("mx-auto")}
                titleButton={t("productCTA.titleButton")}
            />
            <BestPlaces />
            <Reviews />
            <ProductFeatures />
            <ImageText 
                alt={t('tryProduct.alt')}
                subtitle={t('tryProduct.subtitle')}
                title={t('tryProduct.title')}
                content={t('tryProduct.content')}
                src={ImgOfProduct2.src}
                width={ImgOfProduct2.width}
                height={ImgOfProduct2.height}
                className={cn("pb-20 pt-10 text-center px-0 bg-foreground text-white", "lg:text-left")}
                classNameButton={cn("mx-auto bg-primary")}
                titleButton={t('tryProduct.button')}
                inverse
            />
            <Comparaison />
            <FAQ />
            <Guarantee />
            <Footer />  
            {/* <WhatsApp /> */}
        </div>
    );
};

export default Home;