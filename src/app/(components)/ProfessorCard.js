import Link from "next/link";
import React from "react";
import SocialIcon from "./utils/SocialIcons";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const ProfessorCard = ({ imgUrl, links, name, position, href, className }) => {
    return (
        <div
            className={`p-10 bg- block relative rounded-lg bg-dark-fade ${className}`}>
            <Link title="View full Profile" href={href}>
                <LuArrowUpRightFromCircle className="text-white absolute text-lg top-4 right-4 " />
            </Link>

            <img
                src={imgUrl}
                alt=""
                className="mx-auto rounded-full w-44 aspect-square object-cover object-top"
            />

            <div className="flex items-center justify-between mt-3 gap-11">
                <div>
                    <span>{name}</span>
                    <p className="text-xs">{position}</p>
                </div>
                <div className="flex gap-2">
                    {links.map((link) => {
                        return <SocialIcon {...link} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProfessorCard;
