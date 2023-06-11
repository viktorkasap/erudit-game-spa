import { log } from 'shared/lib';

import dictionary from '../../../../public/dict/ru/russian_nouns.json';

/*
  Проверки:
  [х] если слово не существует в словаре - ошибка
  [х] если слово которое добавил игрок уже есть в истории предыдущих ходов - ошибка
  [ ] если игрок добавил слово за свой ход, например "ром" и где-то в другом месте еще раз написал "ром" - ошибка
  [ ] если слово не пересекается с ранее добавленными словами или со словами которые добавил игррок за текущйи ход - ошибка
  [ ] если буква не пересекается ни с одним словом которое было добавлено ранее или за текущий ход - ошибка
 */

type Board = string[][];
type Word = string;
type Cord = number;
type MovesArray = number[][];
type HistoryWords = string[];

interface FindWordsReturnProps {
  validWords: Array<Word>;
  invalidWords: Array<Word>;
  existingWords: Array<Word>;
  duplicatedWords: Array<Word>;
}

const getHorizontalWord = (board: Board, x: Cord, y: Cord) => {
  let word = '';
  while (y < board[x].length && board[x][y]) {
    word += board[x][y];
    y++;
  }

  return word;
};

const getVerticalWord = (board: Board, x: Cord, y: Cord) => {
  let word = '';
  while (x < board.length && board[x][y]) {
    word += board[x][y];
    x++;
  }

  return word;
};

const isWordInDictionary = (word: Word) => {
  return Object.prototype.hasOwnProperty.call(dictionary, word);
};

export const findWords = (board: Board, movesArray: MovesArray, historyWords: HistoryWords): FindWordsReturnProps => {
  const allWords = new Set<Word>();
  const words = new Set<Word>();
  const existingWords = new Set<Word>();
  const duplicatedWords = new Set<Word>();

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (y === 0 || !board[x][y - 1]) {
        const word = getHorizontalWord(board, x, y);
        if (word.length > 1 && !historyWords.includes(word)) allWords.add(word);
        if (word.length > 1 && isWordInDictionary(word) && !historyWords.includes(word)) words.add(word);
      }

      if (x === 0 || !board[x - 1][y]) {
        const word = getVerticalWord(board, x, y);
        if (word.length > 1 && !historyWords.includes(word)) allWords.add(word);
        if (word.length > 1 && isWordInDictionary(word) && !historyWords.includes(word)) words.add(word);
      }
    }
  }

  const playerWords = new Set<Word>();
  const allPlayerWords = new Set<Word>();

  for (const word of allWords) {
    for (const move of movesArray) {
      const [x, y] = move;
      if (word.includes(board[x][y])) {
        allPlayerWords.add(word);
        break;
      }
    }
  }

  for (const word of words) {
    for (const move of movesArray) {
      const [x, y] = move;
      if (word.includes(board[x][y])) {
        playerWords.add(word);
        break;
      }
    }
  }

  const nonDictionaryWords = Array.from(allPlayerWords).filter((word) => !playerWords.has(word));

  for (const word of allPlayerWords) {
    if (historyWords.includes(word as Word)) {
      existingWords.add(word);
    }
  }

  return {
    validWords: Array.from(playerWords),
    invalidWords: nonDictionaryWords,
    existingWords: Array.from(existingWords),
    duplicatedWords: Array.from(duplicatedWords),
  };
};

/* ----------------------------- */

/*
const getHorizontalWord = (board, x, y) => {
  let word = '';
  while (y < board[x].length && board[x][y]) {
    word += board[x][y];
    y++;
  }

  return word;
};

const getVerticalWord = (board, x, y) => {
  let word = '';
  while (x < board.length && board[x][y]) {
    word += board[x][y];
    x++;
  }

  return word;
};

const isWordInDictionary = (word) => {
  return dictionary.hasOwnProperty(word);
};

export const findWords = (board, movesArray, historyWords) => {
  const allWords = new Set();
  const words = new Set();
  const existingWords = new Set();

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[x].length; y++) {
      if (y === 0 || !board[x][y - 1]) {
        const word = getHorizontalWord(board, x, y);
        if (word.length > 1 && !historyWords.includes(word)) allWords.add(word);
        if (word.length > 1 && isWordInDictionary(word) && !historyWords.includes(word)) words.add(word);
      }

      if (x === 0 || !board[x - 1][y]) {
        const word = getVerticalWord(board, x, y);
        if (word.length > 1 && !historyWords.includes(word)) allWords.add(word);
        if (word.length > 1 && isWordInDictionary(word) && !historyWords.includes(word)) words.add(word);
      }
    }
  }

  const playerWords = new Set();
  const allPlayerWords = new Set();

  for (const word of allWords) {
    for (const move of movesArray) {
      if (word.includes(board[move[0]][move[1]])) {
        allPlayerWords.add(word);
        break;
      }
    }
  }

  for (const word of words) {
    for (const move of movesArray) {
      if (word.includes(board[move[0]][move[1]])) {
        playerWords.add(word);
        break;
      }
    }
  }

  const nonDictionaryWords = Array.from(allPlayerWords).filter((word) => !playerWords.has(word));

  // Check if any of the player's words already exist on the board
  for (const word of allPlayerWords) {
    if (historyWords.includes(word)) {
      existingWords.add(word);
    }
  }

  return {
    validWords: Array.from(playerWords),
    invalidWords: nonDictionaryWords,
    existingWords: Array.from(existingWords),
  };
};

*/

/* ----------------------------- */

const isLetterIntersected = (board: Board, x: Cord, y: Cord) => {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  for (let i = 0; i < 4; i++) {
    const nx = x + directions[i][0];
    const ny = y + directions[i][1];
    if (nx >= 0 && ny >= 0 && nx < board.length && ny < board[0].length && board[nx][ny]) {
      return true;
    }
  }

  return false;
};

const isWordIntersected = (board: Board, movesArray: MovesArray) => {
  for (const move of movesArray) {
    const [x, y] = move;
    if (isLetterIntersected(board, x, y)) {
      return true;
    }
  }

  return false;
};
