import { IconUser } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, Group, Text } from '@mantine/core';

import { $turn } from 'entities/turn';

export const Player = () => {
  const player = useStore($turn);

  return (
    <Box>
      <Group position="left" spacing="4">
        <IconUser size="1rem" stroke="3px" />
        <Text fw={600} fz="lg">
          Player:
        </Text>
      </Group>
      <Text transform="capitalize">{player}</Text>
    </Box>
  );
};
