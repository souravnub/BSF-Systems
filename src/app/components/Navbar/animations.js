const { default: theme } = require("@/utils/tailwindTheme");
const { default: gsap } = require("gsap");

export const navBarAnimation = (nav) => {
    return gsap.timeline().to(nav, {
        paddingBlock: theme.padding[1.5],
        backgroundColor: "rgba(0,0,0, .5)",
        ease: "power3.inOut",
        scrollTrigger: {
            scrub: 1,
            trigger: document.body,
            start: "10px top",
            end: "10px top",
            toggleActions: "play none reverse none",
        },
    });
};
