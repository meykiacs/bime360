/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            colors: {
                mercury: {
                    50: "#f8f8f8",
                    100: "#f0f0f0",
                    200: "#eae9e9",
                    300: "#d2cfcf",
                    400: "#b6b3b3",
                    500: "#9c9797",
                    600: "#837f7f",
                    700: "#6c6969",
                    800: "#5c5858",
                    900: "#4f4d4d",
                    950: "#282727",
                },
                primary: {
                    50: "#fef5ee",
                    100: "#fce7d8",
                    200: "#f9ccaf",
                    300: "#f4a87d",
                    400: "#ed6d37",
                    500: "#ea5825",
                    600: "#dc3f1a",
                    700: "#b62e18",
                    800: "#91261b",
                    900: "#752219",
                    950: "#3f0e0b",
                },
                alert: "#ed3742"
            },
            boxShadow: {
                '3xl': '4px 4px 16px rgb(0 0 0 / 0.15)',
                '4xl': '4px 8px 32px rgb(36 36 36 / 0.1)',
            }
        },
    },
    plugins: [],
}
