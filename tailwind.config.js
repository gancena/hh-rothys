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
      fontSize: {
        'desktop-h1': ['48px', {
          lineHeight: '56px',
          letterSpacing: '0px',
        }],
        'desktop-h2': ['36px', {
          lineHeight: '42px',
          letterSpacing: '0px',
        }],
        'desktop-h3': ['24px', {
          lineHeight: '32px',
          letterSpacing: '0.5px',
        }],
        'desktop-h4': ['24px', {
          lineHeight: '32px',
          letterSpacing: '0px',
        }],
        'desktop-h5': ['18px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
        }],
        'desktop-utility1': ['14px', {
          lineHeight: '22px',
          letterSpacing: '2px',
        }],
        'desktop-utility2': ['12px', {
          lineHeight: '18px',
          letterSpacing: '2px',
        }],
        'desktop-paragraph1': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
        }],
        'desktop-paragraph2': ['14px', {
          lineHeight: '22px',
          letterSpacing: '0.5px',
        }],
        'desktop-paragraph3': ['12px', {
          lineHeight: '20px',
          letterSpacing: '0.5px',
        }],
        'mobile-h1': ['36px', {
          lineHeight: '42px',
          letterSpacing: '0px',
        }],
        'mobile-h2': ['30px', {
          lineHeight: '38px',
          letterSpacing: '0px',
        }],
        'mobile-h3': ['24px', {
          lineHeight: '32px',
          letterSpacing: '0.5px',
        }],
        'mobile-h4': ['24px', {
          lineHeight: '32px',
          letterSpacing: '0px',
        }],
        'mobile-h5': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
        }],
        'mobile-utility1': ['14px', {
          lineHeight: '22px',
          letterSpacing: '2px',
        }],
        'mobile-utility2': ['12px', {
          lineHeight: '18px',
          letterSpacing: '2px',
        }],
        'mobile-paragraph1': ['16px', {
          lineHeight: '24px',
          letterSpacing: '0.5px',
        }],
        'mobile-paragraph2': ['14px', {
          lineHeight: '22px',
          letterSpacing: '0.5px',
        }],
        'mobile-paragraph3': ['12px', {
          lineHeight: '22px',
          letterSpacing: '0.5px',
        }],
      }
    },
    colors: {
      primary: {
        indigo: '#0B163B',
        reverse: '#FFFFFF',
        reflexblue: '#092DC5',
        sandstone: '#F4F2EF'
      },
      secondary: {
        indigo: '#5B667F',
        tangerine: '#DA3522',
        bluegrey: '#C5BDBC',
        preordergreen: '#376566',
        backorderpurp: '#5B3766'
      },
      utils: {
        green: '#00A650',
        red: '#DA3522',
        amber: '#FFC107',
        black: '#000',
        white: '#fff',
      }
    },
    fontFamily: {
      primary: ['Grifo S', 'serif'],
      secondary: ['Maison Neue', 'sans-serif'],
    },
  },
  plugins: [],
}
