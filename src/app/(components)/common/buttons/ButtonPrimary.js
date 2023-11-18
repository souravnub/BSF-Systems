import Link from "next/link";
import React from "react";

const ButtonPrimary = ({ type, href, onClick, children, className }) => {
    return type == "button" ? (
        <button
            onClick={onClick}
            class={`px-4 py-2 sm:px-6 rounded-full bg-primary hover:text-primary border-primary hover:bg-transparent border-[1.5px]  text-white transition inline-block ${className}`}>
            {children}
        </button>
    ) : (
        <Link
            href={href}
            class={`px-4 py-2 sm:px-6 rounded-full bg-primary hover:text-primary border-primary hover:bg-transparent border-[1.5px]  text-white transition inline-block ${className}`}>
            {children}
        </Link>
    );
};

export default ButtonPrimary;
