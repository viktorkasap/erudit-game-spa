const SIZE = 15;

export const buildBoard = () => {
  const boardSize = SIZE;
  const board = new Array(boardSize);
  for (let i = 0; i < boardSize; i++) {
    board[i] = new Array(boardSize).fill(null);
  }

  return board;
};
