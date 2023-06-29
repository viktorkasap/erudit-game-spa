import { IconPlayerPlayFilled } from '@tabler/icons-react';

import { Button } from '@mantine/core';

import { startGame } from 'entities/game';

export const StartGame = () => {
  return (
    <Button fullWidth onClick={() => startGame()} rightIcon={<IconPlayerPlayFilled size="1rem" />}>
      Start Game
    </Button>
  );
};
