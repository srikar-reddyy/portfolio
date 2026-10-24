/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"General Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#05070a',
        surface: '#0c0f14',
        accent: {
          DEFAULT: '#22d3ee',
        },
      },
    },
  },
  plugins: [],
};
