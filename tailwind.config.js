/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                blueish: "#5600ff",
                brightPurple: "#a955ff",
                purple: "#7d00f1",
            },
            screens: {
                desktop: "950px",
                wide: "1440px",
            },
            fontFamily: {
                sans: [
                    '"Roboto"',
                    "-apple-system",
                    "BlinkMacSystemFont",
                    '"Segoe UI"',
                    '"Oxygen"',
                    '"Ubuntu"',
                    '"Cantarell"',
                    '"Fira Sans"',
                    '"Droid Sans"',
                    '"Helvetica Neue"',
                    "sans-serif",
                ],
            },
        },
    },
    plugins: [],
};

