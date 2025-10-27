/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgmodern: "#101726",
        overlaymodern: "#1B2233",
        accent: "#00F0FF",
        secondary: "#7B8FA4",
        crystal: "#1EC8FF",
        purple: "#B388FF",
        cardbg: "#EAF1FB",
        textprimary: "#FFFFFF",
        textsecondary: "#CBD9F1",
      },
      fontFamily: {
        tech: ["Orbitron", "Poppins", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        accent: "0 0 12px 2px #00F0FF, 0 0 24px 2px #1EC8FF",
        glass: "0 8px 32px 0 rgba(16,23,38,0.45)",
      },
      backgroundImage: {
        cybergrid:
          "linear-gradient(rgba(0,240,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.07) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      transitionProperty: {
        glow: "box-shadow, color, transform",
      },
      borderColor: {
        accent: "#00F0FF",
      },
      blur: {
        glass: "12px",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
