"use client";
import React, { useContext, useEffect, useRef } from "react";
import { NavContext } from "../context/NavContext";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { menuCloseAnimation, menuOpenAnimation } from "../animations";
const MobileMenu = () => {
    const { isMobileMenuOpen, navLinks, toggleMenu, bodyOverlayRef } =
        useContext(NavContext);
    const menuRef = useRef();

    useEffect(() => {
        if (isMobileMenuOpen) {
            menuOpenAnimation(menuRef.current, bodyOverlayRef.current);
        } else {
            menuCloseAnimation(menuRef.current, bodyOverlayRef.current);
        }
    }, [isMobileMenuOpen]);

    return (
        <ul
            ref={menuRef}
            id="mobile-menu"
            className={`z-50 invisible flex translate-x-full fixed inset-0 left-1/3 bg-primary-dark text-white  flex-col gap-10 items-center pt-32`}
            aria-hidden={!isMobileMenuOpen}>
            {navLinks.map(({ name, href }) => (
                <li>
                    <Link href={href}>{name}</Link>
                </li>
            ))}

            <button
                className="absolute top-5 right-5 text-3xl"
                onClick={toggleMenu}>
                <IoClose />
            </button>
        </ul>
    );
};

export default MobileMenu;
