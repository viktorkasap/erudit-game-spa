import { IconPlayerTrackNextFilled } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { $game, nextPlayer } from 'entities/game';
import { removePlayerMoves } from 'entities/players';

import { GamePlayer } from 'shared/types';

export const SkipMove = () => {
  const { classes } = useStyles();

  const { turn } = useStore($game);

  const handleClick = () => {
    removePlayerMoves({ player: turn as GamePlayer });
    nextPlayer();
  };

  return (
    <ActionIcon className={classes.skip} variant="light" onClick={handleClick}>
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
      backgroundColor: theme.colors.dark[7],
      color: theme.white,
    },

    '&[data-disabled]': {
      backgroundColor: theme.colors.gray[7],
      borderColor: theme.colors.gray[7],
    },
  },
}));
