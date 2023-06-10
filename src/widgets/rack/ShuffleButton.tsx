import { IconAB2 } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, createStyles } from '@mantine/core';

import { $rackTails, shuffleRackTails } from 'entities/rack';
import { setSelectedTail } from 'entities/tail';

export const ShuffleButton = () => {
  const { classes } = useStyles();
  const tails = useStore($rackTails);

  if (tails.length <= 1) {
    return null;
  }

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
    width: '3rem',
    height: '3rem',
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'background-color .2s ease',

    '&:hover': {
      transform: 'translateY(-50%)',
      backgroundColor: theme.colors.dark[7],
      color: theme.white,
    },

    '&:active': {
      transform: 'translateY(-48%)',
    },
  },
}));
