import { useState } from 'react';

import { IconPlayerPlayFilled } from '@tabler/icons-react';

import { Button, createStyles, Flex, Select } from '@mantine/core';

import { CountPlayers, GamePlayer, Player, startGame } from 'entities/game';

const playersOrder = {
  2: [Player.Player1, Player.Player2],
  3: [Player.Player1, Player.Player2, Player.Player3],
  4: [Player.Player1, Player.Player2, Player.Player3, Player.Player4],
} as Record<string, GamePlayer[]>;

export const StartGame = () => {
  const { classes } = useStyles();
  const [countPlayers, setCountPlayers] = useState<CountPlayers>(2);

  const handleClick = () => {
    startGame({ countPlayers, players: playersOrder[countPlayers] });
  };

  return (
    <Flex gap="sm">
      <Button onClick={handleClick} rightIcon={<IconPlayerPlayFilled size="0.75rem" />} className={classes.button}>
        Start
      </Button>
      <Select
        defaultValue="2"
        className={classes.select}
        onChange={(count) => setCountPlayers(Number(count) as CountPlayers)}
        data={[
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
        ]}></Select>
    </Flex>
  );
};

const useStyles = createStyles(() => {
  return {
    button: {
      flex: 1,
    },
    select: {
      flex: 1,
    },
  };
});
