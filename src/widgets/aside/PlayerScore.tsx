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

  log('[words2]', findWords(board, playerMovesArray, historyWords));

  return <>0/0</>;
};
