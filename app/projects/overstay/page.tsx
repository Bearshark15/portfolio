"use client"

import { Boxes } from "@/components/ui/background-boxes";
import { Project } from "@/ts/types";
import { cn } from "@/utils/cn";
import { useSearchParams } from 'next/navigation'

export default function OverStay() {
    const data = useSearchParams().get('OverStay');
    const project: Project = JSON.parse(JSON.stringify(data));
    console.log(project);
    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
     
            <Boxes />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
                {project.title}
            </h1>
            <p className="text-center mt-2 text-neutral-300 relative z-20">
                {project.shortDescription}
            </p>
        </div>
    );
}