/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: ".5rem",
                md: "2rem",
            },
            center: true,
        },
        extend: {
            colors: {
                light: "#F9F9F9",
                "transparent-black": "rgba(0,0,0, 0.5)",
                "primary-light": "#1962ff",
                primary: "#0b2d39",
                "primary-dark": "#24292c",
                "primary-dark-fade": "#272c30",
            },
            padding: {
                section: "4rem",
            },
        },
    },
    plugins: [],
};
