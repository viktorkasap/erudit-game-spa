import { IconPlayerStopFilled } from '@tabler/icons-react';

import { Button } from '@mantine/core';

import { endGame } from 'entities/game';

export const EndGame = () => {
  return (
    <Button fullWidth onClick={() => endGame()} rightIcon={<IconPlayerStopFilled size="0.75rem" />}>
      End Game
    </Button>
  );
};
