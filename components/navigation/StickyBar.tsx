import MarqueeStack from "../MarqueeStack";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { MdBedtime, MdFamilyRestroom, MdFlashOn, MdOutlineBackpack, MdOutlineOutdoorGrill } from "react-icons/md";
import { GiChemicalDrop, GiSpeakerOff, GiTreeBranch } from "react-icons/gi";

interface StickyBarProps {
    className?: string;
    iconClassName?: string;
}

const icons = [
       GiSpeakerOff,
       MdOutlineBackpack,
       GiTreeBranch,
       GiChemicalDrop,
       MdFamilyRestroom,
       MdBedtime,
       MdFlashOn,
       MdOutlineOutdoorGrill
];

const StickyBar: FC<StickyBarProps> = ({className, iconClassName}) => {
    const t = useTranslations("fe");
    const benefits = t.raw("benefits") as string[];

    const data = icons.map((Icon, idx) => ({
    icon: Icon,
    title: benefits[idx]
  }));

    return (
        <div className={cn("w-full h-10 flex flex-col items-center justify-center font-medium", className)}>
            <MarqueeStack stack={data} iconClassName={iconClassName ?? ""} />
        </div>
    );
};

export default StickyBar;