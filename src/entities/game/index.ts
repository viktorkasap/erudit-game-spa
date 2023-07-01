/* eslint-disable no-unused-vars */
import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

export enum GameStatus {
  Idle,
  Process,
  End,
}

export enum Player {
  Idle = 'idle',
  Computer = 'computer',
  Player1 = 'player1',
  Player2 = 'player2',
  Player3 = 'player3',
  Player4 = 'player4',
}

export type CountPlayers = 2 | 3 | 4;

interface GameStoreProps {
  status: GameStatus;
  countPlayers: CountPlayers;
  turn: Player;
}

export const $game = createStore<GameStoreProps>({ status: GameStatus.Idle, countPlayers: 2, turn: Player.Idle });

const playersOrder = {
  2: [Player.Player1, Player.Player2],
  3: [Player.Player1, Player.Player2, Player.Player3],
  4: [Player.Player1, Player.Player2, Player.Player3, Player.Player4],
};

export const { startGame, endGame, nextPlayer } = createApi($game, {
  startGame: (state, { countPlayers }) => ({ countPlayers, status: GameStatus.Process, turn: Player.Computer }),
  endGame: () => ({ countPlayers: 2, status: GameStatus.Idle, turn: Player.Idle }),
  nextPlayer: (state) => {
    const players = playersOrder[state.countPlayers];
    const currentIndex = players.indexOf(state.turn);
    const nextIndex = (currentIndex + 1) % players.length;

    return { ...state, turn: players[nextIndex] };
  },
});

$game.watch((state) => {
  log('GAME', state);
});
