import { isEqual, uniqWith } from 'lodash';

import dictionary from 'shared/assets/dict/ru/words.json';
import { log } from 'shared/lib';

type Word = string;
type Position = number;

type Board = Word[][];
type PlayerMoves = Position[][];
type HistoryWords = Word[];

const isWordInDictionary = (word: Word) => {
  return Object.prototype.hasOwnProperty.call(dictionary, word);
};

function getWords(board: Board, playerMoves: PlayerMoves) {
  const words = [];

  for (const [row, col] of playerMoves) {
    const verticalWord = getVerticalWord(board, row, col);
    const horizontalWord = getHorizontalWord(board, row, col);

    if (verticalWord.length > 1) {
      words.push(verticalWord);
    }

    if (horizontalWord.length > 1) {
      words.push(horizontalWord);
    }
  }

  return words;
}

function getVerticalWord(board: Board, row: number, col: number) {
  let startRow = row;
  while (startRow > 0 && board[startRow - 1][col]) {
    startRow--;
  }

  let endRow = row;
  while (endRow < board.length - 1 && board[endRow + 1][col]) {
    endRow++;
  }

  let word = '';
  for (let i = startRow; i <= endRow; i++) {
    word += board[i][col];
  }

  return word;
}

function getHorizontalWord(board: Board, row: number, col: number) {
  let startCol = col;
  while (startCol > 0 && board[row][startCol - 1]) {
    startCol--;
  }

  let endCol = col;
  while (endCol < board[0].length - 1 && board[row][endCol + 1]) {
    endCol++;
  }

  let word = '';
  for (let i = startCol; i <= endCol; i++) {
    word += board[row][i];
  }

  return word;
}

export const validMove = ({ board, historyWords, playerMoves }: { board: Board; historyWords: HistoryWords; playerMoves: PlayerMoves }) => {
  const words = getWords(board, playerMoves);

  log('[words]', words);

  return {};
};
