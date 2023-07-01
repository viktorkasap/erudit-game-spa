/* eslint-disable no-unused-vars */

import { createApi, createStore } from 'effector';
import produce from 'immer';

import { log } from 'shared/lib';

enum Player {
  Player1 = 'player1',
  Player2 = 'player2',
  Player3 = 'player3',
  Player4 = 'player4',
}

export type GamePlayer = Player.Player1 | Player.Player2 | Player.Player3 | Player.Player4;

interface PlayersProps {
  score: number;
  possibleScore: number;
  moves: Map<string, string>;
}

type PlayerStateProps = Record<GamePlayer, PlayersProps>;

interface CreatePlayers {
  playersArray: GamePlayer[];
}

interface PlayerMove {
  player: GamePlayer;
  position: string;
  letter: string;
  possibleScore: number;
}

export const $players = createStore<PlayerStateProps>({} as PlayerStateProps);

export const { createPlayers, addPlayerMove, removePlayerMove, removePlayers } = createApi($players, {
  createPlayers: (_, { playersArray }: CreatePlayers) => {
    return playersArray.reduce((acc, current) => {
      return { ...acc, [current]: { moves: new Map(), score: 0, possibleScore: 0 } };
    }, {} as PlayerStateProps);
  },
  addPlayerMove: (state, { player, position, letter, possibleScore }: PlayerMove) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.moves.set(position, letter);
      _player.possibleScore = possibleScore;
    });
  },
  removePlayerMove: (state, { player, position, possibleScore }: Omit<PlayerMove, 'letter'>) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.moves.delete(position);
      _player.possibleScore = possibleScore;
    });
  },
  removePlayers: () => ({} as PlayerStateProps),
});

$players.watch((state) => {
  log('[$playerMoves]', state);
});
