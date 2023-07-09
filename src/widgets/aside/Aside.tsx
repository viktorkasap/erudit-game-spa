import { useStore } from 'effector-react';

import { Box, createStyles } from '@mantine/core';

import { $game } from 'entities/game';

import { GameStatus, Player as _Player } from 'shared/types';

import { EndGame } from './EndGame';
import { Score } from './Score';
import { StartGame } from './StartGame';

export const Aside = () => {
  const { classes } = useStyles();
  const game = useStore($game);

  return (
    <Box className={classes.wrapper}>
      {GameStatus.Idle === game.status && <StartGame />}
      {GameStatus.Process === game.status && game.turn !== _Player.Computer && (
        <>
          <EndGame />
          <Box className={classes.box}>
            <Score />
          </Box>
        </>
      )}
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
