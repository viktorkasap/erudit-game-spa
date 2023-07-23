/* eslint-disable no-unused-vars */

import { createApi, createStore } from 'effector';

export enum Player {
  Idle = 'idle',
  Computer = 'computer',
  Player1 = 'player1',
  Player2 = 'player2',
  Player3 = 'player3',
  Player4 = 'player4',
}

export type CountPlayers = 2 | 3 | 4;

export const $turn = createStore<Player>(Player.Idle);

export const { setNextPlayer } = createApi($turn, {
  setNextPlayer: (state, { countPlayers }: { countPlayers: CountPlayers }) => {
    if (countPlayers === 2) {
      switch (state) {
        case Player.Idle:
          return Player.Computer;
        case Player.Computer:
          return Player.Player1;
        case Player.Player1:
          return Player.Player2;
        case Player.Player2:
          return Player.Player1;
        default:
          return Player.Idle;
      }
    }

    if (countPlayers === 3) {
      switch (state) {
        case Player.Idle:
          return Player.Computer;
        case Player.Computer:
          return Player.Player1;
        case Player.Player1:
          return Player.Player2;
        case Player.Player2:
          return Player.Player3;
        case Player.Player3:
          return Player.Player1;
        default:
          return Player.Idle;
      }
    }

    if (countPlayers === 4) {
      switch (state) {
        case Player.Idle:
          return Player.Computer;
        case Player.Computer:
          return Player.Player1;
        case Player.Player1:
          return Player.Player2;
        case Player.Player2:
          return Player.Player3;
        case Player.Player3:
          return Player.Player4;
        case Player.Player4:
          return Player.Player1;
        default:
          return Player.Idle;
      }
    }
  },
});
