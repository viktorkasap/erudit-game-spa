import { IconPlayerStopFilled } from '@tabler/icons-react';

import { Button } from '@mantine/core';

import { resetBoard } from 'entities/board';
import { endGame } from 'entities/game';
import { resetBag } from 'entities/letterBag';

export const EndGame = () => {
  const handleEnd = () => {
    endGame();
    resetBoard();
    resetBag();
  };

  return (
    <Button fullWidth onClick={handleEnd} rightIcon={<IconPlayerStopFilled size="0.75rem" />}>
      End Game
    </Button>
  );
};
