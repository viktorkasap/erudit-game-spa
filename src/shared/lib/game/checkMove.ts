import _ from 'lodash';

import dictionary from 'shared/assets/dict/ru1/words.json';
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
  direction: string;
}

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

  // Сначала получим все уникальные строки и столбцы из ходов игрока
  const uniqueRows = [...new Set(playerMoves.map(([row, _]) => row))];
  const uniqueCols = [...new Set(playerMoves.map(([_, col]) => col))];

  // Затем для каждой уникальной строки и столбца получим слова
  uniqueRows.forEach((row) => {
    const horizontalWord = getHorizontalWord(board, row, Math.min(...playerMoves.filter(([r, _]) => r === row).map(([_, col]) => col)));
    if (horizontalWord.length > 1) {
      const startCol = Math.min(...playerMoves.filter(([r, _]) => r === row).map(([_, col]) => col));
      const endCol = startCol + horizontalWord.length - 1;
      const wordCoordinates = { word: horizontalWord, start: [row, startCol], end: [row, endCol], orphan: false, direction: 'horizontal' };
      words.push(wordCoordinates);
    }
  });

  uniqueCols.forEach((col) => {
    const verticalWord = getVerticalWord(board, Math.min(...playerMoves.filter(([_, c]) => c === col).map(([row, _]) => row)), col);
    if (verticalWord.length > 1) {
      const startRow = Math.min(...playerMoves.filter(([_, c]) => c === col).map(([row, _]) => row));
      const endRow = startRow + verticalWord.length - 1;
      const wordCoordinates = { word: verticalWord, start: [startRow, col], end: [endRow, col], orphan: false, direction: 'vertical' };
      words.push(wordCoordinates);
    }
  });

  return words;
};

const checkIntersection = (board: Board, wordsWithCoordinates: WordWithCoordinates[]) => {
  // Проверяем, что хотя бы одна буква каждого нового слова смежна с уже существующим словом
  return wordsWithCoordinates.some(({ start, end, direction }) => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    if (direction === 'horizontal') {
      // Это горизонтальное слово
      for (let col = startCol; col <= endCol; col++) {
        if (board[startRow - 1]?.[col] || board[startRow + 1]?.[col] || board[startRow][col - 1] || board[startRow][col + 1]) {
          return true;
        }
      }
    } else {
      // Это вертикальное слово
      for (let row = startRow; row <= endRow; row++) {
        if (board[row]?.[startCol - 1] || board[row]?.[startCol + 1] || board[row - 1]?.[startCol] || board[row + 1]?.[startCol]) {
          return true;
        }
      }
    }

    return false;
  });
};

const isWordInDictionary = (word: Word) => {
  return Object.prototype.hasOwnProperty.call(dictionary, word);
};

const checkDictionaryWords = (words: Word[]): Word[] => {
  const errorWords = [];

  for (const word of words) {
    log('check-word', word, isWordInDictionary(word));
    if (!isWordInDictionary(word)) {
      errorWords.push(word);
    }
  }

  return errorWords;
};

const checkDoubleWords = (words: WordWithCoordinates[], historyWords: HistoryWords) => {
  const doubleWords: { word: string; count: number }[] = [];
  const countWords: Record<string, number> = {};

  words.forEach(({ word }) => {
    if (!countWords[word]) {
      countWords[word] = 1;
    } else {
      countWords[word] = countWords[word] + 1;
    }
  });

  historyWords.forEach((word) => {
    if (!countWords[word]) {
      countWords[word] = 1;
    } else {
      countWords[word] = countWords[word] + 1;
    }
  });

  Object.entries(countWords).forEach(([word, count]) => {
    if (count > 1) {
      doubleWords.push({ word, count });
    }
  });

  return doubleWords;
};

export const checkMove = ({
  board,
  historyWords,
  playerMoves,
}: {
  board: Board;
  historyWords: HistoryWords;
  playerMoves: Map<string, string>;
}) => {
  const playerMovesArray = Array.from(playerMoves.keys()).map((key) => key.split('-').map(Number));

  const words = getWords(board, playerMovesArray);
  const isIntersection = checkIntersection(board, words);
  const validDictionaryWords = checkDictionaryWords(words.map((collection) => collection.word));
  const doubleWords = checkDoubleWords(words, historyWords);

  log('[words]', JSON.stringify(words));
  log('[isIntersection]', isIntersection);
  log('[validDictionaryWords]', validDictionaryWords);
  log('[doubleWords]', JSON.stringify(doubleWords));
  log('[moves]', JSON.stringify(playerMovesArray));

  if (!isIntersection) {
    return { error: 'Нет пересечений с другими словами' };
  }

  if (validDictionaryWords.length) {
    return { error: `Слов '${validDictionaryWords.join(', ')}' нет слова в словаре` };
  }

  if (doubleWords.length) {
    return { error: `Слово(а) '${doubleWords.map((w) => w.word).join(', ')}' уже были использованы` };
  }

  return {};
};
