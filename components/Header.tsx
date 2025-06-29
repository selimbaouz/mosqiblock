"use client";
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import HeaderImg from '@/public/images/header.png';
import ImageLoader from './ImageLoader';
import GetRatings from '@/lib/fn';
import Image from 'next/image';
import Icon1 from "@/public/images/peace.png";
import Icon2 from "@/public/images/safe.png";
import Icon3 from "@/public/images/comfort.png";
import Icon4 from "@/public/images/soutient.png";

const Header = () => {
    return (
        <header className={cn('relative w-full mx-auto')}>
            <ImageLoader
                src={HeaderImg ?? ""}
                alt='Main Images'
                className={cn('h-full w-full object-cover', "lg:h-[90vh]")}
                width={397}
                height={595}
            />
            {/* Overlay noir semi-transparent */}
            <div className="absolute inset-0 bg-black/70 z-10" />
            {/* Contenu centré */}
            <div className={cn(
                "absolute inset-0 flex flex-col justify-center items-center z-20 text-center space-y-6"
            )}>
                <div className={cn("space-y-2 mx-auto w-full flex flex-col justify-center items-center px-4")}>
                    <GetRatings value={4.7} className={cn("text-base sm:text-md text-white", "md:text-lg", "xl:text-lg")} />
                    <p className={cn("text-sm text-white font-light", "lg:text-base")}>4.7 | 1000+ Satisfied customers</p>
                </div>
                <h1 className={cn(
                    'font-bold text-gray-100 drop-shadow-lg',
                    "text-2xl leading-tight md:text-4xl md:leading-[1.2] lg:text-5xl xl:text-6xl xl:leading-tight 3xl:text-8xl 3xl:leading-snug"
                )}>
                    Say Goodbye to Mosquitoes, <br className={cn("hidden", "lg:block")}/>Enjoy Your Evenings in Peace
                </h1>
                <p className={cn(
                    "px-10 text-sm text-white font-light",
                    "lg:text-base lg:max-w-2xl xl:text-lg lg:pb-4"
                )}>
                    The safe, effective, chemical-free solution to protect your children and loved ones from mosquitoes.
                </p>
                <Button className={cn(
                    "bg-primary px-[60px] py-[24px] rounded-full text-background text-xs font-medium w-max sm:text-sm 3xl:text-lg hover:bg-primary/80"
                )}
                    asChild
                >
                    <Link href={"/products/mosqiblock"}>
                        Try MosqiBlock
                    </Link>
                </Button>
                <div className={cn("grid grid-cols-2 items-center gap-3 justify-center pt-4", "lg:flex lg:items-center lg:gap-6 lg:pt-20")}>
                    {[
                        {
                            img: Icon1,
                            title: "Instant Peace",
                        },
                         {
                            img: Icon2,
                            title: "Family Safe",
                        },
                         {
                            img: Icon3,
                            title: "Pure Comfort",
                        },
                         {
                            img: Icon4,
                            title: "Total Freedom",
                        },
                    ].map((data, index) => (
                        <div key={index} className={cn("flex items-center gap-2")}>
                            <div className={cn("bg-tertiary flex justify-center items-center p-0.5 rounded-full w-6 lg:w-10")}>
                                <Image src={data.img.src} alt="icon" width={data.img.width} height={data.img.height}     />
                            </div>
                            <p className={cn("text-white text-xs font-light", "lg:text-base")}>{data.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
