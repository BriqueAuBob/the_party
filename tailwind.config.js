const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: [
      './*.html',
      './assets/js/*.js',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Graphik', ...defaultTheme.fontFamily.sans],
      'serif': ['Open Sans', ...defaultTheme.fontFamily.serif]
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
    extend: {
      colors: {
        blurple: {
          500: '#5865F2',
          600: '#6874f3'
        },
        gray: {
          900: '#060D19',
        },
        green: {
          500: '#00BD8B',
        }
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      scale: ['group-hover'],
      translate: ['hover', 'group-hover']
    },
  },
  plugins: [],
}
