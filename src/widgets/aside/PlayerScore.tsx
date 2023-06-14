import { useStore } from 'effector-react';

import { $board } from 'entities/board';
import { $history } from 'entities/history';
import { $playerMoves } from 'entities/player';

import { log, validMove } from 'shared/lib';

export const PlayerScore = () => {
  return <>0/0</>;
};
