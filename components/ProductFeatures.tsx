import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import Icon1 from "@/public/images/peace.png";
import Icon2 from "@/public/images/safe.png";
import Icon3 from "@/public/images/comfort.png";
import Icon4 from "@/public/images/soutient.png";

const ProductFeatures = () => {
    return (
        <section className={cn("px-4 bg-secondary w-full relative py-10 text-center mx-auto", "lg:px-6 lg:py-20", "xl:px-0")}>
            <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8'>
                <div className={cn("grid grid-cols-2 gap-6 justify-center items-start", "lg:flex lg:justify-around lg:w-full")}>
                    {[
                        {
                            img: Icon1,
                            title: "Pure Peace of Mind",
                            content: "No harsh chemicals, just safe, natural protection for you and your loved ones.",
                        },
                        {
                            img: Icon2,
                            title: "Instant Protection",
                            content: "Advanced UV technology attracts and eliminates mosquitoes in seconds, for immediate relief.",
                        },
                        {
                            img: Icon3,
                            title: "Family Friendly",
                            content: "Safe for children and pets, no toxins, no heat, just peaceful, bite-free nights for the whole family.",
                        },
                        {
                            img: Icon4,
                            title: "Eco-Smart Design",
                            content: "Reusable and sustainable—enjoy endless protection while reducing waste and caring for the planet.",
                        },
                    ].map((data, i) => (
                        <div key={i} className='space-y-4'>
                            <div className={cn("bg-primary flex justify-center items-center rounded-full size-10 lg:size-20 mx-auto p-1")}>
                                <Image src={data.img.src} alt="icon" width={data.img.width} height={data.img.height} />
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