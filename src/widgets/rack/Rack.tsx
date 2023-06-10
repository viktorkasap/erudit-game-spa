import { useStore } from 'effector-react';

import { Group } from '@mantine/core';

import { ApplyWordButton } from 'widgets/rack/ApplyWordButton';
import { LetterBag } from 'widgets/rack/LetterBag';

import { Rack as RackComponent } from 'entities/rack';
import { $turn } from 'entities/turn';

import { ShuffleButton } from './ShuffleButton';
import { Tails } from './Tails';

export const Rack = () => {
  const turnPlayer = useStore($turn);

  if (turnPlayer === 'computer') {
    return null;
  }

  return (
    <RackComponent>
      <LetterBag />

      <Tails />

      <Group spacing="0.25rem">
        <ShuffleButton />
        <ApplyWordButton />
      </Group>
    </RackComponent>
  );
};
