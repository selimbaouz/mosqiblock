import MarqueeStack from "../MarqueeStack";
import { stacksData } from "@/data";

const StickyBar = () => {
    return (
        <div className="bg-gradient-to-b from-primary to-secondary w-full h-10 text-white flex flex-col items-center justify-center font-medium">
            <MarqueeStack data={stacksData} />
        </div>
    );
};

export default StickyBar;