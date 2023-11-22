import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

const iconsList = [
    {
        name: "linkedIn",
        icon: <GrLinkedinOption />,
        bg: "#0a66c2",
    },
    {
        name: "instagram",
        icon: <RiInstagramFill />,
        bg: "rgb(168 85 247)",
    },
    {
        name: "facebook",
        icon: <RiFacebookCircleFill />,
        bg: "rgb(96 165 250)",
    },
    {
        name: "twitter",
        icon: <FaTwitter />,
        bg: "rgb(6 182 212)",
    },
];

const SocialIcon = ({ name, href, showBg = true, className }) => {
    return iconsList.map(({ icon, name: iconName, bg }) => {
        if (iconName == name) {
            return (
                <Link
                    key={name}
                    href={href}
                    className={`p-3 text-lg rounded-full inline-block ${className}`}
                    style={showBg ? { backgroundColor: bg } : {}}>
                    {icon}
                </Link>
            );
        }
    });
};

export default SocialIcon;
