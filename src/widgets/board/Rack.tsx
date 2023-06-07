import { useState } from 'react';

import { useStore } from 'effector-react';

import { Box, createStyles, Flex } from '@mantine/core';

import { $rackLetters, changeRackLettersPosition } from 'widgets/board/model';

export const Rack = () => {
  const { classes } = useStyles();
  const letters = useStore($rackLetters);

  return (
    <Flex className={classes.rack} justify="center" align="center" mt="lg" p="md" gap="0.125rem">
      {letters.map((letter, index) => (
        <RackTail key={letter + index} letter={letter} />
      ))}
    </Flex>
  );
};

const RackTail = ({ letter }: { letter: string }) => {
  const { classes, cx } = useStyles();

  return <Box className={cx(classes.rackLetter, { [classes.rackLetterGrabbed]: true })}>{letter}</Box>;
};

const useStyles = createStyles((theme) => ({
  rack: {
    width: '49rem',
    margin: '0 auto',
    backgroundColor: theme.colors.indian[4],
    borderRadius: '0.5rem',
    border: '0.25rem solid',
    borderColor: theme.colors.indian[2],
  },

  rackLetter: {
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
    // cursor: 'grab',
    cursor: 'pointer',
  },

  rackLetterGrabbed: {
    // cursor: 'grabbing',
    backgroundColor: theme.colors.dark[4],
  },
}));
