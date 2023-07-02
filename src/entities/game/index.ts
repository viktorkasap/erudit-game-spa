/* eslint-disable no-unused-vars */
import { createApi, createStore } from 'effector';

import { log } from 'shared/lib';
import { CountPlayers, GamePlayer, GameStatus, Player } from 'shared/types';

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
