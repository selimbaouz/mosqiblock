"use client";

import { cn } from '@/lib/utils';
import React from 'react';
import ImageLoader from '../ImageLoader';

const Utilisation = () => {
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
                Everything you need for instant protection is included: MosqiBlock, a USB charging cable, and a quick start guide. The device uses advanced UV light to attract and trap mosquitoes quietly and safely—no chemicals, no odors. Just plug in, turn on, and enjoy peace of mind, day and night.
            </p>
        </div>
    );
};

export default Utilisation;