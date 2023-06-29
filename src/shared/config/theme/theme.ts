import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
  primaryColor: 'dark',
  cursorType: 'pointer',
  primaryShade: {
    light: 7,
    dark: 5,
  },
  shadows: {},
  spacing: {
    '2': '0.125rem',
    '4': '0.25rem',
    '6': '0.375rem',
    '8': '0.5rem',
  },
  colors: {
    red: ['#ffdfe0', '#ffc5c7', '#ff9da0', '#ff6468', '#ff2329', '#ed151b', '#c80d12', '#a50f13', '#881417', '#4b0406'],
    yellow: ['#fef5c7', '#fdea8a', '#fdd94c', '#fcc623', '#f6a60a', '#da7e05', '#b55908', '#93440d', '#78380f', '#451c03'],
    green: ['#d1fadf', '#a8f2c6', '#6fe6a7', '#36d183', '#12b76a', '#079455', '#057747', '#075e3a', '#074d32', '#022c1c'],
    blue: ['#e2eefc', '#bddcfa', '#83bff6', '#429fee', '#228be6', '#0c66bd', '#0b5199', '#0d457f', '#113b69', '#0b2546'],
    indian: ['#f2ebe2', '#e4d5c4', '#d2b99f', '#c5a285', '#b2805d', '#a46e52', '#895945', '#6f493d', '#5b3d33', '#301f1a'],
  },
  components: {
    // Anchor: {
    //   defaultProps: (theme) => ({
    //     color: theme.colorScheme === 'light' ? '#f03e3e' : '#fcc419',
    //   }),
    // },
  },
};
