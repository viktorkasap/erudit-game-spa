/* eslint-disable no-unused-vars */

import { PropsWithChildren } from 'react';

export type SizesNamesProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SizesProps = number | string | SizesNamesProps;

export type VariantProps = 'subtle' | 'light' | 'filled' | 'outline' | 'default';

export interface BaseComponentProps extends PropsWithChildren {
  onClick?: () => void;
  variant?: VariantProps;
  size?: SizesNamesProps;
}

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
