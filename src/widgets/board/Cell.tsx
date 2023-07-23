import { ReactNode } from 'react';

import { useStore } from 'effector-react';

import { setCell, setEmptyCell } from 'entities/board';
import { $selectedCell, Cell as CellComponent, setSelectedCell } from 'entities/cell';
import { $game } from 'entities/game';
import { $players, removePlayerTail, addPlayerMove, addPlayerTail, removePlayerMove } from 'entities/players';
import { $selectedRackTail, setSelectedTail } from 'entities/tail';

import { log } from 'shared/lib';
import { letters } from 'shared/lib/game';
import { GamePlayer, GameStatus } from 'shared/types';

export const Cell = ({ children, indexCell, indexRow, isEmpty }: CellProps) => {
  const selectedTail = useStore($selectedRackTail);
  const selectedCell = useStore($selectedCell);

  const players = useStore($players);
  const { turn, status } = useStore($game);
  const currentPlayer = players[turn as GamePlayer];

  const isSelectedCurrentCell = selectedCell && selectedCell.indexCell === indexCell && selectedCell.indexRow === indexRow;

  const handleCellClick = () => {
    if (isSelectedCurrentCell) {
      // сбросить состояние стора выбранной ячейки
      setSelectedCell(null);
    }

    if (!isSelectedCurrentCell && isEmpty) {
      // установить координаты ячейки в стор ячейки
      setSelectedCell({ indexRow, indexCell });
    }

    if (!isEmpty && currentPlayer.moves.has(`${indexRow}-${indexCell}`)) {
      // 1) очистить ячейку доски
      setEmptyCell({ indexRow, indexCell });

      // 2) удалить ход у игрока
      removePlayerMove({ player: turn as GamePlayer, position: `${indexRow}-${indexCell}` });

      // 3) вернуть фишку в руки игрока
      addPlayerTail({ player: turn as GamePlayer, tail: children as string });
    }

    if (isEmpty && selectedTail?.letter) {
      // TODO это условие дублирется в Tail.tsx

      // 1) забрать фишку у игрока
      removePlayerTail({
        player: turn as GamePlayer,
        tailIndex: selectedTail.index,
      });

      // 2) записать ход игрока
      addPlayerMove({
        letter: selectedTail.letter,
        player: turn as GamePlayer,
        position: `${indexRow}-${indexCell}`,
      });

      // 3) сбросить состояние стора выбранной ячейки
      setSelectedCell(null);

      // 4) сбросить состояние стора выбранной фишки
      setSelectedTail(null);

      // 5) установить фишку в стор доски
      setCell({ indexRow, indexCell, letter: selectedTail.letter });
    }
  };

  return (
    <CellComponent
      isEmpty={isEmpty}
      indexRow={indexRow}
      indexCell={indexCell}
      onClick={handleCellClick}
      value={letters[String(children)]?.value}
      isSelected={Boolean(isSelectedCurrentCell)}
      isGameStatusIdle={status === GameStatus.Idle}
      isEditable={currentPlayer?.moves.has(`${indexRow}-${indexCell}`)}>
      {children}
    </CellComponent>
  );
};

interface CellProps {
  children: ReactNode;
  indexCell: number;
  indexRow: number;
  isEmpty: boolean;
}
