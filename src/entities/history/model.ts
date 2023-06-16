import { createApi, createStore } from 'effector';
import produce from 'immer';

import { log } from 'shared/lib';

type Player = 'computer' | 'player1' | 'player2';

export const $history = createStore<Record<string, string[]>>({
  computer: [],
  player1: [],
  player2: [],
});

export const { addWordToHistory } = createApi($history, {
  addWordToHistory: (state, payload: { player: Player; word: string }) => {
    const { player, word } = payload;

    return produce(state, (draft) => {
      draft[player].push(word);
    });
  },
});

$history.watch((state) => {
  // log('[$history]', state);
});
