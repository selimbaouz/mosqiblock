"use client"

import { ImageProduct } from "@/types/types";
import { cn } from "@/lib/utils";
import React, { FC, useEffect, useState } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import ImageLoader from "./ImageLoader";
import { useTranslations } from "next-intl";
import Leaf from "@/public/images/leaf.png";
import Thunder from "@/public/images/thunder.png";
import Baby from "@/public/images/baby.png";
import Shield from "@/public/images/shield.png";

interface ImagesGalleryProps {
    images: ImageProduct[],
}
const ImagesGallery: FC<ImagesGalleryProps> = ({images}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const t = useTranslations("fe");
  const checkProductTitles = t.raw("checkProduct") as { title: string }[];
  const checkProductImages = [Leaf, Thunder, Baby, Shield];

  // Update button states on carousel events
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onSelect);
    };
  }, [emblaApi]);

  // Go to previous/next slide
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Go to a slide by index (for dots)
  const scrollTo = (idx: number) => emblaApi && emblaApi.scrollTo(idx);

  return (
    <div className={cn("relative w-full flex flex-col gap-3")}>
      {/* Carousel */}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-3xl w-full">
          <div className="flex gap-2">
            {images.map((img, idx) => (
              <div
                className="flex-shrink-0 w-full"
                style={{ minWidth: "100%", minHeight: "100%" }}
                key={idx}
              >
                <ImageLoader
                  src={img.node.originalSrc}
                  alt={img.node.altText || "Image produit"}
                  width={img.node.width}
                  height={img.node.height}
                  className={cn('bg-white h-[20rem] mx-auto w-full rounded-3xl object-fill', "xs:h-[24rem]", "md:h-[40rem]", "lg:h-auto")}
                  draggable={false}
                  priority={idx === 0}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Prev/Next Buttons */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label="Image précédente"
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shadow transition",
            !canScrollPrev ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary"
          )}
          type="button"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Image suivante"
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background shadow transition",
            !canScrollNext ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary"
          )}
          type="button"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
        {/* Dots */}
        <div className="absolute flex justify-center items-center w-full bottom-4 space-x-1 mt-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "rounded-full w-8 py-0.5", "xl:w-10", "3xl:w-14",
                'transition-all duration-200',
                selectedIndex === idx ? 'bg-primary' : 'bg-white border border-primary'
              )}
              onClick={() => scrollTo(idx)}
              aria-label={`Aller à l'image ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
            <ul className={cn("flex justify-between items-stretch gap-2", "xl:justify-around")}>
                {checkProductTitles.map((data, index) => (
                    <li key={index} className={cn("flex flex-col w-full min-h-full bg-secondary rounded-xl gap-2 px-2 py-4 items-center text-center", "lg:px-4 lg:py-6")}>
                        <div className={cn("text-foreground", "lg:p-3")}>
                            <Image src={checkProductImages[index]} alt="" className={cn("w-full h-[40px]")} width={100} height={100} />
                        </div>
                        <p className={cn("text-[10px] font-medium", "lg:text-xs")}>{data.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ImagesGallery;