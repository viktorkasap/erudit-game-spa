import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

type TurnMap = Map<string, boolean>;

export const $playerTurnMoves = createStore<TurnMap>(new Map());

export const { addPlayerMove, removePlayerMove, clearAllPlayerMoves } = createApi($playerTurnMoves, {
  addPlayerMove: (state: TurnMap, payload: string) => {
    return new Map(state.set(payload, true));
  },
  removePlayerMove: (state: TurnMap, payload: string) => {
    state.delete(payload);

    return new Map(state);
  },
  clearAllPlayerMoves: () => new Map(),
});

$playerTurnMoves.watch((state) => {
  log('[$playerTurnMoves]', state);
});
