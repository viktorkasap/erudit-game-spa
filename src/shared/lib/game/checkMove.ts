import { isEqual, uniqWith } from 'lodash';

import dictionary from 'shared/assets/dict/ru/words.json';
import { log } from 'shared/lib';

type Word = string;
type Position = number;

type Board = Word[][];
type PlayerMoves = Position[][];
type HistoryWords = Word[];

interface WordWithCoordinates {
  word: string;
  start: [number, number];
  end: [number, number];
  orphan: boolean;
}

const isWordInDictionary = (word: Word) => {
  return Object.prototype.hasOwnProperty.call(dictionary, word);
};

const getVerticalWord = (board: Board, row: number, col: number): string => {
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
};

const getHorizontalWord = (board: Board, row: number, col: number): string => {
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
};

const getWords = (board: Board, playerMoves: PlayerMoves): WordWithCoordinates[] => {
  const words: WordWithCoordinates[] = [];

  for (const [row, col] of playerMoves) {
    const verticalWord = getVerticalWord(board, row, col);
    const horizontalWord = getHorizontalWord(board, row, col);

    if (verticalWord === horizontalWord) {
      const startCol = col - horizontalWord.indexOf(board[row][col]);
      const endCol = startCol + horizontalWord.length - 1;
      words.push({ word: horizontalWord, start: [row, startCol], end: [row, endCol], orphan: true });
    }

    if (verticalWord.length > 1) {
      const startRow = row - verticalWord.indexOf(board[row][col]);
      const endRow = startRow + verticalWord.length - 1;
      words.push({ word: verticalWord, start: [startRow, col], end: [endRow, col], orphan: false });
    }

    if (horizontalWord.length > 1) {
      const startCol = col - horizontalWord.indexOf(board[row][col]);
      const endCol = startCol + horizontalWord.length - 1;
      words.push({ word: horizontalWord, start: [row, startCol], end: [row, endCol], orphan: false });
    }
  }

  return words;
};

export const checkMove = ({ board, historyWords, playerMoves }) => {
  const word = getWords(board, playerMoves);

  log('[word]', word);

  return {};
};
