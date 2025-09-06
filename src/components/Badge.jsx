import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../utils/cnFunction";

const badgeVariants = cva(
    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200 focus:outline-none",
    {
        variants: {
            variant: {
                default: "bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30 hover:bg-[#3B82F6]/30",
                secondary: "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 hover:bg-[#10B981]/30",
                success: "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 hover:bg-[#10B981]/30",
                warning: "bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 hover:bg-[#F59E0B]/30",
                danger: "bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30 hover:bg-[#EF4444]/30",
                purple: "bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 hover:bg-[#8B5CF6]/30",
                outline: "bg-transparent text-[#D1D5DB] border border-[#4B5563]/50 hover:bg-[#4B5563]/20",
                tech: "bg-[#374151]/50 text-[#D1D5DB] border border-[#4B5563]/50 hover:bg-[#4B5563]/50",
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