import { cn } from '@/lib/utils';
import React from 'react';
import { GiCampingTent } from 'react-icons/gi';
import { MdBalcony } from 'react-icons/md';
import { RiHomeSmile2Fill } from 'react-icons/ri';
import { PiAirplaneTakeoffFill, PiPicnicTableBold } from "react-icons/pi";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const BestPlaces = () => {
    return (
        <section className={cn("px-4 bg-secondary w-full relative py-10 text-center mx-auto", "lg:px-6", "xl:px-0")}>
            <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8'>
                <h3 className="text-[23px] leading-9 xl:text-4xl font-bold text-tertiary">
                    Best Places to Use
                </h3>
                <div className={cn("grid grid-cols-3 gap-2 justify-center items-center", "lg:flex lg:justify-around lg:w-full")}>
                    {[
                        {
                            icon: RiHomeSmile2Fill,
                            content: "At Home",
                        },
                        {
                            icon: GiCampingTent,
                            content: "Camping/Forest",
                        },
                        {
                            icon: MdBalcony,
                            content: "Patio/Balcony",
                        },
                        {
                            icon: PiPicnicTableBold,
                            content: "Picnic/Park",
                        },
                        {
                            icon: HiMiniBuildingOffice2,
                            content: "Office",
                        },
                        {
                            icon: PiAirplaneTakeoffFill,
                            content: "Travel",
                        },
                    ].map((data, i) => (
                        <div key={i} className='py-2 space-y-2'>
                            <div className={cn("p-2 rounded-xl w-max mx-auto")}>
                                <data.icon className={cn('text-4xl mx-auto rounded-2xl text-tertiary')} />
                            </div>
                            <p className={cn("text-[10px] font-bold uppercase", "lg:text-xs", "xl:text-sm")}>{data.content}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default BestPlaces;