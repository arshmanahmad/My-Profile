import React from "react";

const Button = ({
    children,
    onClick,
    className = "",
    type = "primary",
    outlined = false,
    icon,
}) => {
    return (
        <>
            <div className={className}>
                {type === "primary" && !outlined && (
                    <button
                        type="submit"
                        onClick={onClick}
                        className="w-full bg-primary flex items-center justify-center text-[white]  py-2 px-4 border border-primary hover:border-transparent rounded"
                    >
                        {children}
                    </button>
                )}
                {type === "iconButton" && (

                    <div className="bg-[#fff] flex items-center gap-[1rem] justify-center py-2 px-4 border border-primary rounded-[0.5rem] hover:border-transparent rounded">
                        <img src={icon} alt="" />
                        <button
                            type="submit"
                            onClick={onClick}
                            className="w-full  text-primary "
                        >
                            {children}
                        </button>
                    </div>

                )}
            </div>

        </>
    );
};

export default Button;
