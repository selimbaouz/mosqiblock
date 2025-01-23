import { cn } from "@/lib/utils";
import { FC } from "react";

interface StatsListProps {
    title: string;
    content: string;
    titleClassname?: string;
    contentClassname?: string;
}

const StatsList: FC<StatsListProps>= ({
    title, 
    content,
    titleClassname,
    contentClassname
}) => {
    return (
        <div className={cn("space-y-5")}>
            <h3 className={cn("font-bold text-4xl", "lg:text-3xl", "xl:text-4xl", titleClassname)}>
                {title}
            </h3>
            <p className={cn("font-regular text-base", contentClassname)}>
                {content}
            </p>
        </div>
    );
};

export default StatsList;