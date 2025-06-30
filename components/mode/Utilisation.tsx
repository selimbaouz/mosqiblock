"use client";

import { cn } from '@/lib/utils';
import React from 'react';
import ImageLoader from '../ImageLoader';
import { useTranslations } from 'next-intl';

const Utilisation = () => {
    const t = useTranslations("fe.mode");

    return (
        <div className={cn("items-center mx-auto space-y-4", "lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:space-y-0")}>
            <ImageLoader
                src="/images/utilisations-img.png"
                alt="product in actions" 
                className={cn("cursor-pointer transition-opacity size-full mx-auto", "lg:size-full")}
                width={1536}
                height={1024}
            />
            <p  className={cn("text-sm font-normal leading-6", "lg:text-left lg:text-base")}>
                {t("utilisation")}
            </p>
        </div>
    );
};

export default Utilisation;