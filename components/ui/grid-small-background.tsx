import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundProps {
    children?: React.ReactNode
    className?: string
}

const GridSmallBackground: React.FC<GridBackgroundProps> = ({ children, className }) => (
    <div className={cn(className, "dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center")}>
        {children}
    </div>
);

export default GridSmallBackground;