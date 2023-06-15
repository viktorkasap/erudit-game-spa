import { log } from 'shared/lib';

import dictionary from '../../../../public/dict/ru/words.json';

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

const isWordInDictionary = (word: Word) => {
  return Object.prototype.hasOwnProperty.call(dictionary, word);
};

function getVerticalWord(board: Board, row: number, col: number): string {
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

function getHorizontalWord(board: Board, row: number, col: number): string {
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

function getWords(board: Board, playerMoves: PlayerMoves): Word[] {
  const words: Word[] = [];

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

function checkIntersection(board: Board, moves: PlayerMoves, historyWords: HistoryWords) {
  // Проверяем, что хотя бы одна буква нового слова смежна с уже существующим словом
  return moves.some(([row, col]) => {
    const adjacentCells = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    return adjacentCells.some(([adjRow, adjCol]) => {
      if (adjRow >= 0 && adjRow < board.length && adjCol >= 0 && adjCol < board.length && board[adjRow][adjCol] !== null) {
        // Проверяем, является ли смежная клетка частью того же слова, что и ход игрока
        const verticalWord1 = getVerticalWord(board, row, col);
        const verticalWord2 = getVerticalWord(board, adjRow, adjCol);
        const horizontalWord1 = getHorizontalWord(board, row, col);
        const horizontalWord2 = getHorizontalWord(board, adjRow, adjCol);

        // Проверяем, являются ли слова, содержащие смежную клетку и клетку хода игрока, частью истории ходов
        const isPartOfHistory = historyWords.includes(verticalWord2) || historyWords.includes(horizontalWord2);

        return (verticalWord1 === verticalWord2 || horizontalWord1 === horizontalWord2) && isPartOfHistory;
      }

      return false;
    });
  });
}

function checkWords(words: Word[]): boolean {
  for (const word of words) {
    log('check-word', word, isWordInDictionary(word));
    if (!isWordInDictionary(word)) {
      return false;
    }
  }

  return true;
}

export const validMove = ({ board, historyWords, playerMoves }: { board: Board; historyWords: HistoryWords; playerMoves: PlayerMoves }) => {
  const isIntersection = checkIntersection(board, playerMoves, historyWords);
  const words = getWords(board, playerMoves);
  const validWords = checkWords(words);

  if (!isIntersection) {
    return false;
  }

  log('[isIntersection]', isIntersection);
  log('[words]', words);
  log('[validWords]', validWords);

  return {};
};
