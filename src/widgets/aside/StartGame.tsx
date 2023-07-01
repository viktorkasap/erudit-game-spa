import { useState } from 'react';

import { IconPlayerPlayFilled } from '@tabler/icons-react';

import { Button, createStyles, Flex, Select } from '@mantine/core';

import { startGame } from 'entities/game';

export const StartGame = () => {
  const { classes } = useStyles();
  const [countPlayers, setCountPlayers] = useState(2);

  const handleClick = () => {
    startGame({ countPlayers });
  };

  return (
    <Flex gap="sm">
      <Button onClick={handleClick} rightIcon={<IconPlayerPlayFilled size="0.75rem" />} className={classes.button}>
        Start
      </Button>
      <Select
        defaultValue="2"
        className={classes.select}
        onChange={(count) => setCountPlayers(Number(count))}
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
