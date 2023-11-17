"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { navBarAnimation } from "./animations";
gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
    const navRef = useRef();
    const navLinks = [
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Courses",
            href: "/courses",
        },
        {
            name: "Hire Our Alumni",
            href: "/hireAlumni",
        },
    ];

    useEffect(() => {
        navBarAnimation(navRef.current);
    }, []);

    return (
        <nav className="fixed w-full text-light">
            <div
                className="flex  justify-between items-center container py-5"
                ref={navRef}>
                <h3>Logo</h3>

                <ul className="gap-12  hidden md:flex lg:gap-20">
                    {navLinks.map(({ name, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="after:content-[''] after:bg-light after:block after:h-px after:rounded-full after:w-1/2 after:mx-auto after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-left">
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/courses"
                    className="inline-block px-5 py-1.5 border-white border hover:bg-primary-dark transition">
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Nav;
