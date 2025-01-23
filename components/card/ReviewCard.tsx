import GetRatings from "@/lib/getRating";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";
import ImageLoader from "../ImageLoader";

const ReviewCard = ({
    score,
    image,
    name,
    content,
  }: {
    score?: number;
    image: StaticImageData;
    name: string;
    content: string;
  }) => {
    return (
        <div className="relative shadow-md shadow-black p-[1px] bg-gradient-to-b from-[#111219] to-[#2D3748] rounded-3xl">
            <div
                className={cn(
                    "relative w-80 h-full cursor-pointer overflow-hidden text-left rounded-3xl bg-gradient-to-b from-[#171923] to-[#11121A]",
                    "md:w-96",
                    "xl:min-h-56"
                )}
            >
                <div>
                    <ImageLoader src={image} alt="" width={1080} height={1080} className={cn("w-full rounded-t-3xl object-fill", "md:h-[350px]")} />
                </div>
                <div className="p-6 space-y-4">
                    <div className={cn("space-y-2")}>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h6 className={cn("text-lg font-medium text-white", "md:text-2xl", "xl:text-xl")}>
                                    {name}
                                </h6>
                                    <AiOutlineCheckCircle className="text-foreground text-xl" />
                            </div>
                            <GetRatings value={score ?? 0} className={cn("text-sm text-white", "md:text-lg", "xl:text-base")} />
                        </div>
                        
                    </div>
                    <p className={cn("text-base font-light text-white")}>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;