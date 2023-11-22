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
            className="absolute -z-10 outline-dark-fade aspect-square outline bg-dark-fade rounded-full w-20"></div>
    );
};

const DarkBgWithShapes = ({ children, shapes = [], className }) => {
    return (
        <section
            className={`isolate relative overflow-hidden bg-dark py-section text-white ${className}`}>
            {shapes.map((shape, idx) => (
                <Shape {...shape} key={idx} />
            ))}
            {children}
        </section>
    );
};

export default DarkBgWithShapes;
