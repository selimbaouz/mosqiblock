"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "@/types/types";
import { usePathname } from "next/navigation";
import { useOpenSidebarStore } from "@/store/sidebar";
import { CgClose } from "react-icons/cg";

interface SideBarProps {
    menu: Menu[];
}

export default function SideBar ({
    menu,
}: SideBarProps) {
    const classLink = "font-light text-base text-foreground lg:text-sm xl:text-base group-hover:text-background";
    const pathname = usePathname();
    const { isOpenSidebar, setIsOpenSidebar } = useOpenSidebarStore();

  return (
    <Sheet open={isOpenSidebar} onOpenChange={setIsOpenSidebar}>
        <SheetContent side="left" className={cn("h-full min-w-full", "lg:min-w-[500px]")}>
        <SheetHeader className="px-4 py-6">
            <SheetTitle className="flex items-center justify-between">
                <h3 className="text-2xl">
                    Menu
                </h3>
                <CgClose className="text-xl" onClick={() => setIsOpenSidebar(false)}/>
            </SheetTitle>
        </SheetHeader>
        <SheetDescription></SheetDescription>
        <ul className={cn("cursor-pointer")}>
            {menu?.map((data, i) => (
                <li key={i} className={cn("border-b border-secondary py-3 pl-4 hover:bg-primary group", i === 0 && "border-t", data.path === pathname && "bg-primary")}>
                    {data.path.includes("contact") ? (
                        <Link 
                            href="mailto:tailwindliquid@gmail.com"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={cn(classLink)}
                        >Contact</Link>
                    ) : (
                        <Link 
                        href={data.path} 
                        target={data.title === "Suivre ma commande" ? "_blank" : undefined} 
                        rel={data.title === "Suivre ma commande" ? "noopener noreferrer" : undefined} 
                        className={cn(classLink, data.path === pathname && "text-background dark:text-foreground")}
                        onClick={() => {
                            if (!data.path.startsWith("/#")) {
                                setIsOpenSidebar(false);
                            }
                        }}
                        >
                            {data.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
        </SheetContent>
    </Sheet>
  );
}
