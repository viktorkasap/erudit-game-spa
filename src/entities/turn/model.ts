import { createApi, createStore } from 'effector';

type Player = 'computer' | 'player1' | 'player2';

export const $turn = createStore<Player>('computer');

export const { setNextPlayer } = createApi($turn, {
  setNextPlayer: (state, payload: Player) => payload,
});
