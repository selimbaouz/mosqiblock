import { cn } from '@/lib/utils';
import React from 'react';
import Img1 from "@/public/images/garantee.png";
import Img2 from "@/public/images/fast_shipping.png";
import Img3 from "@/public/images/customer.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Guarantee = () => {
    const t = useTranslations("fe.guarantee");
    const items = [
        {
            img: Img1,
            title: t("riskFree"),
        },
        {
            img: Img2,
            title: t("shipping"),
        },
        {
            img: Img3,
            title: t("support"),
        },
    ];

    return (
        <div className={cn("bg-tertiary w-full")}>
            <div className={cn("max-w-screen-xl mx-auto flex flex-col lg:grid lg:grid-cols-3 items-center justify-between gap-2 xl:gap-4 px-4 py-10 xl:px-0 g:py-20")}>
                {items.map((data, index) => (
                    <div key={index} className={cn("bg-white rounded-3xl size-full flex flex-col pt-6 justify-center items-center space-y-2")}>
                        <Image src={data.img.src} alt="Icon of guarantee" width={data.img.width} height={data.img.height} className={cn("w-auto h-20 xl:h-32")} />
                        <p className={cn("text-sm text-foreground font-bold py-6", "lg:text-lg", "xl:text-xl")}>{data.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Guarantee;