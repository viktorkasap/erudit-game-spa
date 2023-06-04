import { FC, PropsWithChildren } from 'react';

import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { NavigationProgress } from '@mantine/nprogress';

import { theme, MODE, CustomFonts, GlobalStyles } from 'shared/config/theme';

export const WithTheme: FC<PropsWithChildren> = ({ children }) => {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (mode?: ColorScheme) => {
    setColorScheme(mode || ((colorScheme || preferredColorScheme) === MODE.DARK ? MODE.LIGHT : MODE.DARK));
  };

  // TODO Add import useHotkeys to change color mode
  // useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme || preferredColorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          ...theme,
          // colorScheme: MODE.LIGHT, // colorScheme || preferredColorScheme
          colorScheme: colorScheme || preferredColorScheme,
        }}>
        <CustomFonts />
        <GlobalStyles />
        <Notifications position="top-right" />
        <NavigationProgress autoReset progressLabel="Loading content" />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};
