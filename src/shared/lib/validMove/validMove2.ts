import { log } from 'shared/lib';

import dictionary from '../../../../public/dict/ru/russian_nouns.json';

/*
  Проверки:
  [ ] если слово не существует в словаре - ошибка
  [ ] если слово которое добавил игрок уже есть в истории предыдущих ходов - ошибка
  [ ] если игрок добавил слово за свой ход, например "ром" и где-то в другом месте еще раз написал "ром" - ошибка
  [ ] если слово не пересекается с ранее добавленными словами или со словами которые добавил игрок за текущий ход - ошибка
  [ ] если буква не пересекается ни с одним словом которое было добавлено ранее или за текущий ход - ошибка
 */

type Word = string;
type Cord = number;

type Board = Word[][];
type PlayerMoves = Cord[][];
type HistoryWords = Word[];

interface ValidMoveReturnProps {
  validWords: Array<Word>;
  invalidWords: Array<Word>;
  existingWords: Array<Word>;
  duplicatedWords: Array<Word>;
  nonIntersectingWords: Array<Word>;
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

const isExistingHistoryWord = (word: Word, history: HistoryWords) => {
  return history.includes(word);
};

const isWordInDictionary = (word: Word) => {
  return Object.prototype.hasOwnProperty.call(dictionary, word);
};

const getDirection = (playerMoves: PlayerMoves) => {
  if (playerMoves.length <= 1) {
    return undefined;
  }

  const [x, y] = playerMoves[0];
  const horizontal = playerMoves.every((move) => move[0] === x);
  const vertical = playerMoves.every((move) => move[1] === y);

  if (horizontal) {
    return 'horizontal';
  }

  if (vertical) {
    return 'vertical';
  }

  return undefined;
};

const getSortedMoves = (playerMoves: PlayerMoves, direction: 'horizontal' | 'vertical' | undefined) => {
  if (direction === 'horizontal') {
    return [...playerMoves].sort((x, y) => x[1] - y[1]);
  }

  if (direction === 'vertical') {
    return [...playerMoves].sort((x, y) => x[0] - y[0]);
  }

  return playerMoves;
};

const getWord = (board: Board, playerMoves: PlayerMoves, direction: 'horizontal' | 'vertical' | undefined) => {
  if (playerMoves.length <= 1 || !direction) {
    return '';
  }

  // todo добавить условие проверки порядка, если список ходов не по порядку то добавить пробел

  return playerMoves
    .map(([row, cell]) => {
      return board[row][cell];
    })
    .join('');
};

export const validMove = ({ board, historyWords, playerMoves }: { board: Board; historyWords: HistoryWords; playerMoves: PlayerMoves }) => {
  // 1 найти пересечения со словами которые уже есть
  // 2 найти слова которые образуют пересечения

  const direction = getDirection(playerMoves);
  const sortedMoves = getSortedMoves(playerMoves, direction);
  const word = getWord(board, sortedMoves, direction);

  // log('board', board);
  // log('historyWords', historyWords);
  // log('playerMovesArray', playerMoves);
  log('direction', direction);
  log('sortedMoves', sortedMoves);
  log('word', word);

  const movedWord = '';
  const error = '';

  for (let row = 0; row < board.length; row += 1) {
    // log('row', row, board[row]);

    for (let cell = 0; cell < board[row].length; cell += 1) {
      // log('cell', cell, row, board[row][cell]);
    }
  }

  // log('[moveWord --> ]', movedWord);

  return {};
};
