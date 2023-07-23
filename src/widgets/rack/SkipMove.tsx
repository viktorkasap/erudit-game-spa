import { IconPlayerTrackNextFilled } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { setEmptyCell } from 'entities/board';
import { $game, nextPlayer } from 'entities/game';
import { $players, addPlayerTail, removePlayerMoves } from 'entities/players';

import { getPlayerMoves } from 'shared/lib/game';
import { GamePlayer } from 'shared/types';

export const SkipMove = () => {
  const { classes } = useStyles();

  const players = useStore($players);
  const { turn } = useStore($game);
  const player = players[turn as GamePlayer];

  const handleSkip = () => {
    // 1) получить все ходы игрока за текущий ход
    const playerMovesArray = getPlayerMoves(Array.from(player.moves));

    playerMovesArray.forEach(({ indexRow, indexCell, tail }) => {
      // 2) вернуть фишку в руки игрока
      addPlayerTail({ player: turn as GamePlayer, tail });
      // 3) очистить ячейку на доске
      setEmptyCell({ indexRow, indexCell });
    });

    // 4) очистить ходы игрока
    removePlayerMoves({ player: turn as GamePlayer });

    // 5) передать ход следующему игроку
    nextPlayer();
  };

  return (
    <ActionIcon className={classes.skip} variant="light" onClick={handleSkip}>
      <IconPlayerTrackNextFilled size="1rem" />
    </ActionIcon>
  );
};

const useStyles = createStyles((theme) => ({
  skip: {
    width: '3rem',
    height: '3rem',
    transform: 'translateY(0%)',
    transition: 'background-color .2s ease',

    '&:hover': {
      backgroundColor: theme.colors.red[6],
      color: theme.white,
    },

    '&[data-disabled]': {
      backgroundColor: theme.colors.gray[7],
      borderColor: theme.colors.gray[7],
    },
  },
}));
