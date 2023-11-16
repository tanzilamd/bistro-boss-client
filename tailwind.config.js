/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                chefService: "url('./src/assets/home/chef-service.jpg')",
                featured: "url('./src/assets/home/featured.jpg')",
                auth: "url('./src/assets/others/authentication.png')",
            },
            fontFamily: {
                inter: "'Inter', sans-serif",
                cinzel: "'Cinzel', serif",
            },
            backgroundColor: {
                authBtn: "rgba(209, 160, 84, 0.70)",
            },
        },
    },
    plugins: [require("daisyui")],
};
