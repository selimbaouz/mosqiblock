import { FC } from "react";
import { IconType } from "react-icons";

interface GradientIconProps {
    strokeWith: number;
    isStroke: boolean;
    isFill: boolean;
    icon : IconType;
}

const GradientIcon: FC<GradientIconProps> = ({
    strokeWith,
    isStroke,
    isFill,
    icon: Icon
}) => {
    return (
        <svg 
            className="size-14 w-auto" 
            fill="none" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#171923', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#319795', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <g transform="translate(5, 2)">
                <Icon 
                    fill={isFill ? "url(#grad1)" : undefined} 
                    stroke={isStroke ? "url(#grad1)" : undefined} 
                    strokeWidth={strokeWith} 
                    className="size-20"
                />
            </g>
        </svg>
    );
};

export default GradientIcon;