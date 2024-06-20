/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      '900': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: theme => ({
        'pattern': "url(./assets/images/background-pattern-desktop.svg)"
      }),
      width: {
        '30': '30%',
        '48%': '48%',
      },
      backgroundColor: {
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
      textColor: {
        'light-pink': 'hsl(275, 100%, 97%)',
        'grayish-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
        'bright-purple': 'rgb(173,40,235)',
      },
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
      minWidth: {
        '420': '420px',
        '310': '310px',
      },
      inset: {
        '20%': '20%',
      },
    },
  },
  plugins: [],
}

