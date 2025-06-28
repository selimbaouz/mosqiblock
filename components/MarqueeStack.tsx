import Marquee from "./ui/marquee";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { FC } from "react";

interface MarqueeStackProps {
  stack: {
    icon: IconType;
    title: string;
  }[]
  iconClassName: string;
}
const MarqueeStack: FC<MarqueeStackProps> = ({stack, iconClassName}) => {
    return (
        <div className={cn("absolute z-50 flex w-full flex-col items-center justify-center overflow-hidden")}>
          <Marquee pauseOnHover className="[--duration:20s]">
            <div className={cn("flex items-center gap-10 px-3", "xl:gap-20 xl:px-8")}>
              {
                stack && stack.map((data, index) => (
                    <div key={index} className={cn("flex items-center gap-3")}>
                        <data.icon className={cn("text-xl", "lg:text-xl", "2xl:text-2xl", iconClassName)} />
                        <p className={cn("text-sm", "xl:text-base")}>
                            {data.title}
                        </p>
                    </div>
                ))
              }
            </div>
          </Marquee>
        </div>
    );
};

export default MarqueeStack;