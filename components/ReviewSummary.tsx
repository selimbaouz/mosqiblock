"use client";

import GetRatings from "@/lib/fn";
import { cn } from "@/lib/utils";
import { FaCircleCheck } from "react-icons/fa6";
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
  { stars: 5, count: 5372 },
  { stars: 4, count: 2876 },
  { stars: 3, count: 6 },
  { stars: 2, count: 3 },
  { stars: 1, count: 1 },
];
const totalReviews = ratings.reduce((acc, r) => acc + r.count, 0);
const averageRating = Math.round(
  (ratings.reduce((acc, r) => acc + r.stars * r.count, 0) / totalReviews) * 10
) / 10;

// Avis clients
const reviews = [
  {
    productImg: Avis1,
    name: "Sarah J.",
    note: 5,
    title: "Outstanding Product",
    content:
      "No more mosquitoes! This tool really helped me out during my camping trip last summer. It killed all the bugs and I got to enjoy the outside without getting any bites.",
  },
  {
    productImg: Avis2,
    name: "Michael R.",
    note: 4.7,
    title: "Best Purchase",
    content:
      "I was pleasantly surprised after using this mosquito lamp. I never expected it to be this effective and powerful. And the battery lasted for ages, so i could turn it on and simply forget all about this lamp and mosquitoes. I highly recommend this tool, it’s much better than other alternatives.",
  },
  {
    productImg: Avis3,
    name: "Joshua M.",
    note: 5,
    title: "Worth the money",
    content:
      "Received this MosqiShock tool super fast and it perfectly satisfied my needs and worked just as promised. I would recommend this lamp to everyone this summer, it’s very effective against mosquitoes.",
  },
  {
    productImg: Avis10,
    name: "Emily P.",
    note: 5,
    title: "10/10 Protection",
    content:
      "Before using this MosqiShock lamp, i’ve tried many different mosquito repellents. From candles, to sprays, none was strong enough to combat the annoying bugs. However, this one, was a real shocker! It was super effective, had no unpleasant odors, and lasted for ages. And it’s so much more environmentally friendly – just recharge the battery and let it do it’s magic again.",
  },
  {
    productImg: Avis5,
    name: "Olivia J.",
    note: 4.5,
    title: "It’s Irreplaceable",
    content:
      "No matter where I go, whether it’s a weekend camping trip or a night fishing by the lake, I always pack this mosquito lamp with me. It’s super tiny, fitting easily into my backpack, yet surprisingly powerful and reliable at getting rid of pests. I’ve noticed a huge difference in the number of bites I get, and it’s been a total relief not having to swat mosquitoes all the time. Plus, it’s so easy to use—just turn it on and it does its magic. Absolutely love it and wouldn’t head outdoors without it!",
  },

  {
    productImg: Avis7,
    name: "Ethan L.",
    note: 4.3,
    title: "Powerful bug control",
    content:
      "Mosquitoes are a real problem here… I truly believe that they have mutated to be resilient to regular sprays or candles… Then i tried this lamp, and like magic the bugs were gone. I was mindblown… How quickly they all disappeared, and all i had to do was clean up their tiny bodies away and recharge the battery of this lamp to allow it to continue eradicating those bloodsuckers.",
  },
  {
    productImg: Avis9,
    name: "Ava M.",
    note: 5,
    title: "Super easy to use",
    content:
      "I’ve been using this mosquito-killing lamp for a while now and loved it so much that I decided to get one for my parents. They were always complaining about mosquitoes constantly interrupting their sleep, especially during the humid summer nights. When I gave them this lamp, my dad was immediately impressed—he couldn’t believe how easy it was to set up and how silently it worked.. It’s been such a relief for them both.",
  },
  {
    productImg: Avis11,
    name: "Sophia G.",
    note: 4.7,
    title: "Best Mosquito Controller",
    content:
      "I love that this lamp doesn’t use any toxins or chemicals, making it a perfect choice for my family and me. It’s so much better for the environment, and I feel good knowing I’m not releasing harmful substances into the air we breathe. Plus, it’s reusable, not like those one-time candles.",
  },
  {
    productImg: Avis12,
    name: "Connie E.",
    note: 5,
    title: "Best zapper hands down",
    content:
      "This zapper crushes the competition, no doubt about it. My family won’t live without it now.",
  },
];

export default function ReviewSummary() {
  return (
    <div className={cn("bg-white px-4 py-10 rounded-md")}>
       <div className='max-w-screen-xl mx-auto space-y-6 lg:space-y-4 xl:space-y-8 flex flex-col gap-10 items-center'>
          {/* Average & Stars */}
          <div className={cn("flex flex-col items-center text-center w-full", "xl:space-y-1")}>
            <h2 className={cn("text-[23px] font-bold mb-1", "xl:text-4xl")}>Customer Reviews</h2>
            <p className="text-xl font-bold xl:text-2xl">{averageRating}/5</p>
            <GetRatings value={averageRating} className={cn("text-lg sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-xl")} />
            <p className={cn("text-sm text-gray-500 mt-1 font-medium", "xl:text-lg")}>
              Based on {totalReviews} reviews
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
                  <Image src={r.productImg.src} alt="img of reviews" width={r.productImg.width} height={r.productImg.height} className={cn("rounded-tl-xl rounded-tr-xl w-full h-64")} />
                  <div className={cn("p-4")}>
                    <div className="flex items-center gap-0.5 mb-1">
                      <span className="font-semibold mr-1">{r.name}</span>
                      <div className="p-1">
                          <FaCircleCheck className={cn("text-green-500 text-sm", "xl:text-base", "3xl:text-xl")} />
                      </div>
                      <p className={cn("text-xs text-green-500 font-bold", "xl:text-sm", "3xl:text-lg")}>Verified Purchase</p>
                    </div>
                      <GetRatings value={r.note} className={cn("text-lg sm:text-md text-[#F3974B]", "md:text-lg", "xl:text-sm")} />
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
