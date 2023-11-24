import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const CourseCard = ({ img, name, category, price, href, className }) => {
    return (
        <Link href={href} className={`group inline-block p-1 ${className}`}>
            <img
                className="aspect-square rounded-lg "
                src={img.url}
                alt={img.alt}
            />

            <div className="flex justify-between items-center">
                <div className="mt-2 font-medium">
                    <h3 className="">{name}</h3>
                    <span className="capitalize text-neutral-500 text-xs font-normal">
                        {category}
                    </span>
                    <span className="block text-sm">${price}</span>
                </div>

                <div className="inline-block  p-1.5 border-black border rounded-full text-lg">
                    <GoArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
