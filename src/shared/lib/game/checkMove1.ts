import dictionary from '../../../../public/dict/ru/russian_nouns.json';

type Board = string[][];
type Word = string;
type Cord = number;
type MovesArray = number[][];
type HistoryWords = string[];

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

export const findWords = (board: Board, movesArray: MovesArray, historyWords: HistoryWords) => {
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
      if ((word as Word).includes(board[move[0]][move[1]])) {
        allPlayerWords.add(word);
        break;
      }
    }
  }

  for (const word of words) {
    for (const move of movesArray) {
      if ((word as Word).includes(board[move[0]][move[1]])) {
        playerWords.add(word);
        break;
      }
    }
  }

  const nonDictionaryWords = Array.from(allPlayerWords).filter((word) => !playerWords.has(word));

  // Check if any of the player's words already exist on the board
  for (const word of allPlayerWords) {
    if (historyWords.includes(word as Word)) {
      existingWords.add(word);
    }
  }

  return {
    validWords: Array.from(playerWords),
    invalidWords: nonDictionaryWords,
    existingWords: Array.from(existingWords),
  };
};

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
