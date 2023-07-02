import { IconFileInvoice, IconPlayerTrackNextFilled } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, Text, createStyles, Group, Button } from '@mantine/core';

import { $board } from 'entities/board';
import { $history } from 'entities/history';
import { $playerMoves } from 'entities/player';

import { log } from 'shared/lib';
import { checkMove } from 'shared/lib/game';

export const Score = () => {
  const { classes } = useStyles();

  // const board = useStore($board);
  // const playerMoves = useStore($playerMoves);
  // const history = useStore($history);
  // const historyWords = Object.values(history).flat();
  //
  // const validMove = checkMove({ board, historyWords, playerMoves });
  // log('VALIDMOVE', validMove);

  return (
    <Box className={classes.wrapper}>
      <Group position="left" spacing="4">
        <IconFileInvoice size="1rem" stroke="2px" />
        <Text fw={600} fz="lg">
          Score:
        </Text>
      </Group>

      <Button rightIcon={<IconPlayerTrackNextFilled size="0.75rem" />}>Skip</Button>

      <Text>0/0</Text>
    </Box>
  );
};

const useStyles = createStyles(() => {
  return {
    wrapper: {},
  };
});
