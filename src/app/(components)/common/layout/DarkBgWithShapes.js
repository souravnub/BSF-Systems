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
        <section
            className={`relative overflow-hidden bg-[#000000e6] py-section ${className}`}>
            {shapes.map((shape) => (
                <Shape {...shape} />
            ))}

            {children}
        </section>
    );
};

export default DarkBgWithShapes;
