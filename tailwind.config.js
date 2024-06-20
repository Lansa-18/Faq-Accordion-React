/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pattern': "url(./assets/images/background-pattern-desktop.svg)"
      }),
      height: {
        '2/5': '40%',
        '3/5': '60%',
      },
      width: {
        '30': '30%',
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
      }
    },
  },
  plugins: [],
}

