import { useStore } from 'effector-react';

import { $board } from 'entities/board';
import { $history } from 'entities/history';
import { $playerMoves } from 'entities/player';

import { log, findWords } from 'shared/lib';

export const PlayerScore = () => {
  const board = useStore($board);
  const playerMoves = useStore($playerMoves);
  const history = useStore($history);

  const historyWords = Object.values(history).flat();
  const playerMovesArray = Array.from(playerMoves.keys()).map((key) => key.split('-').map(Number));

  const { validWords, existingWords, invalidWords, duplicatedWords, nonIntersectingWords } = findWords(
    board,
    playerMovesArray,
    historyWords,
  );

  log('[validWords]', validWords);
  log('[existingWords]', existingWords);
  log('[invalidWords]', invalidWords);
  log('[duplicatedWords]', duplicatedWords);
  log('[nonIntersectingWords]', nonIntersectingWords);

  return <>0/0</>;
};
