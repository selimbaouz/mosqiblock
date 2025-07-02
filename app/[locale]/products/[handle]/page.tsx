import { redirect } from 'next/navigation';
import { getHandleOfProduct } from '@/data/shopify';
import MosqiBlock from '@/components/MosqiBlock';

export default async function ProductPage({ params }: { params: { handle: string } }) {
    const product = await getHandleOfProduct(params.handle);
    
    if(!product) {
        redirect('/')
    }

    return (
        <MosqiBlock product={product} />
    );
};