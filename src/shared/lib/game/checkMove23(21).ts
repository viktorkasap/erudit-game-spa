import dictionary from 'shared/assets/dict/ru1/words.json';
import { log } from 'shared/lib';

// NOTE пока это максимально близкое решение

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

  playerMoves.forEach(([row, col]) => {
    const verticalWord = getVerticalWord(board, row, col);
    const horizontalWord = getHorizontalWord(board, row, col);

    if (verticalWord === horizontalWord) {
      const startCol = col - horizontalWord.indexOf(board[row][col]);
      const endCol = startCol + horizontalWord.length - 1;
      words.push({ word: horizontalWord, start: [row, startCol], end: [row, endCol], orphan: true, direction: 'horizontal' });
    }

    if (verticalWord.length > 1) {
      const startRow = row - verticalWord.indexOf(board[row][col]);
      const endRow = startRow + verticalWord.length - 1;
      words.push({ word: verticalWord, start: [startRow, col], end: [endRow, col], orphan: false, direction: 'vertical' });
    }

    if (horizontalWord.length > 1) {
      const startCol = col - horizontalWord.indexOf(board[row][col]);
      const endCol = startCol + horizontalWord.length - 1;

      words.push({ word: horizontalWord, start: [row, startCol], end: [row, endCol], orphan: false, direction: 'horizontal' });
    }
  });

  const filteredWords = words.reduce((acc: WordWithCoordinates[], current) => {
    const compareWord = acc.find((w) => {
      const start1 = w.start.join('');
      const end1 = w.end.join('');

      const start2 = current.start.join('');
      const end2 = current.end.join('');

      if (
        (current.word === w.word && Number(start1) < Number(start2) && Number(end1) > Number(start2)) ||
        start1 === start2 ||
        end1 === end2 ||
        end1 === start2 ||
        start1 === end2
      ) {
        return w;
      }

      return false;
    });

    if (!compareWord) {
      acc.push(current);
    }

    const doubleWord = acc.find((w) => {
      if (current.word !== w.word) {
        return false;
      }

      return w;
    });

    if (!doubleWord) {
      acc.push(current);
    }

    return acc;
  }, []);

  // log('[WORDS]', words);

  return filteredWords;
};

const checkIntersection = (board: Board, wordsWithCoordinates: WordWithCoordinates[]) => {
  // Проверяем, что хотя бы одна буква каждого нового слова смежна с уже существующим словом
  return wordsWithCoordinates.every(({ start, end }) => {
    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    if (startRow === endRow) {
      // Это горизонтальное слово
      for (let col = startCol; col <= endCol; col++) {
        if (board[startRow - 1]?.[col] || board[startRow + 1]?.[col]) {
          return true;
        }
      }
    } else {
      // Это вертикальное слово
      for (let row = startRow; row <= endRow; row++) {
        if (board[row]?.[startCol - 1] || board[row]?.[startCol + 1]) {
          return true;
        }
      }
    }

    return false;
  });
};

const checkDoubleWords = (words: WordWithCoordinates[], historyWords: HistoryWords) => {
  const doubleWords: { word: string; count: number }[] = [];
  const countWords: Record<string, number> = {};
  const wordsArray = words.map(({ word }) => word);

  [...historyWords, ...wordsArray].forEach((word) => {
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
  // const isIntersection = checkIntersection(board, words);
  // const validDictionaryWords = checkDictionaryWords(words.map((collection) => collection.word));
  // const doubleWords = checkDoubleWords(words, historyWords);

  // log('[historyWords]', historyWords);
  log('[words]', words);
  // log('[isIntersection]', isIntersection);
  // log('[validDictionaryWords]', validDictionaryWords);
  // log('[doubleWords]', doubleWords);

  // if (!isIntersection) {
  //   return { error: 'Нет пересечений с другими словами' };
  // }
  //
  // if (validDictionaryWords.length) {
  //   return { error: `Слов '${validDictionaryWords.join(', ')}' нет слова в словаре` };
  // }

  return {};
};
