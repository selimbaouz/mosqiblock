import { redirect } from 'next/navigation';
import { getHandleOfProduct, getMenu } from '@/data/shopify';
import MosqiBlock from '@/components/MosqiBlock';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    const product = await getHandleOfProduct(params.handle);
    const menu = await getMenu("main-menu");
    
    if(!product) {
        redirect('/')
    }

    return (
        <MosqiBlock menu={menu} product={product} />
    );
};