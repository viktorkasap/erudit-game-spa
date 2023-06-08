import { ReactNode } from 'react';

import { useStore } from 'effector-react';

import { setCell, setEmptyCell } from 'entities/board';
import { $selectedCell, Cell as CellComponent, setSelectedCell } from 'entities/cell';
import { popRackTail, setRackTail } from 'entities/rack';
import { $selectedRackTail, setSelectedTail } from 'entities/tail';

export const Cell = ({ children, indexCell, indexRow, isEmpty }: CellProps) => {
  const selectedTail = useStore($selectedRackTail);
  const selectedCell = useStore($selectedCell);

  const isSelectedCurrentCell = selectedCell && selectedCell.indexCell === indexCell && selectedCell.indexRow === indexRow;

  const handleCellClick = () => {
    if (isSelectedCurrentCell) {
      setSelectedCell(null);
    }

    if (!isSelectedCurrentCell && isEmpty) {
      setSelectedCell({ indexRow, indexCell });
    }

    if (!isEmpty) {
      setRackTail(children);
      setEmptyCell({ indexRow, indexCell });
    }

    if (isEmpty && selectedTail?.letter) {
      setSelectedTail(null);
      popRackTail(selectedTail.index);
      setCell({ indexRow, indexCell, letter: selectedTail.letter });
    }
  };

  return (
    <CellComponent
      isEmpty={isEmpty}
      indexRow={indexRow}
      indexCell={indexCell}
      onClick={handleCellClick}
      isSelected={Boolean(isSelectedCurrentCell)}>
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
