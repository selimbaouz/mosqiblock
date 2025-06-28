import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Card1Img from "@/public/images/card1.jpg";
import Card2Img from "@/public/images/card2.jpg";
import Card3Img from "@/public/images/card3.jpg";

const FamilyBenefits = () => {
    return (
       <section className={cn("px-6 bg-background w-full relative py-10 text-center", "lg:py-20 lg:px-6", "xl:px-0")}>
          <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8'>
              <h3 className="text-[23px] leading-9 xl:text-4xl font-bold text-primary">
                Enjoy Every Moment, <br className='lg:hidden' />Mosquito-Free
              </h3>
              <p className={cn("text-sm leading-6 pb-4", "xl:text-base")}>
                Say goodbye to <strong>bites</strong>, <strong>buzzing</strong>, and <strong>restless nights</strong>. MosqiBlock lets you and your family enjoy <strong>summer evenings</strong>, <strong>peaceful sleep</strong>, and <strong>outdoor fun</strong>, without worrying about <strong>mosquitoes</strong> or <strong>harmful chemicals</strong>. Just turn it on and create a <strong>safe</strong>, <strong>comfortable space</strong> for everyone you love.
              </p>
              <div className={cn("space-y-6 lg:grid lg:grid-cols-3 lg:justify-center lg:items-start lg:gap-4 lg:space-y-0")}>
                {[
                  {
                    image: Card1Img,
                    title: "Sleep Without Worries",
                    content: "Give your children peaceful, uninterrupted nights—no itching, no tears, just sweet dreams for everyone."
                  },
                  {
                    image: Card2Img,
                    title: "Safe for Kids & Pets",
                    content: "No chemicals, no toxins, no risk. MosqiBlock keeps your loved ones safe, naturally, every single night."
                  },
                  {
                    image: Card3Img,
                    title: "Silent Comfort",
                    content: "No buzzing, no zapping—just calming silence for everyone at home, so you can truly relax together."
                  },
                ].map((data, i) => (
                  <div key={i} className={cn("bg-white shadow-lg text-left rounded-3xl space-y-2")}>
                    <Image src={data.image.src} alt="Image of card" className={cn("rounded-tl-3xl rounded-tr-3xl")} width={data.image.width} height={data.image.height} />
                    <div className={cn("p-4 space-y-1")}>
                      <h3 className={cn("text-base font-semibold", "xl:text-lg")}>{data.title}</h3>
                      <p className={cn("text-[13px]", "xl:text-sm")}>{data.content}</p>
                    </div>
                  </div>   
                ))}
              </div>
          </div>
        </section>
    );
};

export default FamilyBenefits;