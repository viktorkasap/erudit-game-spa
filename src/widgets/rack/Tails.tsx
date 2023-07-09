import { useStore } from 'effector-react';

import { Flex } from '@mantine/core';

import { Tail } from 'widgets/rack/Tail';

import { $game } from 'entities/game';
import { $letterBag, removeLetter } from 'entities/letterBag';
import { $players, addPlayerTails } from 'entities/players';

import { shuffleArray } from 'shared/lib';
import { GamePlayer } from 'shared/types';

const useTails = () => {
  const { turn } = useStore($game);
  const bag = useStore($letterBag);
  const players = useStore($players);

  const shuffledBag = shuffleArray([...bag]);
  const currentPlayer = players[turn as GamePlayer];
  const playerTailsLength = currentPlayer.tails.length;
  const newTails = shuffledBag.slice(0, 7 - playerTailsLength);

  if (playerTailsLength < 7 && currentPlayer.moves.size === 0) {
    addPlayerTails({ player: turn as GamePlayer, tails: [...currentPlayer.tails, ...newTails] });

    // remove letters from bag
    newTails.forEach((letter) => {
      removeLetter(letter);
    });
  }

  return { tails: currentPlayer.tails };
};

export const Tails = () => {
  const { tails } = useTails();

  return (
    <Flex gap="4">
      {tails.map((tail, index) => (
        <Tail tail={tail} key={`tail-${index}`} index={index} />
      ))}
    </Flex>
  );
};
