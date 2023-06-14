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

function getPlayerWord(playerMoves, board) {
  // Сортируем ходы игрока по позиции на доске
  const sortedMoves = Array.from(playerMoves).sort((a, b) => {
    const [aRow, aCol] = a[0].split('-').map(Number);
    const [bRow, bCol] = b[0].split('-').map(Number);

    // Сначала сортируем по строкам, затем по столбцам
    return aRow - bRow || aCol - bCol;
  });

  // Собираем буквы в слова
  const words = [''];
  let currentRow = null;
  let currentCol = null;
  for (const move of sortedMoves) {
    const [position, letter] = move;
    const [row, col] = position.split('-').map(Number);

    // Если на доске уже есть буква на этой позиции, используем ее
    // В противном случае используем букву из хода игрока
    const currentLetter = board[row][col] || letter;

    // Если это первая буква или она находится в той же строке или столбце, что и предыдущая,
    // добавляем ее к текущему слову
    if (currentRow === null || currentCol === null || currentRow === row || currentCol === col) {
      words[words.length - 1] += currentLetter;
    } else {
      // Если это буква из нового слова, начинаем новое слово
      words.push(currentLetter);
    }

    currentRow = row;
    currentCol = col;
  }

  return words;
}

export const checkMove = ({ board, historyWords, playerMoves }) => {
  const word = getPlayerWord(playerMoves, board);

  log('[word]', word);

  return {};
};
