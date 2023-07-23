import { IconPlayerStopFilled } from '@tabler/icons-react';

import { Button } from '@mantine/core';

import { resetBoard } from 'entities/board';
import { setSelectedCell } from 'entities/cell';
import { endGame } from 'entities/game';
import { resetBag } from 'entities/letterBag';
import { resetPlayers } from 'entities/players';
import { setSelectedTail } from 'entities/tail';

export const EndGame = () => {
  const handleEnd = () => {
    endGame();
    resetBag();
    resetBoard();
    resetPlayers();

    // сбросить состояние стора выбранной ячейки
    setSelectedCell(null);

    // сбросить состояние стора выбранной фишки
    setSelectedTail(null);
  };

  return (
    <Button fullWidth onClick={handleEnd} rightIcon={<IconPlayerStopFilled size="0.75rem" />}>
      End Game
    </Button>
  );
};
