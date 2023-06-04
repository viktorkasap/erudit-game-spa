import { createStore } from 'effector';

import { log } from 'shared/lib';

const buildNewBoard = () => {
  const boardSize = 15;
  const board = new Array(boardSize);
  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize).fill(null);
  }

  return board;
};

export const $board = createStore(buildNewBoard());

$board.watch((state) => {
  log('[board]', state);
});

/*
const letters = {
  А: {
    count: 10,
    point: 1,
  },
  Б: {
    count: 3,
    point: 3,
  },
  В: {
    count: 5,
    point: 2,
  },
  Г: {
    count: 3,
    point: 3,
  },
  Д: {
    count: 5,
    point: 2,
  },
  Е: {
    count: 9,
    point: 1,
  },
  Ж: {
    count: 2,
    point: 5,
  },
  З: {
    count: 2,
    point: 5,
  },
  И: {
    count: 8,
    point: 1,
  },
  Й: {
    count: 4,
    point: 2,
  },
  К: {
    count: 6,
    point: 2,
  },
  Л: {
    count: 4,
    point: 2,
  },
  М: {
    count: 5,
    point: 2,
  },
  Н: {
    count: 8,
    point: 1,
  },
  О: {
    count: 10,
    point: 1,
  },
  П: {
    count: 6,
    point: 2,
  },
  Р: {
    count: 6,
    point: 2,
  },
  С: {
    count: 6,
    point: 2,
  },
  Т: {
    count: 5,
    point: 2,
  },
  У: {
    count: 13,
    point: 3,
  },
  Ф: {
    count: 1,
    point: 10,
  },
  Х: {
    count: 2,
    point: 5,
  },
  Ц: {
    count: 1,
    point: 10,
  },
  Ч: {
    count: 2,
    point: 5,
  },
  Ш: {
    count: 1,
    point: 10,
  },
  Щ: {
    count: 1,
    point: 10,
  },
  Ъ: {
    count: 1,
    point: 10,
  },
  Ы: {
    count: 2,
    point: 5,
  },
  Ь: {
    count: 2,
    point: 5,
  },
  Э: {
    count: 1,
    point: 10,
  },
  Ю: {
    count: 1,
    point: 10,
  },
  Я: {
    count: 3,
    point: 3,
  },
};
*/
