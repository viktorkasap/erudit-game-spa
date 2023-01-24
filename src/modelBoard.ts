import { createStore } from "effector";

const buildNewBoard = () => {
  const boardSize = 15;
  const board = new Array(boardSize);
  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize).fill(null);
  }

  return board;
};

export const $board = createStore(buildNewBoard());
