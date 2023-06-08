import { FC, PropsWithChildren } from 'react';

import { Box, createStyles } from '@mantine/core';

export const Board: FC<PropsWithChildren> = ({ children }) => {
  const { classes, cx } = useStyles();

  return <Box className={cx(classes.board)}>{children}</Box>;
};

const useStyles = createStyles((theme) => ({
  board: {
    width: '49rem',
    margin: '0 auto',
    backgroundColor: theme.colors.dark[9],
    borderRadius: '0.5rem',
    border: '0.25rem solid',
    borderColor: theme.colors.dark[9],
  },
}));
