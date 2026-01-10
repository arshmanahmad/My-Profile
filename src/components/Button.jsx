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
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 focus:ring-blue-500/50 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50",
        secondary: "bg-gradient-to-r from-indigo-600 to-sky-600 text-white hover:from-indigo-700 hover:to-sky-700 focus:ring-indigo-500/50 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50",
        outline: "border-2 border-blue-500 bg-transparent text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 focus:ring-blue-500/50 shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/30",
        ghost: "bg-transparent text-blue-400 hover:bg-blue-500/10 focus:ring-blue-500/50",
        danger: "bg-gradient-to-r from-red-600 to-rose-600 text-white hover:from-red-700 hover:to-rose-700 focus:ring-red-500/50 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/50"
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