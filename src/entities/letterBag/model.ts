import { createApi, createStore } from 'effector';

import { letters } from 'shared/lib/game';

const bag: string[] = [];

Object.entries(letters).forEach(([letter, value]) => {
  for (let i = 0; i < value.count; i++) {
    bag.push(letter);
  }
});

export const $letterBag = createStore(bag);

export const { removeLetter } = createApi($letterBag, {
  removeLetter: (state, payload) => {
    const letterIndex = state.indexOf(payload);

    if (letterIndex > -1) {
      state.splice(letterIndex, 1);
    }

    return state;
  },
});
