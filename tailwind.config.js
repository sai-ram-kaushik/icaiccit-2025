/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins',
        playFair: 'Playfair Display'
      },
      animation: {
        translateAnimate: 'translateKeyframe 1.5s ease-in infinite',
      },
      keyframes: {
        translateKeyframe: {
          '0%, 100px': { transform: 'translate(3px, -3px)' },
          '50%': { transform: 'translate(3px, -3px)' }
        }
      },
    },
  },
  plugins: [],
}
