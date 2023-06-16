import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

type PlayerMovesType = Map<string, string>;

export const $playerMoves = createStore<PlayerMovesType>(new Map());

export const { addPlayerMove, removePlayerMove, clearAllPlayerMoves } = createApi($playerMoves, {
  addPlayerMove: (state: PlayerMovesType, payload: { position: string; letter: string }) => {
    return new Map(state.set(payload.position, payload.letter));
  },
  removePlayerMove: (state: PlayerMovesType, payload: string) => {
    state.delete(payload);

    return state;
  },
  clearAllPlayerMoves: () => new Map(),
});

$playerMoves.watch((state) => {
  // log('[$playerMoves]', state);
});
