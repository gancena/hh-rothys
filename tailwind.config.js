/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid',
    './assets/*.css.liquid',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './tailwind/tailwind.css',
    './scripts/*.js',
    './scripts/*.bundle.js',
  ],
  theme: {
    extend: {
      fontWeight: {
        medium: 500,
        strong: 500,
        regular: 400,
        book: 400,
        light: 200,
      },
    },
    colors: {
      primary: {
        indigo: '#0B163B',
        reverse: '#FFFFFF',
        reflexblue: '#092DC5',
        sandstone: '#092DC5'
      },
      secondary: {
        indigo: '#5B667F',
        tangerine: '#DA3522',
        bluegrey: '#C5BDBC',
        preordergreen: '376566',
        backorderpurp: '#5B3766'
      },
      utils: {
        green: '#00A650',
        red: '#DA3522',
        amber: '#FFC107',
        green: '#376566',
        black: '#000',
        white: '#fff',
        grey:  {
          100: '#fafafa',
          150: '#f6f6f6',
          200: '#E6E6E6',
          250: '#D8D8D8',
          280: '#CFCFCF',
          300: '#C4C4C4',
          400: '#B3B3B3',
          500: '#9E9E9E',
          600: '#666666',
          700: '#4A4A4A',
          800: '#333333',
          900: '#2A2522'
        }
      }
    },
    fontFamily: {
      primary: ['Grifo S', 'serif'],
      secondary: ['Maison Neue', 'sans-serif'],
    },
    fontSize: {
      desktop: {
        h1: ['48px', {
          lineHeight: '56px',
          letterSpacing: '0px',
        }],
        h2: ['36px', {
          lineHeight: '42px',
          letterSpacing: '0px',
        }],
        h3: ['24px', {
          lineHeight: '32px',
          letterSpacing: '0.5px',
        }],
        h4: ['24px', {
          lineHeight: '32px',
          letterSpacing: '0px',
        }],
        h5: ['18px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
          fontWeight: regular,
        }],
        utility1: ['14px', {
          lineHeight: '22px',
          letterSpacing: '2px',
        }],
        utility2: ['12px', {
          lineHeight: '18px',
          letterSpacing: '2px',
        }],
        paragraph1: ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
        }],
        paragraph2: ['14px', {
          lineHeight: '22px',
          letterSpacing: '0.5px',
        }],
        paragraph3: ['12px', {
          lineHeight: '20px',
          letterSpacing: '0.5px',
        }],
      },
      mobile: { 
        h1: ['36px', {
          lineHeight: '42px',
          letterSpacing: '0px',
        }],
        h2: ['30px', {
          lineHeight: '38px',
          letterSpacing: '0px',
        }],
        h3: ['24px', {
          lineHeight: '32px',
          letterSpacing: '0.5px',
        }],
        h4: ['24px', {
          lineHeight: '32px',
          letterSpacing: '0px',
        }],
        h5: ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
          fontWeight: regular,
        }],
        utility1: ['14px', {
          lineHeight: '22px',
          letterSpacing: '2px',
        }],
        utility2: ['12px', {
          lineHeight: '18px',
          letterSpacing: '2px',
        }],
        paragraph1: ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
        }],
        paragraph2: ['14px', {
          lineHeight: '22px',
          letterSpacing: '0.5px',
        }],
        paragraph3: ['12px', {
          lineHeight: '22px',
          letterSpacing: '0.5px',
        }],
      }, 
    }
  },
  plugins: [],
}
