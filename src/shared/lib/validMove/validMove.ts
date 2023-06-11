import { log } from 'shared/lib';

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

function checkIntersection(board: Board, moves: PlayerMoves) {
  // Проверяем, что хотя бы одна буква нового слова смежна с уже существующим словом
  return moves.some(([row, col]) => {
    const adjacentCells = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1],
    ];

    return adjacentCells.some(([adjRow, adjCol]) => {
      return adjRow >= 0 && adjRow < board.length && adjCol >= 0 && adjCol < board.length && board[adjRow][adjCol] !== null;
    });
  });
}

export const validMove = ({ board, historyWords, playerMoves }: { board: Board; historyWords: HistoryWords; playerMoves: PlayerMoves }) => {
  const isIntersection = checkIntersection(board, playerMoves);

  log('[isIntersection]', isIntersection);

  return {};
};
