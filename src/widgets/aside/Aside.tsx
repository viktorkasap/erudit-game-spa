import { Box, createStyles } from '@mantine/core';

import { Score } from './Score';

export const Aside = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.box}>
        <Score />
      </Box>
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
    },

    box: {
      width: '100%',
      padding: '0.5rem 0.625rem',
      color: theme.colors.dark[9],
      borderRadius: theme.radius.md,
      border: '0.1875rem solid',
      borderColor: theme.colors.indian[2],
      backgroundColor: theme.colors.indian[4],
    },
  };
});
