/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0f0ff",
          600: "#0066CC",
          800: "#1E40AF",
        },
        accent: {
          400: "#00B4D8",
          500: "#0099CC",
        },
        dark: {
          bg: "#1A1E2E",
          text: "#F3F4F6",
        },
        light: {
          bg: "#F5F7FA",
          text: "#1F2937",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
