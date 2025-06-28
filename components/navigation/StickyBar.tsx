import { IconType } from "react-icons";
import MarqueeStack from "../MarqueeStack";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface StickyBarProps {
    stacksData: {
        icon: IconType;
        title: string;
    }[];
    className?: string;
    iconClassName?: string;
}

const StickyBar: FC<StickyBarProps> = (data) => {
    return (
        <div className={cn("w-full h-10 flex flex-col items-center justify-center font-medium", data.className)}>
            <MarqueeStack stack={data.stacksData} iconClassName={data.iconClassName ?? ""} />
        </div>
    );
};

export default StickyBar;