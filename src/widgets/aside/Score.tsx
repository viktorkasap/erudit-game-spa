import { useStore } from 'effector-react';

import { Box, Text, createStyles } from '@mantine/core';

import { $board } from 'entities/board';
import { $history } from 'entities/history';
import { $playerMoves } from 'entities/player';

import { log, checkMove } from 'shared/lib';

import { PlayerScore } from './PlayerScore';

export const Score = () => {
  const { classes } = useStyles();

  const board = useStore($board);
  const playerMoves = useStore($playerMoves);
  const history = useStore($history);
  const historyWords = Object.values(history).flat();

  const validMove = checkMove({ board, historyWords, playerMoves });

  log('VALIDMOVE', validMove);

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
