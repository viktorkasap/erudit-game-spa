import { useStore } from 'effector-react';

import { LetterBag } from 'widgets/rack/LetterBag';

import { $rackTails, Rack as RackComponent } from 'entities/rack';

import { ShuffleButton } from './ShuffleButton';
import { Tail } from './Tail';

export const Rack = () => {
  const tails = useStore($rackTails);

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
