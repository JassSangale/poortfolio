/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgmodern:    '#101726',   // Main background
        overlaymodern:'#1B2233',  // Overlay, navbar, cards
        accent:      '#00F0FF',   // Neon cyan
        secondary:   '#7B8FA4',   // Muted blue-gray (subtext, buttons)
        crystal:     '#1EC8FF',   // Blue highlight (optional)
        purple:      '#B388FF',   // Purple accent (optional)
        cardbg:      '#EAF1FB',   // Card backgrounds
        textprimary: '#FFFFFF',   // Main text
        textsecondary: '#CBD9F1', // Light text (subtext)
      },
      fontFamily: {
        tech: ['Orbitron', 'Poppins', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        accent: '0 0 12px 2px #00F0FF, 0 0 24px 2px #1EC8FF', // Neon glow
        glass: '0 8px 32px 0 rgba(16,23,38,0.45)', // For glass card effect
      },
      backgroundImage: {
        cybergrid: "linear-gradient(rgba(0,240,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.07) 1px, transparent 1px)", // for futuristic grid bg
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      transitionProperty: {
        glow: 'box-shadow, color, transform'
      },
      borderColor: {
        accent: '#00F0FF',
      },
      blur: {
        glass: '12px',
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
