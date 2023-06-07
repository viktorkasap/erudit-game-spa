import { useStore } from 'effector-react';

import { Box, createStyles } from '@mantine/core';

import { $selectedRackTail, changeRackSelectedTail } from './model';

export const Tail = ({ letter, index }: TailProps) => {
  const { classes, cx } = useStyles();
  const selectedTailIndex = useStore($selectedRackTail);

  const handleSelected = () => {
    if (selectedTailIndex === null || selectedTailIndex !== index) {
      changeRackSelectedTail(index);
    } else {
      changeRackSelectedTail(null);
    }
  };

  return (
    <Box className={cx(classes.tail, { [classes.tailSelected]: selectedTailIndex === index })} onClick={handleSelected}>
      {letter}
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  tail: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '3rem',
    width: '3rem',
    fontSize: theme.fontSizes.xl,
    textTransform: 'uppercase',
    fontWeight: 600,
    backgroundColor: theme.colors.dark[7],
    borderRadius: '0.25rem',
    lineHeight: '1.2',
    color: theme.white,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: theme.colors.dark[6],
    },
  },

  tailSelected: {
    backgroundColor: theme.colors.dark[4],

    '&:hover': {
      backgroundColor: theme.colors.dark[4],
    },
  },
}));

interface TailProps {
  letter: string;
  index: number;
}
