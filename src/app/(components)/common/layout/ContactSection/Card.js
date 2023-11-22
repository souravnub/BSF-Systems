import Link from "next/link";
import React from "react";

const Card = ({ icon, title, description, linkText, href }) => {
    return (
        <div className="border rounded-lg p-5 min-w-[20rem] hover:bg-dark-fade">
            <div className="p-2 border inline-block rounded-lg text-3xl">
                {icon}
            </div>

            <div className="mt-16">
                <span className="font-medium text-xl">{title}</span>
                <p className="mt-2">{description}</p>
                <Link
                    href={href}
                    className="text-sm font-medium underline inline-block mt-6">
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default Card;
