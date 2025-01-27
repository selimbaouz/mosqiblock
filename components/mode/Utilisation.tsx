"use client";

import { productInstructionSelected, selectInstructionData } from '@/data';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import ImageLoader from '../ImageLoader';

const Utilisation = () => {
        const [selected, setSelected] = useState(0);
    return (
        <div className={cn("items-center max-w-4xl mx-auto space-y-10 lg:space-y-20")}>
            <div className={cn("grid grid-cols-2 xs:flex gap-2 items-center justify-center")}>
                {selectInstructionData.map((data, index) => (
                    <div key={index} className={cn("")}>
                        <ImageLoader
                            src={data.imgSrc ?? ""}
                            alt={data.altSrc} 
                            className={cn("cursor-pointer transition-opacity size-full mx-auto", "lg:size-44", selected === index ? "opacity-100" : "opacity-50")}
                            width={data.width}
                            height={data.height}
                            onClick={() => setSelected(index)}
                        />
                        <h6 className={cn("text-white font-medium text-lg")}>{data.title}</h6>
                    </div>
                ))}
            </div>
            <div>
                <p className={cn("text-center mx-auto text-white rounded-2xl px-6 max-w-xl text-sm", "lg:text-lg")}>
                    {productInstructionSelected(selected).content}
                </p>
            </div>
        </div>
    );
};

export default Utilisation;