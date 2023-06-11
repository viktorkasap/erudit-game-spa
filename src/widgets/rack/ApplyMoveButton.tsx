import { IconCheck } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { $playerMoves } from 'entities/player';

export const ApplyMoveButton = () => {
  const { classes } = useStyles();
  const playersMoves = useStore($playerMoves);

  return (
    <ActionIcon className={classes.button} variant="light" disabled={!playersMoves.size}>
      <IconCheck size="1rem" stroke="0.25rem" />
    </ActionIcon>
  );
};

const useStyles = createStyles((theme) => ({
  button: {
    width: '3rem',
    height: '3rem',
    transform: 'translateY(0%)',
    transition: 'background-color .2s ease',
    backgroundColor: theme.colors.green[5],

    '&:hover': {
      backgroundColor: theme.colors.green[6],
      color: theme.white,
    },

    '&[data-disabled]': {
      backgroundColor: theme.colors.gray[7],
      borderColor: theme.colors.gray[7],
    },
  },
}));
