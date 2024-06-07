import React from "react";

import { cn } from "@/lib/utils"

const Hero = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
    />
));
Hero.displayName = "Hero"

const HeroBackground = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("z-0 w-full h-full bg-primary", className)}
        {...props}
    />
));
HeroBackground.displayName = "HeroBackground"

const HeroContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center", className)}
        {...props}
    />
));
HeroContent.displayName = "HeroContent"

const HeroTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-4xl font-bold text-primary", className)}
        {...props}
    />
));
HeroTitle.displayName = "HeroTitle"

const HeroDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-lg text-primary/80", className)}
        {...props}
    />
));
HeroDescription.displayName = "HeroDescription"

export { Hero, HeroContent, HeroTitle, HeroDescription, HeroBackground };