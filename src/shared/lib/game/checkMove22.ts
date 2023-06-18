import { isEqual, uniqWith } from 'lodash';

import dictionary from 'shared/assets/dict/ru1/words.json';
import { log } from 'shared/lib';

type Word = string;

type Board = Word[][];
type HistoryWords = Word[];

export const checkMove = ({
  board,
  historyWords,
  playerMoves,
}: {
  board: Board;
  historyWords: HistoryWords;
  playerMoves: Map<string, string>;
}) => {
  const playerMovesArray = Array.from(playerMoves.keys()).map((key) => key.split('-').map(Number));

  return {};
};
