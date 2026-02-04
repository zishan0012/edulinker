/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#D35400', // MocDoc Burnt Orange
                    dark: '#A04000',
                    light: '#F5CBA7',
                    accent: '#E67E22',
                },
                secondary: {
                    DEFAULT: '#2980B9', // MocDoc Blue
                    dark: '#1F618D',
                    light: '#D6EAF8',
                },
                brand: {
                    orange: '#D35400', // Clinic/Primary
                    blue: '#2980B9',   // Hospital
                    green: '#27AE60',  // Pharmacy
                    purple: '#8E44AD', // Lab
                    50: '#FDF2E9',
                    100: '#FAE5D3',
                    200: '#F5CBA7',
                    500: '#D35400',
                    600: '#A04000',
                    900: '#6E2C00',
                },
                // Specific card colors for the grid
                clinic: '#D35400',
                hospital: '#2980B9',
                lab: '#8E44AD',
                pharmacy: '#27AE60',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Poppins', 'sans-serif'],
            },
            animation: {
                scroll: 'scroll 40s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scroll: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
        },
    },
    plugins: [],
}
