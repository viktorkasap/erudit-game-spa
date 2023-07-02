import { createApi, createStore } from 'effector';
import produce from 'immer';

import { log } from 'shared/lib';
import { buildBoard } from 'shared/lib/game';

const initialState = { board: buildBoard(), startWord: '' };
export const $board = createStore(initialState);

export const { setCell, setEmptyCell, startWord, resetBoard } = createApi($board, {
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
  resetBoard: () => initialState,
});

$board.watch((state) => {
  log('[$board]', state);
});
