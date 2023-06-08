import { useStore } from 'effector-react';

import { createStyles, Flex } from '@mantine/core';

import { $selectedRackTail, setSelectedTail, Tail } from 'entities/tail';

import { $rackTails } from './model';
import { ShuffleButton } from './ShuffleButton';

export const Rack = () => {
  const { classes } = useStyles();
  const tails = useStore($rackTails);
  const selectedTail = useStore($selectedRackTail);

  const handleSelected = ({ index, letter }: { index: number; letter: string }) => {
    if (selectedTail === null || selectedTail.index !== index) {
      setSelectedTail({ index, letter });
    } else {
      setSelectedTail(null);
    }
  };

  return (
    <Flex className={classes.rack} justify="center" align="center" mt="lg" p="md" gap="0.125rem">
      {tails.map((letter, index) => (
        <Tail
          letter={letter}
          key={letter + index}
          isSelected={selectedTail?.index === index}
          onClick={() => handleSelected({ index, letter })}
        />
      ))}
      <ShuffleButton />
    </Flex>
  );
};

const useStyles = createStyles((theme) => ({
  rack: {
    height: '6rem',
    width: '49rem',
    margin: '0 auto 2rem auto',
    backgroundColor: theme.colors.indian[4],
    borderRadius: '0.5rem',
    border: '0.25rem solid',
    borderColor: theme.colors.indian[2],
    position: 'relative',
  },
}));
