import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { FC } from "react";
import Link from "next/link";

interface GradientButtonProps {
    title?: string;
    size?: "fullWidth" | "initial",
    link?: string;
    onClick?: () => void;
}

const GradientButton: FC<GradientButtonProps> = ({
    title = "Découvrir",
    size = "initial",
    link,
    onClick
}) => {
    return (
        <Button className={cn(
            "border-2 border-[#2D3748] bg-gradient-to-b from-background via-background via-50% to-foreground px-[60px] py-[24px] rounded-full text-primary text-base font-medium",
            "hover:bg-gradient-to-b hover:from-foreground hover:via-background hover:via-50% hover:to-background",
            size === "fullWidth" ? "w-full" : "w-max"
        )}
            asChild
            onClick={onClick}
        >
            <Link href={link ?? ""}>
            {title}
            </Link>
        </Button>
    );
};

export default GradientButton;