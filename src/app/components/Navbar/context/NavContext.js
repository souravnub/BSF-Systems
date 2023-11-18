"use client";
import { createContext, useRef, useState } from "react";

export const NavContext = createContext();

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Hire An Alumini", href: "/hireAlumini" },
];

const NavState = (props) => {
    const navRef = useRef();
    const bodyOverlayRef = useRef();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <NavContext.Provider
            value={{
                navLinks,

                isMobileMenuOpen,

                setIsMobileMenuOpen,
                toggleMenu,

                navRef,
                bodyOverlayRef,
            }}>
            {props.children}
        </NavContext.Provider>
    );
};

export default NavState;
