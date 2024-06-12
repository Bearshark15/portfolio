import {cn} from "@/lib/utils";
import React from "react";

const Paragraph = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("my-1", className)}
        {...props}
    />
));
Paragraph.displayName = "Paragraph"

export default Paragraph;