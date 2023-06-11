import { IconAB2 } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { $rackTails, shuffleRackTails } from 'entities/rack';
import { setSelectedTail } from 'entities/tail';

export const ShuffleButton = () => {
  const { classes } = useStyles();
  const tails = useStore($rackTails);

  const handleShuffle = () => {
    setSelectedTail(null);
    shuffleRackTails();
  };

  return (
    <ActionIcon onClick={handleShuffle} className={classes.shuffle} variant="light" disabled={tails.length <= 1}>
      <IconAB2 size="1rem" />
    </ActionIcon>
  );
};

const useStyles = createStyles((theme) => ({
  shuffle: {
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
