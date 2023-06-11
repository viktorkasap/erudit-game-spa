import { createApi, createStore } from 'effector';
import produce from 'immer';

import { log } from 'shared/lib';

const buildNewBoard = () => {
  const boardSize = 15;
  const board = new Array(boardSize);
  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize).fill(null);
  }

  return board;
};

export const $board = createStore(buildNewBoard());

export const { setCell, setEmptyCell } = createApi($board, {
  setCell: (state, { indexRow, indexCell, letter }: { indexRow: number; indexCell: number; letter: string }) => {
    return produce(state, (draft) => {
      draft[indexRow][indexCell] = letter;
    });
  },
  setEmptyCell: (state, { indexRow, indexCell }: { indexRow: number; indexCell: number }) => {
    return produce(state, (draft) => {
      draft[indexRow][indexCell] = null;
    });
  },
});

$board.watch((state) => {
  log('[board]', state);
});
