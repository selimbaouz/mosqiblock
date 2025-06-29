import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import ImageLoader from './ImageLoader';
import Link from 'next/link';
import { Button } from './ui/button';

interface ImageTextProps {
    subtitle?: string;
    title: string;
    content: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    classNameButton?: string;
    inverse?: boolean;
    titleButton?: string;
}

const ImageText: FC<ImageTextProps> = ({
    subtitle,
    title,
    content,
    src,
    alt,
    width,
    height,
    className,
    classNameButton,
    inverse,
    titleButton
}) => {
    return (
        <section className={cn("bg-background", className)}>
            <div className={cn("p-4 max-w-screen-xl mx-auto flex flex-col gap-4", "lg:py-10 lg:grid lg:grid-cols-2 lg:grid-auto-flow-dense lg:gap-4 lg:items-center lg:justify-between")}>
                <div className={cn(inverse ? "lg:order-2" : "lg:order-1")}>
                    <ImageLoader
                        src={src ?? ""}
                        alt={alt}
                        className={cn('h-[20rem] mx-auto w-full rounded-2xl', "xs:h-[26rem]", "md:h-[40rem]")}
                        width={width}
                        height={height}
                    />
                </div>
                <div className={cn("space-y-4 p-4", "lg:space-y-6 max-w-lg mx-auto", inverse ? "lg:order-1" : "lg:order-2")}>
                    <div className={cn("space-y-2")}>
                        <h6 className={cn("font-light text-base tracking-wide", "lg:text-lg")}>
                            {subtitle}
                        </h6>
                        <h3 className={cn("font-bold text-2xl", "lg:text-4xl")}>
                            {title}
                        </h3>
                    </div>
                    <p className={cn("text-sm whitespace-pre-line pb-2", "lg:text-base")}>
                        {content}
                    </p>
                    <Button className={cn(
                            "bg-primary px-[60px] py-[24px] rounded-full text-background text-xs font-medium w-max sm:text-sm 3xl:text-lg hover:bg-primary/80", classNameButton
                        )}
                            asChild
                        >
                        <Link href={"/products/mosqiblock"}>
                            {titleButton}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ImageText;