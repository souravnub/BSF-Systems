import Link from "next/link";
import React from "react";

const ButtonPrimary = ({
    type,
    href,
    onClick,
    children,
    className,
    haveHoverEffects = true,
}) => {
    return type == "button" ? (
        <button
            onClick={onClick}
            className={`px-4 py-2 sm:px-6 rounded-full bg-primary ${
                haveHoverEffects && "hover:text-primary hover:bg-transparent"
            } border-primary  border-[1.5px]  text-white transition inline-block ${className}`}>
            {children}
        </button>
    ) : type == "submit" ? (
        <button
            type="submit"
            onClick={onClick}
            className={`px-4 py-2 sm:px-6 rounded-full bg-primary ${
                haveHoverEffects && "hover:text-primary hover:bg-transparent"
            } border-primary  border-[1.5px]  text-white transition inline-block ${className}`}>
            {children}
        </button>
    ) : (
        <Link
            href={href}
            className={`px-4 py-2 sm:px-6  rounded-full bg-primary ${
                haveHoverEffects && "hover:text-primary hover:bg-transparent"
            } border-primary  border-[1.5px]  text-white transition inline-block ${className}`}>
            {children}
        </Link>
    );
};

export default ButtonPrimary;
