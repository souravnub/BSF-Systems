import Link from "next/link";
import React from "react";
import SocialIcon from "./utils/SocialIcons";

const footerLinks = [
    { name: "about", href: "/about" },
    { name: "courses", href: "/courses" },
    { name: "hire an alumni", href: "/hireAlumni" },
    { name: "contact", href: "/contact" },
];

const contactLinks = [
    { name: "twitter", href: "/" },
    { name: "facebook", href: "/" },
    { name: "instagram", href: "/" },
];

const Footer = () => {
    return (
        <footer className="py-section pb-5">
            <div className="container ">
                <div className="space-y-6">
                    <span className="font-medium text-lg">Logo</span>
                    <div>
                        <p>Embark on a journey of knowledge</p>
                        <p>Unlock your potential, one lesson at a time.</p>
                    </div>

                    <ul className="flex gap-x-6 gap-y-2 md:gap-8 flex-wrap">
                        {footerLinks.map(({ name, href }) => (
                            <li>
                                <Link
                                    href={href}
                                    className="font-medium capitalize hover:underline underline-offset-2">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-3 mt-20 sm:flex-row sm:justify-between sm:items-center">
                    <span> &#169; 2023 UI. All rights reserved.</span>
                    <ul className="flex gap-2 sm:gap-5">
                        {contactLinks.map(({ name, href }) => (
                            <li key={name}>
                                <SocialIcon
                                    showBg={false}
                                    name={name}
                                    href={href}
                                    className="text-black !p-1 !text-2xl sm:!text-3xl"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
