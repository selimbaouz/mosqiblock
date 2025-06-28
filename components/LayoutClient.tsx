"use client";
import { FC } from "react";
import Favicon from "@/app/favicon.ico";
import FaviconInactive from "@/app/favicon-inactive.ico";
import { usePageVisibility } from "@/hook/usePageVisibility";

interface LayoutClientProps {
    children: React.ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({children}) => {
    usePageVisibility({
        title: "Did you forget something? Come back to MosqiBlock!",
        onVisible: "MosqiBlock – Your shield against mosquitoes",
        onHidden: () => "Don't let mosquitoes win! Protect your family now.",
        favicon: Favicon.src,
        faviconInactive: FaviconInactive.src
    });
    return (
        <main>
            {children}
        </main>
    );
};

export default LayoutClient;
