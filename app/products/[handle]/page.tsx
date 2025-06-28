import ProductImage from '@/components/ProductImage';
import { cn } from '@/lib/utils';
import ImagesGallery from '@/components/ImagesGallery';
import { redirect } from 'next/navigation';
import { getHandleOfProduct, getMenu } from '@/data/shopify';
import StickyBar from '@/components/navigation/StickyBar';
import NavBar from '@/components/navigation/NavBar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer'
import { stacksData, BenefitsData } from "@/data";
import Mode from '@/components/mode';
import BestPlaces from '@/components/BestPlaces';
import { Reviews } from '@/components/Reviews';
import FamilyBenefits from '@/components/FamilyBenefits';
import MosquitoesKiller from '@/components/MosquitoesKiller';
import Comparaison from '@/components/Comparaison';
import ReviewSummary from '@/components/ReviewSummary';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    
    const product = await getHandleOfProduct(params.handle);
    const menu = await getMenu("main-menu");
    const footerMenu = await getMenu("footer");
    
    if(!product) {
        redirect('/')
    }

    return (
        <div className='relative'>
            <div className="sticky top-0 w-full z-50">
                <StickyBar stacksData={stacksData} className='bg-primary text-white' iconClassName='text-white' />
                <NavBar menu={menu} />
            </div>
            <div className='bg-[#EEE8FF] pt-2 lg:pt-0 lg:py-10'>
                <div className={cn('space-y-3 p-4', "lg:hidden")}>
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
            
                <section className={cn(
                    "w-full text-left space-y-6 max-w-screen-xl mx-auto px-4", 
                    "p-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:justify-start lg:gap-10"
                )}>
                    <ImagesGallery
                        images={product?.images.edges ?? []}
                    />
                    <div>
                        <ProductImage product={product!} />
                    </div>
                </section>
            </div>
            <StickyBar stacksData={BenefitsData} className='bg-secondary text-foreground h-12' iconClassName='text-foreground' />
            <Mode />
            <BestPlaces />
            <Reviews />
            <MosquitoesKiller />
            <FamilyBenefits />
            <Comparaison />
            <ReviewSummary />
            <FAQ />
            <Footer footerMenu={footerMenu} />
        </div>
    );
};