import { Box, Text, createStyles } from '@mantine/core';

import { PlayerScore } from './PlayerScore';

export const Score = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Text fw={600} fz="lg">
        Score:
      </Text>
      <PlayerScore />
    </Box>
  );
};

const useStyles = createStyles(() => {
  return {
    wrapper: {},
  };
});
