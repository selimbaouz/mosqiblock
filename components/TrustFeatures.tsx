import { cn } from "@/lib/utils";
import { FC } from "react";
import { IconType } from "react-icons";

interface TrustFeaturesProps {
    icon: IconType;
    title: string;
    content?: string;
}

const TrustFeatures: FC<TrustFeaturesProps> = ({
    icon: Icon,
    title,
    content,
}) => {
    return (
        <div className={cn("text-center bg-background h-full border shadow-md rounded-2xl p-4 w-full space-y-1 flex flex-col justify-center items-center", "xl:p-8")}>
            <div className={cn("bg-primary rounded-full p-2 mb-2")}>
                <Icon className="size-6 text-white" />
            </div>
            <h6 className={cn("font-medium text-primary")}>
                {title}
            </h6>
            <p className={cn("font-light text-foreground text-sm xs:px-10", "sm:px-0", "md:px-6", "lg:px-20", "xl:px-10")}>
                {content}
            </p>
        </div>
    );
};

export default TrustFeatures;