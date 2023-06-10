import { ReactNode } from 'react';

import { useStore } from 'effector-react';

import { setCell, setEmptyCell } from 'entities/board';
import { $selectedCell, Cell as CellComponent, setSelectedCell } from 'entities/cell';
import { $playerTurnMoves, removePlayerMove, addPlayerMove } from 'entities/player';
import { popRackTail, setRackTail } from 'entities/rack';
import { $selectedRackTail, setSelectedTail } from 'entities/tail';

import { log } from 'shared/lib';

export const Cell = ({ children, indexCell, indexRow, isEmpty }: CellProps) => {
  const selectedTail = useStore($selectedRackTail);
  const selectedCell = useStore($selectedCell);
  const playerTurnMoves = useStore($playerTurnMoves);

  const isSelectedCurrentCell = selectedCell && selectedCell.indexCell === indexCell && selectedCell.indexRow === indexRow;

  const handleCellClick = () => {
    if (isSelectedCurrentCell) {
      setSelectedCell(null);
    }

    if (!isSelectedCurrentCell && isEmpty) {
      setSelectedCell({ indexRow, indexCell });
    }

    if (!isEmpty && playerTurnMoves.has(`${indexRow}-${indexCell}`)) {
      setRackTail(children);
      setEmptyCell({ indexRow, indexCell });

      removePlayerMove(`${indexRow}-${indexCell}`);
    }

    if (isEmpty && selectedTail?.letter) {
      setSelectedCell(null);
      setSelectedTail(null);
      popRackTail(selectedTail.index);
      setCell({ indexRow, indexCell, letter: selectedTail.letter });

      addPlayerMove(`${indexRow}-${indexCell}`);
    }
  };

  return (
    <CellComponent
      isEmpty={isEmpty}
      indexRow={indexRow}
      indexCell={indexCell}
      onClick={handleCellClick}
      isSelected={Boolean(isSelectedCurrentCell)}
      isEditable={playerTurnMoves.has(`${indexRow}-${indexCell}`)}>
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
