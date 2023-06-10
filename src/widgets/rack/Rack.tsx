import { useStore } from 'effector-react';

import { LetterBag } from 'widgets/rack/LetterBag';

import { $rackTails, Rack as RackComponent } from 'entities/rack';
import { $turn } from 'entities/turn';

import { ShuffleButton } from './ShuffleButton';
import { Tail } from './Tail';

export const Rack = () => {
  const tails = useStore($rackTails);
  const turnPlayer = useStore($turn);

  if (turnPlayer === 'computer') {
    return null;
  }

  return (
    <RackComponent>
      <LetterBag />

      {tails.map((tail, index) => (
        <Tail tail={tail} key={`tail-${index}`} index={index} />
      ))}

      <ShuffleButton />
    </RackComponent>
  );
};
