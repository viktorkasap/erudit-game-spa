import { createApi, createStore } from 'effector';
import produce from 'immer';

import { letters } from 'shared/lib/game';

const buildBag = () => {
  const bag: string[] = [];

  Object.entries(letters).forEach(([letter, value]) => {
    for (let i = 0; i < value.count; i++) {
      bag.push(letter);
    }
  });

  return bag;
};

export const $letterBag = createStore(buildBag());

export const { removeLetter, resetBag } = createApi($letterBag, {
  removeLetter: (state, payload) => {
    return produce(state, (draft) => {
      const letterIndex = draft.indexOf(payload);

      if (letterIndex > -1) {
        draft.splice(letterIndex, 1);
      }

      return draft;
    });
  },
  resetBag: () => buildBag(),
});
