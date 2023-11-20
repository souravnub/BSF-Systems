import React from "react";

const Shape = ({
    size = "4rem",
    position,
    outlineOffset = "3rem",
    outlineWidth = "2rem",
}) => {
    return (
        <div
            aria-hidden="true"
            style={{
                outlineWidth,
                outlineOffset,
                ...position,
                width: size,
            }}
            className="absolute outline-[#c4c4c40f] aspect-square outline bg-[#c4c4c40f] rounded-full w-20"></div>
    );
};

const DarkBgWithShapes = ({ children, shapes = [], className }) => {
    return (
        <div
            className={`relative overflow-hidden min-h-[100vh] bg-[#000000de] ${className}`}>
            {shapes.map((shape) => (
                <Shape {...shape} />
            ))}

            {children}
        </div>
    );
};

export default DarkBgWithShapes;
