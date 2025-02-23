/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}", // TailwindCSS'in tarayacağı dosya yolları
        "./components/**/*.{js,ts,jsx,tsx}", // Bileşen dosya yolları
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    400: '#F2A945', // Açık birincil renk
                    500: '#F78410', // Orta birincil renk
                    600: '#E07516', // Koyu birincil renk
                },
            },
        },
    },
    plugins: [], // Ekstra eklenti bulunmuyor
}

module.exports = config;
