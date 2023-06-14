import { createApi, createStore } from 'effector';
import produce from 'immer';

import { log } from 'shared/lib';
import { buildBoard } from 'shared/lib/game';

export const $board = createStore(buildBoard());

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
