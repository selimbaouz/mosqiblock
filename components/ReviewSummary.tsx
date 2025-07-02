"use client";

import GetRatings from "@/lib/fn";
import { cn } from "@/lib/utils";
import { FaCircleCheck } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Avis1 from "@/public/images/avis/avis1.avif";
import Avis2 from "@/public/images/avis/avis2.avif";
import Avis3 from "@/public/images/avis/avis3.avif";
import Avis9 from "@/public/images/avis/avis9.avif";
import Avis11 from "@/public/images/avis/avis11.avif";
import Avis12 from "@/public/images/avis/avis12.webp";
import Avis5 from "@/public/images/avis/avis5.avif";
import Avis10 from "@/public/images/avis/avis10.avif";
import Avis7 from "@/public/images/avis/avis7.avif";
import Image from "next/image";

// Ratings breakdown
const ratings = [
  { stars: 5, count: 65 },
  { stars: 4, count: 15 },
  { stars: 3, count: 4 },
  { stars: 2, count: 1 },
  { stars: 1, count: 1 },
];

const totalReviews = ratings.reduce((acc, r) => acc + r.count, 0);
const averageRating = Math.round(
  (ratings.reduce((acc, r) => acc + r.stars * r.count, 0) / totalReviews) * 10
) / 10;

export default function ReviewSummary() {
  const t = useTranslations("fe.reviewSummary");
  const reviews = t.raw("reviews") as { name: string; title: string; content: string }[];
  const reviewImages = [Avis1, Avis2, Avis3, Avis10, Avis5, Avis7, Avis9, Avis11, Avis12];
  const reviewsNotes = [5, 4.7, 5, 5, 4.5, 4.3, 5, 4.7, 5];

  return (
    <div className={cn("bg-white px-4 py-10 rounded-md")}>
       <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8 flex flex-col gap-10 items-center'>
          {/* Average & Stars */}
          <div className={cn("flex flex-col items-center text-center w-full", "xl:space-y-1")}>
            <h2 className={cn("text-[23px] font-bold mb-1", "xl:text-4xl")}>{t("customerReviews")}</h2>
            <p className="text-xl font-bold xl:text-2xl">{averageRating}/5</p>
            <GetRatings value={averageRating} className={cn("text-lg sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-xl")} />
            <p className={cn("text-sm text-gray-500 mt-1 font-medium", "xl:text-lg")}>
              {t("basedOnReviews", { count: totalReviews })}
            </p>
          </div>

          {/* Rating Breakdown */}
          <div className={cn("flex flex-col w-full lg:max-w-screen-sm gap-2 px-10 pb-4", "xl:px-0")}>
            {ratings.map(({ stars, count }) => {
              const percent = (count / totalReviews) * 100;
              return (
                <div key={stars} className={cn("flex items-center text-sm", "xl:text-base")}>
                  <GetRatings value={stars} className={cn("text-lg sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-xl")} />
                  <div className="flex-1 mx-2 bg-gray-200 rounded h-2 relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-[#F3974B]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <span className="w-6 text-right">{count}</span>
                </div>
              );
            })}
          </div>

          {/* Avis clients */}
          <div className="flex-1 w-full">
            <div className={cn("flex flex-col gap-4", "xl:grid xl:grid-cols-3 xl:items-start")}>
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-background border h-full border-secondary rounded-xl shadow-sm"
                >
                  <Image src={reviewImages[i].src} alt="img of reviews" width={reviewImages[i].width} height={reviewImages[i].height} className={cn("rounded-tl-xl rounded-tr-xl w-full h-64")} />
                  <div className={cn("p-4")}>
                    <div className="flex items-center gap-0.5 mb-1">
                      <span className="font-semibold mr-1">{r.name}</span>
                      <div className="p-1">
                          <FaCircleCheck className={cn("text-green-500 text-sm", "xl:text-base", "3xl:text-xl")} />
                      </div>
                      <p className={cn("text-xs text-green-500 font-bold", "xl:text-sm", "3xl:text-lg")}>{t("verifiedPurchase")}</p>
                    </div>
                      <GetRatings value={reviewsNotes[i]} className={cn("text-lg sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-sm")} />
                      <div className="w-full h-[0.1px] my-4 bg-secondary"/>
                      <div className="font-bold mb-1">{r.title}</div>
                      <div className="text-sm text-gray-700">{r.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       </div>
    </div>
  );
}
