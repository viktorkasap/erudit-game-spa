import { useEffect, useState } from 'react';

import { useStore } from 'effector-react';

import { Flex } from '@mantine/core';

import { Tail } from 'widgets/rack/Tail';

import { $letterBag } from 'entities/letterBag';
import { $rackTails, addLetterToPlayer } from 'entities/rack';

import { shuffleArray } from 'shared/lib/shuffleArray';

export const Tails = () => {
  const bag = useStore($letterBag);
  const tails = useStore($rackTails);
  const [letters, setLetters] = useState<string[] | null>(null);

  useEffect(() => {
    if (!letters) {
      setLetters(shuffleArray(bag).slice(0, 7));
    }

    if (letters) {
      'селение'.split('').forEach((letter) => {
        addLetterToPlayer(letter);
      });

      // original
      // letters?.forEach((letter) => {
      //   setRackTail(letter);
      // });
    }
  }, [bag, letters]);

  return (
    <Flex gap="0.25rem">
      {tails.map((tail, index) => (
        <Tail tail={tail} key={`tail-${index}`} index={index} />
      ))}
    </Flex>
  );
};
