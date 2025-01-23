import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import ImageLoader from './ImageLoader';

interface ImageTextProps {
    title: string;
    content: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    inverse?: boolean;
}

const ImageText: FC<ImageTextProps> = ({
    title,
    content,
    src,
    alt,
    width,
    height,
    className,
    inverse
}) => {
    return (
        <section className={cn("w-full bg-background p-4 max-w-screen-xl mx-auto", "lg:py-10 lg:grid lg:grid-cols-2 lg:grid-auto-flow-dense lg:gap-10 lg:items-center lg:justify-between", className)}>
            <div className={cn(inverse ? "lg:order-2" : "lg:order-1")}>
                <ImageLoader
                    src={src ?? ""}
                    alt={alt}
                    className={cn('bg-white h-[20rem] mx-auto w-full rounded-2xl', "xs:h-[26rem]", "md:h-[40rem]", 'xl:rounded-3xl')}
                    width={width}
                    height={height}
                />
            </div>
            <div className={cn(inverse ? "lg:order-1" : "lg:order-2")}>
                <h5 className={cn("font-medium")}>
                    {title}
                </h5>
                <p className={cn("text-sm")}>
                    {content}
                </p>
            </div>
        </section>
    );
};

export default ImageText;