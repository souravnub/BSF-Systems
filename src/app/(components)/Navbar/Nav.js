"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { navBarScrollAnimation } from "./animations";
import { IoMenu } from "react-icons/io5";
import { NavContext } from "./context/NavContext";

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
    const { isMobileMenuOpen, toggleMenu, navLinks, navRef } =
        useContext(NavContext);

    useEffect(() => {
        let ani = navBarScrollAnimation(navRef.current);
        document.body.style.paddingTop = `${navRef.current?.clientHeight}px`;

        return () => {
            ani?.revert();
        };
    }, []);

    return (
        <nav
            className="fixed top-0 w-full z-50 text-black backdrop-blur-md py-5"
            ref={navRef}>
            <div className="flex  justify-between items-center container">
                <Link href="/">Logo</Link>

                <ul className="gap-12  hidden md:flex lg:gap-20">
                    {navLinks.map(({ name, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="after:content-[''] after:bg-white after:block after:h-px after:rounded-full after:w-1/2 after:mx-auto after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:origin-left">
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/courses"
                    className="px-5 py-1.5 rounded-full bg-primary-light  text-white transition hidden md:inline-block">
                    Request a demo
                </Link>

                <button
                    className="inline-block md:hidden text-3xl"
                    onClick={toggleMenu}
                    aria-controls="mobile-menu"
                    aria-expanded={isMobileMenuOpen}>
                    <IoMenu />
                </button>
            </div>
        </nav>
    );
};

export default Nav;
