"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Mosquitoes from "@/public/images/mosquitoes.avif"
import ProductCTA from "@/public/images/product-cta.jpg"
import { RiVirusFill } from 'react-icons/ri';
import { GiMicroscope } from 'react-icons/gi';
import { TbVirusSearch } from 'react-icons/tb';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const MosquitoesKiller = () => {
    const router = useRouter();
    return (
         <section className={cn("bg-white px-6 w-full relative py-10 mx-auto text-center", "lg:py-20 lg:px-6", "xl:px-0")}>
            <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8'>
              <h3 className="text-[23px] leading-9 xl:text-4xl font-bold pb-4">
                  Why You Must Act Now <br className='lg:hidden' />Against Mosquitoes
              </h3>
              <div className={cn("space-y-6 xl:grid xl:grid-cols-2 xl:items-center xl:text-left xl:justify-between xl:space-y-0 xl:gap-6")}>
                <Image 
                  src={Mosquitoes.src} 
                  alt="Image of card" 
                  className={cn("rounded-3xl object-cover", "xl:max-w-2xl")} 
                  width={Mosquitoes.width} 
                  height={Mosquitoes.height}
                />
                <div className={cn("space-y-2 xl:space-y-4")}>
                  <h3 className="text-xl xl:text-3xl font-bold text-primary">
                      The Chilling Truth
                  </h3>
                  <p className={cn("text-[13px] leading-6", "xl:text-base")}>
                      Every year, <strong>mosquitoes silently kill more people</strong> than any other animal on Earth. They are not just an annoyance—they are a <strong>deadly, global threat</strong>. While you read this, <strong>someone, somewhere, is being infected</strong> with a mosquito-borne disease that could change their life forever. This is not just a problem for tropical countries: <strong>the risk is everywhere</strong>. <strong>No one is truly safe</strong>.
                  </p>
                  <div className={cn("space-y-4 py-6", "xl:grid xl:grid-cols-2 xl:gap-2 xl:items-start xl:space-y-0 lx:py-0")}>
                      {[
                      {
                          icon: <RiVirusFill className='text-foreground' size={28} />, 
                          title: "1 Million Deaths Yearly",
                          content: "Mosquitoes kill over a million people each year—more than any other animal. Deadly diseases spread fast.",
                      },
                      {
                          icon: <GiMicroscope className='text-foreground' size={28} />,
                          title: "600,000 Malaria Deaths",
                          content: "Malaria took 600,000 lives last year, mostly children and pregnant women. Every minute, a child dies.",
                      },
                      {
                          icon: <TbVirusSearch className='text-foreground' size={28} />,
                          title: "Dengue Outbreak: 13M Cases",
                          content: "Dengue is exploding worldwide, with 13 million cases in 2024. New regions face outbreaks every year.",
                      },
                      {
                          icon: <MdOutlineTravelExplore className='text-foreground' size={28} />,
                          title: "New Viruses, New Risks",
                          content: "Mosquitoes adapt fast—climate change and travel bring new viruses and risks everywhere.",
                      },
                    ].map((data, i) => (
                      <div key={i} className={cn("bg-background border h-full border-secondary text-left rounded-3xl space-y-2 p-6 shadow-sm")}>
                          <div className={cn("p-2 bg-secondary rounded-xl flex justify-center items-center w-max")}>
                              {data.icon}
                          </div>
                        <div className={cn("space-y-1 pt-2")}>
                          <h3 className={cn("text-xl font-semibold")}>{data.title}</h3>
                          <p className={cn("text-[13px] leading-6", "xl:text-base")}>{data.content}</p>
                        </div>
                      </div>   
                    ))}
                  </div>
                </div>
              </div>
              <div className={cn("space-y-6 xl:grid xl:grid-cols-2 xl:items-center xl:text-left xl:justify-between xl:space-y-0 xl:gap-6")}>
                <Image src={ProductCTA.src} alt="Image of card" className={cn("order-1 lg:order-2 rounded-3xl object-cover", "xl:max-w-2xl")} width={ProductCTA.width} height={ProductCTA.height} />
                <div className={cn("space-y-4 order-2 lg:order-1 xl:text-left xl:pr-6")}>
                  <h3 className="text-xl xl:text-3xl font-bold text-primary">
                      Don’t Wait for Tragedy to Strike.
                  </h3>
                  <p className={cn("text-[13px] leading-6 pb-4", "xl:text-base")}>
                      Mosquitoes are a daily, <strong>silent pandemic</strong>—one that doesn’t make headlines, but <strong>claims lives every single day</strong>. <strong>No home, no child, no family is immune.</strong> Protect your loved ones with <strong>MosqiBlock</strong>—your shield against the world’s deadliest animal. Because <strong>prevention is the only real cure</strong>.
                  </p>
                  <button
                      className={cn(
                        "py-4 px-2 lg:px-6 rounded-xl bg-primary hover:bg-secondary text-white font-medium text-base border-t w-full",
                        "hover:bg-gradient-to-tr",
                        "lg:w-auto"
                    )}
                    onClick={() => router.push('/products/mosqiblock/#bundles')} 
                    >
                      <p className={cn("uppercase")}>Protect My Family Now</p>
                  </button>
                </div>
              </div>
          </div>
        </section>
    );
};

export default MosquitoesKiller;