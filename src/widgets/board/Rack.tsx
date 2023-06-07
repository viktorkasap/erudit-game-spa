import { IconAB2 } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { ActionIcon, Box, createStyles, Flex } from '@mantine/core';

import { $rackTails, $selectedRackTail, changeRackSelectedTail, shuffleRackTails } from 'widgets/board/model';

import { log } from 'shared/lib';

export const Rack = () => {
  const { classes } = useStyles();
  const tails = useStore($rackTails);

  return (
    <Flex className={classes.rack} justify="center" align="center" mt="lg" p="md" gap="0.125rem">
      {tails.map((tail, index) => (
        <Tail key={tail + index} letter={tail} index={index} />
      ))}
      <ShuffleButton />
    </Flex>
  );
};

const Tail = ({ letter, index }: TailProps) => {
  const { classes, cx } = useStyles();
  const selectedTailIndex = useStore($selectedRackTail);

  const handleSelected = () => {
    if (selectedTailIndex === null) {
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

const ShuffleButton = () => {
  const { classes } = useStyles();

  const handleShuffle = () => {
    shuffleRackTails();
    changeRackSelectedTail(null);
  };

  return (
    <ActionIcon onClick={handleShuffle} className={classes.shuffle} variant="light">
      <IconAB2 size="1rem" />
    </ActionIcon>
  );
};

interface TailProps {
  letter: string;
  index: number;
}

const useStyles = createStyles((theme) => ({
  rack: {
    width: '49rem',
    margin: '0 auto',
    backgroundColor: theme.colors.indian[4],
    borderRadius: '0.5rem',
    border: '0.25rem solid',
    borderColor: theme.colors.indian[2],
    position: 'relative',
  },

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
