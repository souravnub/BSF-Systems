import Link from "next/link";
import React from "react";

const ButtonSecondary = ({ type, href, onClick, children, className }) => {
    return type == "button" ? (
        <button
            onClick={onClick}
            className={`px-3 py-2 sm:px-5 rounded-full  border-[1.5px] border-primary hover:bg-primary hover:text-white  text-primary transition inline-block ${className}`}>
            {children}
        </button>
    ) : type == "submit" ? (
        <button
            type="submit"
            onClick={onClick}
            className={`px-3 py-2 sm:px-5 rounded-full  border-[1.5px] border-primary hover:bg-primary hover:text-white  text-primary transition inline-block ${className}`}>
            {children}
        </button>
    ) : (
        <Link
            href={href}
            className={`px-3 py-2 sm:px-5 rounded-full  border-[1.5px] border-primary hover:bg-primary hover:text-white  text-primary transition inline-block ${className}`}>
            {children}
        </Link>
    );
};

export default ButtonSecondary;
