/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode based on a class
  content: [
    './pages/**/*.{js,jsx}', // Scan these directories for class names
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "", // No prefix for Tailwind classes
  theme: {
    container: {
      center: true, // Centers the container
      padding: "15px", // Adds 15px padding to the container
    },
    screens: {
      sm:'640px', // Small screens
      md:'768px', // Medium screens
      lg:'960px', // Large screens
      xl:'1200px' // Extra large screens
    },
    fontFamily: {
      primary:["var(--font-jetbrainsMono)"], // Primary font family
    },
    extend: {
      colors: {
        primary: "#1c1c22", // Primary color
        accent : {
          DEFAULT : '#00FF99',
          hover : '#00e187',
        }
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Adds the tailwindcss-animate plugin
};
