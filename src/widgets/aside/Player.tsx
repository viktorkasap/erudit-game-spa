import { IconUser } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, Group, Text } from '@mantine/core';

import { $game } from 'entities/game';

export const Player = () => {
  const { turn, players } = useStore($game);

  return (
    <Box>
      <Group position="left" spacing="4">
        {players.map((player) => {
          return <IconUser key={player} size="1.5rem" stroke={player === turn ? '0.1875rem' : '0.15625rem'} />;
        })}
      </Group>
      <Text transform="capitalize">{turn !== 'computer' && turn}</Text>
    </Box>
  );
};
