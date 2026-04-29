/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../twenty-ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': '#192945',
        'deep-blue': '#595da1',
        'accent-amethyst': '#a981b0',
        'cta-coral-pink': '#e8a3a2',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #192945 0%, #1f3560 50%, #595da1 100%)',
        'hero-depth': 'linear-gradient(180deg, #192945 0%, #0f1c30 100%)',
        'cta-glow': 'linear-gradient(135deg, #a981b0 0%, #e8a3a2 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

