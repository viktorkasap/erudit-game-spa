import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

type TurnMap = Map<string, boolean>;

export const $playerMoves = createStore<TurnMap>(new Map());

export const { addPlayerMove, removePlayerMove, clearAllPlayerMoves } = createApi($playerMoves, {
  addPlayerMove: (state: TurnMap, payload: string) => {
    return new Map(state.set(payload, true));
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
