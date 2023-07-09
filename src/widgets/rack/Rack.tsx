import { useStore } from 'effector-react';

import { Group } from '@mantine/core';

import { ApplyMoveButton } from 'widgets/rack/ApplyMoveButton';
import { LetterBag } from 'widgets/rack/LetterBag';

import { $game } from 'entities/game';
import { Rack as RackComponent } from 'entities/rack';
import { Player } from 'entities/turn';

import { GameStatus } from 'shared/types';

import { ShuffleButton } from './ShuffleButton';
import { SkipMove } from './SkipMove';
import { Tails } from './Tails';

export const Rack = () => {
  const { turn, status } = useStore($game);

  if (status === GameStatus.Idle || turn === Player.Computer) {
    return null;
  }

  return (
    <RackComponent>
      <LetterBag />

      <Tails />

      <Group spacing="0.25rem">
        <ShuffleButton />
        <ApplyMoveButton />
        <SkipMove />
      </Group>
    </RackComponent>
  );
};
