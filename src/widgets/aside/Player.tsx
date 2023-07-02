import { IconPlayerTrackNextFilled, IconUser } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, Button, Group, Text } from '@mantine/core';

import { $game, nextPlayer } from 'entities/game';

import { Player as _Player } from 'shared/types';

export const Player = () => {
  const { turn, players } = useStore($game);

  return (
    <Box>
      <Text mb="xs" transform="capitalize">
        {turn !== _Player.Computer && turn}
      </Text>
      <Group position="apart">
        <Group position="left" spacing="2">
          {players.map((player) => {
            return (
              <IconUser
                key={player}
                size={players.length <= 3 ? '1.5rem' : '1.24rem'}
                stroke={player === turn ? '0.1875rem' : '0.125rem'}
              />
            );
          })}
        </Group>
        <Button size="xs" rightIcon={<IconPlayerTrackNextFilled size="0.75rem" />} onClick={() => nextPlayer()}>
          Skip
        </Button>
      </Group>
    </Box>
  );
};
