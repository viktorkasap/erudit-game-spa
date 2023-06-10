import { createApi, createStore } from 'effector';

type Player = 'computer' | 'player1' | 'player2';

export const $turn = createStore<Player>('computer');

export const { setTurnPlayer } = createApi($turn, {
  setTurnPlayer: (state, payload: Player) => payload,
});
