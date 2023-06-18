import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';
import { shuffleArray } from 'shared/lib/shuffleArray';

// Rack Tails
export const $rackTails = createStore<string[]>([]);

export const { shuffleRackTails, removeLetterFromPlayer, addLetterToPlayer } = createApi($rackTails, {
  shuffleRackTails: (state) => shuffleArray([...state]),
  removeLetterFromPlayer: (state, payload) => [...state].filter((_, index) => index !== payload),
  addLetterToPlayer: (state, payload) => [...state, payload],
});

$rackTails.watch((state) => {
  // log('[Rack Tails]', state);
});
