import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cnFunction";

const Button = React.forwardRef(({
    children,
    icon,
    style,
    onClick,
    disabled = false,
    loading = false,
    variant = "primary",
    size = "md",
    type = "button",
    className = "",
    w_full = false,
    animate = true,
    ...props
}, ref) => {
    const baseClass = "relative flex items-center justify-center font-medium leading-6 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
    const fullWidth = w_full ? "w-full" : "";

    // Size variants
    const sizeClasses = {
        sm: "px-3 py-2 text-sm rounded-lg",
        md: "px-4 py-2.5 text-base rounded-lg",
        lg: "px-6 py-3 text-lg rounded-xl",
        xl: "px-8 py-4 text-xl rounded-xl"
    };

    // Variant styling logic
    const variantClasses = {
        primary: "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:from-[#2563EB] hover:to-[#7C3AED] focus:ring-[#3B82F6]/50 shadow-lg hover:shadow-xl",
        secondary: "bg-gradient-to-r from-[#10B981] to-[#059669] text-white hover:from-[#059669] hover:to-[#047857] focus:ring-[#10B981]/50 shadow-lg hover:shadow-xl",
        outline: "border-2 border-[#3B82F6] bg-transparent text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white focus:ring-[#3B82F6]/50",
        ghost: "bg-transparent text-[#3B82F6] hover:bg-[#3B82F6]/10 focus:ring-[#3B82F6]/50",
        danger: "bg-gradient-to-r from-[#EF4444] to-[#DC2626] text-white hover:from-[#DC2626] hover:to-[#B91C1C] focus:ring-[#EF4444]/50 shadow-lg hover:shadow-xl"
    };

    const buttonContent = (
        <button
            ref={ref}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            style={style}
            className={cn(
                baseClass,
                sizeClasses[size],
                variantClasses[variant],
                fullWidth,
                "transform hover:scale-105 active:scale-95",
                className
            )}
            {...props}
        >
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <div className={cn("flex items-center", loading && "opacity-0")}>
                {icon && <span className="mr-2 flex items-center">{icon}</span>}
                {children}
            </div>
        </button>
    );

    if (animate && !disabled) {
        return (
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                {buttonContent}
            </motion.div>
        );
    }

    return buttonContent;
});

Button.displayName = "Button";

export { Button };