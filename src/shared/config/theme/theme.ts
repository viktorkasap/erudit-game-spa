import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  primaryColor: 'dark',
  cursorType: 'pointer',
  primaryShade: {
    light: 7,
    dark: 5,
  },
  shadows: {
    '2xl': '0 0.5rem 3.125rem rgba(0, 0, 0, 0.05)',
  },
  colors: {
    // dark: ['#e4e7e9', '#ccd0d5', '#a8afb8', '#7e8792', '#626b78', '#545a66', '#484d56', '#40444a', '#323439', '#232429'],
    red: ['#ffdfe0', '#ffc5c7', '#ff9da0', '#ff6468', '#ff2329', '#ed151b', '#c80d12', '#a50f13', '#881417', '#4b0406'],
    yellow: ['#fef5c7', '#fdea8a', '#fdd94c', '#fcc623', '#f6a60a', '#da7e05', '#b55908', '#93440d', '#78380f', '#451c03'],
    green: ['#d1fadf', '#a8f2c6', '#6fe6a7', '#36d183', '#12b76a', '#079455', '#057747', '#075e3a', '#074d32', '#022c1c'],
    blue: ['#e2eefc', '#bddcfa', '#83bff6', '#429fee', '#228be6', '#0c66bd', '#0b5199', '#0d457f', '#113b69', '#0b2546'],
  },
  components: {
    // Anchor: {
    //   defaultProps: (theme) => ({
    //     color: theme.colorScheme === 'light' ? '#f03e3e' : '#fcc419',
    //   }),
    // },
  },
};
