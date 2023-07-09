import { IconPlayerTrackNextFilled } from '@tabler/icons-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { nextPlayer } from 'entities/game';

export const SkipMove = () => {
  const { classes } = useStyles();

  return (
    <ActionIcon className={classes.skip} variant="light" onClick={() => nextPlayer()}>
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
