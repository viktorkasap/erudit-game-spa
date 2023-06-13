import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

type TurnMap = Map<string, string>;

export const $playerMoves = createStore<TurnMap>(new Map());

export const { addPlayerMove, removePlayerMove, clearAllPlayerMoves } = createApi($playerMoves, {
  addPlayerMove: (state: TurnMap, payload: { position: string; letter: string }) => {
    return new Map(state.set(payload.position, payload.letter));
  },
  removePlayerMove: (state: TurnMap, payload: string) => {
    state.delete(payload);

    return new Map(state);
  },
  clearAllPlayerMoves: () => new Map(),
});

$playerMoves.watch((state) => {
  log('[$playerTurnMoves]', state);
});
