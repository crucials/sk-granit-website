/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [ './src/**/*.{html,js}' ],
  theme: {
    screens: {
      xs: {
        max: '380px'
      },

      sm: {
        max: '640px'
      },

      lg: {
        max: '768px'
      },

      m: {
        max: '1000px'
      },

      xl: {
        max: '1280px'
      },

      '2xl': {
        max: '1350px'
      },

      '3xl': {
        min: '1800px'
      }
    },

    extend: {
      colors: {
        main: '#DF9130',
        dark: '#1A1E23'
      },

      minWidth: {
        '1': '100px',
        '1.5': '150px',
        '2': '200px',
        '2.5': '250px',
        '3': '300px',
        '3.5': '350px',
        '4': '400px',
        '4.5': '450px',
        '5': '500px',
        '5.5': '550px',
        '6': '600px',
        '6.5': '650px',
        '7': '700px',
        '7.5': '750px',
      },

      minHeight: {
        '1': '100px',
        '1.5': '150px',
        '2': '200px',
        '2.5': '250px',
        '3': '300px',
        '3.5': '350px',
        '4': '400px',
        '4.5': '450px',
        '5': '500px',
        '5.5': '550px',
        '6': '600px',
        '6.5': '650px',
        '7': '700px',
        '7.5': '750px',
      },

      fontFamily: {
        roboto: 'Roboto',
        montserrat: 'Montserrat'
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addComponents, theme }) => {
      addUtilities({
        '.horizontal-tb-mode': {
          'writing-mode': 'horizontal-tb'
        },

        '.vertical-rl-mode': {
          'writing-mode': 'vertical-rl'
        },

        '.vertical-lr-mode': {
          'writing-mode': 'vertical-lr'
        },

        '.sideways-lr-mode': {
          'writing-mode': 'sideways-lr'
        },

        '.sideways-rl-mode': {
          'writing-mode': 'sideways-rl'
        }
      })
    }),
  ],
}
