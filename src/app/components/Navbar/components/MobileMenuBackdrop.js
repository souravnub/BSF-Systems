"use client";

import React, { useContext } from "react";
import { NavContext } from "../context/NavContext";

const MobileMenuBackdrop = () => {
    const { isMobileMenuOpen, bodyOverlayRef, toggleMenu } =
        useContext(NavContext);

    return (
        <div
            onClick={toggleMenu}
            ref={bodyOverlayRef}
            className="hidden fixed inset-0 bg-transparent-black"></div>
    );
};

export default MobileMenuBackdrop;
