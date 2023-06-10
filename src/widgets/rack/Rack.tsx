import { useStore } from 'effector-react';

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

      <ShuffleButton />
    </RackComponent>
  );
};
