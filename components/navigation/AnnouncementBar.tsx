"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, FC } from "react";

interface AnnouncementBarProps {
    data: {
        title: string;
        icon: string;
    }[];
    className?: string;
    iconClassName?: string;
}

const AnnouncementBar: FC<AnnouncementBarProps> = ({data, className, iconClassName}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className={cn("w-full h-10 flex flex-col items-center justify-center font-medium", className)}>
        {data.map((item, i) => (
            <div
                key={i}
                className={`absolute flex items-center gap-2 transition-opacity duration-500 font-bold ${
                    i === index ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className={iconClassName}>{item.icon}</div>
            <span>{item.title}</span>
            </div>
        ))}
    </div>
    );
};

export default AnnouncementBar;