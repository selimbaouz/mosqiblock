"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useTranslations } from "next-intl";

const Benefits = () => {
  const t = useTranslations("fe.mode");
 const benefitsProductData = t.raw("benefitsProductData") as { title: string; content: string }[];
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const leftBenefits = benefitsProductData.slice(0, 3);
  const rightBenefits = benefitsProductData.slice(3, 6);


  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="px-4">
   <div className="hidden lg:grid grid-cols-3 items-start gap-8 py-16">
      {/* Colonne gauche */}
      <div className="flex flex-col items-start gap-8">
        {leftBenefits.map((benefit, idx) => (
          <div key={idx} className="max-w-xs text-left">
            <h3 className={cn("text-xs font-bold text-primary mb-2", "xl:text-base")}>{benefit.title}</h3>
            <p className={cn("text-sm text-gray-700", "xl:text-lg")}>{benefit.content}</p>
          </div>
        ))}
      </div>
      {/* Image centrale */}
      <div className="flex justify-center items-center">
        <Image
          src="/images/product_mosqitoes.png"
          alt="MosqiBlock Product"
          width={350}
          height={350}
          className="mx-auto"
        />
      </div>
      {/* Colonne droite */}
      <div className="flex flex-col items-end gap-8 pl-8">
        {rightBenefits.map((benefit, idx) => (
          <div key={idx} className="max-w-xs text-left">
            <h3 className={cn("text-xs font-bold text-primary mb-2", "xl:text-base")}>{benefit.title}</h3>
            <p className={cn("text-sm text-gray-700", "xl:text-lg")}>{benefit.content}</p>
          </div>
        ))}
      </div>
    </div>
      <div
        className={cn(
          "relative space-y-10 text-center mx-auto text-2xl font-bold px-4", "lg:hidden"
        )}
      >
        <Image
          src="/images/product_mosqitoes.png"
          alt="Image of product"
          className="w-auto mx-auto"
          width={736}
          height={736}
        />
        <Carousel
          setApi={setApi}
          className={cn("w-full cursor-pointer mx-auto pt-4")}
        >
          <CarouselContent>
            {benefitsProductData.map((data, index) => (
              <CarouselItem key={index} className="space-y-1">
                <h3 className={cn("text-xs font-bold uppercase text-primary")}>
                  {data.title}
                </h3>
                <p className={cn("text-sm font-normal leading-6")}>{data.content}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className={cn("flex items-center justify-center gap-2 w-full")}>
          {benefitsProductData.map((_, index) => (
            <div
              key={index}
              className={cn(
                "rounded-full w-4",
                "xl:w-10",
                "3xl:w-14",
                current - 1 === index
                  ? "border border-primary"
                  : "bg-white border border-secondary",
              )}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;