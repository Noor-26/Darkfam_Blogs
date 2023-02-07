/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#02c39a",
"base-content": "#ffffff",
        
"secondary": "#121113",
        
"accent": "#81e2de",
        
"neutral": "#1E1A28",
        
"base-100": "#040404",
        
"info": "#1EADE6",
        
"success": "#0E7C5B",
        
"warning": "#FAE26B",
        
"error": "#F8443A",
        },
      },
    ],
  },
  plugins: [  require('@tailwindcss/line-clamp'),require('daisyui')],
}
