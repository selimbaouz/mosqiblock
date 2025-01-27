import ProductImage from '@/components/ProductImage';
import TrustFeatures from '@/components/TrustFeatures';
import { benefitsFeelingData } from '@/data';
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
                <NavBar menu={menu} />
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
            <section className={cn("px-4 bg-gradient-to-b from-primary to-secondary w-full relative py-10 space-y-6 text-center mx-auto", "lg:py-20 lg:space-y-10 lg:px-0")}>
                <h3 className={cn("text-2xl font-bold text-white", "lg:text-3xl", "xl:text-4xl")}>Nos avantages</h3>
                <p className={cn("text-sm lg:text-lg max-w-4xl mx-auto text-white")}>Chez Wemom, nous utilisons uniquement des matériaux de haute qualité, sélectionnés pour la sécurité, le confort et la protection des femmes enceintes pendant tout le trajet.</p>
                <div className={cn("py-4 text-background flex flex-col gap-2 items-center justify-center font-medium max-w-screen-xl mx-auto", "grid grid-cols-2", "lg:grid-cols-4")}>
                    {benefitsFeelingData.map((data, index) => (
                        <TrustFeatures
                        key={index}
                        icon={data.icon}
                        title={data.title}
                        />
                    ))}
                </div>
            </section>
            {/* <section className={cn("mx-auto max-w-screen-lg space-y-10 overflow-auto", "lg:py-20")}>
                <h3 className={cn("text-xl lg:text-3xl font-bold text-center")}>Pour une grossesse sereine</h3>
                <div className={cn("flex justify-center items-start flex-nowraph-full gap-4")}>

                    {[
                        {
                            imgSrc: product?.images.edges[0].node.originalSrc,
                            imgAlt: product?.images.edges[0].node.altText,
                            title: "Wave Pad",
                            content: "Reduces localized fat and inches, tones skin, and diminishes stretch marks."
                        },
                        {
                            imgSrc: product?.images.edges[1].node.originalSrc,
                            imgAlt: product?.images.edges[1].node.altText,
                            title: "Ion Pad",
                            content: "Infused with tourmaline dots to effectively deliver firmer skin and inch loss."
                        },
                        {
                            imgSrc: product?.images.edges[2].node.originalSrc,
                            imgAlt: product?.images.edges[2].node.altText,
                            title: "Pro Contour Pads",
                            content: "3-in-1 set with a sculpting white pad, skin-tightening blue pad and a smoothing orange pad."
                        },
                    ].map((data, index) => (
                        <div key={index} className={cn("space-y-2")}>
                            <ImageLoader
                                src={data.imgSrc ?? ""}
                                alt={data.imgAlt}
                                className={cn('mx-auto', "lg:rounded-lg h-full")}
                                width={product?.images.edges[1].node.width}
                                height={product?.images.edges[1].node.height}
                            />
                            <div className={cn("text-left space-y-2")}>
                                <h5 className={cn("text-xl font-bold")}>{data.title}</h5>
                                <p className={cn("text-base")}>{data.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section> */}
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