/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5443a9",
        secondary: "#F5F7FF",
        accent: "#FF7A5A",
        dark: "#2A3256",
        light: "#FFFFFF",
        purple: {
          500: "#5443a9",
          600: "#483997",
        },
        blue: {
          500: "#5443a9",
          600: "#483997",
        },
        gray: {
          100: "#F9FAFC",
          200: "#EEF1F8",
          300: "#D1D8E6",
          400: "#A3AECB",
          500: "#6B7A99",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 