/* eslint-disable no-unused-vars */

import { createApi, createStore } from 'effector';
import produce, { enableMapSet } from 'immer';

import { log } from 'shared/lib';
import { shuffleArray } from 'shared/lib/shuffleArray';
import { GamePlayer } from 'shared/types';

enableMapSet(); // включает плагин Mep.set в immer

interface PlayersProps {
  score: number;
  possibleScore: number;
  moves: Map<string, string>;
  history: string[];
  tails: string[];
}

type PlayerStateProps = Record<GamePlayer, PlayersProps>;

interface CreatePlayers {
  playersArray: GamePlayer[];
}

interface PlayerAction {
  player: GamePlayer;
}

interface PlayerMove extends PlayerAction {
  position: string;
  letter: string;
  possibleScore: number;
}

interface PlayerHistoryWord extends PlayerAction {
  word: string;
}

interface PlayerTails extends PlayerAction {
  tails: string[];
}

interface PlayerTail extends PlayerAction {
  tail: string;
}

interface PlayerRemoveTail extends PlayerAction {
  tailIndex: number;
}

type PlayerShuffleTails = PlayerAction;

export const $players = createStore<PlayerStateProps>({} as PlayerStateProps);

export const {
  createPlayers,
  addPlayerMove,
  removePlayerMove,
  removePlayerMoves,
  addPlayerHistoryWord,
  addPlayerTails,
  addPlayerTail,
  removePlayerTail,
  shufflePlayerTails,
  resetPlayers,
} = createApi($players, {
  createPlayers: (_, { playersArray }: CreatePlayers) => {
    return playersArray.reduce((acc, current) => {
      return { ...acc, [current]: { moves: new Map(), score: 0, possibleScore: 0, history: [], tails: [] } };
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

      return draft;
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
  removePlayerMoves: (state, { player }: { player: GamePlayer }) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.moves.clear();
      _player.possibleScore = 0;
    });
  },
  addPlayerHistoryWord: (state, { player, word }: PlayerHistoryWord) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.history.push(word);
    });
  },
  addPlayerTails: (state, { player, tails }: PlayerTails) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.tails = tails;
    });
  },
  addPlayerTail: (state, { player, tail }: PlayerTail) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.tails.push(tail);
    });
  },
  removePlayerTail: (state, { player, tailIndex }: PlayerRemoveTail) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.tails = _player.tails.filter((_, index) => index !== tailIndex);
    });
  },
  shufflePlayerTails: (state, { player }: PlayerShuffleTails) => {
    return produce(state, (draft) => {
      const _player = draft[player];

      if (!_player) {
        return draft;
      }

      _player.tails = shuffleArray(_player.tails);
    });
  },
  resetPlayers: () => ({} as PlayerStateProps),
});

$players.watch((state) => {
  log('[$players]', state);
});
