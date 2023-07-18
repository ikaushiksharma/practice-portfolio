/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#010208',
        secondary: '#FFFCFC',
        tertiary: '#825AE2',
      },
      screens: {
        xxs: '320px',
        // => @media (min-width: 300px) { ... }
        xs: '390px',
        // => @media (min-width: 390px) { ... }
        s: '540px',
        // => @media (min-width: 540px) { ... }
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        xxl: '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
