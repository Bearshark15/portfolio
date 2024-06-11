"use client";

import {Button} from "@/components/ui/button";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    console.log(theme);

    return (
        <div className={"fixed bottom-5 right-5 w-14 h-14 rounded-full bg-primary-foreground border-2 flex items-center justify-center"}>
            <Button variant={"ghost"} className={"h-full w-full overflow-hidden rounded-full"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Sun className={"w-14 h-14 flex dark:hidden"}/>
                <Moon className={"w-14 h-14 hidden dark:flex"}/>
            </Button>
        </div>
    );
}