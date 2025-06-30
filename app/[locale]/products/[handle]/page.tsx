import { redirect } from 'next/navigation';
import { getHandleOfProduct, getMenu } from '@/data/shopify';
import MosqiBlock from '@/components/MosqiBlock';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    const product = await getHandleOfProduct(params.handle);
    const menu = await getMenu("main-menu");
    const footerMenu = await getMenu("footer");
    
    if(!product) {
        redirect('/')
    }

    return (
        <MosqiBlock menu={menu} footerMenu={footerMenu} product={product} />
    );
};