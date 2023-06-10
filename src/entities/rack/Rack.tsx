import { FC, PropsWithChildren } from 'react';

import { createStyles, Flex } from '@mantine/core';

export const Rack: FC<PropsWithChildren> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Flex className={classes.rack} justify="space-between" align="center" mt="lg" p="md" gap="0.25rem">
      {children}
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
