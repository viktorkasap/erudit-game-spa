import { IconPlayerStopFilled } from '@tabler/icons-react';

import { Button } from '@mantine/core';

import { endGame } from 'entities/game';

export const EndGame = () => {
  return (
    <Button fullWidth onClick={() => endGame()} rightIcon={<IconPlayerStopFilled size="1rem" />}>
      End Game
    </Button>
  );
};
