/* eslint-disable no-unused-vars */
import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

export enum GameStatus {
  Idle,
  Process,
  End,
}

export const $game = createStore<GameStatus>(GameStatus.Idle);

export const { setGameStatus, startGame, endGame } = createApi($game, {
  setGameStatus: (_, payload: GameStatus) => payload,
  startGame: () => GameStatus.Process,
  endGame: () => GameStatus.Idle,
});

$game.watch((state) => {
  log('GAME', state);
});
