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
import { Menu } from "@/types/types";
import { FC } from "react";
import { useTranslations } from "next-intl";
import WhatsApp from "./navigation/WhatsApp";

interface HomeProps {
    menu: Menu[];
}
const Home: FC<HomeProps> = ({menu}) => {
    const t = useTranslations("fe");

    return (
        <div>
            <div className={cn("sticky top-0 w-full z-[150]")}>
                <AnnouncementBar className='bg-primary text-white' iconClassName='text-white' />
                <NavBar menu={menu} />
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
            <Footer />  
            <WhatsApp />
        </div>
    );
};

export default Home;