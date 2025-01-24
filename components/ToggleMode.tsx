import React from 'react';
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"

const ToggleMode = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <Button variant="outline" size="icon" onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} className='z-50'>
            <Sun className="h-[2rem] w-[2rem] text-foreground rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
            <Moon className="absolute h-[2rem] text-foreground w-[2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ToggleMode;