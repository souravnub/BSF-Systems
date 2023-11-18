const { default: theme } = require("@/utils/tailwindTheme");
const { default: gsap } = require("gsap");

export const navBarScrollAnimation = (nav) => {
    return gsap.timeline().to(nav, {
        paddingBlock: theme.padding[3],
        color: "white",
        backgroundColor: "rgba(11, 45, 57, .9)",
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

export const menuOpenAnimation = (menu, bodyOverlay) => {
    return gsap
        .timeline({ defaults: { duration: 0.3, ease: "power3.inOut" } })
        .set(menu, { visibility: "visible" })
        .to(menu, { translateX: 0 })
        .add(bodyOverlayOpen(bodyOverlay), "<");
};
export const menuCloseAnimation = (menu, bodyOverlay) => {
    return gsap
        .timeline({ defaults: { duration: 0.3, ease: "power3.in" } })
        .to(menu, { translateX: "100%" })
        .set(menu, { visibility: "invisible" })
        .add(bodyOverlayClose(bodyOverlay), "<");
};

export const bodyOverlayOpen = (bodyOverlay) => {
    if (bodyOverlay == undefined) return;
    return gsap
        .timeline({ defaults: { duration: 0.3 } })
        .set(bodyOverlay, { display: "block" })
        .to(bodyOverlay, { opacity: 1 });
};
export const bodyOverlayClose = (bodyOverlay) => {
    if (bodyOverlay == undefined) return;
    return gsap
        .timeline({ defaults: { duration: 0.3 } })
        .to(bodyOverlay, { opacity: 0 })
        .set(bodyOverlay, { display: "none" });
};
