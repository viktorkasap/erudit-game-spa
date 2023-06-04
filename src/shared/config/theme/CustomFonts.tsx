import { Global } from '@mantine/core';

// import thin from './assets/fonts/Inter/static/Inter-Thin.ttf';
// import extraLight from './assets/fonts/Inter/static/Inter-ExtraLight.ttf';
import bold from './assets/fonts/Inter/static/Inter-Bold.ttf';
import extraBold from './assets/fonts/Inter/static/Inter-ExtraBold.ttf';
// import black from './assets/fonts/Inter/static/Inter-Black.ttf';
import light from './assets/fonts/Inter/static/Inter-Light.ttf';
import medium from './assets/fonts/Inter/static/Inter-Medium.ttf';
import regular from './assets/fonts/Inter/static/Inter-Regular.ttf';
import semiBold from './assets/fonts/Inter/static/Inter-SemiBold.ttf';

export const CustomFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url("${light}") format("truetype")`,
            fontWeight: 300,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url("${regular}") format("truetype")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url("${medium}") format("truetype")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url("${semiBold}") format("truetype")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url("${bold}") format("truetype")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url("${extraBold}") format("truetype")`,
            fontWeight: 800,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
};
