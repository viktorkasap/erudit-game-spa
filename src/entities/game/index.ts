/* eslint-disable no-unused-vars */
import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';

export type CountPlayers = 2 | 3 | 4;
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

export type GamePlayer = Player.Player1 | Player.Player2 | Player.Player3 | Player.Player4;

interface GameProps {
  turn: Player;
  status: GameStatus;
  players: GamePlayer[];
  countPlayers: CountPlayers;
}

const initialState = {
  turn: Player.Idle,
  status: GameStatus.Idle,
  countPlayers: 2 as CountPlayers,
  players: [Player.Player1, Player.Player2] as GamePlayer[],
};

export const $game = createStore<GameProps>(initialState); // todo под вопросом --- {} as GameProps

export const { startGame, endGame, nextPlayer } = createApi($game, {
  startGame: (state, { countPlayers, players }: { countPlayers: CountPlayers; players: GamePlayer[] }) => ({
    players,
    countPlayers,
    turn: Player.Computer,
    status: GameStatus.Process,
  }),
  nextPlayer: (state) => {
    if (state.players) {
      const { players } = state;
      const currentIndex = players.indexOf(state.turn as GamePlayer);
      const nextIndex = (currentIndex + 1) % players.length;

      return { ...state, turn: players[nextIndex] };
    }
  },
  endGame: () => initialState,
});

$game.watch((state) => {
  log('GAME', state);
});
