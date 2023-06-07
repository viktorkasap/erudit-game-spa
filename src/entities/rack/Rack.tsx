import { useStore } from 'effector-react';

import { createStyles, Flex } from '@mantine/core';

import { $rackTails } from './model';
import { ShuffleButton } from './ShuffleButton';
import { Tail } from './Tail';

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
}));
