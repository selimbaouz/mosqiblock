"use client";
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Image from 'next/image';
import GetRatings from '@/lib/fn';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImQuotesRight } from "react-icons/im";
import { useTranslations } from "next-intl";
import Avis1 from "@/public/images/avis/avis1.avif";
import Avis2 from "@/public/images/avis/avis2.avif";
import Avis3 from "@/public/images/avis/avis3.avif";

export function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const t = useTranslations("fe.reviews");
  const reviewsImages = [Avis1, Avis2, Avis3];
  const reviews = t.raw("items") as {
    author: string;
    score: number;
    title: string;
    content: string;
  }[];

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  const scrollPrev = () => api && api.scrollPrev();
  const scrollNext = () => api && api.scrollNext();

  /* const scrollTo = (idx: number) => api && api.scrollTo(idx); */

  return (
    <section className={cn("px-6 bg-tertiary w-full relative py-10 text-center text-white", "lg:py-20 lg lg:px-6", "xl:px-0")}>
      <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8'>
        <h3 className="text-[23px] leading-9 xl:text-4xl font-bold xl:pb-4">
          {t("sectionTitle")} <br className="lg:hidden"/>{t("sectionSecondTitle")}
        </h3>

        {/* Desktop: grid 3 colonnes */}
        <div className={cn("hidden lg:grid grid-cols-3 items-start gap-4")}>
          {reviews.map((review, index) => (
            <div key={index} className="space-y-2 xl:space-y-4">
              <div className="relative w-full aspect-[1420/1065] rounded-2xl overflow-hidden">
                <Image
                  src={reviewsImages[index].src}
                  alt="image of review"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 400px, 100vw"
                  priority={index === 0}
                />
              </div>
              <div className={cn("flex justify-center")}>
                <GetRatings value={review.score} className={cn("text-lg sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-lg")} />
              </div>
              <p className={cn("font-normal leading-8", "xl:text-lg")}>{`"${review.title}"`}</p>
              <p className={cn("text-sm font-normal leading-tight", "xl:text-base")}>{`"${review.content}"`}</p>
              <p className={cn("text-xs font-semibold mt-2", "xl:text-sm")}>- {review.author}</p>
            </div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <Carousel setApi={setApi} className={cn("lg:hidden w-full cursor-pointer mx-auto pt-4")}>
          <CarouselContent className="-mx-2 flex pl-2 h-auto"> {/* -mx-2 et pl-2 pour voir la suivante */}
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="space-y-4 pr-1 flex-[0_0_90%]">
                <div className={cn("relative")}>
                  <div className="relative w-full aspect-[1420/1895] h-[350px] rounded-2xl overflow-hidden">
                    <Image
                      src={reviewsImages[index].src}
                      alt="image of review"
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className={cn("bg-white rounded-full p-3 flex justify-center items-center absolute -bottom-5 z-50 right-6")}>
                    <ImQuotesRight className={cn("text-foreground text-2xl")} />
                  </div>
                </div>
                <div className={cn("flex justify-center pt-4")}>
                  <GetRatings value={review.score} className={cn("text-lg sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-sm")} />
                </div>
                <p className="leading-6 font-bold">{`"${review.title}"`}</p>
                <p className={cn("text-sm font-normal leading-tight", "xl:text-base")}>{`"${review.content}"`}</p>
                <p className="text-xs font-semibold mt-2">- {review.author}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className={cn("flex items-center justify-center gap-2 w-full pt-4", "lg:hidden")}>
          <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Image précédente"
              className={cn(
                "z-10",
                !canScrollPrev ? "opacity-50 cursor-not-allowed" : "hover:bg-tertiary"
              )}
              type="button"
            >
              <ChevronLeft className={cn("size-4")} />
          </button>
            {reviews.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-full w-4",
                  "xl:w-10",
                  "3xl:w-14",
                  current - 1 === index
                    ? "border border-white"
                    : "bg-white border border-secondary",
                )}
              ></div>
            ))}
            <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Image suivante"
                className={cn(
                  "z-10",
                  !canScrollNext ? "opacity-50 cursor-not-allowed" : "hover:bg-tertiary"
                )}
                type="button"
              >
            <ChevronRight  className={cn("size-4")} />
              </button>
          </div>
      </div>
    </section>
  );
}
