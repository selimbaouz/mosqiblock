"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState, useEffect, FC, useMemo } from "react";

interface AnnouncementBarProps {
    className?: string;
    iconClassName?: string;
}

const AnnouncementBar: FC<AnnouncementBarProps> = ({className, iconClassName}) => {
    const [index, setIndex] = useState(0);
    const t = useTranslations("fe.announcement");
    
    const data = useMemo(() => [
        { icon: "🦟", title: t("chemicalFree") },
        { icon: "🔋", title: t("usbRechargeable") },
        { icon: "💤", title: t("ultraQuiet") }
    ], [t]);

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