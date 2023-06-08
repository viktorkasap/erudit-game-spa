import { IconAB2 } from '@tabler/icons-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { setSelectedTail } from 'entities/tail';

import { shuffleRackTails } from './model';

export const ShuffleButton = () => {
  const { classes } = useStyles();

  const handleShuffle = () => {
    setSelectedTail(null);
    shuffleRackTails();
  };

  return (
    <ActionIcon onClick={handleShuffle} className={classes.shuffle} variant="light">
      <IconAB2 size="1rem" />
    </ActionIcon>
  );
};

const useStyles = createStyles((theme) => ({
  shuffle: {
    position: 'absolute',
    right: '1rem',
    top: '1rem',

    '&:hover': {
      backgroundColor: theme.colors.dark[4],
      color: theme.white,
    },
  },
}));
