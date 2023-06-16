import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

export const $selectedRackTail = createStore<{ index: number; letter: string } | null>(null);

export const { setSelectedTail } = createApi($selectedRackTail, {
  setSelectedTail: (_, payload: { index: number; letter: string } | null) => payload,
});

$selectedRackTail.watch((state) => {
  // log('[Rack Tail]', state);
});
