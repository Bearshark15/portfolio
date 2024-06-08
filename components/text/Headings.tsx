import {cn} from "@/lib/utils";
import React from "react";

const Title = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn("text-5xl font-bold text-primary mb-1", className)}
        {...props}
    />
));
Title.displayName = "Title"

const Subtitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("text-xl font-light text-primary/80 my-1", className)}
        {...props}
    />
));
Subtitle.displayName = "Subtitle"

const Heading1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn("text-3xl font-bold text-primary mb-2 mt-5", className)}
        {...props}
    />
));
Heading1.displayName = "Heading1"

const Heading2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("text-2xl font-semibold text-primary mb-2 mt-5", className)}
        {...props}
    />
));
Heading2.displayName = "Heading2"

const Heading3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-xl font-semibold text-primary mb-2 mt-5", className)}
        {...props}
    />
));
Heading3.displayName = "Heading3"

export { Title, Subtitle, Heading1, Heading2, Heading3 };