import { useStore } from 'effector-react';

import { $board } from 'entities/board';
import { $history } from 'entities/history';
import { $playerMoves } from 'entities/player';

import { log, validMove } from 'shared/lib';

export const PlayerScore = () => {
  const board = useStore($board);
  const playerMoves = useStore($playerMoves);
  const history = useStore($history);

  const historyWords = Object.values(history).flat();
  const playerMovesArray = Array.from(playerMoves.keys()).map((key) => key.split('-').map(Number));

  const valid = validMove({ board, historyWords, playerMoves: playerMovesArray });

  log('[Valid move!]', valid);

  return <>0/0</>;
};
