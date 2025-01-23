import MarqueeStack from "../MarqueeStack";
import { stacksData } from "@/data";

const StickyBar = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary uppercase w-full h-12 text-white flex flex-col items-center justify-center font-medium">
            <MarqueeStack data={stacksData} />
        </div>
    );
};

export default StickyBar;