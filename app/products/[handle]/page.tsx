import ProductImage from '@/components/ProductImage';
import TrustFeatures from '@/components/TrustFeatures';
import { trustsData } from '@/data';
import { cn } from '@/lib/utils';
import ImagesGallery from '@/components/ImagesGallery';
import { redirect } from 'next/navigation';
import { getHandleOfProduct, getMenu } from '@/data/shopify';
import StickyBar from '@/components/navigation/StickyBar';
import NavBar from '@/components/navigation/NavBar';
import ImageText from '@/components/ImageText';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    
    const product = await getHandleOfProduct(params.handle);
    const menu = await getMenu("main-menu");
    /* const footerMenu = await getMenu("footer"); */
    
    if(!product) {
        redirect('/')
    }

    return (
        <div className='relative'>
            <div className="sticky top-0 w-full z-50">
                <StickyBar />
                <NavBar menu={menu} product={product} />
            </div>
            <div className='bg-secondary/0 lg:py-10'>
                <section className={cn(
                    "w-full text-left space-y-6 max-w-screen-xl mx-auto", 
                    "lg:p-6 lg:grid lg:grid-cols-2 lg:items-start lg:space-y-0 lg:justify-start lg:gap-10"
                )}>
                    <ImagesGallery
                        images={product?.images.edges ?? []}
                    />
                    <div className={cn("px-4", "lg:px-0")}>
                        <ProductImage product={product!} />
                    </div>
                </section>
            </div>
            <section className={cn("bg-gradient-to-b from-primary to-secondary w-full relative")}>
                <div className={cn("p-4 text-background flex flex-col gap-2 items-center justify-center font-medium max-w-screen-xl mx-auto py-10", "grid grid-cols-2", "lg:grid-cols-4 lg:py-20")}>
                    {trustsData.map((data, index) => (
                        <TrustFeatures
                        key={index}
                        icon={data.icon}
                        title={data.title}
                        />
                    ))}
                </div>
            </section>
            <ImageText 
                title="Titre 1" 
                content="Pour une grossesse sereine, WeSecure est devenue l’indispensable compagnon de route de toute future maman soucieuse de sa sécurité et de celle de son bébé"
                src={product?.images.edges[1].node.originalSrc}
                alt={product?.images.edges[1].node.altText}
                width={product?.images.edges[1].node.width}
                height={product?.images.edges[1].node.height}
                inverse
            />
            <ImageText 
                title="Titre 1" 
                content="Pour une grossesse sereine, WeSecure est devenue l’indispensable compagnon de route de toute future maman soucieuse de sa sécurité et de celle de son bébé"
                src={product?.images.edges[2].node.originalSrc}
                alt={product?.images.edges[2].node.altText}
                width={product?.images.edges[2].node.width}
                height={product?.images.edges[2].node.height}
            />
            <div className='bg-gray-100 h-96'>

            </div>
            <ImageText 
                title="Titre 1" 
                content="Pour une grossesse sereine, WeSecure est devenue l’indispensable compagnon de route de toute future maman soucieuse de sa sécurité et de celle de son bébé"
                src={product?.images.edges[3].node.originalSrc}
                alt={product?.images.edges[3].node.altText}
                width={product?.images.edges[3].node.width}
                height={product?.images.edges[3].node.height}
            />
        </div>
    );
};