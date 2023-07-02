import { createApi, createStore } from 'effector';
import produce from 'immer';

import { log } from 'shared/lib';
import { buildBoard } from 'shared/lib/game';

export const $board = createStore({ board: buildBoard(), startWord: '' });

export const { setCell, setEmptyCell, startWord } = createApi($board, {
  setCell: (state, { indexRow, indexCell, letter }: { indexRow: number; indexCell: number; letter: string }) => {
    return produce(state, (draft) => {
      draft.board[indexRow][indexCell] = letter;
    });
  },
  setEmptyCell: (state, { indexRow, indexCell }: { indexRow: number; indexCell: number }) => {
    return produce(state, (draft) => {
      draft.board[indexRow][indexCell] = null;
    });
  },
  startWord: (state, { word }) => ({ ...state, startWord: word }),
});

$board.watch((state) => {
  log('[$board]', state);
});
