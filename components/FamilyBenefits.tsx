import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Card1Img from "@/public/images/card1.jpg";
import Card2Img from "@/public/images/card2.jpg";
import Card3Img from "@/public/images/card3.jpg";
import { useTranslations } from "next-intl";

const FamilyBenefits = () => {
  const t = useTranslations("fe.familyBenefits");
  const cards = t.raw("cards") as { title: string; content: string }[];

    return (
       <section className={cn("px-6 bg-background w-full relative py-10 text-center", "lg:py-20 lg:px-6", "xl:px-0")}>
          <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8'>
              <h3 className="text-xl xs:text-[23px] xs:leading-9 xl:text-4xl font-bold text-primary">
                {t("title")} <br className='lg:hidden' />{t("secondTitle")}
              </h3>
              <p className={cn("text-sm leading-6 pb-4", "xl:text-base")}>
                  {t.rich("description", { strong: (chunks) => <strong>{chunks}</strong> })}
              </p>
              <div className={cn("space-y-6 lg:grid lg:grid-cols-3 lg:justify-center lg:items-start lg:gap-4 lg:space-y-0")}>
                {cards.map((data, i) => (
                  <div key={i} className={cn("bg-white shadow-lg h-full text-left rounded-3xl space-y-2")}>
                    <Image src={[Card1Img,Card2Img,Card3Img][i]} alt="Image of card" className={cn("rounded-tl-3xl rounded-tr-3xl")} width={Card1Img.width} height={Card1Img.height} />
                    <div className={cn("px-4 pb-4 pt-2 space-y-1")}>
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