import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

type TurnMap = Map<string, boolean>;
export const $playerTurnMoves = createStore<TurnMap>(new Map());

export const { setTurnPlayerMove, clearTurnPlayerMove, clearTurnPlayerMoves } = createApi($playerTurnMoves, {
  setTurnPlayerMove: (state: TurnMap, payload: string) => {
    return new Map(state.set(payload, true));
  },
  clearTurnPlayerMove: (state: TurnMap, payload: string) => {
    state.delete(payload);

    return new Map(state);
  },
  clearTurnPlayerMoves: () => new Map(),
});

$playerTurnMoves.watch((state) => {
  log('[$playerTurnMoves]', state);
});
