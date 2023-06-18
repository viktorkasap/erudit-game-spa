import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

export const $selectedCell = createStore<{ indexRow: number; indexCell: number } | null>(null);

export const { setSelectedCell } = createApi($selectedCell, {
  setSelectedCell: (_, payload: { indexRow: number; indexCell: number } | null) => payload,
});

$selectedCell.watch((state) => {
  // log('[$selectedCell]', state);
});
