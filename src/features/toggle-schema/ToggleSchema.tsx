import { IconSun, IconMoonStars } from '@tabler/icons-react';

import { ActionIcon, Box, useMantineColorScheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

import { MODE } from 'shared/config/theme';

const IconMode = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return isDarkMode ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />;
};

// TODO добавить переключение на системные настройки цветовой темы

export const ToggleSchema = () => {
  const preferredColorScheme = useColorScheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box sx={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 10 }}>
      <ActionIcon size={34} variant="outline" onClick={() => toggleColorScheme()} radius="xl">
        <IconMode isDarkMode={(colorScheme || preferredColorScheme) === MODE.DARK} />
      </ActionIcon>
    </Box>
  );
};
