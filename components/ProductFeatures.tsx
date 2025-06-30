import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import Icon1 from "@/public/images/peace.png";
import Icon2 from "@/public/images/safe.png";
import Icon3 from "@/public/images/comfort.png";
import Icon4 from "@/public/images/soutient.png";
import { useTranslations } from 'next-intl';

const Icons = [Icon1, Icon2, Icon3, Icon4];

const ProductFeatures = () => {
    const t = useTranslations("fe");
    const features = t.raw("productFeatures") as { title: string; content: string }[];

    return (
        <section className={cn("px-4 bg-secondary w-full relative py-10 text-center mx-auto", "lg:px-6 lg:py-20", "xl:px-0")}>
            <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8'>
                <div className={cn("grid grid-cols-2 gap-6 justify-center items-start", "lg:flex lg:justify-around lg:w-full")}>
                    {features.map((data, i) => (
                        <div key={i} className='space-y-4'>
                            <div className={cn("bg-primary flex justify-center items-center rounded-full size-10 lg:size-20 mx-auto p-1")}>
                                <Image src={Icons[i].src} alt="icon" width={Icons[i].width} height={Icons[i].height} />
                            </div>
                            <h3 className={cn("text-sm font-bold", "lg:text-base")}>{data.title}</h3>
                            <p className={cn("text-xs", "lg:text-xs lg:px-6", "xl:text-sm")}>{data.content}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ProductFeatures;