import { useStore } from 'effector-react';

import { Box, createStyles, Text } from '@mantine/core';

import { $letterBag } from 'entities/letterBag';

export const LetterBag = () => {
  const { classes } = useStyles();

  const letterBag = useStore($letterBag);
  const countLetters = Object.values(letterBag).length;

  return (
    <Box className={classes.bag}>
      <Text>Letters left</Text>
      <Text fw={600}>{countLetters}</Text>
    </Box>
  );
};

const useStyles = createStyles((theme) => ({
  bag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0.5rem 1rem',
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'background-color .2s ease',
    backgroundColor: theme.colors.yellow[9],
    borderRadius: theme.radius.md,
    color: theme.white,
  },
}));
