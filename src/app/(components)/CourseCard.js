import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const CourseCard = ({ img, title, category, price, href }) => {
    return (
        <Link href={href} className="max-w-xs group inline-block p-1">
            <img
                className="aspect-square rounded-lg "
                src={img.url}
                alt={img.alt}
            />

            <div className="flex justify-between items-center">
                <div className="font-medium mt-2">
                    <h3 className="text-lg">{title}</h3>
                    <span className="text-neutral-500 text-sm font-normal">
                        {category}
                    </span>
                    <span className="block mt-1.5 text-sm">${price}</span>
                </div>

                <div className="inline-block  p-1.5 border-black border rounded-full text-lg">
                    <GoArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
