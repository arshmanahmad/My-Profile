import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cnFunction";

const Card = React.forwardRef(
  ({ className, hover = false, gradient = false, ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        "bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-300 shadow-xl",
        hover &&
          "hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2",
        gradient && "bg-gradient-to-br from-slate-800/50 to-slate-900/30",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      {...props}
    />
  )
);
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
      "text-lg sm:text-xl font-bold leading-none tracking-tight text-white drop-shadow-lg",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-slate-300 leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 sm:p-6 pt-0", className)} {...props} />
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

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
