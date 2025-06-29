import Header from "@/components/Header";
import StickyBar from "@/components/navigation/StickyBar";
import NavBar from "@/components/navigation/NavBar";
import { getMenu } from "@/data/shopify";
import { cn } from "@/lib/utils";
import { annoucementData, BenefitsData } from "@/data";
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

export default async function Home() {
  const menu = await getMenu("main-menu");
  const footerMenu = await getMenu("footer");

  return (
    <div>
      <div className={cn("sticky top-0 w-full z-[150]")}>
        <AnnouncementBar data={annoucementData} className='bg-primary text-white' iconClassName='text-white' />
        <NavBar menu={menu} />
      </div>
      <Header />
      <StickyBar stacksData={BenefitsData} className='bg-secondary text-foreground h-12' iconClassName='text-foreground' />
      <ImageText 
        alt="img of product" 
        title="Tired of giving up your nights for mosquitoes?"
       content={`Imagine yourself sleeping soundly, with no buzzing, no itching, no stress.

        Simply place our anti-mosquito lamp next to you, relax... and feel the tranquillity envelop you.

        Thanks to its advanced LED technology, it attracts and eliminates mosquitoes without chemicals, odors or noise.
        Protect the ones you love, and give yourself peace and security every night.`} 
        src={ImgOfProduct.src}
        width={ImgOfProduct.width}
        height={ImgOfProduct.height}
        className={cn("pb-20 text-center", "lg:text-left")}
        classNameButton={cn("mx-auto")}
        titleButton="Show Now"
      />
      <BestPlaces />
      <Reviews />
      <ProductFeatures />
      <ImageText 
        alt="img of product" 
        subtitle="60-Day Trial"
        title="Discover MosqiBlock"
       content={`Protect your home from mosquitoes in just minutes and enjoy peaceful, bite-free nights like never before!

        Try MosqiBlock for 60 days. If you’re not satisfied, you’ll get a 100% refund, no questions asked.`} 
        src={ImgOfProduct2.src}
        width={ImgOfProduct2.width}
        height={ImgOfProduct2.height}
        className={cn("pb-20 pt-10 text-center px-0 bg-foreground text-white", "lg:text-left")}
        classNameButton={cn("mx-auto bg-primary")}
        titleButton="I want to try"
        inverse
      />
      <Comparaison />
      <FAQ />
      <Footer footerMenu={footerMenu} />
    </div>
  );
}
