import { ReactNode } from 'react';

import { useStore } from 'effector-react';

import { setCell, setEmptyCell } from 'entities/board';
import { $selectedCell, Cell as CellComponent, setSelectedCell } from 'entities/cell';
import { $game } from 'entities/game';
import { $players, removePlayerTail, addPlayerMove, addPlayerTail, removePlayerMove } from 'entities/players';
import { $selectedRackTail, setSelectedTail } from 'entities/tail';

import { letters } from 'shared/lib/game';
import { GamePlayer } from 'shared/types';

export const Cell = ({ children, indexCell, indexRow, isEmpty }: CellProps) => {
  const selectedTail = useStore($selectedRackTail);
  const selectedCell = useStore($selectedCell);

  const players = useStore($players);
  const { turn } = useStore($game);
  const currentPlayer = players[turn as GamePlayer];

  const isSelectedCurrentCell = selectedCell && selectedCell.indexCell === indexCell && selectedCell.indexRow === indexRow;

  const handleCellClick = () => {
    if (isSelectedCurrentCell) {
      setSelectedCell(null);
    }

    if (!isSelectedCurrentCell && isEmpty) {
      setSelectedCell({ indexRow, indexCell });
    }

    if (!isEmpty && currentPlayer.moves.has(`${indexRow}-${indexCell}`)) {
      setEmptyCell({ indexRow, indexCell });

      removePlayerMove({ player: turn as GamePlayer, position: `${indexRow}-${indexCell}` });
      addPlayerTail({ player: turn as GamePlayer, tail: children as string });
    }

    if (isEmpty && selectedTail?.letter) {
      // TODO это условие дублирется в Tail.tsx

      removePlayerTail({
        player: turn as GamePlayer,
        tailIndex: selectedTail.index,
      });
      addPlayerMove({
        letter: selectedTail.letter,
        player: turn as GamePlayer,
        position: `${indexRow}-${indexCell}`,
      });

      setSelectedCell(null);
      setSelectedTail(null);
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
