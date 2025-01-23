import { cn } from "@/lib/utils";
import { FC } from "react";

interface TitleContentPairProps {
    title?: string;
    content: string;
    contentBold?: string;
}

const TitleContentPair: FC<TitleContentPairProps> = ({title, content, contentBold}) => {
    return (
        <div className={cn("space-y-8 text-center w-full p-4 max-w-screen-2xl mx-auto")}>
          {title && (
            <h2 className={cn("uppercase font-extrabold text-3xl leading-tight", "md:text-4xl md:leading-snug md:whitespace-pre-line", "xl:text-5xl xl:leading-snug")}>
              {title}
            </h2>
          )}
          <p className={cn("font-regular text-base", "md:text-xl md:whitespace-pre-line", "lg:mx-auto lg:text-base", "xl:text-xl")}>
            {content}{" "}
            <span className="font-bold">{contentBold}</span>
          </p>
        </div>
    );
};

export default TitleContentPair;