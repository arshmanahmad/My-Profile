import React from "react";

const Button = React.forwardRef(({
    children,
    icon,
    style,
    onClick,
    disabled = false,
    loading = false,
    variant = "primary",
    type = "button",
    className = "",
    w_full = false
}, ref) => {
    const baseClass = "relative flex items-center justify-center rounded-md px-5 py-3 font-poppins text-base font-medium leading-6 transition duration-150 ease-in-out focus:outline-none disabled:cursor-not-allowed";
    const fullWidth = w_full ? "w-full" : "";

    // Variant styling logic
    let variantClasses = "";
    switch (variant) {
        case "outlined":
            variantClasses = "border-2 border-primary bg-white text-primary hover:bg-gray-100 active:bg-gray-200";
            break;
        case "secondary":
            variantClasses = "bg-secondary text-white hover:bg-secondaryDark active:bg-secondaryDarker";
            break;
        case "ghost":
            variantClasses = "bg-transparent text-primary hover:bg-gray-100 active:bg-gray-200 border border-primary";
            break;
        default:
            variantClasses = "bg-primary text-white hover:bg-primaryDark active:bg-primaryDarker";
            break;
    }

    return (
        <button
            ref={ref}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            style={style}
            className={`${baseClass} ${variantClasses} ${fullWidth} ${className}`}
        >
            {icon && !loading && (
                <span className="mr-2 flex items-center">{icon}</span>
            )}
            <div className={`${loading ? "opacity-0" : ""}`}>{children}</div>
            {loading && (
                <span className="absolute text-sm">...</span>
            )}
        </button>
    );
});

Button.displayName = "Button";

export { Button };