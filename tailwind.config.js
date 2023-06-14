/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            overpass: ['Overpass', 'sans-serif'],
        },
        colors: {
            orange: 'hsl(25, 97%, 53%)',
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            transparent: 'transparent',
            grey: {
                light: 'hsl(217, 12%, 63%)',
                medium: 'hsl(216, 12%, 54%)',
            },
            blue: {
                dark: 'hsl(213, 19%, 18%)',
                'very-dark': 'hsl(216, 12%, 8%)',
            },
        },
        extend: {},
    },
    plugins: [],
}
