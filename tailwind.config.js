/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                chefService: "url('./src/assets/home/chef-service.jpg')",
            },
            fontFamily: {
                inter: "'Inter', sans-serif",
                cinzel: "'Cinzel', serif",
            },
        },
    },
    plugins: [require("daisyui")],
};
