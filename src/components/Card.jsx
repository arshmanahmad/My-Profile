import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cnFunction";

const Card = React.forwardRef(({ className, hover = false, gradient = false, ...props }, ref) => (
    <motion.div
        ref={ref}
        className={cn(
            "bg-[#1F2937]/30 backdrop-blur-sm rounded-xl border border-[#374151]/50 overflow-hidden transition-all duration-300",
            hover && "hover:border-[#4B5563]/50 hover:shadow-xl hover:shadow-[#3B82F6]/10",
            gradient && "bg-gradient-to-br from-[#1F2937]/40 to-[#111827]/40",
            className
        )}
        whileHover={hover ? { y: -4, scale: 1.02 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        {...props}
    />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-4 sm:p-6", className)}
        {...props}
    />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-lg sm:text-xl font-bold leading-none tracking-tight text-[#FFFFFF]",
            className
        )}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-[#D1D5DB] leading-relaxed", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("p-4 sm:p-6 pt-0", className)}
        {...props}
    />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-4 sm:p-6 pt-0", className)}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };