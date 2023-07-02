import { IconFileInvoice, IconPlayerTrackNextFilled, IconUser } from '@tabler/icons-react';
import { useStore } from 'effector-react';

import { Box, Text, createStyles, Group, Button } from '@mantine/core';

import { $board } from 'entities/board';
import { $game, nextPlayer } from 'entities/game';
import { $players } from 'entities/players';

import { log } from 'shared/lib';
import { checkMove } from 'shared/lib/game';

export const Score = () => {
  const { classes, cx } = useStyles();

  const players = useStore($players);
  const { turn } = useStore($game);

  // const board = useStore($board);
  // const playerMoves = useStore($playerMoves);
  // const history = useStore($history);
  // const historyWords = Object.values(history).flat();
  //
  // const validMove = checkMove({ board, historyWords, playerMoves });
  // log('VALIDMOVE', validMove);

  return (
    <Box className={classes.wrapper}>
      <Group position="apart" mb="sm">
        <Group position="left" spacing="4">
          <IconFileInvoice size="1.3rem" stroke="2px" />
          <Text fw={600} fz="lg">
            Score:
          </Text>
        </Group>
        <Button size="xs" rightIcon={<IconPlayerTrackNextFilled size="0.75rem" />} onClick={() => nextPlayer()}>
          Skip
        </Button>
      </Group>

      {Object.entries(players).map(([player, values]) => {
        return (
          <Group key={player} spacing="xs" className={cx(classes.userRow, { [classes.currentUserRow]: player === turn })}>
            <IconUser size="1.24rem" stroke="0.125rem" />
            <Text>
              {values.score} / {values.possibleScore}
            </Text>
            <Text size="sm" ml="auto">
              {player}
            </Text>
          </Group>
        );
      })}
    </Box>
  );
};

const useStyles = createStyles((theme) => {
  return {
    wrapper: {},
    userRow: {
      padding: `${theme.spacing['6']} ${theme.spacing['8']}`,
    },
    currentUserRow: {
      backgroundColor: theme.colors.dark[6],
      borderRadius: theme.radius.sm,
      color: theme.white,
    },
  };
});
