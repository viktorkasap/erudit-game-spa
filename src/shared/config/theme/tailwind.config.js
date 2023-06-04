/** @type {import('tailwindcss').Config} */

// https://tailwindcss.com/docs/theme

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      0: 0,
      2: '0.125rem', // 2px
      4: '0.25rem', // 4px
      6: '0.375rem', // 6px
      DEFAULT: '0.5rem', // 8px,
      10: '0.625rem', // 10px
      12: '0.75rem', // 12px
      14: '0.875rem', // 14px
      16: '1rem', // 16px
      18: '1.125rem', // 18px
      20: '1.25rem', // 20px
      22: '1.375rem', // 22px
      24: '1.5rem', // 24px
      26: '1.625rem', // 26px
      28: '1.75rem', // 28px
      30: '1.875rem', // 30px
      32: '2rem', // 32px
    },
    boxShadow: {
      xs: '0 0.0625rem 0.125rem rgba(16, 24, 40, 0.05)',
      sm: '0 0.0625rem 0.1875rem rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
      md: '0 0.25rem 0.5rem -0.125rem rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      lg: '0 0.75rem 1rem -0.25rem rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
      xl: '0 1.25rem 1.5rem -0.25rem rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      '2xl': '0 1.5rem 3rem -0.75rem rgba(16, 24, 40, 0.18)',
      '3xl': '0 2rem 4rem -0.75rem rgba(16, 24, 40, 0.14)',
    },
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
      ],
    },
    fontSize: {
      h1: '3rem',
      h2: '1.875rem',
      h3: '1.5rem',
      h4: '1.125rem',
      h5: '1rem',
      h6: '0.875rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      90: '0.9',
      100: '1',
    },
    spacing: {
      0: 0,
      2: '0.125rem', // 2px
      4: '0.25rem', // 4px
      6: '0.375rem', // 6px
      8: '0.5rem', // 8px,
      12: '0.75rem', // 12px
      14: '0.875rem', // 14px
      16: '1rem', // 16px
      18: '1.125rem', // 18px
      20: '1.25rem', // 20px
      22: '1.375rem', // 22px
      24: '1.5rem', // 24px
      26: '1.625rem', // 26px
      28: '1.75rem', // 28px
      30: '1.875rem', // 30px
      32: '2rem', // 32px
      34: '2.125rem', // 34px
      36: '2.25rem', // 36px
      38: '2.375rem', // 38px
      40: '2.5rem', // 40px
      42: '2.625rem', // 42px
      44: '2.75rem', // 44px
      46: '2.875rem', // 46px
      48: '3rem', // 48px
      50: '3.125rem', // 50px
      52: '3.25rem', // 52px
      54: '3.375rem', // 54px
      56: '3.5rem', // 56px
      58: '3.625rem', // 58px
      60: '3.75rem', // 60px
      62: '3.875rem', // 62px
      64: '4rem', // 64px
      68: '4.25rem', // 68px
      72: '4.5rem', // 72px
      76: '4.75rem', // 76px
      80: '5rem', // 80px
      88: '5.5rem', // 88px
      96: '6rem', // 96px
      112: '7rem', // 112px
      128: '8rem', // 128px
    },
    screens: {
      xs: '36em', // => @media (min-width: 576px) { ... }
      sm: '48em', // => @media (min-width: 768px) { ... }
      md: '62em', // => @media (min-width: 992px) { ... }
      lg: '75em', // => @media (min-width: 1200px) { ... }
      xl: '88em', // => @media (min-width: 1408px) { ... }
      tablet: '991px', // => @media (min-width: 640px) { ... }
      laptop: '1280px', // => @media (min-width: 1024px) { ... }
      desktop: '1440px', // => @media (min-width: 1280px) { ... }
    },
    extend: {
      gridTemplateRows: {
        layout3: 'auto 1fr auto',
      },
      colors: {
        current: 'currentColor',
        transparent: 'transparent',
        DEFAULT: '#232429',
        black: '#000000',
        white: '#ffffff',

        // DEFAULT: 'var(--color-primary)',
        // primary: 'var(--color-primary)',
        // secondary: 'var(--color-secondary)',
        // accent: 'var(--color-accent)',
        // success: 'var(--color-success)',
        // danger: 'var(--color-danger)',
        // warning: 'var(--color-warning)',
        // info: 'var(--color-info)',
        // light: 'var(--color-light)',
        // black: 'var(--color-black)',
        // white: 'var(--color-white)',

        // DEFAULT: '#323439',
        // primary: '#323439',
        // secondary: '#FFFFFF',
        // accent: '#7e69eb',
        // success: '#12B76A',
        // danger: '#ff2329',
        // warning: '#f6a60a',
        // info: '#228be6',
        // dark: '#222222',
        // light: '#F9FAFB',
        // black: '#000000',
        // white: '#ffffff',

        red: {
          50: '#fff1f1',
          100: '#ffdfe0',
          200: '#ffc5c7',
          300: '#ff9da0',
          400: '#ff6468',
          DEFAULT: '#ff2329',
          600: '#ed151b',
          700: '#c80d12',
          800: '#a50f13',
          900: '#881417',
          950: '#4b0406',
        },

        yellow: {
          50: '#fffceb',
          100: '#fef5c7',
          200: '#fdea8a',
          300: '#fdd94c',
          400: '#fcc623',
          DEFAULT: '#f6a60a',
          600: '#da7e05',
          700: '#b55908',
          800: '#93440d',
          900: '#78380f',
          950: '#451c03',
        },

        green: {
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a8f2c6',
          300: '#6fe6a7',
          400: '#36d183',
          DEFAULT: '#12b76a',
          600: '#079455',
          700: '#057747',
          800: '#075e3a',
          900: '#074d32',
          950: '#022c1c',
        },

        blue: {
          50: '#f1f7fe',
          100: '#e2eefc',
          200: '#bddcfa',
          300: '#83bff6',
          400: '#429fee',
          DEFAULT: '#228be6',
          600: '#0c66bd',
          700: '#0b5199',
          800: '#0d457f',
          900: '#113b69',
          950: '#0b2546',
        },

        ebony: {
          50: '#f3f6fc',
          100: '#e7edf7',
          200: '#cad8ed',
          300: '#9bb7de',
          400: '#6591cb',
          DEFAULT: '#4173b6',
          600: '#305999',
          700: '#28487c',
          800: '#243e68',
          900: '#233657',
          950: '#17233a',
        },

        purple: {
          50: '#efeffe',
          100: '#e1e3fe',
          200: '#c9cafc',
          300: '#aaa9f8',
          400: '#9086f3',
          DEFAULT: '#7e69eb',
          600: '#6f4dde',
          700: '#603ec4',
          800: '#4e359e',
          900: '#42327d',
          950: '#281d49',
        },

        gray: {
          50: '#f6f7f8',
          100: '#ebecee',
          200: '#dbdee2',
          300: '#c3c8cd',
          400: '#9da4ae',
          DEFAULT: '#8f95a2',
          600: '#7e8392',
          700: '#717584',
          800: '#5f626e',
          900: '#4f5159',
          950: '#323439',
        },

        dark: {
          50: '#f5f6f6',
          100: '#e4e7e9',
          200: '#ccd0d5',
          300: '#a8afb8',
          400: '#7e8792',
          500: '#626b78',
          600: '#545a66',
          700: '#484d56',
          800: '#40444a',
          900: '#323439',
          DEFAULT: '#232429',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require('postcss-import'),
  ],
};
