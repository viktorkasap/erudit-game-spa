import { useStore } from 'effector-react';

import { setCell } from 'entities/board';
import { $selectedCell, setSelectedCell } from 'entities/cell';
import { addPlayerMove } from 'entities/player';
import { removeLetterFromPlayer } from 'entities/rack';
import { $selectedRackTail, setSelectedTail, Tail as TailComponent } from 'entities/tail';

export const Tail = ({ index, tail }: TailProps) => {
  const selectedTail = useStore($selectedRackTail);
  const selectedCell = useStore($selectedCell);

  const handleSelected = ({ index, letter }: { index: number; letter: string }) => {
    if (selectedCell) {
      removeLetterFromPlayer(index);
      setSelectedCell(null);
      setSelectedTail(null);
      addPlayerMove({ position: `${selectedCell.indexRow}-${selectedCell.indexCell}`, letter });
      setCell({ indexRow: selectedCell.indexRow, indexCell: selectedCell.indexCell, letter });

      return;
    }

    if (selectedTail === null || selectedTail?.index !== index) {
      setSelectedTail({ index, letter });
    } else {
      setSelectedTail(null);
    }
  };

  return (
    <TailComponent isSelected={selectedTail?.index === index} onClick={() => handleSelected({ index, letter: tail })}>
      {tail}
    </TailComponent>
  );
};

interface TailProps {
  index: number;
  tail: string;
}
