import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cnFunction";

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200 focus:outline-none",
    {
        variants: {
            variant: {
                default: "bg-slate-700/50 text-slate-200 border border-slate-600/50 hover:bg-slate-700/70 backdrop-blur-sm",
                secondary: "bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 backdrop-blur-sm",
                success: "bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 backdrop-blur-sm",
                warning: "bg-amber-600/20 text-amber-300 border border-amber-500/30 hover:bg-amber-600/30 backdrop-blur-sm",
                danger: "bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600/30 backdrop-blur-sm",
                purple: "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 backdrop-blur-sm",
                outline: "bg-transparent text-slate-300 border border-slate-600/50 hover:bg-slate-800/50 backdrop-blur-sm",
                tech: "bg-slate-700/30 text-slate-200 border border-slate-600/50 hover:bg-slate-700/50 backdrop-blur-sm",
            },
            size: {
                sm: "px-2 py-0.5 text-xs",
                md: "px-2.5 py-1 text-xs",
                lg: "px-3 py-1.5 text-sm",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

const Badge = React.forwardRef(({ className, variant, size, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(badgeVariants({ variant, size }), className)}
            {...props}
        />
    );
});

Badge.displayName = "Badge";

export { Badge, badgeVariants };