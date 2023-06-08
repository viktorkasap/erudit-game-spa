import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';
import { shuffleArray } from 'shared/lib/shuffleArray';

// Rack Tails
export const $rackTails = createStore(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
export const { shuffleRackTails, popRackTail, setRackTail } = createApi($rackTails, {
  shuffleRackTails: (state) => shuffleArray([...state]),
  popRackTail: (state, payload) => [...state].filter((_, index) => index !== payload),
  setRackTail: (state, payload) => [...state, payload],
});

$rackTails.watch((state) => {
  log('[Rack Tails]', state);
});
